<template>
  <div class="bg-transparent xl:bg-[#171717]  w-full mt-[8.125rem] pt-9 pb-6 ">
    <h2 class="hidden xl:block text-[36px] font-normal text-white text-center ">کپی تریدینگ: “به اشتراک گذاشتن
      ایده‌ها، رسیدن به موفقیت"</h2>
    <div class="flex flex-row py-[1.5rem] 2xl:py-[3.75rem] mx-auto copy-trad-swiper">
      <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 160,
        modifier: 1,
        slideShadows: true,
      }" :pagination="true" :modules="modules" class="mySwiper">
        <swiper-slide>
          <HomeCopyTradingItem></HomeCopyTradingItem>
        </swiper-slide>
        <swiper-slide>
          <HomeCopyTradingItem></HomeCopyTradingItem>
        </swiper-slide>
        <swiper-slide>
          <HomeCopyTradingItem></HomeCopyTradingItem>
        </swiper-slide>
        <swiper-slide>
          <HomeCopyTradingItem></HomeCopyTradingItem>
        </swiper-slide>
        <swiper-slide>
          <HomeCopyTradingItem></HomeCopyTradingItem>
        </swiper-slide>
        <swiper-slide>
          <HomeCopyTradingItem></HomeCopyTradingItem>
        </swiper-slide>
        <swiper-slide>
          <HomeCopyTradingItem></HomeCopyTradingItem>
        </swiper-slide>

      </swiper>
    </div>
    <div class="flex justify-center items-center flex-col px-9 gap-3">
      <h2 class="text-base font-normal text-white text-center xl:hidden">کپی تریدینگ: “به اشتراک گذاشتن ایده‌ها،
        رسیدن به موفقیت"</h2>
      <button
        class="w-20 xl:w-[11.438rem] h-8 xl:h-[3.938rem] bg-[#8C8C8C] rounded-full text-black text-[11px] xl:text-[22px]">بیشتر</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, EffectCoverflow } from 'swiper/modules';


// import required modules

const modules = [FreeMode, EffectCoverflow];

</script>

<style>
.copy-trad-swiper .swiper-3d .swiper-slide-shadow-right {
  background: rgba(0, 0, 0, 0.5) !important;
}

.copy-trad-swiper .swiper-3d .swiper-slide-shadow-left {
  background: rgba(0, 0, 0, 0.5) !important;
}

.copy-trad-swiper .swiper-slide-active {
  /* border: 1px solid red; */
  filter: blur(0px) !important;
  box-shadow: 0px -25px 20px -20px rgba(0, 0, 0, 0.45), 25px 0 20px -20px rgba(0, 0, 0, 0.45), 0px 25px 20px -20px rgba(0, 0, 0, 0.45), -25px 0 20px -20px rgba(0, 0, 0, 0.45);
}

.copy-trad-swiper .swiper-slide {
  filter: blur(4px);
  border-radius: 30px;
  overflow: hidden;
}

</style>