<template>
  <div class="pb-[100px]">
    <div class="w-full text-[#fff] z-[100] relative select-none">
      <div class="w-full flex flex-col bg-[#0E0E0E] rounded-2xl pt-[0.625rem] pb-[0.875rem] z-10">
        <div class="flex items-center justify-between px-5 gap-[2rem]">
          <span class="text-white text-sm leading-[1.25rem]">نمودار روند دارایی</span>
          <UiDropDownSimple :list="data" v-model="tabIndex"></UiDropDownSimple>
        </div>

        <div class="w-full h-auto flex justify-center items-center mt-[0.1rem]">
          <UiChartAssetsMob v-if="tabIndex == 0" :day="7"></UiChartAssetsMob>
          <UiChartAssetsMob v-if="tabIndex == 1" :day="30"></UiChartAssetsMob>
          <UiChartAssetsMob v-if="tabIndex == 2" :day="90"></UiChartAssetsMob>
        </div>

      </div>

      <DashboardAssetDispersionMob class="mt-3"></DashboardAssetDispersionMob>


      <div class="w-full flex flex-col bg-[#0E0E0E] rounded-2xl pt-[0.625rem] mt-3 pb-[0.875rem] z-10">
        <div class="flex items-center justify-between px-5 gap-[2rem]">
          <span class="text-white text-sm leading-[1.25rem]">نمودار سود و زیان</span>
          <UiDropDownSimple :list="data"></UiDropDownSimple>
        </div>
        <div class="w-full h-auto flex justify-center items-center mt-[0.1rem]">
          <UiChartProfitLossChartMob :day="15"></UiChartProfitLossChartMob>
        </div>

      </div>

      <div class="w-full h-[173px] bg-[#171717] mt-3 z-10 relative rounded-2xl py-5 px-6">
        <div class="flex items-center gap-3">
          <p class="text-[#676767] text-[16px] font-bold leading-[29px]">موجودی کل :</p>


          <IconsWalletAssetsRefresh></IconsWalletAssetsRefresh>
          <IconsWalletAssetsEye></IconsWalletAssetsEye>

        </div>
        <div class="flex items-center justify-between gap-3 pt-4">
          <UiDropDownSimple :list="dashboardStor.currencyList" v-model="dashboardStor.currencyIndex">
          </UiDropDownSimple>
          <p dir="ltr" class="text-[22px]">۴۵۷ ، ۹۶۰ ، ۰۰۰</p>
        </div>

        <div class="flex justify-center items-center gap-3 pt-7">
          <p class="text-[#FF7028] font-bold text-[14px] leading-[26px]">تاریخچه تراکنش‌ها</p>
          <IconsDashboardArrowRightMob></IconsDashboardArrowRightMob>
        </div>
      </div>
      <WalletPortfolioCollaps class="z-[1] relative"></WalletPortfolioCollaps>
    </div>
  </div>


</template>


<script setup>
const tabIndex = ref(0)
import { useDashboardPageStore } from "~/stores/dashboard-page"
const dashboardStor = useDashboardPageStore();

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
<style lang="">

  </style>