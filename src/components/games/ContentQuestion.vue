<template>
  <div class="content-question" :class="contentCorrect && 'correct'">
    <!-- <div class="img-question">
      <q-img :src="props.questionImg" spinner-color="primary" />
    </div> -->

    <div class="question-img" :style="{ backgroundImage: 'url(' + props.questionImg + ')' }">
      <img src="../../assets/games/img-placeholder.jpg" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['questionImg', 'contentCorrect']);
</script>

<style lang="scss" scoped>
.content-question {
  // height: 100%;
  /* height: calc(100dvh - 30rem); */
  transition: 0.3s all;

  &.correct {
    // height: 100%;
  }

  .question-img {
    aspect-ratio: 1 / 1;
    /* background: salmon; */
    max-height: 18rem;
    /* padding: 1rem; */
    background-position: center bottom;
    background-size: contain;
    background-repeat: no-repeat;
    margin: auto;
    img {
      display: block;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }

  .img-question {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    /* opacity: 0.1; */
    padding: 1rem;
  }
}
</style>
