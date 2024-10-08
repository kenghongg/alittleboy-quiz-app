<template>
  <q-toolbar class="top-toolbar">
    <q-btn to="/history" color="white" text-color="primary" icon="watch_later" size="md" round />
    <q-space />
    <q-btn to="/settings" color="white" text-color="primary" icon="settings" size="md" round />
  </q-toolbar>
</template>

<style scoped lang="scss">
.top-toolbar {
  min-height: 60px;
  position: fixed;
  top: 0;
  left: -50%;
  transform: translateX(50%);
}
</style>
