import { Controls, useVoiceVisualizerParams } from '../types/types.ts';

declare function useVoiceVisualizer({ inputDeviceId, streamConfig, onStartRecording, onStopRecording, onPausedRecording, onResumedRecording, onClearCanvas, onEndAudioPlayback, onStartAudioPlayback, onPausedAudioPlayback, onResumedAudioPlayback, onErrorPlayingAudio, }?: useVoiceVisualizerParams): Controls;
export default useVoiceVisualizer;
