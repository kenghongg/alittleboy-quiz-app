<template>
  <div class="img-question">
    <q-img :src="imgQuestion" spinner-color="primary" />
  </div>
</template>

<script setup>
const props = defineProps(['imgQuestion']);
</script>

<style lang="scss" scoped>
.img-question {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* opacity: 0.3; */
  padding: 1rem;
}
</style>
