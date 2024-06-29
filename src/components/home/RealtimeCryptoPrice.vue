<script setup></script>

<template>
  <div
    class="flex flex-col lg:flex-row items-center justify-center mt-[6.563rem] lg:mb-10 max-w-[95rem] lg:px-[6.25rem] lg:mx-auto  lg:gap-20 xl:gap-60 2xl:gap-[21rem] mb-5">
    <h2 class="flex lg:hidden text-[1.75rem] text-white font-medium mx-auto mb-10">نمودار قیمت لحظه ای</h2>
    <div
      class=" h-[3.1rem] lg:h-[2.525rem] bg-[#262626] flex items-center justify-center py-[0.45rem]  px-[0.6rem] lg:px-2 rounded-[40px] mx-auto lg:mx-0">
      <div class="flex-1 cursor-pointer transition"
        :class="{ 'active-button': Cryptocurrency === 'Toman', 'inactive-button': Cryptocurrency !== 'Toman' }"
        @click="setActive('Toman')">
        <div class="w-[10.25rem] lg:w-[5.125rem] h-[2.25rem] lg:h-full flex items-center justify-center">تومان</div>
      </div>

      <div class="flex-1 cursor-pointer transition"
        :class="{ 'active-button': Cryptocurrency === 'Tether', 'inactive-button': Cryptocurrency !== 'Tether' }"
        @click="setActive('Tether')">
        <div class="flex items-center justify-center">
          <div
            class="w-[10.25rem] lg:w-[5.125rem] h-[2.25rem] lg:h-full rounded-[40px] flex items-center justify-center">
            تتر
          </div>
        </div>
      </div>
    </div>

    <h2 class="hidden lg:flex text-[28px] text-white font-medium">نمودار قیمت لحظه ای</h2>
    <div class="hidden lg:flex gap-1 text-base font-bold text-[#FF7028]">
      <h6 class="">مشاهده همه ی رمز ارز ها</h6>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </div>
  </div>
  <!-- ///// -->
  <!-- نمودار لحظه ای -->
  <div class="px-0 lg:px-[6.25rem] w-full max-w-[95rem] mx-auto mt-[2.5rem]">
    <div v-if="Cryptocurrency == 'Tether'"
      class="h-[41.125rem] bg-gradient-to-b from-[#171717] to-[#262626] rounded-none lg:rounded-[1.875rem] flex flex-col gap-[0.625rem] overflow-hidden">
      <div class="h-20 w-full bg-[#262626] grid grid-cols-2 lg:grid-cols-14 px-1 lg:px-9 opacity-50 text-xs xl:text-base font-bold  text-white">
        <div class="col-span-1 lg:col-span-3 flex items-center justify-center">
          <span class="">نام ارز دیجیتال</span>
        </div>
        <div class="col-span-1 lg:col-span-2 flex items-center justify-center ">
          <span class="">آخرین قیمت ( تتر)</span>
        </div>
        <div class="hidden lg:col-span-2 lg:flex items-center justify-center">
          <span class="">تغییر ۲۴h</span>
        </div>
        <div class="hidden lg:flex lg:col-span-2 items-center justify-center">
          <span class="">حجم معاملات ۲۴h</span>
        </div>
        <div class="hidden lg:flex lg:col-span-2 items-center justify-center">
          <span class="">نمودار هفتگی</span>
        </div>
        <div class="hidden lg:flex col-span-3 items-center justify-center"></div>
      </div>
      
      <div class="h-20 w-full bg-[#262626] grid grid-cols-2 lg:grid-cols-14 py-[0.938rem] px-8 md:px-6 lg:pr-9">
        <div class="col-span-1 lg:col-span-2 h-full flex items-center justify-start sm:justify-center xl:justify-start gap-4 lg:gap-1 xl:gap-6 2xl:gap-10">
          <img src="~/assets/images/btc.png" alt="" class="w-[3.125rem] h-[3.125rem]" />
          <div class="flex flex-col items-center lg:w-full justify-center gap-1">
            <p class="text-sm font-bold text-white block">بیت کوین</p>
            <p class="text-[#676767] text-xs font-bold">(BTC)</p>
          </div>
        </div>
         <div class="hidden lg:col-span-1 lg:flex"></div>
        <div
          class="col-span-1 lg:col-span-2 flex items-center justify-end sm:justify-center text-base text-white font-light gap-3 lg:pr-0">
          <span class="text-base">۳,۹۹۳,۰۰۰,۰۰۰</span>
          <span class="text-base text-[#676767]">IRT</span>
        </div>
        <div class="hidden lg:col-span-2 lg:flex items-center justify-center text-base text-red-500 font-light">
          <span class="">۰.۵۹٪ -</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light gap-3">
          <span class="text-base">۷.۲۲۹۲۴۶</span>
          <span class="text-base text-[#676767]">BTC</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-green-600 font-light">
          <img src="~/assets/images/nemodar-1.png" alt="" class="" />
        </div>
        <div class="hidden lg:flex col-span-3 items-center justify-center text-base text-white font-light px-9">
          <button
            class="w-full h-11 bg-transparent border-[#676767] border rounded-lg hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000">
            خرید و فروش
          </button>
        </div>
      </div>
      <div class="h-20 w-full bg-[#262626] grid grid-cols-2 lg:grid-cols-14 py-[0.938rem] px-8 md:px-6 lg:pr-9">
        <div class="col-span-1 lg:col-span-2 h-full flex items-center justify-start sm:justify-center xl:justify-start gap-4 lg:gap-1 xl:gap-6 2xl:gap-10">
          <img src="~/assets/images/btc.png" alt="" class="w-[3.125rem] h-[3.125rem]" />
          <div class="flex flex-col items-center lg:w-full justify-center gap-1">
            <p class="text-sm font-bold text-white block">بیت کوین</p>
            <p class="text-[#676767] text-xs font-bold">(BTC)</p>
          </div>
        </div>
         <div class="hidden lg:col-span-1 lg:flex"></div>
        <div
          class="col-span-1 lg:col-span-2 flex items-center justify-end sm:justify-center text-base text-white font-light gap-3 lg:pr-0">
          <span class="text-base">۳,۹۹۳,۰۰۰,۰۰۰</span>
          <span class="text-base text-[#676767]">IRT</span>
        </div>
        <div class="hidden lg:col-span-2 lg:flex items-center justify-center text-base text-red-500 font-light">
          <span class="">۰.۵۹٪ -</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light gap-3">
          <span class="text-base">۷.۲۲۹۲۴۶</span>
          <span class="text-base text-[#676767]">BTC</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-green-600 font-light">
          <img src="~/assets/images/nemodar-1.png" alt="" class="" />
        </div>
        <div class="hidden lg:flex col-span-3 items-center justify-center text-base text-white font-light px-9">
          <button
            class="w-full h-11 bg-transparent border-[#676767] border rounded-lg hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000">
            خرید و فروش
          </button>
        </div>
      </div>
      <div class="h-20 w-full bg-[#262626] grid grid-cols-2 lg:grid-cols-14 py-[0.938rem] px-8 md:px-6 lg:pr-9">
        <div class="col-span-1 lg:col-span-2 h-full flex items-center justify-start sm:justify-center xl:justify-start gap-4 lg:gap-1 xl:gap-6 2xl:gap-10">
          <img src="~/assets/images/btc.png" alt="" class="w-[3.125rem] h-[3.125rem]" />
          <div class="flex flex-col items-center lg:w-full justify-center gap-1">
            <p class="text-sm font-bold text-white block">بیت کوین</p>
            <p class="text-[#676767] text-xs font-bold">(BTC)</p>
          </div>
        </div>
         <div class="hidden lg:col-span-1 lg:flex"></div>
        <div
          class="col-span-1 lg:col-span-2 flex items-center justify-end sm:justify-center text-base text-white font-light gap-3 lg:pr-0">
          <span class="text-base">۳,۹۹۳,۰۰۰,۰۰۰</span>
          <span class="text-base text-[#676767]">IRT</span>
        </div>
        <div class="hidden lg:col-span-2 lg:flex items-center justify-center text-base text-red-500 font-light">
          <span class="">۰.۵۹٪ -</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light gap-3">
          <span class="text-base">۷.۲۲۹۲۴۶</span>
          <span class="text-base text-[#676767]">BTC</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-green-600 font-light">
          <img src="~/assets/images/nemodar-1.png" alt="" class="" />
        </div>
        <div class="hidden lg:flex col-span-3 items-center justify-center text-base text-white font-light px-9">
          <button
            class="w-full h-11 bg-transparent border-[#676767] border rounded-lg hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000">
            خرید و فروش
          </button>
        </div>
      </div>
      <div class="h-20 w-full bg-[#262626] grid grid-cols-2 lg:grid-cols-14 py-[0.938rem] px-8 md:px-6 lg:pr-9">
        <div class="col-span-1 lg:col-span-2 h-full flex items-center justify-start sm:justify-center xl:justify-start gap-4 lg:gap-1 xl:gap-6 2xl:gap-10">
          <img src="~/assets/images/btc.png" alt="" class="w-[3.125rem] h-[3.125rem]" />
          <div class="flex flex-col items-center lg:w-full justify-center gap-1">
            <p class="text-sm font-bold text-white block">بیت کوین</p>
            <p class="text-[#676767] text-xs font-bold">(BTC)</p>
          </div>
        </div>
         <div class="hidden lg:col-span-1 lg:flex"></div>
        <div
          class="col-span-1 lg:col-span-2 flex items-center justify-end sm:justify-center text-base text-white font-light gap-3 lg:pr-0">
          <span class="text-base">۳,۹۹۳,۰۰۰,۰۰۰</span>
          <span class="text-base text-[#676767]">IRT</span>
        </div>
        <div class="hidden lg:col-span-2 lg:flex items-center justify-center text-base text-red-500 font-light">
          <span class="">۰.۵۹٪ -</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light gap-3">
          <span class="text-base">۷.۲۲۹۲۴۶</span>
          <span class="text-base text-[#676767]">BTC</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-green-600 font-light">
          <img src="~/assets/images/nemodar-1.png" alt="" class="" />
        </div>
        <div class="hidden lg:flex col-span-3 items-center justify-center text-base text-white font-light px-9">
          <button
            class="w-full h-11 bg-transparent border-[#676767] border rounded-lg hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000">
            خرید و فروش
          </button>
        </div>
      </div>
      <div class="h-20 w-full bg-[#262626] grid grid-cols-2 lg:grid-cols-14 py-[0.938rem] px-8 md:px-6 lg:pr-9">
        <div class="col-span-1 lg:col-span-2 h-full flex items-center justify-start sm:justify-center xl:justify-start gap-4 lg:gap-1 xl:gap-6 2xl:gap-10">
          <img src="~/assets/images/btc.png" alt="" class="w-[3.125rem] h-[3.125rem]" />
          <div class="flex flex-col items-center lg:w-full justify-center gap-1">
            <p class="text-sm font-bold text-white block">بیت کوین</p>
            <p class="text-[#676767] text-xs font-bold">(BTC)</p>
          </div>
        </div>
         <div class="hidden lg:col-span-1 lg:flex"></div>
        <div
          class="col-span-1 lg:col-span-2 flex items-center justify-end sm:justify-center text-base text-white font-light gap-3 lg:pr-0">
          <span class="text-base">۳,۹۹۳,۰۰۰,۰۰۰</span>
          <span class="text-base text-[#676767]">IRT</span>
        </div>
        <div class="hidden lg:col-span-2 lg:flex items-center justify-center text-base text-red-500 font-light">
          <span class="">۰.۵۹٪ -</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light gap-3">
          <span class="text-base">۷.۲۲۹۲۴۶</span>
          <span class="text-base text-[#676767]">BTC</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-green-600 font-light">
          <img src="~/assets/images/nemodar-1.png" alt="" class="" />
        </div>
        <div class="hidden lg:flex col-span-3 items-center justify-center text-base text-white font-light px-9">
          <button
            class="w-full h-11 bg-transparent border-[#676767] border rounded-lg hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000">
            خرید و فروش
          </button>
        </div>
      </div>
    </div>
    <div v-if="Cryptocurrency == 'Toman'"
      class="h-[41.125rem] bg-gradient-to-b from-[#171717] to-[#262626] rounded-none lg:rounded-[1.875rem] flex flex-col gap-[0.625rem] overflow-hidden">
      <div class="h-20 w-full bg-[#262626] grid grid-cols-2 lg:grid-cols-14 px-1 lg:px-9 opacity-50 text-xs xl:text-base font-bold  text-white">
        <div class="col-span-1 lg:col-span-3 flex items-center justify-center">
          <span class="">نام ارز دیجیتال</span>
        </div>
        <div class="col-span-1 lg:col-span-2 flex items-center justify-center ">
          <span class="">آخرین قیمت (  تومان)</span>
        </div>
        <div class="hidden lg:col-span-2 lg:flex items-center justify-center">
          <span class="">تغییر ۲۴h</span>
        </div>
        <div class="hidden lg:flex lg:col-span-2 items-center justify-center">
          <span class="">حجم معاملات ۲۴h</span>
        </div>
        <div class="hidden lg:flex lg:col-span-2 items-center justify-center">
          <span class="">نمودار هفتگی</span>
        </div>
        <div class="hidden lg:flex col-span-3 items-center justify-center"></div>
      </div>
      <div class="h-20 w-full bg-[#262626] grid grid-cols-2 lg:grid-cols-14 py-[0.938rem] px-8 md:px-6 lg:pr-9">
        <div class="col-span-1 lg:col-span-2 h-full flex items-center justify-start sm:justify-center xl:justify-start gap-4 lg:gap-1 xl:gap-6 2xl:gap-10">
          <img src="~/assets/images/btc.png" alt="" class="w-[3.125rem] h-[3.125rem]" />
          <div class="flex flex-col items-center lg:w-full justify-center gap-1">
            <p class="text-sm font-bold text-white block">بیت کوین</p>
            <p class="text-[#676767] text-xs font-bold">(BTC)</p>
          </div>
        </div>
         <div class="hidden lg:col-span-1 lg:flex"></div>
        <div
          class="col-span-1 lg:col-span-2 flex items-center justify-end sm:justify-center text-base text-white font-light gap-3 lg:pr-0">
          <span class="text-base">۳,۹۹۳,۰۰۰,۰۰۰</span>
          <span class="text-base text-[#676767]">IRT</span>
        </div>
        <div class="hidden lg:col-span-2 lg:flex items-center justify-center text-base text-red-500 font-light">
          <span class="">۰.۵۹٪ -</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light gap-3">
          <span class="text-base">۷.۲۲۹۲۴۶</span>
          <span class="text-base text-[#676767]">BTC</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-green-600 font-light">
          <img src="~/assets/images/nemodar-1.png" alt="" class="" />
        </div>
        <div class="hidden lg:flex col-span-3 items-center justify-center text-base text-white font-light px-9">
          <button
            class="w-full h-11 bg-transparent border-[#676767] border rounded-lg hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000">
            خرید و فروش
          </button>
        </div>
      </div>
      <div class="h-20 w-full bg-[#262626] grid grid-cols-2 lg:grid-cols-14 py-[0.938rem] px-8 md:px-6 lg:pr-9">
        <div class="col-span-1 lg:col-span-2 h-full flex items-center justify-start sm:justify-center xl:justify-start gap-4 lg:gap-1 xl:gap-6 2xl:gap-10">
          <img src="~/assets/images/btc.png" alt="" class="w-[3.125rem] h-[3.125rem]" />
          <div class="flex flex-col items-center lg:w-full justify-center gap-1">
            <p class="text-sm font-bold text-white block">بیت کوین</p>
            <p class="text-[#676767] text-xs font-bold">(BTC)</p>
          </div>
        </div>
         <div class="hidden lg:col-span-1 lg:flex"></div>
        <div
          class="col-span-1 lg:col-span-2 flex items-center justify-end sm:justify-center text-base text-white font-light gap-3 lg:pr-0">
          <span class="text-base">۳,۹۹۳,۰۰۰,۰۰۰</span>
          <span class="text-base text-[#676767]">IRT</span>
        </div>
        <div class="hidden lg:col-span-2 lg:flex items-center justify-center text-base text-red-500 font-light">
          <span class="">۰.۵۹٪ -</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light gap-3">
          <span class="text-base">۷.۲۲۹۲۴۶</span>
          <span class="text-base text-[#676767]">BTC</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-green-600 font-light">
          <img src="~/assets/images/nemodar-1.png" alt="" class="" />
        </div>
        <div class="hidden lg:flex col-span-3 items-center justify-center text-base text-white font-light px-9">
          <button
            class="w-full h-11 bg-transparent border-[#676767] border rounded-lg hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000">
            خرید و فروش
          </button>
        </div>
      </div>
      <div class="h-20 w-full bg-[#262626] grid grid-cols-2 lg:grid-cols-14 py-[0.938rem] px-8 md:px-6 lg:pr-9">
        <div class="col-span-1 lg:col-span-2 h-full flex items-center justify-start sm:justify-center xl:justify-start gap-4 lg:gap-1 xl:gap-6 2xl:gap-10">
          <img src="~/assets/images/btc.png" alt="" class="w-[3.125rem] h-[3.125rem]" />
          <div class="flex flex-col items-center lg:w-full justify-center gap-1">
            <p class="text-sm font-bold text-white block">بیت کوین</p>
            <p class="text-[#676767] text-xs font-bold">(BTC)</p>
          </div>
        </div>
         <div class="hidden lg:col-span-1 lg:flex"></div>
        <div
          class="col-span-1 lg:col-span-2 flex items-center justify-end sm:justify-center text-base text-white font-light gap-3 lg:pr-0">
          <span class="text-base">۳,۹۹۳,۰۰۰,۰۰۰</span>
          <span class="text-base text-[#676767]">IRT</span>
        </div>
        <div class="hidden lg:col-span-2 lg:flex items-center justify-center text-base text-red-500 font-light">
          <span class="">۰.۵۹٪ -</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light gap-3">
          <span class="text-base">۷.۲۲۹۲۴۶</span>
          <span class="text-base text-[#676767]">BTC</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-green-600 font-light">
          <img src="~/assets/images/nemodar-1.png" alt="" class="" />
        </div>
        <div class="hidden lg:flex col-span-3 items-center justify-center text-base text-white font-light px-9">
          <button
            class="w-full h-11 bg-transparent border-[#676767] border rounded-lg hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000">
            خرید و فروش
          </button>
        </div>
      </div>
      <div class="h-20 w-full bg-[#262626] grid grid-cols-2 lg:grid-cols-14 py-[0.938rem] px-8 md:px-6 lg:pr-9">
        <div class="col-span-1 lg:col-span-2 h-full flex items-center justify-start sm:justify-center xl:justify-start gap-4 lg:gap-1 xl:gap-6 2xl:gap-10">
          <img src="~/assets/images/btc.png" alt="" class="w-[3.125rem] h-[3.125rem]" />
          <div class="flex flex-col items-center lg:w-full justify-center gap-1">
            <p class="text-sm font-bold text-white block">بیت کوین</p>
            <p class="text-[#676767] text-xs font-bold">(BTC)</p>
          </div>
        </div>
         <div class="hidden lg:col-span-1 lg:flex"></div>
        <div
          class="col-span-1 lg:col-span-2 flex items-center justify-end sm:justify-center text-base text-white font-light gap-3 lg:pr-0">
          <span class="text-base">۳,۹۹۳,۰۰۰,۰۰۰</span>
          <span class="text-base text-[#676767]">IRT</span>
        </div>
        <div class="hidden lg:col-span-2 lg:flex items-center justify-center text-base text-red-500 font-light">
          <span class="">۰.۵۹٪ -</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light gap-3">
          <span class="text-base">۷.۲۲۹۲۴۶</span>
          <span class="text-base text-[#676767]">BTC</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-green-600 font-light">
          <img src="~/assets/images/nemodar-1.png" alt="" class="" />
        </div>
        <div class="hidden lg:flex col-span-3 items-center justify-center text-base text-white font-light px-9">
          <button
            class="w-full h-11 bg-transparent border-[#676767] border rounded-lg hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000">
            خرید و فروش
          </button>
        </div>
      </div>
      <div class="h-20 w-full bg-[#262626] grid grid-cols-2 lg:grid-cols-14 py-[0.938rem] px-8 md:px-6 lg:pr-9">
        <div class="col-span-1 lg:col-span-2 h-full flex items-center justify-start sm:justify-center xl:justify-start gap-4 lg:gap-1 xl:gap-6 2xl:gap-10">
          <img src="~/assets/images/btc.png" alt="" class="w-[3.125rem] h-[3.125rem]" />
          <div class="flex flex-col items-center lg:w-full justify-center gap-1">
            <p class="text-sm font-bold text-white block">بیت کوین</p>
            <p class="text-[#676767] text-xs font-bold">(BTC)</p>
          </div>
        </div>
         <div class="hidden lg:col-span-1 lg:flex"></div>
        <div
          class="col-span-1 lg:col-span-2 flex items-center justify-end sm:justify-center text-base text-white font-light gap-3 lg:pr-0">
          <span class="text-base">۳,۹۹۳,۰۰۰,۰۰۰</span>
          <span class="text-base text-[#676767]">IRT</span>
        </div>
        <div class="hidden lg:col-span-2 lg:flex items-center justify-center text-base text-red-500 font-light">
          <span class="">۰.۵۹٪ -</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light gap-3">
          <span class="text-base">۷.۲۲۹۲۴۶</span>
          <span class="text-base text-[#676767]">BTC</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-green-600 font-light">
          <img src="~/assets/images/nemodar-1.png" alt="" class="" />
        </div>
        <div class="hidden lg:flex col-span-3 items-center justify-center text-base text-white font-light px-9">
          <button
            class="w-full h-11 bg-transparent border-[#676767] border rounded-lg hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000">
            خرید و فروش
          </button>
        </div>
      </div>
      <div class="h-20 w-full bg-[#262626] grid grid-cols-2 lg:grid-cols-14 py-[0.938rem] px-8 md:px-6 lg:pr-9">
        <div class="col-span-1 lg:col-span-2 h-full flex items-center justify-start sm:justify-center xl:justify-start gap-4 lg:gap-1 xl:gap-6 2xl:gap-10">
          <img src="~/assets/images/btc.png" alt="" class="w-[3.125rem] h-[3.125rem]" />
          <div class="flex flex-col items-center lg:w-full justify-center gap-1">
            <p class="text-sm font-bold text-white block">بیت کوین</p>
            <p class="text-[#676767] text-xs font-bold">(BTC)</p>
          </div>
        </div>
         <div class="hidden lg:col-span-1 lg:flex"></div>
        <div
          class="col-span-1 lg:col-span-2 flex items-center justify-end sm:justify-center text-base text-white font-light gap-3 lg:pr-0">
          <span class="text-base">۳,۹۹۳,۰۰۰,۰۰۰</span>
          <span class="text-base text-[#676767]">IRT</span>
        </div>
        <div class="hidden lg:col-span-2 lg:flex items-center justify-center text-base text-red-500 font-light">
          <span class="">۰.۵۹٪ -</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light gap-3">
          <span class="text-base">۷.۲۲۹۲۴۶</span>
          <span class="text-base text-[#676767]">BTC</span>
        </div>
        <div class="hidden lg:flex col-span-2 items-center justify-center text-base text-green-600 font-light">
          <img src="~/assets/images/nemodar-1.png" alt="" class="" />
        </div>
        <div class="hidden lg:flex col-span-3 items-center justify-center text-base text-white font-light px-9">
          <button
            class="w-full h-11 bg-transparent border-[#676767] border rounded-lg hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000">
            خرید و فروش
          </button>
        </div>
      </div>
    </div>




  </div>
  <div class="flex lg:hidden gap-1 text-base font-bold items-center justify-center text-[#FF7028] mx-auto mt-[4.375rem]">
      <h6 class="">مشاهده همه ی رمز ارز ها</h6>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </div>
</template>

<script>
export default {
  data() {
    return {
      Cryptocurrency: "Tether"

    };
  },

  methods: {
    setActive(button) {
      this.Cryptocurrency = button;
    }
  },
};
</script>

<style>
.active-button {
  background-color: #FF7028;
  color: black;
  border-radius: 40px;
}

.inactive-button {
  background-color: #262626;
  color: white;
}

.transition {
  transition: all 0.3s ease-in-out;
}
</style>
