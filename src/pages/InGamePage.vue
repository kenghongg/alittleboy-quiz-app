<template>
  <GameHeader />
  <GameContent>
    <template #question>
      <div class="question-content"></div>
    </template>
    <template #answer>
      <div class="answer-content"></div>
    </template>
  </GameContent>
</template>

<script setup>
import GameHeader from 'components/games/GameHeader.vue';
import GameContent from 'components/games/GameContent.vue';
import ContentQuestion from 'components/games/ContentQuestion.vue';
import ContentAnswer from 'components/games/ContentAnswer.vue';
</script>

<style lang="scss" scoped>
.answer-content {
  margin-top: auto;
  background: salmon;
  padding: 1rem;
}
</style>
