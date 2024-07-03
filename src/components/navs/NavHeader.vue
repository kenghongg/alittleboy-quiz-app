<template>
  <q-header>
    <q-toolbar>
      <q-btn flat dense to="/" exact>Home</q-btn>
      <q-btn flat dense to="/about">About</q-btn>
      <q-btn flat dense to="/settings" v-if="ui.userLoggedIn">Settings</q-btn>

      <q-space />

      <template v-if="ui.authLoading">
        <q-spinner-facebook />
      </template>
      <template v-else>
        <template v-if="ui.userLoggedIn">
          <q-btn @click="userLogOut">Logout</q-btn>
        </template>
        <template v-else>
          <q-btn @click="router.push('/login')">Login</q-btn>
          <q-btn @click="router.push('/register')">Register</q-btn>
        </template>
      </template>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import FirebaseSignout from 'src/firebase/firebase-signout';
import { useUI } from 'stores/ui';

const router = useRouter();
const ui = useUI();

// logout action.
const userLogOut = () => {
  FirebaseSignout().then(() => {
    router.push('/').then(() => {
      window.location.reload();
    });
  });
};
</script>

<style scoped>
/* Styles for NavHeader */
</style>
