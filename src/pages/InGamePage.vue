<template>
  <!-- <pre>database: {{ databaseData }}</pre> -->

  <div class="in-game-wrapper">
    <GameHeader />
    <!-- <GameContent v-for="(item, index) in quizList" :key="index" :list="item" /> -->
    <GameContent :list="quizList[0]" />
    <!-- <GameContent :list="quizList" /> -->
    <!-- <div class="ads-placement"></div> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import GameHeader from 'components/games/GameHeader.vue';
import GameContent from 'components/games/GameContent.vue';
import supabase from 'src/supabase/index.js';

const databaseData = ref([]);
const quizList = ref([]);

async function getQuiz() {
  const { data, error } = await supabase.from('quiz_questions').select();

  if (error) {
    console.error('Error fetching quiz:', error);
  } else {
    databaseData.value = data;
    quizList.value = data;
  }
}

onMounted(() => {
  getQuiz();
});

// quizList.value = [
//   {
//     id: 1,
//     question: { questLabel: 'United States', imgPath: '' },
//     ans: [
//       {
//         ansId: '1',
//         ansLabel: 'Malaysia',
//         imgPath: 'src/assets/games/01.png',
//         ansActive: false,
//         ansCorrect: false
//       },
//       {
//         ansId: '2',
//         ansLabel: 'Maldives',
//         imgPath: 'src/assets/games/01.png',
//         ansActive: false,
//         ansCorrect: false
//       },
//       {
//         ansId: '3',
//         ansLabel: 'United States',
//         imgPath: 'src/assets/games/01.png',
//         ansActive: false,
//         ansCorrect: true
//       },
//       {
//         ansId: '4',
//         ansLabel: 'Israel',
//         imgPath: 'src/assets/games/01.png',
//         ansActive: false,
//         ansCorrect: false
//       }
//     ]
//   },
//   {
//     id: 2,
//     question: { imgPath: 'src/assets/games/02.png' },
//     ans: [
//       { ansId: '1', ansLabel: 'Malayasdsia', ansActive: false, ansCorrect: true },
//       { ansId: '2', ansLabel: 'Maldisdfves', ansActive: false, ansCorrect: false },
//       { ansId: '3', ansLabel: 'Unitdfged States', ansActive: false, ansCorrect: false },
//       { ansId: '4', ansLabel: 'Isrfghael', ansActive: false, ansCorrect: false }
//     ]
//   },
//   {
//     id: 3,
//     question: { imgPath: 'src/assets/games/02.png' },
//     ans: [
//       { ansId: '1', ansLabel: 'Malayasdsia', ansActive: false, ansCorrect: true },
//       { ansId: '2', ansLabel: 'Maldisdfves', ansActive: false, ansCorrect: false },
//       { ansId: '3', ansLabel: 'Unitdfged States', ansActive: false, ansCorrect: false },
//       { ansId: '4', ansLabel: 'Isrfghael', ansActive: false, ansCorrect: false }
//     ]
//   },
//   {
//     id: 4,
//     question: { imgPath: 'src/assets/games/03.png' },
//     ans: [
//       { ansId: '1', ansLabel: 'Malayasdsia', ansActive: false, ansCorrect: true },
//       { ansId: '2', ansLabel: 'Maldisdfves', ansActive: false, ansCorrect: false },
//       { ansId: '3', ansLabel: 'Unitdfged States', ansActive: false, ansCorrect: false },
//       { ansId: '4', ansLabel: 'Isrfghael', ansActive: false, ansCorrect: false }
//     ]
//   },
//   {
//     id: 5,
//     question: { imgPath: 'src/assets/games/04.png' },
//     ans: [
//       { ansId: '1', ansLabel: 'Malayasdsia', ansActive: false, ansCorrect: true },
//       { ansId: '2', ansLabel: 'Maldisdfves', ansActive: false, ansCorrect: false },
//       { ansId: '3', ansLabel: 'Unitdfged States', ansActive: false, ansCorrect: false },
//       { ansId: '4', ansLabel: 'Isrfghael', ansActive: false, ansCorrect: false }
//     ]
//   }
// ];
</script>

<style lang="scss" scoped>
// .ads-placement {
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   height: 4rem;
//   width: 100%;
//   background: #ccc;
// }

.in-game-wrapper {
  overflow: hidden;
}
</style>
