<template>
  <NavBack :pageTitle="'Activity'" />
  <ActivityContent />
  <NavFooter />
</template>

<script setup>
import NavBack from 'src/components/navs/NavBack.vue';
import NavFooter from 'components/navs/NavFooter.vue';
import ActivityContent from 'components/activity/ActivityContent.vue';
</script>
