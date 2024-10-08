<template>
  <div class="index-container">
    <div class="quiz-stat-container">
      <div class="stat-game">
        <div class="stat-icon">
          <q-icon name="star" />
        </div>

        <span>0</span>
        Day Streak
      </div>

      <div class="stat-game">
        <div class="stat-icon">
          <q-icon name="sports_esports" />
        </div>

        <span>0</span>
        Quiz Answered
      </div>
    </div>
  </div>

  <button @click="handleLogout" :disabled="loading" v-if="status === 'LOGGED_IN'">Logout</button>
  <!-- <pre>useUI{{ useUI().userLoggedIn }}</pre> -->
  <pre>status:{{ status }}</pre>
  <!-- <pre>Session: {{ userStore }}</pre> -->
</template>

<script setup>
import { useUI } from 'stores/ui';
import { useUserStore } from 'stores/user';
import { useRouter } from 'vue-router';

const router = useRouter();
const ui = useUI();
const userStore = useUserStore();
const user = userStore.user;
const status = userStore.status;
const loading = userStore.loading;

// logout action.
const handleLogout = async () => {
  await userStore.supabaseLogout();
  router.push('/').then(() => {
    window.location.reload();
  });
};
</script>

<style lang="scss" scoped>
.index-container {
  .quiz-stat-container {
    z-index: 2;
    display: grid;
    column-gap: 1rem;
    row-gap: 1rem;
    grid-template-areas: 'colDayStreak colGamesPlayed';
    margin: auto;

    .stat-game {
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(8px);
      // border: 2px solid rgba(199, 199, 199, 0.5);
      width: 100%;
      padding: 1rem;
      min-height: 160px;
      font-size: 0.875rem;
      border-radius: 12px;
      position: relative;
      aspect-ratio: 1 / 1;
      display: flex;
      flex-direction: column;
      box-shadow:
        0 4px 6px rgba(0, 0, 0, 0.1),
        0 10px 20px rgba(0, 0, 0, 0.15);

      &:nth-child(1) {
        grid-area: colDayStreak;
      }
      &:nth-child(2) {
        grid-area: colGamesPlayed;
      }

      span {
        font-size: 2rem;
        display: block;
        font-weight: 600;
      }

      .stat-icon {
        display: block;
        top: 0.5rem;
        right: 0.5rem;
        height: 2.5rem;
        width: 2.5rem;
        font-size: 1.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $white;
        background: rgba($primary, 0.4);
        margin-bottom: auto;
        margin-left: auto;
        box-shadow:
          0 4px 6px rgba(0, 0, 0, 0.1),
          0 10px 20px rgba(0, 0, 0, 0.15);
      }
    }
  }
}
</style>
