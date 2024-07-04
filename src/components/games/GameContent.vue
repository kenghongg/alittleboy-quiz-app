<template>
  <div class="game-content">
    <ContentQuestion :questionImg="props.list[0].question.imgPath" :contentCorrect="contentCorrect" />
    <ContentAnswer :ansList="props.list[0].ans" @ansSubmit="ansSubmission" />
    <!-- <div class="content-question" :class="contentQuestionActive"> -->
    <!-- <ContentQuestion :questionImg="props.list[0].question.imgPath" /> -->
    <!-- </div>
    <div class="content-answer"> -->
    <!-- <ContentAnswer :ansList="props.list[0].ans" @ansSubmit="ansSubmission" /> -->
    <!-- </div> -->
  </div>
  <!-- <pre>contentCorrect~{{ contentCorrect }}</pre> -->
  <!-- <pre>contentQuestionActive~{{ contentQuestionActive }}</pre> -->
  <!-- <pre>ansRef~{{ ansRef }}</pre> -->
  <!-- <pre>list = {{ props.list[0].ans }}</pre> -->
</template>

<script setup>
const props = defineProps(['list']);
import { ref } from 'vue';
import ContentQuestion from 'components/games/ContentQuestion.vue';
import ContentAnswer from 'components/games/ContentAnswer.vue';

const contentQuestionActive = ref(false);
const contentCorrect = ref(false);
const ansRef = ref();

const ansSubmission = (item) => {
  ansRef.value = item;

  contentQuestionActive.value = true;

  if (item.ansActive && item.ansCorrect) {
    contentCorrect.value = true;
  } else {
    contentCorrect.value = false;
  }
};
</script>

<style scoped lang="scss">
.game-content {
  height: calc(100dvh - 4rem);
  padding: 1rem;
}
</style>
