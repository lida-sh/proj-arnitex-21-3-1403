<template>
  <div class="h-[2.75rem] flex w-screen bg-[#303030] py-2 justify-center">
    <!-- <NuxtMarquee :autoFill="true" :pauseOnHover="true" :pauseOnClick="true" :speed="70">
      <template v-for="(item, index) in items" :key="index">
        <coin-component  :item="item"></coin-component>
      </template>
    </NuxtMarquee> -->
    <!-- <NuxtMarquee :auto-fill="true" :pause-on-hover="true" :pause-on-click="true" :speed="20">
      <template v-for="(item, index) in items" :key="index">
        <coin-component :item="item"></coin-component>
      </template>
    </NuxtMarquee>-->
    <!-- <Vue3Marquee :pauseOnHover="true" direction="normal" :clone="true" :duration="20" :loop="0" class="w-full">
      <template v-for="(item, index) in items" :key="index">
        <coin-component  :item="item"></coin-component>
      </template>
    </Vue3Marquee> -->
    <Vue3Marquee
      :pauseOnHover="true"
      direction="reverse"
      :clone="true"
      :duration="7"
    >
      
        <div
          class="h-full w-[18.5625rem] flex items-center justify-center border-r border-gray-300 px-2 gap-2"
        >
          <div class="h-7 w-7 flex items-center justify-center">
            <img
              src="/assets/images/bitcoin-btc-logo-1.png"
              alt="coin"
              class="w-full h-full"
            />
          </div>
          <span class="text-base text-white font-normal">بیت کوین</span>
          <span class="text-sm text-white font-normal">3709047400</span>
          <span class="text-sm text-[#5CBC76] font-normal">(0.5 +)</span>
        </div>
      
    </Vue3Marquee>
    <!-- <Vue3Marquee :clone="true">
        <span>lida shafiei</span>
        <span>lida shafiei</span>
        <span>lida shafiei</span>
        <span>lida shafiei</span>
      </Vue3Marquee> -->
    <!-- <infinite-slide-bar :barStyle="{ background: '#42b883', padding: '5px 0' }">
      <span style="color: #fff">Helo World, I love Vue Infinite Slide Bar</span>
    </infinite-slide-bar> -->
  </div>
</template>
<script setup lang="ts">
// import InfiniteSlideBar from "vue-infinite-slide-bar";
interface Prop {
  items: { icon: string; name: string; price: number; change: number }[];
}
const props = defineProps<Prop>();
const clone: boolean = true;
</script>
