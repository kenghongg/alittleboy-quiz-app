<template>
  <div class="answer-selection">
    <div class="selection-item"></div>
    <div class="selection-item"></div>
    <div class="selection-item"></div>
    <div class="selection-item"></div>
  </div>
</template>

<style lang="scss" scoped>
.answer-selection {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
  // height: 100%;

  .selection-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    gap: 0.75rem;
    // height: calc(20vh - 16px);
    max-height: 56px;
    cursor: pointer;
  }
}
</style>
