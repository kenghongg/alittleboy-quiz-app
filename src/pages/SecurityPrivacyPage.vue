<template>
  <NavBack :pageTitle="'Security & Privacy'" />

  <ContentSection :sectionTitle="'Security'" class="q-pa-md">
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
  </ContentSection>

  <ContentSection :sectionTitle="'Privacy'" class="q-pa-md">
    <template #content>
      <ListingWrapper>
        <template #item>
          <ItemAction :title="'Optional Analytics'">
            <template #rightInput>
              <q-toggle v-model="toggleOptionalAnalytics" color="dark" />
            </template>
          </ItemAction>
          <ItemAction :title="'Privacy Policy'">
            <template #rightInput>
              <q-btn icon="open_in_new" flat />
            </template>
          </ItemAction>
        </template>
      </ListingWrapper>
    </template>
  </ContentSection>
</template>

<script setup>
import { ref } from 'vue';
import NavBack from 'src/components/navs/NavBack.vue';
import ContentSection from 'src/components/settings/ContentSection.vue';
import ListingWrapper from 'src/components/settings/ListingWrapper.vue';
import ItemList from 'src/components/settings/ItemList.vue';
import ItemAction from 'src/components/settings/ItemAction.vue';

const toggleFaceID = ref(true);
const toggle2FA = ref(false);
const toggleOptionalAnalytics = ref(true);
</script>

<style scoped lang="scss"></style>
