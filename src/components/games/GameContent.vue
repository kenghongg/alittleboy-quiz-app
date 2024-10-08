<template>
  <div class="loading-quiz" v-if="loading">
    <q-spinner v-if="loading" color="primary" size="50px" class="q-mb-md" />
  </div>
  <transition name="fade-scroll">
    <div class="quiz" v-if="!loading">
      <div class="quiz-knob">
        <q-knob
          readonly
          v-model="quizProgress"
          :min="quizProgressMin"
          :max="quizProgressMax"
          size="50px"
          :thickness="0.22"
          color="orange-5"
          track-color="grey-3"
          class="text-white q-ma-md"
          show-value
        />
      </div>
      <div class="question-container">
        <!-- use AI to create related 3d image based on the questions. -->
        <!-- <div class="question-image">
          <img :src="generatedImageUrl" alt="AI-generated image" />
        </div> -->

        <div style="display: flex; justify-content: center; margin-bottom: 1rem">
          <img src="src/assets/games/img-science.png" width="100%" style="max-width: 200px" />
        </div>

        <div class="question-header">
          <span>Question {{ currentQuestionIndex + 1 }} of {{ quizData.length }}</span>
        </div>
        <p class="question-text">
          <q-btn @click="voiceRead(question)" color="white" round size="sm" label="🔊" class="q-mr-sm" />
          <span v-html="question" />
        </p>
      </div>
      <div class="answers-container">
        <q-btn
          v-for="(answer, index) in shuffledAnswers"
          :key="index"
          @click="checkAnswer(answer)"
          :class="{
            selected: selectedAnswer === answer,
            selectedCorrect: selectedAnswer === quizData[currentQuestionIndex].correct_answer && showResult,
            selectedWrong: selectedAnswer !== quizData[currentQuestionIndex].correct_answer && showResult,
            showCorrect:
              answer === quizData[currentQuestionIndex].correct_answer &&
              selectedAnswer !== quizData[currentQuestionIndex].correct_answer &&
              showResult
          }"
          class="answer-btn"
          no-caps
        >
          <template v-slot:default>
            <span v-html="answer"></span>
          </template>
        </q-btn>
      </div>

      <!-- :disabled="showResult" -->
      <!-- isCorrect  -->

      <!-- <pre>selectedAnswer--{{ selectedAnswer }}</pre> -->
      <!-- <pre>-- {{ quizData[currentQuestionIndex].correct_answer }}</pre> -->

      <div v-if="showResult" class="result-container">
        <!-- <p :class="{ correct: isCorrect, incorrect: !isCorrect }">{{ resultMessage }}</p> -->
        <q-btn @click="nextQuestion" class="next-btn" no-caps size="md">
          {{ currentQuestionIndex < quizData.length - 1 ? 'Next Question' : 'See Results' }}
        </q-btn>
      </div>

      <div v-if="quizComplete" class="final-score">
        <div>Quiz Complete!</div>
        <p>
          You scored {{ score.correct }} correct and {{ score.incorrect }} incorrect out of
          {{ quizData.length }}
        </p>
      </div>
    </div>
  </transition>

  <div class="quiz-data" style="display: none">
    <pre style="margin-left: auto">quizData---{{ quizData[currentQuestionIndex] }}</pre>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import axios from 'axios';

const quizData = ref([]);
const currentQuestionIndex = ref(0);
const selectedAnswer = ref(null);
const showResult = ref(false);
const isCorrect = ref(false);
const resultMessage = ref('');
const score = ref({ correct: 0, incorrect: 0 });
const quizComplete = ref(false);
const quizProgress = ref(0);
const quizProgressMin = ref(1);
const quizProgressMax = ref(100);
const loading = ref(true);

async function fetchQuizData() {
  try {
    const response = await axios.get(
      'https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple'
    );
    quizData.value = response.data.results.sort(() => Math.random() - 0.5);
    getQuizProgress();
  } catch (error) {
    console.error('Error fetching quiz data:', error);
  } finally {
    loading.value = false;
  }
}

