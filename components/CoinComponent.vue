<template>
  <div
    class="h-full w-[19.5625rem] flex items-center justify-center border-r border-gray-300 px-2 gap-2"
  >
    <div class="h-7 w-7 flex items-center justify-center">
      <img
        src="/assets/images/bitcoin-btc-logo-1.png"
        alt="coin"
        class="w-full h-full"
      />
    </div>
    <span class="text-base text-white font-medium">{{ item.name }}</span>
    <span class="text-base text-white font-medium">{{ item.price }}</span>
    <span class="text-base text-[#5CBC76] font-medium"
      >({{ item.change }} +)</span
    >
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  item: { icon: string; name: string; price: number; change: number }}>();
</script>
