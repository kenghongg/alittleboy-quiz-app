<template>
  <WrapWithNavs>
    <NavTop />
    <IndexContent />
    <NavFooter />
  </WrapWithNavs>
</template>

<script setup>
import WrapWithNavs from 'src/components/WrapWithNavs.vue';
import NavTop from 'components/navs/NavTop.vue';
import NavFooter from 'components/navs/NavFooter.vue';
import IndexContent from 'components/index/IndexContent.vue';
</script>
