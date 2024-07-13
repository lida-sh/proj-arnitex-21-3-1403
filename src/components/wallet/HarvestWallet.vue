<template>
  <div class="flex-1 pb-[100px]">
    <div class="w-full text-[#fff] z-[100] relative">
      <div class="w-full">
        <p class="text-[16px] font-normal leading-[28px] pt-3 pb-3">مبلغ واریزی (تومان)</p>
        <input type="text"
          class="w-full bg-black border-[#676767] border-[1px] rounded-[16px] h-[62px] z-50 placeholder-[#676767] text-[16px] focus:border-white focus:ring-0"
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
        <UiDropDownBankCart :options="bankOptions"></UiDropDownBankCart>

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

<script setup>
import { ref } from 'vue'
import img from '../../assets/images/nody-لوگوی-صادرات-1628414003 1.png'

const bankOptions = ref([
  {
    id: 1,
    cardNumber: '6037-6975-5327-5844',
    bankName: 'بانک صادرات',
    bankLogo: img,
  },
  {
    id: 2,
    cardNumber: '6037-6975-5327-5944',
    bankName: 'سش',
    bankLogo: img,
  },
  {
    id: 3,
    cardNumber: '6037-6975-5327-5555',
    bankName: 'سلام',
    bankLogo: img,
  },
])
</script>
<style scoped></style>