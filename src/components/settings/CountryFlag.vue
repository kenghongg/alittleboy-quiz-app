<template>
  <div class="country-content">
    <div>{{ props.content }}</div>
    <div><country-flag :country="props.country" size="normal" shadow /></div>
  </div>
</template>

<script setup>
import CountryFlag from 'vue-country-flag-next';
const props = defineProps(['country', 'content']);
</script>

<style scoped lang="scss">
.country-content {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 80%;
  margin-left: auto;
  gap: 0.25rem;
}
</style>
