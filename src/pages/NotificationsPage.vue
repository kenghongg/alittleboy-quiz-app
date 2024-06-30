<template>
  <NavBack :pageTitle="'Notifications'" />

  <ContentSection :sectionTitle="'Notifications'" class="q-pa-md">
    <template #content>
      <ListingWrapper>
        <template #item>
          <ItemList :title="'Account'" :toLink="'/settings/account'">
            <template #icon><q-icon name="person" size="18px" /></template>
          </ItemList>

          <ItemAction :title="'Account'">
            <!-- <template #icon><q-icon name="person" size="18px" /></template> -->
          </ItemAction>
        </template>
      </ListingWrapper>
    </template>
  </ContentSection>
</template>

<script setup>
import NavBack from 'src/components/navs/NavBack.vue';
import ContentSection from 'src/components/settings/ContentSection.vue';
import ListingWrapper from 'src/components/settings/ListingWrapper.vue';
import ItemList from 'src/components/settings/ItemList.vue';
import ItemAction from 'src/components/settings/ItemAction.vue';
</script>

<style scoped lang="scss"></style>
