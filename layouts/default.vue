<template>
    <div>
      <the-menu></the-menu>
      <slot></slot>
      <the-footer v-if="showFooter"></the-footer>
    </div>
  </template>
  
  <script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const hiddenFooterRoutes = ['/login', '/register'];

const showFooter = !hiddenFooterRoutes.includes(route.path);
</script>