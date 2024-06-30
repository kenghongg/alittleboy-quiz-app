<template>
  <q-toolbar>
    <q-btn icon="reply" round class="back-btn" size="sm" flat />
    <div class="page-title">{{ props.pageTitle }}</div>
  </q-toolbar>
</template>

<script setup>
import { useRouter } from 'vue-router';
const props = defineProps(['pageTitle']);

const router = useRouter();
</script>

<style scoped lang="scss">
.back-btn {
  background: #ebecef;
}

.page-title {
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem;
  font-weight: 600;
}
</style>
