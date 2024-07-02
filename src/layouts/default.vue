<template>
  <div>

    <section class="flex flex-col min-h-screen">
      <HeaderSticky></HeaderSticky>
      <div class="flex flex-col flex-1">

        <Toaster richColors position="top-right" />
        <NuxtPage></NuxtPage>
      </div>

      <FooterMainFooter v-if="showFooter"></FooterMainFooter>
    </section>

  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { Toaster } from 'vue-sonner';

const route = useRoute();
const hiddenFooterRoutes = ['/login', '/register'];

const showFooter = !hiddenFooterRoutes.includes(route.path);
</script>