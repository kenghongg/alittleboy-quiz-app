<template>
  <NavBack :pageTitle="'Settings'" />

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
      <ItemList :title="'Support'" @click="dialogSupport = true">
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

  <q-dialog
    v-model="dialogSupport"
    persistent
    maximized
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <DialogCard :title="'Support'" @close="closeDialog">
      <template #content>
        <div class="dialog-content q-pa-md">
          <div class="q-my-auto">
            <div class="content-icon">
              <q-icon name="lightbulb" color="white" size="lg" />
            </div>
            <div class="content-title q-mt-md">Help Center</div>
            <div class="content-para q-mb-md">
              If you have some questions, contact support and we will help you.
            </div>
          </div>

          <q-btn
            label="Contact Support"
            no-caps
            class="full-width"
            color="white"
            text-color="primary"
            size="lg"
          />
        </div>
      </template>
    </DialogCard>
  </q-dialog>
</template>

<script setup>
import { ref, computed } from 'vue';
import NavHeader from 'components/navs/NavHeader.vue';
import NavBack from 'src/components/navs/NavBack.vue';
import ItemList from 'src/components/settings/ItemList.vue';
import ListingWrapper from 'src/components/settings/ListingWrapper.vue';
import { useUserStore } from 'stores/user';
import DialogCard from 'src/components/commons/DialogCard.vue';

const userStore = useUserStore();
const user = userStore.user;

const dialogSupport = ref(false);

const closeDialog = () => {
  dialogSupport.value = false;
};

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
