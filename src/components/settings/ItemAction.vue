<template>
  <div class="listing-item">
    <div class="item-title">{{ props.title }}</div>
    <div class="item-right" v-if="$slots.rightInput">
      <slot name="rightInput"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'content']);
</script>

<style scoped lang="scss">
.listing-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: hsl(0, 0%, 98%);
  border-radius: 8px;
  gap: 0.75rem;
  max-height: 56px;
  cursor: pointer;

  .item-icon {
    height: 2rem;
    width: 2rem;
    min-width: 2rem;
    background-color: $dark;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: $white;
  }

  .item-title {
    font-weight: 600;
    font-size: 1rem;
  }

  .item-right {
    margin-left: auto;

    i {
      font-size: 1.5rem;
    }
  }
}
</style>
