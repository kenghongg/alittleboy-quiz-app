<template>
  <q-footer class="nav-footer">
    <q-tabs
      v-model="navFooter"
      align="justify"
      class="text-primary"
      dense
      active-color="primary"
      indicator-color="transparent"
    >
      <q-route-tab to="/rank" name="rank" icon="emoji_events" no-caps label="Rank" />
      <q-route-tab to="/game" name="game" icon="" no-caps disable />
      <q-route-tab to="/game" name="game" icon="play_circle_filled" no-caps label="" class="mid-nav" />
      <q-route-tab to="/activity" name="activity" icon="pending_actions" no-caps label="Activity" />
    </q-tabs>
  </q-footer>
</template>

<script setup>
import { ref } from 'vue';

const navFooter = ref('activity');
</script>

<style lang="scss" scoped>
:deep(.q-tab--inactive) {
  opacity: 1 !important;
}

:deep(.q-tab--active) {
  // background: $primary;

  .q-icon {
    color: $white;
  }

  .q-tab__label {
    color: $white;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // background: $primary;
    animation: backgroundFade 3s infinite;
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
}

.nav-footer {
  background: $white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
}

.mid-nav {
  height: 80px;
  width: 80px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 50%;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;

  :deep(.q-icon) {
    font-size: 70px;
    z-index: 2;
    animation: colorFade 5s infinite;
  }

  // :deep(.q-tab__label) {
  //   // margin-bottom: -1rem;
  //   // margin-top: 0.75rem;
  // }
}

@keyframes colorFade {
  0% {
    color: #2c3e50;
  }
  30% {
    color: #4b647b; /* lighter color */
  }
  70% {
    color: #1771c6; /* lighter color */
  }
  100% {
    color: #2c3e50;
  }
}

@keyframes backgroundFade {
  0% {
    background: #2c3e50;
  }
  30% {
    background: #4b647b; /* lighter color */
  }
  70% {
    background: #1771c6; /* lighter color */
  }
  100% {
    background: #2c3e50;
  }
}
</style>
