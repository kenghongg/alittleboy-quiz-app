<template>
  <div class="game-content">
    <div class="content-question">
      <slot name="question"></slot>
    </div>

    <div class="content-answer">
      <slot name="answer"></slot>
    </div>
  </div>
</template>

<script setup>
// const props = defineProps(['label']);
</script>

<style scoped lang="scss">
.game-content {
  height: calc(100dvh - 60px);
  background: rgba(0, 0, 0, 0.2);
}
</style>
