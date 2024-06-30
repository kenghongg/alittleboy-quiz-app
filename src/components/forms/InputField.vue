<template>
  <!-- Passed props -->
  <!-- <pre>{{ props }}</pre> -->

  <div class="input-field">
    <div class="field-title">{{ props.label }}</div>
    <slot name="input"></slot>
  </div>
</template>

<script setup>
const props = defineProps(['label']);
</script>

<style scoped lang="scss">
.input-field {
  .field-title {
    font-size: 1rem;
    padding-bottom: 0.5rem;
  }
}
</style>
