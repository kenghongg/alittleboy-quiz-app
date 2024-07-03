<template>
  <GameHeader />
  <GameContent>
    <template #question>
      <ContentQuestion :imgQuestion="quizList[0].question.imgPath" />
    </template>
    <template #answer>
      <ContentAnswer />
    </template>
  </GameContent>

  <!-- <pre>quizList{{ quizList[0].question.imgPath }}</pre> -->
</template>

<script setup>
import { ref } from 'vue';
import GameHeader from 'components/games/GameHeader.vue';
import GameContent from 'components/games/GameContent.vue';
import ContentQuestion from 'components/games/ContentQuestion.vue';
import ContentAnswer from 'components/games/ContentAnswer.vue';

const quizList = ref([]);

quizList.value = [
  {
    id: 1,
    question: { imgPath: 'src/assets/games/01.png' },
    ans: [
      { ansId: '1', ansLabel: 'Malaysia', ansActive: false, ansCorrect: false },
      { ansId: '2', ansLabel: 'Maldives', ansActive: false, ansCorrect: false },
      { ansId: '3', ansLabel: 'United States', ansActive: false, ansCorrect: true },
      { ansId: '4', ansLabel: 'Israel', ansActive: false, ansCorrect: false }
    ]
  },
  {
    id: 2,
    question: { imgPath: 'src/assets/games/02.png' },
    ans: [
      { ansId: '1', ansLabel: 'Malayasdsia', ansActive: false, ansCorrect: true },
      { ansId: '2', ansLabel: 'Maldisdfves', ansActive: false, ansCorrect: false },
      { ansId: '3', ansLabel: 'Unitdfged States', ansActive: false, ansCorrect: false },
      { ansId: '4', ansLabel: 'Isrfghael', ansActive: false, ansCorrect: false }
    ]
  }
];
</script>

<style lang="scss" scoped></style>
