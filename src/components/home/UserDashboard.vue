<script setup>

</script>

<template>
  <section dir="rtl"
    class="text-white flex flex-col mt-[2.75rem] lg:mt-[4.063rem] lg:flex-row px-0 c-container-sm-full gap-[7.5rem]">
    <div class="flex-[500]">
      <div class="flex flex-col">
        <h3 class="font-semibold text-[1.375rem] px-[1rem] lg:px-0 text-[#676767]">موجودی کل :</h3>
        <div class="flex items-center gap-[1.25rem] px-[1rem] lg:px-0 self-center mt-2 lg:self-end mb-[1.75rem]">
          <div dir="ltr"
            class="font-normal text-[2.25rem] leading-[4.688rem] lg:leading-[4.063rem] lg:text-[2.813rem] relative z-20">
            <span>۴۵۷</span>
            <span class="text-[#676767] px-2">،</span>
            <span>۹۶۰</span>
            <span class="text-[#676767] px-2">،</span>
            <span>۰۰۰</span>
          </div>
          <button class="flex items-center gap-2 relative cursor-pointer z-10">
            <span class="font-bold text-[1rem] leading-[1.375rem] text-[#FF7028] z-10 relative">
              تومان
            </span>
            <IconsHomeDashboardChange></IconsHomeDashboardChange>
            <!-- <div
              class="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[20rem] w-[20rem] pointer-events-none z-[1]">
              <UiPulsShadow></UiPulsShadow>
            </div> -->
          </button>
        </div>
        <div
          class="rounded-[unset] lg:rounded-lg bg-opacity-50 bg-[#262626] flex items-center justify-between px-[1.875rem] py-[1rem] mb-[1.5rem] lg:mb-[2.5rem]">
          <div class="flex items-center gap-5">
            <span class="font-normal text-[1rem] leading-[1.75rem]">پاداش :</span>
            <span class="font-semibold text-[1.375rem] leading-[2.313rem]">۵۸۰۰</span>
          </div>
          <div class="text-[#FF7028] flex items-center gap-[1.25rem]">
            <span class="text-[1.375rem] leading-[2.313rem] font-semibold">(ADX)</span>
            <IconsHomeDashboardCoinLogo></IconsHomeDashboardCoinLogo>
          </div>
        </div>
        <div class="flex flex-col lg:bg-[rgba(46, 46, 46, 0.21)] px-[1rem] lg:px-0">
          <div class="flex gap-[0.875rem] lg:gap-[1.5rem] justify-between mb-[0.875rem] lg:mb-[1.5rem]">
            <button
              class="bg-opacity-50 bg-[#262626] rounded-xl py-[1rem] lg:py-[1.375rem] flex-1 flex items-center justify-center gap-[1.875rem]">
              <IconsHomeDashboardCoinDeposit></IconsHomeDashboardCoinDeposit>
              <span
                class="text-[1rem] leading-[1.5rem] lg:text-[1.375rem] lg:leading-[2.313rem] font-semibold">واریز</span>
            </button>
            <button
              class="bg-opacity-50 bg-[#262626] rounded-xl py-[1rem] lg:py-[1.375rem] flex-1 flex items-center justify-center gap-[1.875rem]">
              <IconsHomeDashboardCoinWithdraw></IconsHomeDashboardCoinWithdraw>
              <span
                class="text-[1rem] leading-[1.5rem] lg:text-[1.375rem] lg:leading-[2.313rem] font-semibold">برداشت</span>
            </button>
          </div>
          <button
            class="bg-opacity-50 bg-[#262626] rounded-xl py-[1rem] lg:py-[1.375rem] flex-1 flex items-center justify-center gap-[1.875rem]">
            <IconsHomeDashboardCoinEasyBuying></IconsHomeDashboardCoinEasyBuying>
            <span class="text-[1rem] leading-[1.5rem] lg:text-[1.375rem] lg:leading-[2.313rem] font-semibold">خرید
              آسان</span>
          </button>
        </div>
      </div>
      <div></div>
    </div>
    <div class="flex-[700]">
      <ClientOnly>
        <HomeUserDashboardChart></HomeUserDashboardChart>
      </ClientOnly>
    </div>
  </section>
</template>

<style scoped></style>