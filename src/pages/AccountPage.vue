<template>
  <NavBack :pageTitle="'Account'" />

  <ContentSection :sectionTitle="'Account'" class="q-pa-md">
    <template #content>
      <ListingWrapper>
        <template #item>
          <ItemAction :title="'Email'">
            <template #rightInput>
              <q-btn
                :label="user.emailVerified ? 'Verified' : 'Verify now'"
                :disable="user.emailVerified"
                :color="user.emailVerified ? 'green' : 'primary'"
              />
            </template>
          </ItemAction>
          <ItemAction :title="'Change password'">
            <template #rightInput>
              <q-icon name="chevron_right" size="sm" />
            </template>
          </ItemAction>
        </template>
      </ListingWrapper>
    </template>
  </ContentSection>

  <ContentSection :sectionTitle="'Personal'" class="q-pa-md">
    <template #content>
      <ListingWrapper>
        <template #item>
          <ItemAction :title="'Full Name'">
            <template #rightInput>
              <div class="right-content">{{ user.displayName }}</div>
            </template>
          </ItemAction>
          <ItemAction :title="'Phone Number'">
            <template #rightInput>
              <q-btn
                :label="user.emailVerified ? 'Verified' : 'Verify now'"
                :disable="user.emailVerified"
                :color="user.emailVerified ? 'green' : 'primary'"
              />
            </template>
          </ItemAction>
          <ItemAction :title="'Region'">
            <template #rightInput>
              <CountryFlag :country="'sg'" :content="'Singapore'" />
            </template>
          </ItemAction>
          <ItemAction :title="'Currency'">
            <template #rightInput>
              <CountryFlag :country="'sg'" :content="'SGD'" />
            </template>
          </ItemAction>
        </template>
      </ListingWrapper>
    </template>
  </ContentSection>
</template>

<script setup>
import { onMounted } from 'vue';
import NavBack from 'src/components/navs/NavBack.vue';
import PersonalInfo from 'src/components/settings/PersonalInfo.vue';
import ContentSection from 'src/components/settings/ContentSection.vue';
import ListingWrapper from 'src/components/settings/ListingWrapper.vue';
import ItemAction from 'src/components/settings/ItemAction.vue';
import { useUserStore } from 'stores/user';
import CountryFlag from 'src/components/settings/CountryFlag.vue';

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
