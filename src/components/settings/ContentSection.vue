<template>
  <div class="content-section">
    <div class="section-title">{{ props.sectionTitle }}</div>
    <div class="section-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['sectionTitle']);
</script>

<style scoped lang="scss">
.section-title {
  color: #606b73;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  padding-bottom: 0.75rem;
}
</style>
