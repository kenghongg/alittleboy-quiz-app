<template>
  <NavBack :pageTitle="'Notifications'" />

  <ContentSection :sectionTitle="'Notifications'" class="q-pa-md">
    <template #content>
      <ListingWrapper>
        <template #item>
          <ItemAction :title="'Enable Notifications'">
            <template #rightInput>
              <div class="toggle-btn">
                <q-toggle v-model="toggleNotifications" color="dark" />
              </div>
            </template>
          </ItemAction>
        </template>
      </ListingWrapper>
    </template>
  </ContentSection>

  <ContentSection :sectionTitle="'Customized'" class="q-pa-md">
    <template #content>
      <ListingWrapper>
        <template #item>
          <ItemAction :title="'Enable Game 01 Alert'">
            <template #rightInput>
              <div class="toggle-btn">
                <q-toggle v-model="toggleCustomGames" color="dark" />
              </div>
            </template>
          </ItemAction>
          <ItemAction :title="'Enable Game 02 Alert'">
            <template #rightInput>
              <div class="toggle-btn">
                <q-toggle v-model="toggleCustomGames" color="dark" />
              </div>
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
import ItemAction from 'src/components/settings/ItemAction.vue';

const toggleNotifications = ref(true);
const toggleCustomGames = ref(true);
</script>

<style scoped lang="scss"></style>
