<template>
  <NavBack :pageTitle="'Account'" />

  <ContentSection class="q-pa-md">
    <template #content>
      <ListingWrapper>
        <template #item>
          <ItemAction :title="'Full Name'" :content="user.displayName"></ItemAction>
          <ItemAction :title="'Email'">
            <template #rightInput>
              <q-btn
                :label="user.emailVerified ? 'Verified' : 'Verify now'"
                :disable="user.emailVerified"
                :color="user.emailVerified ? 'green' : 'primary'"
                class="q-mr-md"
              />
            </template>
          </ItemAction>
          <ItemAction :title="'Change password'">
            <template #rightInput>
              <q-btn icon="chevron_right" flat />
            </template>
          </ItemAction>
        </template>
      </ListingWrapper>
    </template>
  </ContentSection>

  <!-- <ContentSection :sectionTitle="'Security'" class="q-pa-md">
    <template #content>
      <ListingWrapper>
        <template #item>
          <ItemAction :title="'Enable Face ID'">
            <template #rightInput>
              <q-toggle v-model="toggleFaceID" color="dark" />
            </template>
          </ItemAction>
          <ItemAction :title="'Enable 2FA'">
            <template #rightInput>
              <q-toggle v-model="toggle2FA" color="dark" />
            </template>
          </ItemAction>
          <ItemAction :title="'Change password'">
            <template #rightInput>
              <q-btn icon="chevron_right" flat />
            </template>
          </ItemAction>
        </template>
      </ListingWrapper>
    </template>
  </ContentSection> -->

  <!-- <PersonalInfo /> -->
</template>

<script setup>
import { onMounted } from 'vue';
import NavBack from 'src/components/navs/NavBack.vue';
import PersonalInfo from 'src/components/settings/PersonalInfo.vue';
import ContentSection from 'src/components/settings/ContentSection.vue';
import ListingWrapper from 'src/components/settings/ListingWrapper.vue';
import ItemAction from 'src/components/settings/ItemAction.vue';
import { useUserStore } from 'stores/user';

const userStore = useUserStore();
const user = userStore.user;

// form inputs fill in.
// const getUserData = () => {
//   user.email = user.email;
//   user.password = '***********';
//   user.displayName = user.displayName;
//   user.emailVerified = user.emailVerified;
// };

onMounted(() => {
  // getUserData();
});
</script>
