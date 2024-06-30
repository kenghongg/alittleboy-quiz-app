<template>
  <div class="profile-wrapper">
    <div class="profile-picture">
      <q-avatar size="120px">
        <img src="https://placehold.co/400" />
      </q-avatar>
    </div>
    <div>
      <FormPersonalInfo />
    </div>
  </div>
  <!-- <div>
    <pre style="font-size: 10px">{{ user }}</pre>
  </div> -->
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
.profile-picture {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
}
</style>
