<script setup>
import { useDashboardPageStore } from "~/stores/dashboard-page"
const dashboardStor = useDashboardPageStore();
</script>
<template>
  <div class="dashboard-card-mob w-full relative z-[200] pt-2 pb-4 px-4">
    <div class="flex justify-between text-white pb-3">
      <div class="flex items-center">
        <p class="text-[14px] font-bold leading-[26px]">دارایی کل:</p>
      </div>
      <div class="flex gap-[0.625rem] items-center p-[0.625rem]">
        <p class="text-[#FF7028] text-[12px] leading-[22px]">تاریخچه تراکنش‌ها</p>
        <IconsDashboardArrowRightMob></IconsDashboardArrowRightMob>
      </div>
    </div>
    <div class=" px-3">
      <div class="flex justify-between border-b border-[#5e5e5e] text-white px-5 py-4">
        <div class="flex items-center">
          <p dir="ltr" class="text-[22px] leading-[24px]">۴۵۷ ، ۹۶۰ ، ۰۰۰</p>
        </div>
        <div class="flex gap-[0.625rem] items-center">
          <UiDropDownSimple :list="dashboardStor.currencyList" v-model="dashboardStor.currencyIndex">
          </UiDropDownSimple>
        </div>
      </div>
    </div>
    <div class="flex justify-between text-white pt-3">
      <div class="flex items-center">
        <p class="text-[14px] font-bold leading-[26px]"> سود و زیان ۲۴ ساعت گذشته:</p>
      </div>
      <div class="flex gap-2 items-center p-[0.625rem]">
        <p class="text-[#FF7028] text-[12px] leading-[22px]">نمودار سود و زیان</p>
        <IconsDashboardArrowRightMob></IconsDashboardArrowRightMob>
      </div>
    </div>
    <div class="flex justify-between text-white px-8 py-2">
      <div class="flex items-center">
        <p dir="ltr" class="text-[22px] leading-[2.313rem] text-[#5CBC76]"> +۱.۰۰۰.۰۰۰</p>
      </div>
    </div>
  </div>
</template>
