<template>
  <AuthProvider>
    <router-view />
  </AuthProvider>
</template>

<script setup>
import AuthProvider from 'components/auth/AuthProvider.vue';
</script>
