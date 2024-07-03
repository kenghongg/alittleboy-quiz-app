<template>
  <div class="activity-container">
    <q-tabs
      v-model="activityTab"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="running" label="Running" no-caps />
      <q-tab name="completed" label="Completed" no-caps />
      <!-- <q-tab name="created" label="Created" no-caps /> -->
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="activityTab" animated>
      <q-tab-panel name="running">
        <div class="activity-selection">
          <q-circular-progress
            show-value
            font-size="12px"
            :value="progressValue"
            size="50px"
            :thickness="0.22"
            color="primary"
            track-color="grey-3"
            class="q-ma-md"
          >
            {{ progressValue }}%
          </q-circular-progress>
          <div class="selection-title">
            Country Flags
            <span class="selection-subtitle">Level 1</span>
          </div>
          <div class="selection-icon">
            <q-icon name="chevron_right" size="sm" />
          </div>
        </div>

        <div class="activity-selection q-mt-md">
          <q-circular-progress
            show-value
            font-size="12px"
            :value="progressValue"
            size="50px"
            :thickness="0.22"
            color="primary"
            track-color="grey-3"
            class="q-ma-md"
          >
            {{ progressValue }}%
          </q-circular-progress>
          <div class="selection-title">
            Car Logos
            <span class="selection-subtitle">Level 1</span>
          </div>
          <div class="selection-icon">
            <q-icon name="chevron_right" size="sm" />
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="completed">
        <div class="activity-selection">
          <q-circular-progress
            show-value
            font-size="12px"
            :value="progressFullValue"
            size="50px"
            :thickness="0.22"
            color="primary"
            track-color="grey-3"
            class="q-ma-md"
          >
            {{ progressFullValue }}%
          </q-circular-progress>
          <div class="selection-title">
            Country Flags
            <span class="selection-subtitle">Level 1</span>
          </div>
          <div class="selection-icon">
            <q-icon name="chevron_right" size="sm" />
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="created">
        <div class="text-h6">Movies</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUI } from 'stores/ui';

const router = useRouter();
const ui = useUI();

const activityTab = ref('running');

const progressValue = ref(66);
const progressFullValue = ref(100);
</script>

<style lang="scss" scoped>
.activity-selection {
  display: flex;

  border-radius: 12px;
  align-items: center;
  background: #f9f9f9;
  // background: $white;
  // box-shadow:
  //   0 2px 6px rgba(0, 0, 0, 0.15),
  //   0 5px 20px rgba(0, 0, 0, 0.05);

  .selection-title {
    font-size: 1.25rem;
    font-weight: 600;

    span.selection-subtitle {
      display: block;
      font-size: 0.875rem;
      font-weight: 400;
    }
  }

  .selection-icon {
    margin-left: auto;
    margin-right: 1rem;
  }

  .selection-level {
    background: salmon;
    margin-left: auto;
    height: 100%;
  }
}
</style>