const getQuizProgress = () => {
  // if (currentQuestionIndex.value === 0) {
  // quizProgress.value = 1;
  // } else {
  if (showResult.value) {
    quizProgress.value = currentQuestionIndex.value + 1;
  } else {
    quizProgress.value = currentQuestionIndex.value;
  }
  // }

  quizProgressMax.value = quizData.value.length;
  quizProgressMin.value = 0;
};

const quizCategory = computed(() => {
  // Check if quizData has items and if the currentQuestionIndex is valid
  if (quizData.value.length > 0 && currentQuestionIndex.value < quizData.value.length) {
    return quizData.value[currentQuestionIndex.value].category || ''; // Return category or empty string
  }
  return ''; // Return empty string if conditions are not met
});

const currentQuestion = computed(() => quizData.value[currentQuestionIndex.value]);
const question = computed(() => (currentQuestion.value ? currentQuestion.value.question : ''));
const shuffledAnswers = computed(() => {
  if (currentQuestion.value) {
    const answers = [...currentQuestion.value.incorrect_answers, currentQuestion.value.correct_answer];
    return answers.sort(() => Math.random() - 0.5);
  }
  return [];
});

const correctSound = new Audio('src/assets/sound/correct.mp3');
const wrongSound = new Audio('src/assets/sound/wrong.mp3');

const checkAnswer = (answer) => {
  if (!showResult.value) {
    selectedAnswer.value = answer;
    showResult.value = true;
    getQuizProgress();

    if (answer === currentQuestion.value.correct_answer) {
      isCorrect.value = true;
      resultMessage.value = 'Correct!';
      score.value.correct++;
      // voiceRead(`Yes! The answer is ${answer}`);
      // success.flac
      // voiceRead(answer).then(() => {
      correctSound.play();
      // });
    } else {
      isCorrect.value = false;
      resultMessage.value = `Incorrect! The correct answer is ${currentQuestion.value.correct_answer}.`;
      score.value.incorrect++;
      // voiceRead(`No! The answer is not ${answer}`);
      wrongSound.play();
      // voiceRead(answer).then(() => {
      wrongSound.play();
      // });
    }
  }
};

// const nextQuestion = () => {
//   // loading.value = true;
//   if (currentQuestionIndex.value < quizData.value.length - 1) {
//     showResult.value = false; // Start the fade-out before moving to the next question
//     setTimeout(() => {
//       currentQuestionIndex.value++;
//       selectedAnswer.value = null;
//       resultMessage.value = '';
//       loading.value = false;
//     }, 500); // Match the timeout duration with the CSS transition duration
//   } else {
//     quizComplete.value = true;
//     loading.value = false;
//   }
// };

const nextQuestion = () => {
  if (currentQuestionIndex.value < quizData.value.length - 1) {
    currentQuestionIndex.value++;
    showResult.value = false;
    selectedAnswer.value = null;
    resultMessage.value = '';
  } else {
    quizComplete.value = true;
  }
};

// const readQuestion = () => {
//   const synth = window.speechSynthesis;
//   if (synth.speaking) synth.cancel(); // Stop any ongoing speech

//   const utterance = new SpeechSynthesisUtterance(question.value);
//   utterance.pitch = 1.2; // Slightly higher pitch for a more cheerful tone
//   utterance.rate = 1; // Adjust rate (0.1 to 10)

//   // Get all available voices
//   const voices = synth.getVoices();

//   // Select a cheerful kid-friendly voice
//   const kidFriendlyVoice = voices.find(
//     (voice) =>
//       voice.name.toLowerCase().includes('kid') ||
//       voice.name.toLowerCase().includes('child') ||
//       voice.name.toLowerCase().includes('female')
//   );

//   // Fallback to the first available voice if no cheerful / female voice is found
//   utterance.voice = kidFriendlyVoice || voices[0];

//   synth.speak(utterance);
// };

