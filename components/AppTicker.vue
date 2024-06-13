<template>
  <div class="h-[2.75rem] flex w-[100vw] bg-[#303030] py-2 overflow-hidden">
    <NuxtMarquee :autoFill="true" :pauseOnHover="true" :pauseOnClick="true" :play="false">
      <template v-for="(item, index) in items" :key="index">
        <coin-component  :item="item"></coin-component>
      </template>
    </NuxtMarquee>
    <!-- <NuxtMarquee :auto-fill="true" :pause-on-hover="true" :pause-on-click="true" :speed="20">
      <template v-for="(item, index) in items" :key="index">
        <coin-component :item="item"></coin-component>
      </template>
    </NuxtMarquee> -->
    <!-- <Vue3Marquee :pauseOnHover="true" direction="normal" :clone="clone" :duration="10">
      <template v-for="(item, index) in items" :key="index">
        <coin-component  :item="item"></coin-component>
      </template>
      
    </Vue3Marquee> -->
  </div>
</template>
<script setup lang="ts">
interface Prop {
  items: { icon: string; name: string; price: number; change: number }[];
}
const props = defineProps<Prop>();
const clone:boolean = true
</script>
