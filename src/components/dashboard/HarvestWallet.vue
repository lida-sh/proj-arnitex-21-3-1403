<script setup>
const TabIndex = ref(0)

const data = ref([
  {
    id: 1,
    title: "برداشت رمز ارز"
  }, {
    id: 2,
    title: "برداشت تومان"
  },
])
</script>
<template>
  <div class="flex-1 pb-[500px]">
    <div class="w-full text-[#fff] z-[100] relative">
      <div class="w-full">

        <div class=" pb-7 border-b border-[#343434]">
          <div class="bg-[#171717] rounded-2xl h-[62px] w-[405px]">
            <UiButtonTabButtonDashboard class="flex-1" :list="data" v-model="TabIndex"></UiButtonTabButtonDashboard>
          </div>
        </div>
        <p class="text-[16px] font-normal leading-[28px] pt-8 pb-3">مبلغ واریزی (تومان)</p>
        <input type="text"
          class="w-full bg-black border-[#676767] border-[1px] rounded-[16px] h-[62px] z-50 placeholder-[#676767] text-[16px]"
          placeholder="مبلغ را وارد کنید (حداقل مبلغ ۵۰،۰۰۰ تومان است)">

        <div class="bg-[#171717] h-[55px] rounded-[16px] relative bottom-6 -z-10 px-4">
          <p class="text-[#676767] text-[12px] top-8 relative">موجودی قابل برداشت :۱۰.۰۰۰.۰۰۰ میلیون تومان</p>

        </div>
        <div class="flex justify-between py-5 text-[16px] font-normal">
          <p>میزان برداشت نهایی</p>
          <p>۰ تومان</p>
        </div>
        <div class="flex justify-between pt-5 pb-10 text-[16px] font-normal">
          <p> کارمزد</p>
          <p>۰ تومان</p>
        </div>

        <div class="flex justify-between pt-5 pb-10 text-[16px] font-normal">
          <p> شماره شبا</p>
          <div
            class="px-[26px] py-[6px] flex cursor-pointer justify-center items-center gap-3 bg-[#171717] rounded-[8px] border-[#FF7028] border">
            <IconsDashboardPlus></IconsDashboardPlus>
            <p class="text-[#FF7028]">شبا</p>
          </div>
        </div>

        <div class="h-[86px] bg-[#171717] rounded-[16px] p-5 flex justify-between">
          <div class="px-6 flex items-center gap-5">
            <IconsDashboardOptions></IconsDashboardOptions>
            <div class="bg-[#868686] w-[43px] h-[43px] rounded-2xl">
            </div>
            <p class="text-[12px] leading-[23px] font-bold pl-9">بانک صادرات</p>
            <p class=" text-[16px] leading-[23px] font-normal border-l border-[#696969] pl-12">۶۰۳۷ - ۶۹۷۵ -
              ۵۲۹۷ - ۶۸۴۴</p>
          </div>
          <div class="w-[168px] h-[42px] rounded-lg bg-[#000] flex items-center justify-center gap-3">
            <p>تغییر کارت</p>
            <IconsDashboardArrowBig></IconsDashboardArrowBig>
          </div>
        </div>
        <div class="flex pt-8 pb-12 items-center gap-3">
          <span class="w-[10px] h-[10px] bg-[#FF7028] rounded-full"></span>
          <p class="text-[14px] font-medium leading-[20px] ">سقف برداشت ۲۴ ساعت ۱۰۰ میلیون تومان است.</p>
        </div>

        <div class="bg-[#FF7028] h-[56px] rounded-[16px] flex items-center justify-center cursor-pointer">
          <p class="text-[16px] font-medium leading-[24px]">درخواست برداشت وجه</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="">

</style>