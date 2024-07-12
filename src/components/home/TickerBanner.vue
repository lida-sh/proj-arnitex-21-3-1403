<script setup lang="ts">
import { useCoinWebSocketStore } from "~/stores/useCoinWebSocketStore"

const store = useCoinWebSocketStore()
onMounted(() => {
  store.connectWebSocket("wss://arnitex.ir/ws/crypto/table/10/")
})
const coinsList = computed(() => {
  return store.coins;
})
const priceFormatter = (price: number) => {
  return toPersianString(`${formatNumber(price, 3)}`)
}
const change_24hFormatter = (price: number) => {
  return toPersianString(`${formatNumber(price, 3)}`)
}
</script>

<template>
  <section class="z-50 relative xl:fixed bottom-0 overflow-x-hidden w-full left-0 right-0 min-h-[2.75rem] bg-[#303030] py-2" v-if="coinsList && coinsList.length">
    <NuxtMarquee class="justify-end flex w-screen" direction="right" :speed="30"
      :autoFill="true" :pauseOnHover="true">
      <div v-for="item in coinsList" :key="item.coin_id" dir="rtl"
        class="h-full flex items-center justify-center border-r border-gray-300 px-6 gap-2">
        <div class="h-7 w-7 flex items-center justify-center">
          <img :src="item.logo" alt="coin" class="w-full rounded-full h-full" />
        </div>
        <span class="text-base text-white font-normal" dir="rtl">
          {{ item.name }}
        </span>
        <span class="text-sm text-white font-normal price">{{ priceFormatter(item.current_price) }}</span>
        <span dir="ltr" :class="[item.change_24h > 0 ? 'text-[#5CBC76]' : 'text-red-500']" class="text-sm text-[#5CBC76] font-normal">({{ change_24hFormatter(item.change_24h) }})</span>
      </div>
    </NuxtMarquee>
  </section>
</template>

<style scoped>
.price {
  font-variant-numeric: tabular-nums;
}
</style>