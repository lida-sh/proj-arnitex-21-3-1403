<script setup>
const tabIndex = ref(0)

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
  <div class="w-full flex flex-col dashboard-card pt-[0.625rem] pb-[0.875rem]">
    <div class="flex items-center gap-[2rem] px-[2rem]">
      <span class="text-white text-[16px]">نمودار روند دارایی</span>
      <UiButtonTabButton class="flex-1" :list="data" v-model="tabIndex"></UiButtonTabButton>
    </div>

    <div class="w-full h-auto flex justify-center items-center mt-[0.5rem]">
      <UiChartAssets v-if="tabIndex == 0" :day="7"></UiChartAssets>
      <UiChartAssets v-if="tabIndex == 1" :day="30"></UiChartAssets>
      <UiChartAssets v-if="tabIndex == 2" :day="90"></UiChartAssets>
    </div>

  </div>
</template>

<style scoped></style>