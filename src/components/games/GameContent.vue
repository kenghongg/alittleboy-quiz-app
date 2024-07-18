<template>
  <div class="game-content">
    <pre>props{{ dataList }}</pre>
    <pre>props {{ props.list }}</pre>
    <!-- <ContentQuestion :questionLabel="dataList.question" :questionImg="dataList.question_img" /> -->
    <!-- :contentCorrect="contentCorrect" -->
    <!-- <ContentAnswer :ansList="props.list.answers" @ansSubmit="ansSubmission" />  -->
  </div>
</template>

<script setup>
const props = defineProps(['list']);
import { ref, onMounted, reactive } from 'vue';
import ContentQuestion from 'components/games/ContentQuestion.vue';
import ContentAnswer from 'components/games/ContentAnswer.vue';

const dataList = reactive({ question: '', question_img: '' });

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

const getDataList = () => {
  // dataList.value = props.list;

  dataList.question = props.list.question;
  dataList.question_img = props.list.question_img;
};

onMounted(() => {
  getDataList();
});
</script>

<style scoped lang="scss">
.game-content {
  height: 100dvh;
  padding: 1rem;
}
</style>
