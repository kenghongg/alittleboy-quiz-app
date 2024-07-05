<template>
  <div class="game-content">
    <ContentQuestion :questionImg="props.list.question.imgPath" :contentCorrect="contentCorrect" />
    <ContentAnswer :ansList="props.list.ans" @ansSubmit="ansSubmission" />
  </div>
</template>

<script setup>
const props = defineProps(['list']);
import { ref } from 'vue';
import ContentQuestion from 'components/games/ContentQuestion.vue';
import ContentAnswer from 'components/games/ContentAnswer.vue';

const contentQuestionActive = ref(false);
const contentCorrect = ref(false);
const ansRef = ref();

// const ansSubmission = (item) => {
//   ansRef.value = item;
//   contentQuestionActive.value = true;
//   if (item.ansActive && item.ansCorrect) {
//     contentCorrect.value = true;
//   } else {
//     contentCorrect.value = false;
//   }
// };

const ansSubmission = (item) => {
  ansRef.value = item;
  contentQuestionActive.value = true;
  contentCorrect.value = item.ansActive && item.ansCorrect;
};
</script>

<style scoped lang="scss">
.game-content {
  height: 100dvh;
  padding: 1rem;
}
</style>
