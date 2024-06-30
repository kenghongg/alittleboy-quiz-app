<template>
  <NavHeader />

  <ListingWrapper class="q-pa-md">
    <template #item>
      <ItemList :title="'Account'" :toLink="'/settings/account'">
        <template #icon><q-icon name="person" size="18px" /></template>
      </ItemList>
      <ItemList :title="'Notifications'" :toLink="'/settings/notifications'">
        <template #icon><q-icon name="notifications" size="18px" /></template>
      </ItemList>
      <ItemList :title="'Security & Privacy'" :toLink="'/settings/security-privacy'">
        <template #icon><q-icon name="lock" size="18px" /></template>
      </ItemList>
      <ItemList :title="'Support'" :toLink="'/settings/support'">
        <template #icon><q-icon name="question_answer" size="18px" /></template>
      </ItemList>
    </template>
  </ListingWrapper>

  <!-- <div class="text-center"> -->
  <!-- Created at: -->
  <!-- <span class="date">{{ formattedDate }}</span> -->
  <!-- &nbsp;|&nbsp; -->
  <!-- <span class="time">{{ formattedTime }}</span> -->
  <!-- </div> -->
</template>

<script setup>
import { computed } from 'vue';
import NavHeader from 'components/navs/NavHeader.vue';
import ItemList from 'src/components/settings/ItemList.vue';
import ListingWrapper from 'src/components/settings/ListingWrapper.vue';
import { useUserStore } from 'stores/user';

const userStore = useUserStore();
const user = userStore.user;

// date / time format
const formattedDate = computed(() => {
  const timestamp = userStore.user?.createdAt;
  return timestamp ? new Date(Number(timestamp)).toLocaleDateString() : '';
});

const formattedTime = computed(() => {
  const timestamp = userStore.user?.createdAt;
  return timestamp ? new Date(Number(timestamp)).toLocaleTimeString() : '';
});
</script>

<style scoped lang="scss"></style>
