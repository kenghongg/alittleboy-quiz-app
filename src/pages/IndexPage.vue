<template>
  <NavHeader />
  this is index
  <div><PersonalInfo /></div>
</template>

<script setup>
import { onMounted } from 'vue';

import PersonalInfo from 'src/components/settings/PersonalInfo.vue';

import { useRouter } from 'vue-router';
import NavHeader from 'components/navs/NavHeader.vue';
// import FormLogin from 'components/forms/FormLogin.vue';

const router = useRouter();

onMounted(() => {
  console.log('Firebase API Key:', process.env.VUE_APP_FIREBASE_API_KEY); // Should log your API key
});
</script>
