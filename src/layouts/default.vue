<template>
  <div>
    <div class=" relative flex flex-col min-h-screen">
      <HeaderSticky></HeaderSticky>
      <div v-if="pageLoading"
        class="bg-black bg-opacity-70 fixed inset-0 h-full w-full flex items-center justify-center overflow-hidden z-[5001]">
        <UiLoadingSpinner></UiLoadingSpinner>
      </div>
      <div class="flex flex-col flex-1 relative">

        <Toaster richColors position="top-right" />
        <NuxtPage></NuxtPage>
      </div>

      <FooterMainFooter v-if="showFooter"></FooterMainFooter>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { Toaster } from 'vue-sonner';

const route = useRoute();
const hiddenFooterRoutes = ['/login', '/register'];

const showFooter = !hiddenFooterRoutes.includes(route.path);

const pageLoading = ref(true)
onMounted(() => {
  pageLoading.value = false
})
</script>