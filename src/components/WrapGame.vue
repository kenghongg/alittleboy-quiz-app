<template>
  <q-page class="wrapper-game">
    <slot />
  </q-page>
</template>

<style lang="scss" scoped>
.wrapper-game {
  /* background: rgba(250, 128, 114, 0.2); */
  min-height: 100dvh;
  padding: 2rem 1rem 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  /* background-image: url('src/assets/index/background-01.jpg'); */
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background: linear-gradient(135deg, #1e3c72, #2a5298);

  /* &:before {
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
    height: 400px;
    width: 100%;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
  } */
}
</style>

<style lang="scss">
html {
  background-color: #1e3c72;
}
</style>
