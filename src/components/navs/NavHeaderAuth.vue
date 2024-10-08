<template>
  <q-toolbar class="top-toolbar">
    <q-btn @click="router.push('/')" icon="chevron_left" flat round />
    <q-space />
  </q-toolbar>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped lang="scss">
.top-toolbar {
  height: 50px;
}
</style>
