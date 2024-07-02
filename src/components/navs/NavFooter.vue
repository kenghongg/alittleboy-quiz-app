<template>
  <q-footer class="bg-white">
    <q-tabs align="justify" class="text-primary" dense active-color="primary" indicator-color="transparent">
      <q-route-tab to="/rank" icon="emoji_events" no-caps label="Rank" />
      <q-route-tab to="/play" icon="" no-caps />
      <q-route-tab to="/play" icon="play_circle_filled" no-caps label="Play" class="mid-nav" />
      <q-route-tab to="/activity" icon="pending_actions" no-caps label="Activity" />
    </q-tabs>
  </q-footer>
</template>

<style lang="scss" scoped>
:deep(.q-tab--inactive) {
  opacity: 1 !important;
}

.mid-nav {
  height: 80px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  /* pointer-events: none; */

  :deep(.q-icon) {
    font-size: 40px;
    z-index: 2;
    /* color: $primary; */
    animation: colorFade 5s infinite;
    /* filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5)); */
    margin-bottom: 0.35rem;
    /* color: pink; */
  }

  /* :deep(.q-icon) {
    margin-top: -300px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background: white;
    height: 70px;
    width: 70px;
    font-size: 50px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  } */
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
</style>
