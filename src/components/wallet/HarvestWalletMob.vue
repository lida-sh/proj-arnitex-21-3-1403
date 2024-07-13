<template>
  <div class="flex-1 pb-[100px] ">
    <div class="w-full text-[#fff] z-[100] relative">
      <div class="w-full">
        <!-- <div class=" pb-3 flex justify-center items-center">
          <div class="">
            <UiButtonTabButtonDashboard class="flex-1" :list="data" v-model="TabIndex">
            </UiButtonTabButtonDashboard>
          </div>
        </div> -->
        <p class="text-[16px] font-normal leading-[28px] pt-3 pb-3">مبلغ واریزی (تومان)</p>
        <input type="text"
          class="w-full bg-black border-[#676767] border-[1px] rounded-[8px] h-[40px] z-50 placeholder-[#676767] text-[11px] focus:border-white focus:ring-0"
          placeholder="مبلغ را وارد کنید (حداقل مبلغ ۵۰،۰۰۰ تومان است)">

        <div class="bg-[#171717] h-[40px] rounded-[8px] relative bottom-5 -z-10 px-4">
          <p class="text-[#676767] text-[9px] top-6 relative">موجودی قابل برداشت :۱۰.۰۰۰.۰۰۰ میلیون تومان</p>
        </div>

        <div class="flex justify-between py-5 text-[11px] font-normal">
          <p>میزان برداشت نهایی</p>
          <p>۰ تومان</p>
        </div>
        <div class="flex justify-between pt-5 pb-10 text-[11px] font-normal">
          <p> کارمزد</p>
          <p>۰ تومان</p>
        </div>

        <div class="flex justify-between pt-3 pb-5 text-[11px] font-normal">
          <p> شماره شبا</p>
          <div
            class="px-[26px] py-[6px] flex cursor-pointer justify-center items-center gap-3 bg-[#171717] rounded-[8px] border-[#FF7028] border">
            <IconsDashboardPlus></IconsDashboardPlus>
            <p class="text-[#FF7028]">شبا</p>
          </div>
        </div>

        <div class="h-[48px] bg-[#171717] rounded-[16px] p-5 flex justify-between">
          <div class="px-2 flex items-center gap-3">
            <IconsDashboardOptions></IconsDashboardOptions>
            <div class="bg-[#868686] w-[43px] h-[43px] rounded-2xl">
            </div>
            <p class=" text-[11px] leading-[16px] font-normal">۶۰۳۷ - ۶۹۷۵ -
              ۵۲۹۷ - ۶۸۴۴</p>
          </div>
          <div class="rounded-lg flex items-center justify-center gap-3">
            <p class="text-[11px]">تغییر کارت</p>
            <IconsDashboardArrowDown></IconsDashboardArrowDown>
          </div>
        </div>
        <div class="bg-[#FF7028] mt-8 h-[40px] rounded-[16px] flex items-center justify-center cursor-pointer">
          <p class="text-[16px] font-medium leading-[24px]">درخواست برداشت وجه</p>
        </div>

      </div>
    </div>
  </div>
</template>
<style lang="">

</style>