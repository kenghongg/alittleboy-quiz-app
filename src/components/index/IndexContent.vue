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
        Quizzes Played
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import FirebaseSignout from 'src/firebase/firebase-signout';
import { useUI } from 'stores/ui';

const router = useRouter();
const ui = useUI();

// logout action.
const userLogOut = () => {
  FirebaseSignout().then(() => {
    router.push('/').then(() => {
      window.location.reload();
    });
  });
};
</script>

<style lang="scss" scoped>
.index-container {
  display: flex;
  width: 100%;
  height: 500px;
  background-image: url('../../assets/index/background-01.jpg');
  background-position: center center;
  background: cover;
  background-repeat: no-repeat;
  position: relative;

  &:before {
    content: '';
    background: linear-gradient(to bottom, #ffffff, transparent);
    height: 300px;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:after {
    content: '';
    background: linear-gradient(to top, #ffffff, transparent);
    height: 200px;
    width: 100%;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
  }

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
