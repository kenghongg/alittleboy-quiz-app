<template>
  <div class="top-toolbar">
    <q-btn icon="reply" round class="back-btn" size="sm" flat @click="router.back()" />
    <div class="page-title">{{ props.pageTitle }}</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const props = defineProps(['pageTitle']);

const router = useRouter();
</script>

<style scoped lang="scss">
.top-toolbar {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
}

.back-btn {
  background: #ebecef;
  margin-right: auto;
}

.page-title {
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.25rem;
  font-weight: 600;
}
</style>
