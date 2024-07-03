<template>
  <div class="top-toolbar">
    <template v-if="isSettingsPage || isActivityPage">
      <q-btn icon="close" round class="exit-btn" size="sm" flat @click="router.push('/')" />
    </template>
    <template v-else>
      <q-btn icon="reply" round class="back-btn" size="sm" flat @click="router.push('/settings')" />
    </template>

    <div class="page-title">{{ props.pageTitle }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const props = defineProps(['pageTitle']);

const router = useRouter();
const route = useRoute();

const isSettingsPage = ref(false);
const isActivityPage = ref(false);

const checkSettingsPage = () => {
  if (route.path === '/settings') {
    isSettingsPage.value = true;
  } else {
    isSettingsPage.value = false;
  }
};

const checkActivityPage = () => {
  if (route.path === '/activity') {
    isActivityPage.value = true;
  } else {
    isActivityPage.value = false;
  }
};

onMounted(() => {
  checkSettingsPage();
  checkActivityPage();
});
</script>

<style scoped lang="scss">
.top-toolbar {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  .back-btn {
    background: #ebecef;
    margin-right: auto;
  }

  .exit-btn {
    background: #ebecef;
    margin-left: auto;
  }

  .page-title {
    display: flex;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.25rem;
    font-weight: 600;
    white-space: nowrap;
  }
}
</style>
