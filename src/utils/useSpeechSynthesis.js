// import { ref } from 'vue';

// export function useSpeechSynthesis() {
//   const isSpeaking = ref(false);
//   const synth = window.speechSynthesis;

//   const speak = (text) => {
//     if (synth.speaking) {
//       synth.cancel();
//     }
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.onstart = () => {
//       isSpeaking.value = true;
//     };
//     utterance.onend = () => {
//       isSpeaking.value = false;
//     };
//     synth.speak(utterance);
//   };

//   return { isSpeaking, speak };
// }

import { ref } from 'vue';

export function useSpeechSynthesis() {
  const isSpeaking = ref(false);
  const synth = window.speechSynthesis;
  let voices = [];

  const populateVoices = () => {
    voices = synth.getVoices();
  };

  const getFemaleVoice = () => {
    populateVoices();
    return voices.find((voice) => voice.name.includes('Female') || voice.gender === 'female') || voices[0];
  };

  const speak = (text) => {
    if (synth.speaking) {
      synth.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = getFemaleVoice();
    utterance.onstart = () => {
      isSpeaking.value = true;
    };
    utterance.onend = () => {
      isSpeaking.value = false;
    };
    synth.speak(utterance);
  };

  // Ensure voices are populated
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  } else {
    populateVoices();
  }

  return { isSpeaking, speak };
}
