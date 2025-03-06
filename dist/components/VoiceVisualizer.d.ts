import { Controls } from '../types/types.ts';

interface VoiceVisualizerProps {
    controls: Controls;
    height?: string | number;
    width?: string | number;
    speed?: number;
    backgroundColor?: string;
    mainBarColor?: string;
    secondaryBarColor?: string;
    barWidth?: number;
    gap?: number;
    rounded?: number;
    fullscreen?: boolean;
    isControlPanelShown?: boolean;
    isDownloadAudioButtonShown?: boolean;
    animateCurrentPick?: boolean;
    onlyRecording?: boolean;
    isDefaultUIShown?: boolean;
    defaultMicrophoneIconColor?: string;
    defaultAudioWaveIconColor?: string;
    mainContainerClassName?: string;
    canvasContainerClassName?: string;
    isProgressIndicatorShown?: boolean;
    progressIndicatorClassName?: string;
    isProgressIndicatorTimeShown?: boolean;
    progressIndicatorTimeClassName?: string;
    isProgressIndicatorOnHoverShown?: boolean;
    progressIndicatorOnHoverClassName?: string;
    isProgressIndicatorTimeOnHoverShown?: boolean;
    progressIndicatorTimeOnHoverClassName?: string;
    isAudioProcessingTextShown?: boolean;
    audioProcessingTextClassName?: string;
    controlButtonsClassName?: string;
}
declare const VoiceVisualizer: ({ controls: { audioRef, audioData, isRecordingInProgress, recordedBlob, duration, currentAudioTime, audioSrc, bufferFromRecordedBlob, togglePauseResume, startRecording, stopRecording, saveAudioFile, isAvailableRecordedAudio, isPausedRecordedAudio, isPausedRecording, isProcessingStartRecording, isProcessingRecordedAudio, isCleared, formattedDuration, formattedRecordingTime, formattedRecordedAudioCurrentTime, clearCanvas, setCurrentAudioTime, isProcessingOnResize, _setIsProcessingOnResize, _setIsProcessingAudioOnComplete, }, width, height, speed, backgroundColor, mainBarColor, secondaryBarColor, barWidth, gap, rounded, isControlPanelShown, isDownloadAudioButtonShown, animateCurrentPick, fullscreen, onlyRecording, isDefaultUIShown, defaultMicrophoneIconColor, defaultAudioWaveIconColor, mainContainerClassName, canvasContainerClassName, isProgressIndicatorShown, progressIndicatorClassName, isProgressIndicatorTimeShown, progressIndicatorTimeClassName, isProgressIndicatorOnHoverShown, progressIndicatorOnHoverClassName, isProgressIndicatorTimeOnHoverShown, progressIndicatorTimeOnHoverClassName, isAudioProcessingTextShown, audioProcessingTextClassName, controlButtonsClassName, }: VoiceVisualizerProps) => import("react/jsx-runtime").JSX.Element;
export default VoiceVisualizer;
