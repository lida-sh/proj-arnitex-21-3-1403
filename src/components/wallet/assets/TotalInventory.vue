<script setup>
import { useAssetsPageStore } from "~/stores/assets-page"

let timer = ref(null);
let isRefreshing = ref(false);

const refresh = () => {
  console.log("refresh");
  if (timer.value) {
    clearTimeout(timer.value);
  }
  isRefreshing.value = true;
  timer.value = setTimeout(() => {
    console.log("refresh00");
    isRefreshing.value = false;
  }, 2000);
}

const assetsStore = useAssetsPageStore();
const depositModal = ref(false)




</script>

<template>
  <div class="bg-[#0E0E0E] rounded-3xl py-5 px-[1.875rem]">
    <div>
      <button @click="refresh" class="bg-[#545454] px-2 py-[0.375rem] rounded-lg">
        <IconsWalletAssetsRefresh :class="{ 'animate-spin': isRefreshing }"></IconsWalletAssetsRefresh>
      </button>
    </div>

    <div class="mt-[1.5rem]">

      <div class="flex items-center justify-between">
        <span class="text-[1rem] text-white font-normal">موجودی کل</span>
        <NuxtLink to="#" class="flex gap-2 items-center">
          <p class="text-[#FF7028] text-[14px] leading-[26px] font-bold">تاریخچه تراکنش‌ها</p>
          <IconsDashboardArrowRightMob></IconsDashboardArrowRightMob>
        </NuxtLink>
      </div>

      <div class="flex mt-[1.5rem]">
        <UiDropDownSimple :list="assetsStore.currencyList" v-model="assetsStore.currencyIndex"></UiDropDownSimple>
        <div dir="ltr" class="flex-1 flex flex-col">
          <span class="text-white font-normal text-[1.6rem] leading-[140%]">۴۵۷ . ۹۶۰ . ۰۰۰.۰۰۰</span>
          <span class="text-[#5CBC76] text-[1rem] font-bold leading-[1.875rem] mt-2">
            + ۵۶
            <span class="text-[#676767]"> ، </span>
            ۳۲۶
            <span class="text-[#676767]"> ، </span>
            ۰۰۰
          </span>
        </div>
      </div>
    </div>

    <div class="text-white bg-[#1A1A1A] flex items-center justify-between rounded-xl mt-5 py-4 px-4">
      <div class="flex items-center gap-4">
        <span class="font-normal text-xs leading-6">پاداش :</span>
        <span class="font-bold text-lg leading-7">۵۸۰۰</span>
      </div>
      <div class="text-white flex items-center gap-4">
        <span class="font-semibold leading-7 text-lg mt-[2px]">
          (ADX)
        </span>
        <IconsWalletAssetsACoinLogo></IconsWalletAssetsACoinLogo>
      </div>
    </div>

    <div class="text-white flex mt-5 gap-3">
      <button @click="depositModal = true"
        class="bg-[#1A1A1A] flex-1 flex items-center justify-between rounded-xl py-3 px-5">
        <IconsWalletAssetsDeposit></IconsWalletAssetsDeposit>
        <span>واریز</span>
      </button>
      <button class="bg-[#1A1A1A] flex-1 flex items-center justify-between rounded-xl py-3 px-5">
        <IconsWalletAssetsHarvest></IconsWalletAssetsHarvest>
        <span>برداشت</span>
      </button>
    </div>


    <div>
      <SharedModalDeposit name="deposit" v-model:show-modal="depositModal">
        <p>This is a modal content</p>
      </SharedModalDeposit>
    </div>

  </div>
</template>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
