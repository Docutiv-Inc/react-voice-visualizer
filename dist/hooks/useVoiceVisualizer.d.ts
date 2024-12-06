import { Controls, useVoiceVisualizerParams } from "../types/types.ts";
declare function useVoiceVisualizer({ inputDeviceId, onStartRecording, onStopRecording, onPausedRecording, onResumedRecording, onClearCanvas, onEndAudioPlayback, onStartAudioPlayback, onPausedAudioPlayback, onResumedAudioPlayback, onErrorPlayingAudio, }?: useVoiceVisualizerParams): Controls;
export default useVoiceVisualizer;
