import { useEffect, useRef, useState } from "react";

import {
  formatDurationTime,
  formatRecordedAudioTime,
  formatRecordingTime,
  getFileExtensionFromMimeType,
} from "../helpers";
import { Controls, useVoiceVisualizerParams, PCMChunkMetadata } from "../types/types.ts";

function useVoiceVisualizer({
  inputDeviceId,
  streamConfig,
  onStartRecording,
  onStopRecording,
  onPausedRecording,
  onResumedRecording,
  onClearCanvas,
  onEndAudioPlayback,
  onStartAudioPlayback,
  onPausedAudioPlayback,
  onResumedAudioPlayback,
  onErrorPlayingAudio,
}: useVoiceVisualizerParams = {}): Controls {
  const [isRecordingInProgress, setIsRecordingInProgress] = useState(false);
  const [isPausedRecording, setIsPausedRecording] = useState(false);
  const [audioStream, setAudioStream] = useState<MediaStream | null>(null);
  const [audioData, setAudioData] = useState<Uint8Array>(new Uint8Array(0));
  const [isProcessingAudioOnComplete, _setIsProcessingAudioOnComplete] =
    useState(false);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [bufferFromRecordedBlob, setBufferFromRecordedBlob] =
    useState<AudioBuffer | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [prevTime, setPrevTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioSrc, setAudioSrc] = useState("");
  const [isPausedRecordedAudio, setIsPausedRecordedAudio] = useState(true);
  const [currentAudioTime, setCurrentAudioTime] = useState(0);
  const [isCleared, setIsCleared] = useState(true);
  const [isProcessingOnResize, _setIsProcessingOnResize] = useState(false);
  const [isPreloadedBlob, setIsPreloadedBlob] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isProcessingStartRecording, setIsProcessingStartRecording] =
    useState(false);
  const [chunkSequence, setChunkSequence] = useState(0);
  const [pcmChunkSequence, setPcmChunkSequence] = useState(0);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordingIdRef = useRef<string>("");
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);
  const rafRecordingRef = useRef<number | null>(null);
  const rafCurrentTimeUpdateRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const isAvailableRecordedAudio = Boolean(
    bufferFromRecordedBlob && !isProcessingAudioOnComplete,
  );
  const formattedDuration = formatDurationTime(duration);
  const formattedRecordingTime = formatRecordingTime(recordingTime);
  const formattedRecordedAudioCurrentTime =
    formatRecordedAudioTime(currentAudioTime);
  const isProcessingRecordedAudio =
    isProcessingOnResize || isProcessingAudioOnComplete;

  useEffect(() => {
    if (!isRecordingInProgress || isPausedRecording) return;

    const updateTimer = () => {
      const timeNow = performance.now();
      setRecordingTime((prev) => prev + (timeNow - prevTime));
      setPrevTime(timeNow);
    };

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [prevTime, isPausedRecording, isRecordingInProgress]);

  useEffect(() => {
    if (error) {
      clearCanvas();
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    return () => {
      clearCanvas();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isCleared) {
      window.addEventListener("beforeunload", handleBeforeUnload);
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isCleared]);

  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
  };

  const processBlob = async (blob: Blob) => {
    if (!blob) return;

    try {
      if (blob.size === 0) {
        throw new Error("Error: The audio blob is empty");
      }
      const audioSrcFromBlob = URL.createObjectURL(blob);
      setAudioSrc(audioSrcFromBlob);

      const audioBuffer = await blob.arrayBuffer();
      const audioContext = new AudioContext();
      const buffer = await audioContext.decodeAudioData(audioBuffer);
      setBufferFromRecordedBlob(buffer);
      setDuration(buffer.duration - 0.06);

      setError(null);
    } catch (error) {
      console.error("Error processing the audio blob:", error);
      setError(
        error instanceof Error
          ? error
          : new Error("Error processing the audio blob"),
      );
    }
  };

  const setPreloadedAudioBlob = (blob: Blob) => {
    if (blob instanceof Blob) {
      clearCanvas();
      setIsPreloadedBlob(true);
      setIsCleared(false);
      _setIsProcessingAudioOnComplete(true);
      setIsRecordingInProgress(false);
      setRecordingTime(0);
      setIsPausedRecording(false);
      audioRef.current = new Audio();
      setRecordedBlob(blob);
      void processBlob(blob);
    }
  };

  const handlePCMData = (audioProcessingEvent: AudioProcessingEvent) => {
    if (!streamConfig?.usePCM || !streamConfig.onPCMAvailable || isPausedRecording) {
      return;
    }
    
    // Get PCM data from the input buffer
    const inputBuffer = audioProcessingEvent.inputBuffer;
    const channelData = inputBuffer.getChannelData(0); // Get data from first channel
    
    // Create a copy of the data since the original buffer will be reused
    const pcmData = new Float32Array(channelData);
    
    const isLastChunk = !isRecordingInProgress || isPausedRecording;
    
    // Create metadata for the PCM chunk
    const metadata: PCMChunkMetadata = {
      recordingId: recordingIdRef.current,
      chunkSequence: pcmChunkSequence,
      sampleRate: inputBuffer.sampleRate,
      isLastChunk
    };
    
    // Send PCM data to callback
    streamConfig.onPCMAvailable(pcmData, metadata);
    setPcmChunkSequence(prev => prev + 1);
  };

  const getUserMedia = () => {
    setIsProcessingStartRecording(true);
    
    // Generate a unique recording ID for this session
    recordingIdRef.current = `rec_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    // Reset chunk sequence counters
    setChunkSequence(0);
    setPcmChunkSequence(0);

    navigator.mediaDevices
      .getUserMedia({
        audio: inputDeviceId ? { deviceId: inputDeviceId } : true,
      })
      .then((stream) => {
        setIsCleared(false);
        setIsProcessingStartRecording(false);
        setIsRecordingInProgress(true);
        setPrevTime(performance.now());
        setAudioStream(stream);
        audioContextRef.current = new window.AudioContext();
        analyserRef.current = audioContextRef.current.createAnalyser();
        dataArrayRef.current = new Uint8Array(
          analyserRef.current.frequencyBinCount,
        );
        sourceRef.current =
          audioContextRef.current.createMediaStreamSource(stream);
        sourceRef.current.connect(analyserRef.current);
        
        // Set up PCM processing if enabled
        if (streamConfig?.usePCM && streamConfig.onPCMAvailable) {
          // Use ScriptProcessorNode for PCM data (will be replaced with AudioWorklet in future)
          const bufferSize = 4096;
          scriptProcessorRef.current = audioContextRef.current.createScriptProcessor(
            bufferSize, 
            1, // input channels
            1  // output channels
          );
          
          // Connect the processor to the source and destination
          sourceRef.current.connect(scriptProcessorRef.current);
          scriptProcessorRef.current.connect(audioContextRef.current.destination);
          
          // Add event listener for processing audio
          scriptProcessorRef.current.addEventListener('audioprocess', handlePCMData);
        }
        
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.addEventListener(
          "dataavailable",
          handleDataAvailable,
        );
        
        // If streaming is enabled, use the specified timeslice
        if (streamConfig?.enabled && streamConfig.timeslice) {
          mediaRecorderRef.current.start(streamConfig.timeslice);
        } else {
          mediaRecorderRef.current.start();
        }
        
        if (onStartRecording) onStartRecording();

        recordingFrame();
      })
      .catch((error) => {
        setIsProcessingStartRecording(false);
        setError(
          error instanceof Error
            ? error
            : new Error("Error starting audio recording"),
        );
      });
  };

  const recordingFrame = () => {
    analyserRef.current!.getByteTimeDomainData(dataArrayRef.current!);
    setAudioData(new Uint8Array(dataArrayRef.current!));
    rafRecordingRef.current = requestAnimationFrame(recordingFrame);
  };

  const handleAudioChunk = (chunk: Blob, isLastChunk: boolean = false) => {
    if (!streamConfig || !streamConfig.enabled || !streamConfig.onChunkAvailable) {
      return;
    }

    if (chunk.size > 0) {
      const metadata = {
        recordingId: recordingIdRef.current,
        chunkSequence: chunkSequence,
        mimeType: mediaRecorderRef.current?.mimeType || 'audio/webm',
        isLastChunk
      };
      
      streamConfig.onChunkAvailable(chunk, metadata);
      setChunkSequence(prev => prev + 1);
    }
  };

  const handleDataAvailable = (event: BlobEvent) => {
    // Process the chunk for streaming if enabled
    if (streamConfig?.enabled && event.data.size > 0) {
      const isLastChunk = !mediaRecorderRef.current || mediaRecorderRef.current.state === 'inactive';
      handleAudioChunk(event.data, isLastChunk);
    }

    // If this is the final chunk (recording stopped), process it as before
    if (!mediaRecorderRef.current) {
      audioRef.current = new Audio();
      setRecordedBlob(event.data);
      void processBlob(event.data);
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;

    setCurrentAudioTime(audioRef.current.currentTime);

    rafCurrentTimeUpdateRef.current = requestAnimationFrame(handleTimeUpdate);
  };

  const startRecording = () => {
    if (isRecordingInProgress || isProcessingStartRecording) return;

    if (!isCleared) clearCanvas();
    getUserMedia();
  };

  const stopRecording = () => {
    if (!isRecordingInProgress) return;

    setIsRecordingInProgress(false);
    
    // Send final PCM chunk if PCM streaming is enabled
    if (streamConfig?.usePCM && streamConfig.onPCMAvailable && scriptProcessorRef.current) {
      const metadata: PCMChunkMetadata = {
        recordingId: recordingIdRef.current,
        chunkSequence: pcmChunkSequence,
        sampleRate: audioContextRef.current?.sampleRate || 44100,
        isLastChunk: true
      };
      
      // Send an empty array as the final chunk to signal the end
      streamConfig.onPCMAvailable(new Float32Array(0), metadata);
      
      // Disconnect and clean up the script processor
      scriptProcessorRef.current.removeEventListener('audioprocess', handlePCMData);
      if (sourceRef.current) {
        sourceRef.current.disconnect(scriptProcessorRef.current);
      }
      scriptProcessorRef.current.disconnect();
    }
    
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.removeEventListener(
        "dataavailable",
        handleDataAvailable,
      );
    }
    audioStream?.getTracks().forEach((track) => track.stop());
    if (rafRecordingRef.current) cancelAnimationFrame(rafRecordingRef.current);
    if (sourceRef.current) sourceRef.current.disconnect();
    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
      void audioContextRef.current.close();
    }
    _setIsProcessingAudioOnComplete(true);
    setRecordingTime(0);
    setIsPausedRecording(false);
    if (onStopRecording) onStopRecording();
  };

  const clearCanvas = () => {
    if (rafRecordingRef.current) {
      cancelAnimationFrame(rafRecordingRef.current);
      rafRecordingRef.current = null;
    }
    if (rafCurrentTimeUpdateRef.current) {
      cancelAnimationFrame(rafCurrentTimeUpdateRef.current);
      rafCurrentTimeUpdateRef.current = null;
    }
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.removeEventListener(
        "dataavailable",
        handleDataAvailable,
      );
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current = null;
    }

    // Clean up script processor if it exists
    if (scriptProcessorRef.current) {
      scriptProcessorRef.current.removeEventListener('audioprocess', handlePCMData);
      if (sourceRef.current) {
        sourceRef.current.disconnect(scriptProcessorRef.current);
      }
      scriptProcessorRef.current.disconnect();
      scriptProcessorRef.current = null;
    }

    audioStream?.getTracks().forEach((track) => track.stop());
    if (audioRef?.current) {
      audioRef.current.removeEventListener("ended", onEndedRecordedAudio);
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current = null;
    }
    audioContextRef.current = null;
    analyserRef.current = null;
    dataArrayRef.current = null;
    sourceRef.current = null;

    setAudioStream(null);
    setIsProcessingStartRecording(false);
    setIsRecordingInProgress(false);
    setIsPreloadedBlob(false);
    _setIsProcessingAudioOnComplete(false);
    setRecordedBlob(null);
    setBufferFromRecordedBlob(null);
    setRecordingTime(0);
    setPrevTime(0);
    setDuration(0);
    setAudioSrc("");
    setCurrentAudioTime(0);
    setIsPausedRecordedAudio(true);
    setIsPausedRecording(false);
    _setIsProcessingOnResize(false);
    setAudioData(new Uint8Array(0));
    setError(null);
    setIsCleared(true);
    if (onClearCanvas) onClearCanvas();
  };

  const startPlayingAudio = () => {
    if (audioRef.current && audioRef.current.paused) {
      const audioPromise = audioRef.current.play();
      if (audioPromise !== undefined) {
        audioPromise.catch((error) => {
          console.error(error);
          if (onErrorPlayingAudio) {
            onErrorPlayingAudio(
              error instanceof Error ? error : new Error("Error playing audio"),
            );
          }
        });
      }
    }
  };

  const togglePauseResume = () => {
    if (isRecordingInProgress) {
      setIsPausedRecording((prevPaused) => !prevPaused);
      if (mediaRecorderRef.current?.state === "recording") {
        mediaRecorderRef.current?.pause();
        setRecordingTime((prev) => prev + (performance.now() - prevTime));
        if (rafRecordingRef.current) {
          cancelAnimationFrame(rafRecordingRef.current);
        }
        if (onPausedRecording) onPausedRecording();
      } else {
        rafRecordingRef.current = requestAnimationFrame(recordingFrame);
        mediaRecorderRef.current?.resume();
        setPrevTime(performance.now());
        if (onResumedRecording) onResumedRecording();
      }
      return;
    }

    if (audioRef.current && isAvailableRecordedAudio) {
      if (audioRef.current.paused) {
        requestAnimationFrame(handleTimeUpdate);
        startPlayingAudio();
        audioRef.current.addEventListener("ended", onEndedRecordedAudio);
        setIsPausedRecordedAudio(false);
        if (onStartAudioPlayback && currentAudioTime === 0) {
          onStartAudioPlayback();
        }
        if (onResumedAudioPlayback && currentAudioTime !== 0) {
          onResumedAudioPlayback();
        }
      } else {
        if (rafCurrentTimeUpdateRef.current) {
          cancelAnimationFrame(rafCurrentTimeUpdateRef.current);
        }
        audioRef.current.removeEventListener("ended", onEndedRecordedAudio);
        audioRef.current.pause();
        setIsPausedRecordedAudio(true);
        const newCurrentTime = audioRef.current.currentTime;
        setCurrentAudioTime(newCurrentTime);
        audioRef.current.currentTime = newCurrentTime;
        if (onPausedAudioPlayback) onPausedAudioPlayback();
      }
    }
  };

  const onEndedRecordedAudio = () => {
    if (rafCurrentTimeUpdateRef.current) {
      cancelAnimationFrame(rafCurrentTimeUpdateRef.current);
    }
    setIsPausedRecordedAudio(true);
    setCurrentAudioTime(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    if (onEndAudioPlayback) onEndAudioPlayback();
  };

  const saveAudioFile = () => {
    if (!recordedBlob) return;

    const fileExtension = getFileExtensionFromMimeType(
      recordedBlob.type || "audio/webm",
    );
    const fileName = `recording-${new Date().toISOString()}.${fileExtension}`;
    const url = URL.createObjectURL(recordedBlob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style.display = "none";
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return {
    audioRef,
    isRecordingInProgress,
    isPausedRecording,
    audioData,
    recordingTime,
    mediaRecorder: mediaRecorderRef.current,
    duration,
    currentAudioTime,
    audioSrc,
    isPausedRecordedAudio,
    isProcessingRecordedAudio,
    isCleared,
    isAvailableRecordedAudio,
    recordedBlob,
    bufferFromRecordedBlob,
    formattedDuration,
    formattedRecordingTime,
    formattedRecordedAudioCurrentTime,
    startRecording,
    togglePauseResume,
    stopRecording,
    saveAudioFile,
    clearCanvas,
    setCurrentAudioTime,
    error,
    isProcessingOnResize,
    isProcessingStartRecording,
    isPreloadedBlob,
    setPreloadedAudioBlob,
    _setIsProcessingAudioOnComplete,
    _setIsProcessingOnResize,
  };
}

export default useVoiceVisualizer;
