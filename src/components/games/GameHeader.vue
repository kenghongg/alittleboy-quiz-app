<template>
  <div class="game-toolbar">
    <!-- <div class="game-subtitle">Quiz</div> -->
    <!-- <div class="game-title">Country Flags</div> -->
    <q-btn icon="close" round class="close-btn" size="sm" flat @click="closeDialogConfirm = true" />
  </div>

  <q-dialog v-model="closeDialogConfirm" class="exit-dialog">
    <div class="exit-dialog-content">
      <p class="exit-dialog-text">Are you sure you want to exit?</p>
      <div class="exit-dialog-buttons">
        <q-btn label="No" @click="closeDialogConfirm = false" class="exit-dialog-btn no-btn" />
        <q-btn label="Yes" @click="router.push('/')" class="exit-dialog-btn yes-btn" />
      </div>
    </div>
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
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  /* background: salmon; */
}

.close-btn {
  color: #ebecef;
  border: 1px solid #ebecef;
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

.exit-dialog {
  /* Center the dialog content */
  display: flex;
  justify-content: center;
  align-items: center;
}

.exit-dialog-content {
  /* Customize the dialog box */
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.exit-dialog-text {
  /* Style the dialog text */
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
}

.exit-dialog-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.exit-dialog-btn {
  /* Style the button */
  color: #ffffff;
  background-color: #007bff;
  border-radius: 4px;
  padding: 10px 20px;
  text-transform: none;
}

.no-btn {
  color: #ffffff;
  background-color: #6c757d;
}

.no-btn:hover {
  background-color: #5a6268;
}

.yes-btn {
  color: #ffffff;
  background-color: #007bff;
}

.yes-btn:hover {
  background-color: #0056b3;
}
</style>
