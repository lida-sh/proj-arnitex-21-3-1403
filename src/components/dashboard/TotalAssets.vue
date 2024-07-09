<template>
  <div class="flex-1 dashboard-card ">
    <div class="w-full h-[168px] flex py-5 px-6 text-[#fff] z-[100] relative">
      <div class="flex-1 py-5 px-8  border-l border-gray-600">
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
          <UiDropDownSimple></UiDropDownSimple>
        </div>
      </div>
      <div class="flex-1 py-5 px-8  border-l border-gray-600">
        <div class="flex justify-between text-white">
          <div class="flex items-center">
            <p class="text-[16px] font-bold leading-[29px]">سود و زیان ۲۴ ساعت گذشته:</p>
          </div>
        </div>
        <div class="flex justify-between text-white py-6">
          <div class="flex items-center">
            <p dir="ltr" class="text-[22px] text-[#5CBC76] leading-[37px] font-semibold"> + ۵۶ ، ۳۲۶ ، ۰۰۰</p>
          </div>
          <div class="flex gap-3 items-center">
            <p class="text-[#fff] text-[14px] leading-[26px] font-bold"> تومان</p>
            <IconsDashboardArrowDownMob></IconsDashboardArrowDownMob>
          </div>
        </div>
      </div>
      <div class="flex-1 px-8 flex flex-col items-center justify-center gap-3">
        <div class="h-[63px] bgB w-full max-w-[15rem] rounded-[16px] flex justify-center items-center gap-10">
          <IconsDashboardWallet></IconsDashboardWallet>
          <span class="text-[22px] leading-[37px] font-bold">واریز</span>
        </div>
        <div class="h-[63px] bgB rounded-[16px] w-full max-w-[15rem] flex justify-center items-center gap-10">
          <IconsDashboardWalletHarvest></IconsDashboardWalletHarvest>
          <span class="text-[22px] leading-[37px] font-bold"> برداشت</span>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
</script>

<style>
.bg {
  background: linear-gradient(180deg, #171717 0%, #262626 100%);
}

.bgB {
  background: #343434;
}
</style>