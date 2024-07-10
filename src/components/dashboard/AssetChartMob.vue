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
  <div class="w-full flex flex-col dashboard-card pt-[0.625rem] pb-[0.875rem] z-10">
    <div class="flex items-center justify-between  px-[0.5rem] gap-[2rem]">
      <span class="text-white text-[16px] leading-[1.25rem]">نمودار روند دارایی</span>
      <UiDropDownSimple class="min-w-[120px]" :list="data" v-model="tabIndex"></UiDropDownSimple>
    </div>

    <div class="w-full h-auto flex justify-center items-center mt-[1rem]">
      <UiChartAssetsMob v-if="tabIndex == 0" :day="7"></UiChartAssetsMob>
      <UiChartAssetsMob v-if="tabIndex == 1" :day="30"></UiChartAssetsMob>
      <UiChartAssetsMob v-if="tabIndex == 2" :day="90"></UiChartAssetsMob>
      
    </div>

  </div>
</template>

<style scoped></style>