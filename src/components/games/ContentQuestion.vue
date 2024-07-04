<template>
  <div class="content-question" :class="contentCorrect && 'correct'">
    <div class="img-question">
      <q-img :src="props.questionImg" spinner-color="primary" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['questionImg', 'contentCorrect']);
// const emits = defineEmits(['contentCorrect']);
</script>

<style lang="scss" scoped>
.content-question {
  // height: 100%;
  height: calc(100dvh - 30rem);
  transition: 0.3s all;

  &.correct {
    // height: 100%;
  }

  .img-question {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    opacity: 0.1;
    padding: 1rem;
  }
}
</style>
