<script setup>
const TabIndex = ref(0)

const data = ref([
  {
    id: 1,
    title: "۷ روزه"
  }, {
    id: 2,
    title: "۳۰ روزه"
  }, {
    id: 3,
    title: "۹۰ روزه"
  }
])

</script>

<template>
  <div class="w-full flex flex-col dashboard-card px-[2rem] pt-[0.625rem] pb-[0.875rem]">
    <div class="flex items-center gap-[2rem]">
      <span class="text-white text-[16px]">نمودار روند دارایی</span>
      <UiButtonTabButton class="flex-1" :list="data" v-model="TabIndex"></UiButtonTabButton>
    </div>

    <div class="w-full h-auto flex justify-center items-center mt-[1.5rem]">
      <DashboardChartJs></DashboardChartJs>
    </div>

  </div>
</template>

<style scoped></style>