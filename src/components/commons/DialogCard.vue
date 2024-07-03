<template>
  <q-card class="bg-primary text-white">
    <div class="dialog-toolbar">
      <div class="dialog-title">{{ props.title }}</div>
      <q-btn icon="close" round class="close-btn" size="sm" flat @click="closeDialog" />
    </div>

    <slot name="content"></slot>
  </q-card>
</template>

<script setup>
const props = defineProps(['title']);
const emit = defineEmits(['close']);

const closeDialog = () => {
  emit('close');
};
</script>

<style scoped lang="scss">
.dialog-toolbar {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  .dialog-title {
    display: flex;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.25rem;
    font-weight: 600;
    white-space: nowrap;
  }

  .close-btn {
    background: #c7c7c7;
    color: #2c3e50;
    margin-left: auto;
  }
}
</style>
