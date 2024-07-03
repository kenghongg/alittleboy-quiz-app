<template>
  <div class="listing-item" @click="navigate">
    <div class="item-icon">
      <slot name="icon"></slot>
    </div>
    <div class="item-title">{{ props.title }}</div>
    <div class="item-right-icon"><q-icon name="chevron_right" /></div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps(['title', 'toLink']);
const router = useRouter();

const navigate = () => {
  props.toLink && router.push(props.toLink);
};
</script>

<style scoped lang="scss">
.listing-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #f9f9f9;
  // background: $white;
  // box-shadow:
  //   0 4px 6px rgba(0, 0, 0, 0.1),
  //   0 10px 20px rgba(0, 0, 0, 0.15);
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

  .item-right-icon {
    margin-left: auto;

    i {
      font-size: 1.5rem;
    }
  }
}
</style>
