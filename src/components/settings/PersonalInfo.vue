<template>
  <div class="profile-wrapper">
    <q-avatar>
      <img src="https://placehold.co/400" />
    </q-avatar>

    <!-- <div class="profile-name">
      {{ user.displayName }}
    </div> -->

    <div>
      <FormPersonalInfo />
    </div>
  </div>
  <div>
    <pre style="font-size: 10px">{{ user }}</pre>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useUserStore } from 'stores/user';
import FormPersonalInfo from 'src/components/forms/FormPersonalInfo.vue';

const userStore = useUserStore();
const user = userStore.user;

const getUserInfo = () => {};
</script>

<style scoped lang="scss">
// .profile-wrapper {
//   display: flex;
//   align-items: center;
//   gap: 12px;
// }
</style>
