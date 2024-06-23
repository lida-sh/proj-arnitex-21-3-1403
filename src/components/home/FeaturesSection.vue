<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '~/assets/css/swp-style.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [FreeMode, Pagination],
    };
  },
};
</script>

<template>
  <!-- <div
    class="flex flex-row px-[6.25rem] py-[3.75rem] sm:py-20 gap-[3.75rem] sm:gap-[5.438rem] sm:w-[95rem] sm:h-[20.625rem] mx-auto">

<swiper :slidesPerView="1" :spaceBetween="10" :freeMode="true" :modules="modules" class="mySwiper" >
      <swiper-slide>
        <Service title="کارمزد 0%">
          <template #icon>
            <img src="~/assets/images/0.png" alt="wage" />
          </template>
</Service>
</swiper-slide>
<swiper-slide>
  <Service title="درآمد با دعوت دوستان">
    <template #icon>
            <img src="~/assets/images/Money.png" alt="wage" />
          </template>
  </Service>
</swiper-slide><swiper-slide>
  <Service title="بات معامله گر">
    <template #icon>
            <img src="~/assets/images/bot.png" alt="wage" />
          </template>
  </Service>
</swiper-slide>
<swiper-slide>
  <Service title="پشتیبانی 24 ساعته">
    <template #icon>
            <img src="~/assets/images/Support.png" alt="wage" />
          </template>
  </Service>
</swiper-slide>
</swiper>
  </div> -->
  <div
    class="flex flex-col sm:flex-row px-[6.25rem] py-[3.75rem] sm:py-20 gap-[3.75rem] sm:gap-[5.438rem] sm:w-[95rem] sm:h-[20.625rem] mx-auto">
    <div class="flex-1">
      <Service title="کارمزد 0%">
        <template #icon>
          <img src="~/assets/images/0.png" alt="wage" />
        </template>
      </Service>
    </div>
    <div class="flex-1">
      <Service title="درآمد با دعوت دوستان">
        <template #icon>
          <img src="~/assets/images/Money.png" alt="wage" />
        </template>
      </Service>
    </div>
    <div class="flex-1">
      <Service title="بات معامله گر">
        <template #icon>
          <img src="~/assets/images/bot.png" alt="wage" />
        </template>
      </Service>
    </div>
    <div class="flex-1">
      <Service title="پشتیبانی 24 ساعته">
        <template #icon>
          <img src="~/assets/images/Support.png" alt="wage" />
        </template>
      </Service>
    </div>
  </div>


  <section class="relative max-w-[82.5rem] mx-auto ">

    <div class="flex flex-col lg:rounded-[30px] bg-opacity-50 bg-[#171717] relative z-10">
      <div
        class="grid grid-cols-1 md:grid-cols-2 2xl:flex 2xl:flex-row px-[2.438rem] lg:px-[2.25rem] pt-[2.5rem] lg:pt-[3.125rem] h-full gap-[2.5rem] pb-[#3.313]">
        <div class="flex-1 feature-item-container">
          <div class="feature-item">
            <service-plus title="خرید و فروش آسان" description="خرید و فروش بیش از 130 توکن">
              <template #icon>
                <img src="~/assets/images/easy-buying-and-selling.svg" alt="خرید و فروش آسان" />
              </template>
            </service-plus>
          </div>
        </div>
        <div class="flex-1 feature-item-container">
          <div class="feature-item">
            <service-plus title="معامله تعهدی" description="باز کردن موقعیت لانگ و شورت">
              <template #icon>
                <img src="~/assets/images/accrual-transaction.svg" alt="wage" />
              </template>
            </service-plus>
          </div>
        </div>
        <div class="flex-1 feature-item-container">
          <div class="feature-item">
            <service-plus title="معامله پیشرفته" description="کپی برداری از استراتژی تریدرهای حرفه ای">
              <template #icon>
                <img src="~/assets/images/advanced-transaction.svg" alt="wage" />
              </template>
            </service-plus>
          </div>
        </div>
        <div class="flex-1 feature-item-container">
          <div class="feature-item">
            <service-plus title="معامله ساده" description="سفارش گذاری با قیمت ثابت . حد و ضرر و...">
              <template #icon>
                <img src="~/assets/images/simple-transaction.svg" alt="wage" />
              </template>
            </service-plus>
          </div>
        </div>
      </div>

      <div class="w-full h-[3.75rem] flex items-center justify-center lg:px-[10.75rem] py-[5.563rem] gap-20">
        <div class="relative">
          <button class="bg-[#FF7028] w-[13.5rem] h-14 text-white rounded-md z-20 relative">
            شروع معامله
          </button>
        </div>
      </div>
    </div>
    <div class="absolute h-96 w-96 -translate-x-1/2 z-[1] translate-y-1/2 left-1/2 bottom-20 pointer-events-none">
      <UiPulsShadow></UiPulsShadow>
    </div>
  </section>

</template>

<style scoped>
.feature-item {
  top: 0;
  position: relative;
  border-radius: 16px;
  box-sizing: content-box;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 0.5px;
  border-top-width: 2px;
  border-style: solid;
  border-color: transparent;
  transition: ease-in 0.15s;
  transition-property: top, box-shadow;
  max-width: 18.75rem;
  margin-left: auto;
  margin-right: auto;
  border-color: #676767;
  box-shadow: 0px 9px 20px 12px #00000029;
  background: linear-gradient(0deg, #171717 0%, #262626 100%);
}

@media screen and (min-width: 767px) {
  .feature-item {
    position: relative;
    border-radius: 16px;
    box-sizing: content-box;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 0.5px;
    border-top-width: 2px;
    border-color: transparent;
    top: 0;
    transition: ease-in 0.15s;
    transition-property: top, box-shadow;
    max-width: 18.75rem;
    background: unset;
  }

  .feature-item-container:hover .feature-item {
    background: linear-gradient(0deg, #171717 0%, #262626 100%);
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 0;
    border-top-width: 2px;
    border-color: #676767;
    box-shadow: 0px 9px 20px 12px #00000029;
    top: -20px;
  }
}

.swiper-container {
        width: 100%;
        height: 100%;
      }

      .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
</style>
