<template>
  <div class="listing-wrapper">
    <slot name="item"></slot>
  </div>
</template>

<style scoped lang="scss">
.listing-wrapper {
  display: grid;
  row-gap: 1rem;
}
</style>
