<script setup>
import { useDashboardPageStore } from "~/stores/dashboard-page"
const dashboardStor = useDashboardPageStore();
</script>

<template>
  <div class="flex-1 dashboard-card ">
    <div class="w-full h-[168px] flex py-5 px-6 text-[#fff] z-[100] relative">
      <div class="flex-1 py-5 px-8">
        <div class="flex justify-between text-white">
          <div class="flex items-center">
            <p class="text-[16px] font-bold leading-[29px]">دارایی کل:</p>
          </div>
          <div class="flex gap-2 items-center">
            <p class="text-[#FF7028] text-[12px] leading-[22px]">تاریخچه تراکنش‌ها</p>
            <IconsDashboardArrowRightMob></IconsDashboardArrowRightMob>
          </div>
        </div>
        <div class="flex justify-between text-white py-6">
          <div class="flex items-center">
            <p dir="ltr" class="text-[22px] leading-[24px]">۴۵۷ ، ۹۶۰ ، ۰۰۰</p>
          </div>
          <UiDropDownSimple :list="dashboardStor.currencyList" v-model="dashboardStor.currencyIndex"></UiDropDownSimple>
        </div>
      </div>
      <span class="boarder-g"></span>

      <div class="flex-1 py-5 px-8">
        <div class="flex justify-between text-white">
          <div class="flex items-center">
            <p class="text-[16px] font-bold leading-[29px]">سود و زیان ۲۴ ساعت گذشته:</p>
          </div>
        </div>
        <div class="flex justify-between text-white py-6">
          <div class="flex items-center">
            <p dir="ltr" class="text-[22px] text-[#5CBC76] leading-[37px] font-semibold"> + ۵۶ ، ۳۲۶ ، ۰۰۰</p>
          </div>
        </div>
      </div>
      <span class="boarder-g"></span>
      <div class="flex-1 px-8 flex flex-col items-center justify-center gap-3">

        <button class="h-[63px] bgB w-full max-w-[15rem] rounded-[16px] flex justify-center items-center ">
          <div class="flex items-center justify-between gap-4 min-w-[8rem]">
            <IconsDashboardWallet></IconsDashboardWallet>
            <span class="text-[22px] leading-[37px] font-bold pl-[27px]">واریز</span>
          </div>
        </button>

        <button class="h-[63px] bgB rounded-[16px] w-full max-w-[15rem] flex justify-center items-center">
          <div class="flex items-center justify-between min-w-[8rem]">

            <IconsDashboardWalletHarvest></IconsDashboardWalletHarvest>
            <span class="text-[22px] leading-[37px] font-bold"> برداشت</span>
          </div>
        </button>

      </div>
    </div>
  </div>

</template>

<style>
.bg {
  background: linear-gradient(180deg, #171717 0%, #262626 100%);
}

.bgB {
  background: #343434;
}

.boarder-g {
  width: 1px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 112, 40, 0.00) 121.28%);
}
</style>