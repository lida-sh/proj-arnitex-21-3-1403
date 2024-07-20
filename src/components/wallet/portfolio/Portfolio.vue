<template>
  <div class="flex-1 pb-[100px]">
    <div class="w-full text-[#fff] z-[100] relative">
      <div class="w-full flex gap-8 flex-row select-none">

        <div class="basis-3/4 pt-3">
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
          <div class="pt-4">
            <DashboardAssetDispersion> </DashboardAssetDispersion>
          </div>
          <div class="w-full mt-3 flex flex-col dashboard-card pt-[0.625rem] pb-[0.875rem]">
            <div class="flex items-center gap-[2rem] px-[2rem]">
              <span class="text-white text-[16px]"> نمودار سود و زیان</span>
              <UiButtonTabButton class="flex-1" :list="data" v-model="tabIndex"></UiButtonTabButton>
            </div>

            <div class="w-full h-auto flex justify-center items-center mt-[0.5rem]">
              <UiChartProfitLossChart :day="30"></UiChartProfitLossChart>
            </div>
          </div>

        </div>

        <div class="basis-1/4  ">
          <div class="w-full h-[173px] bg-[#171717] z-10 relative rounded-2xl py-5 px-6">
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