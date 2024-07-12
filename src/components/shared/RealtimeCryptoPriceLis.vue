<script setup lang="ts">
import { toPersianString, formatNumber } from '~/utils/stringUtils'
import { useCoinWebSocketStore } from "~/stores/useCoinWebSocketStore"

const cryptoCurrency = ref("Tether");
const setActive = (button: string) => {
  cryptoCurrency.value = button;
};


const store = useCoinWebSocketStore()
onMounted(() => {
  store.connectWebSocket("wss://arnitex.ir/ws/crypto/table/10/")
})
const coins = computed(()=>{
  return store.coins
})

const isTether = computed(() => {
  return cryptoCurrency.value === 'Tether' ? true : false
})

const priceFormatter = (price: number) => {
  return toPersianString(`${formatNumber(price, 3)}`)
}
const change_24hFormatter = (price: number) => {
  return toPersianString(`${formatNumber(price, 3)}`)
}
const market_capFormatter = (price: number) => {
  return toPersianString(`${formatNumber(price, 3)}`)
}
</script>

<template>
  
  <div class="px-0 w-full  mx-auto mt-[1rem]">
    <div
      class="pb-10 bg-gradient-to-b from-[#171717] to-[#262626] rounded-none lg:rounded-[1.875rem] flex flex-col gap-[0.625rem] overflow-hidden">
      <div
        class="h-20 w-full bg-[#262626] grid grid-cols-2 lg:grid-cols-14 px-1 lg:px-9 opacity-50 text-xs xl:text-base font-bold text-white">
        <div class="col-span-1 lg:col-span-3 flex items-center justify-center">
          <span class="">نام ارز دیجیتال</span>
        </div>
        <div class="col-span-1 lg:col-span-2 flex items-center justify-center">
          <span class="">آخرین قیمت ({{ cryptoCurrency === 'Tether' ? `تتر` : 'تومان' }})</span>
        </div>
        <div class="hidden lg:col-span-2 lg:flex items-center justify-center">
          <span class="">تغییر ۲۴h</span>
        </div>
        <div class="hidden lg:flex  col-span-3 xl:col-span-2 items-center justify-center">
          <span class="">حجم معاملات ۲۴h</span>
        </div>
        <div class="hidden lg:flex lg:col-span-2 items-center justify-center">
          <span class="">نمودار هفتگی</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center"></div>
      </div>
      <template v-if="coins && coins.length > 0">
        <div v-for="item in coins" :key="item.coin_id"
          class="h-20 w-full bg-[#262626] grid grid-cols-2 lg:grid-cols-14 py-[0.938rem] px-2 lg:px-3 xl:pr-9 xl:px-7">
          <div
            class="col-span-1 lg:col-span-2 h-full flex items-center justify-start sm:justify-center xl:justify-start gap-4 lg:gap-1 xl:gap-6 2xl:gap-10">
            <div class="flex-1 flex justify-end items-center lg:justify-start">
              <img :src="item.logo" :alt="`${item.name} coin logo`" class="w-[3.125rem] h-[3.125rem]" />
            </div>
            <div class="flex items-start flex-col flex-1  lg:w-full justify-center gap-1">
              <p class="text-sm font-bold text-white block">{{ item.name }}</p>
              <p class="text-[#676767] text-xs font-bold">({{ item.symbol }})</p>
            </div>
          </div>
          <div
            class="col-span-1 lg:col-span-3 flex items-center justify-end sm:justify-center text-base text-white font-light gap-6 lg:pr-0">
            <span dir="ltr" class="text-base flex-1 price">
              {{
                cryptoCurrency === 'Tether' ?
                  priceFormatter(item.current_price) :
                  priceFormatter(item.sell_toman_price)
              }}
            </span>
            <span class="text-base flex-1 lg:flex-[unset] text-[#676767]">
              {{ cryptoCurrency === 'Tether' ? `USDT` : 'IRT' }}
            </span>
          </div>
          <div class="hidden lg:col-span-2 lg:flex items-center justify-center text-base font-light"
            :class="[item.change_24h > 0 ? 'text-green-500' : 'text-red-500']">
            <span dir="ltr" class="">{{ change_24hFormatter(item.change_24h) }} %</span>
          </div>
          <div
            class="hidden lg:flex col-span-3 xl:col-span-2 items-center justify-center text-base text-white font-light gap-3">
            <span dir="ltr" class="text-base">{{ market_capFormatter(item.market_cap) }}</span>
          </div>
          <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-green-600 font-light">
            <img src="~/assets/images/nemodar-1.png" alt="" class="" />
          </div>
          <div
            class="hidden lg:flex col-span-2 xl:col-span-3 items-center justify-center text-base text-white font-light px-2 xl:px-7">
            <button
              class="w-full h-11 bg-transparent border-[#676767] border rounded-lg hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000">
              خرید و فروش
            </button>
          </div>
        </div>
      </template>
    </div>

  </div>
  <div
    class="flex lg:hidden gap-1 text-base font-bold items-center justify-center text-[#FF7028] mx-auto mt-[4.375rem]">
    <h6 class="">مشاهده همه ی رمز ارز ها</h6>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="size-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  </div>
</template>

<style>
.active-button {
  background-color: #ff7028;
  color: black;
  border-radius: 40px;
}

.price {
  font-variant-numeric: tabular-nums;
}

.inactive-button {
  background-color: #262626;
  color: white;
}

.transition {
  transition: all 0.3s ease-in-out;
}
</style>
