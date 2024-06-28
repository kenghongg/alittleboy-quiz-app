<template>
  <div>
    <pre>{{ LocalStorage.getItem('user') }}</pre>
  </div>
</template>

<script setup>
import { LocalStorage } from 'quasar';
</script>
