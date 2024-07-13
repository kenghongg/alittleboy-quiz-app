<template>
  <div class="content-question" :class="contentCorrect && 'correct'">
    <!-- <div class="img-question">
      <q-img :src="props.questionImg" spinner-color="primary" />
    </div> -->

    <template v-if="props.questionImg">
      <div class="question-img" :style="{ backgroundImage: 'url(' + props.questionImg + ')' }">
        <img src="../../assets/games/img-placeholder.jpg" />
      </div>
    </template>
    <template v-else>
      <div class="question-label">
        {{ props.questionLabel }}
      </div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps(['questionImg', 'questionLabel', 'contentCorrect']);
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

  .question-label {
    aspect-ratio: 1 / 1;
    max-height: 18rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: auto;
    padding: 1rem;
    font-size: 3rem;
    text-align: center;
    font-weight: 600;
    // opacity: 0.1;
    // background: salmon;
  }

  .img-question {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
}
</style>