const voiceRead = (text) => {
  const synth = window.speechSynthesis;
  if (synth.speaking) synth.cancel(); // Stop any ongoing speech

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.pitch = 1.2; // Slightly higher pitch for a more cheerful tone
  utterance.rate = 1; // Adjust rate (0.1 to 10)

  // Get all available voices
  const voices = synth.getVoices();

  // Select a cheerful kid-friendly voice
  const kidFriendlyVoice = voices.find(
    (voice) =>
      voice.name.toLowerCase().includes('kid') ||
      voice.name.toLowerCase().includes('child') ||
      voice.name.toLowerCase().includes('female')
  );

  // Fallback to the first available voice if no cheerful / female voice is found
  utterance.voice = kidFriendlyVoice || voices[0];
  // utterance.pitch = 1.6;

  synth.speak(utterance);
};

onMounted(() => {
  fetchQuizData();
});
</script>

<style lang="scss" scoped>
// .quiz {
//   max-width: 600px;
//   margin: auto;
//   text-align: center;
//   font-family: Arial, sans-serif;
//   background: #f9f9f9;
//   padding: 20px;
//   border-radius: 15px;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
// }

.fade-scroll-enter-active,
.fade-scroll-leave-active {
  // transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-scroll-enter,
.fade-scroll-leave-to /* .fade-scroll-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(-30px); /* Adjust the value to control the scroll effect */
}

.quiz {
  // max-width: 600px;
  // margin: auto;
  // text-align: center;
  // font-family: Arial, sans-serif;
  // background: #f9f9f9;
  // padding: 20px;
  // border-radius: 15px;
  // box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.question-container {
  margin-bottom: 25px;
  .question-category {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .question-header {
    font-size: 1rem;
    color: #bbd4f9;
    margin-bottom: 5px;
  }
  .question-text {
    font-size: 1.5rem;
    font-weight: bold;
    color: #f2f6fc;
    margin-bottom: 15px;
  }
}

.answers-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.answer-btn {
  padding: 15px 20px;
  font-size: 1.2em;
  background-color: #ffffff;
  color: #3857e9;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* border: 4px solid transparent; */

  &.showCorrect {
    /* background: teal; */
    border: 4px solid #bec005;

    &:after {
      content: '';
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      width: 2rem;
      height: 2rem;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23bec005"><path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.6-7.6 1.4 1.4z"/></svg>')
        no-repeat center;
      background-size: contain;
    }
  }

  &.selected {
    background-color: #f39c12;
    color: #ffffff;
    position: relative;

    &.selectedWrong {
      background: linear-gradient(#ee8e8e, #d66767);
      &:after {
        content: '';
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        width: 2rem;
        height: 2rem;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23FFFFFF"><path d="M18.3 5.7l-1.4-1.4L12 9.6 7.1 4.7 5.7 6.1l4.9 4.9-4.9 4.9 1.4 1.4 4.9-4.9 4.9 4.9 1.4-1.4-4.9-4.9 4.9-4.9z"/></svg>')
          no-repeat center;
        background-size: contain;
      }
    }
    &.selectedCorrect {
      background: linear-gradient(#efd800, #bec005);
      &:after {
        content: '';
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        width: 2rem;
        height: 2rem;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23FFFFFF"><path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.6-7.6 1.4 1.4z"/></svg>')
          no-repeat center;
        background-size: contain;
      }
    }
  }

  // &:disabled {
  //   background-color: #95a5a6;
  //   cursor: not-allowed;
  // }
}

.result-container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 100%;
  padding: 12px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  p {
    font-size: 1.4rem;
    &.correct {
      color: green;
    }
    &.incorrect {
      color: red;
    }
  }
}

.next-btn {
  /* padding: 12px 25px; */
  font-size: 1.2rem;
  // background-color: #2ecc71;
  /* background: #f39c12; */
  background: linear-gradient(#eaa941, #f39c12);
  color: #fff;
  border: none;
  border-radius: 8px;
  display: flex;
  margin-left: auto;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    // background-color: #27ae60;
  }
}

.final-score {
  margin-top: 30px;
  color: #e74c3c;
  font-size: 1.4rem;
}

.voice-btn {
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 12px;
  transition: background-color 0.3s;
}
.voice-btn:hover {
  background-color: #2980b9;
}

.quiz-knob {
  display: flex;
  /* padding: 0 1rem; */
  /* width: 100%; */
  width: auto;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
