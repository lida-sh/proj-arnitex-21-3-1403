<script setup>

</script>

<template>
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


  <section class="lg:h-[38.75rem] relative lg:w-[95rem]  mx-auto lg:px-[6.25rem]">

    <div class="flex flex-col lg:rounded-[30px] bg-opacity-50 bg-[#171717] relative z-10">
      <div
        class="flex flex-col lg:flex-row  lg:px-[4.063rem]  pt-[2.5rem] lg:pt-[3.125rem] h-full gap-[3.375rem] pb-[#3.313]">
        <div
          class="flex-1 bg-gradient-to-b lg:bg-transparent lg:hover:bg-gradient-to-b from-[#262626] lg:from-0% lg:hover:from-[#262626] to-[#171717] lg:to-0% lg:hover:to-[#171717] rounded-2xl shadow-[0.25px_-2px_2px_rgba(103,103,103,100)] lg:shadow-none lg:hover:shadow-[0.25px_-2px_2px_rgba(103,103,103,100)] hover:-translate-y-5 transition-all duration-3000">
          <service-plus title="خرید و فروش آسان" description="خرید و فروش بیش از 130 توکن">
            <template #icon>
              <img src="~/assets/images/خرید و فروش آنی.png" alt="wage" />
            </template>
          </service-plus>
        </div>
        <div
          class="flex-1 bg-gradient-to-b lg:bg-transparent lg:hover:bg-gradient-to-b from-[#262626] lg:from-0% lg:hover:from-[#262626] to-[#171717] lg:to-0% lg:hover:to-[#171717] rounded-2xl shadow-[0.25px_-2px_2px_rgba(103,103,103,100)] lg:shadow-none lg:hover:shadow-[0.25px_-2px_2px_rgba(103,103,103,100)] hover:-translate-y-5 transition-all duration-3000">
          <service-plus title="معامله تعهدی" description="باز کردن موقعیت لانگ و شورت">
            <template #icon>
              <img src="~/assets/images/معامله تعهدی.png" alt="wage" />
            </template>
          </service-plus>
        </div>
        <div
          class="flex-1 bg-gradient-to-b lg:bg-transparent lg:hover:bg-gradient-to-b from-[#262626] lg:from-0% lg:hover:from-[#262626] to-[#171717] lg:to-0% lg:hover:to-[#171717] rounded-2xl shadow-[0.25px_-2px_2px_rgba(103,103,103,100)] lg:shadow-none lg:hover:shadow-[0.25px_-2px_2px_rgba(103,103,103,100)] hover:-translate-y-5 transition-all duration-3000">
          <service-plus title="معامله پیشرفته" description="کپی برداری از استراتژی تریدرهای حرفه ای">
            <template #icon>
              <img src="~/assets/images/کپی تریدینگ.png" alt="wage" />
            </template>
          </service-plus>
        </div>
        <div
          class="flex-1 bg-gradient-to-b lg:bg-transparent lg:hover:bg-gradient-to-b from-[#262626] lg:from-0% lg:hover:from-[#262626] to-[#171717] lg:to-0% lg:hover:to-[#171717] rounded-2xl shadow-[0.25px_-2px_2px_rgba(103,103,103,100)] lg:shadow-none lg:hover:shadow-[0.25px_-2px_2px_rgba(103,103,103,100)] hover:-translate-y-5 transition-all duration-3000">
          <service-plus title="معامله ساده" description="سفارش گذاری با قیمت ثابت . حد و ضرر و...">
            <template #icon>
              <img src="~/assets/images/معامله اسپات.png" alt="wage" />
            </template>
          </service-plus>
        </div>
      </div>

      <div class="w-full h-[3.75rem] flex items-center justify-center lg:px-[10.75rem] py-[5.563rem] gap-20">
        <div class="hidden lg:block lg:w-[25.5rem] lg:h-0.5 bg-[#FF7028]"></div>
        <div class="relative">
          <button class="bg-[#FF7028] w-[13.5rem] h-14 text-white rounded-md z-20 relative">
            شروع معامله
          </button>
        </div>
        <div class="hidden lg:block lg:w-[25.5rem] lg:h-0.5 bg-[#FF7028]"></div>
      </div>
    </div>
    <div class="absolute h-96 w-96 -translate-x-1/2 z-[1] translate-y-1/2 left-1/2 bottom-20 pointer-events-none">
      <UiPulsShadow></UiPulsShadow>
    </div>
  </section>

</template>

<style scoped></style>
