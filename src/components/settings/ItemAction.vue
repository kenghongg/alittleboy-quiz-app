<template>
  <div class="listing-item">
    <div class="item-icon">
      <slot name="icon"></slot>
    </div>
    <div class="item-title">{{ props.title }}</div>

    <div class="tem-right">
      <q-toggle v-model="value" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps(['title']);
const router = useRouter();
</script>

<style scoped lang="scss">
.listing-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  gap: 0.75rem;
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
