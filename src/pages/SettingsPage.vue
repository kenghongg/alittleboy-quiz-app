<template>
  <NavHeader />
  <div>
    <div>Settings Page</div>
    <PersonalInfo />
    <!-- <pre>user~~{{ user }}</pre> -->
  </div>
</template>

<script setup>
import PersonalInfo from 'src/components/settings/PersonalInfo.vue';
import NavHeader from 'components/navs/NavHeader.vue';
// import { useUserStore } from 'stores/user';

// const userStore = useUserStore();
// const user = userStore.user;
</script>
