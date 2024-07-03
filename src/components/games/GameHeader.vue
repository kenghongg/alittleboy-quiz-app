<template>
  <!-- <div style="background: teal; height: 60px"></div> -->

  <div class="game-toolbar">
    <!-- <div class="game-subtitle">Quiz</div> -->
    <!-- <div class="game-title">Country Flags</div> -->
    <q-btn icon="close" round class="close-btn" size="sm" flat @click="closeDialogConfirm = true" />
  </div>

  <q-dialog v-model="closeDialogConfirm">
    <div><q-btn label="close" @click="router.push('/')" /></div>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// const props = defineProps(['pageTitle']);

const router = useRouter();

const closeDialogConfirm = ref(false);
</script>

<style scoped lang="scss">
.game-toolbar {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
}

.close-btn {
  background: #ebecef;
  margin-left: auto;
}

.game-title {
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.25rem;
  font-weight: 600;
  white-space: nowrap;
  margin-top: 1rem;
}

.game-subtitle {
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.825rem;
  font-weight: 600;
  white-space: nowrap;
}
</style>
