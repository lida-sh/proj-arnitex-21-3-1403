<template>
  <SharedHeaderSticky></SharedHeaderSticky>
  <div class="pt-[54px] lg:pt-[63px] relative w-full">
    <div v-if="pageLoading"
      class="bg-black bg-opacity-70 fixed inset-0 h-full w-full flex items-center justify-center overflow-hidden z-[5000]">
      <UiLoadingSpinner></UiLoadingSpinner>
    </div>

    <div class="w-full bg-black">
      <div class="w-full max-w-[100rem] pt-[5rem] mx-auto gap-2 2xl:gap-[1.25rem] px-2 flex items-start pb-20">
        <DashboardMenuBar class="hidden xl:block sticky top-20 max-w-[16.5rem] min-w-[13rem] dashboard-card w-full">
        </DashboardMenuBar>
        <main class="flex-1">
          <NuxtPage></NuxtPage>
        </main>

      </div>
    </div>

  </div>
  <HomeNavBottomNavigationWithUserProfile></HomeNavBottomNavigationWithUserProfile>

  <SharedFooterMainFooter></SharedFooterMainFooter>
</template>

<script setup>
const pageLoading = ref(true)
onMounted(() => {
  pageLoading.value = false
})
</script>