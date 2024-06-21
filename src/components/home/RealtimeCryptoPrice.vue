<script setup></script>

<template>
  <div
    class="flex flex-col lg:flex-row items-cener mt-[6.563rem] mb-10 lg:w-[95rem] lg:px-[6.25rem] lg:mx-auto lg:gap-[21rem]"
  >
    <div
      class="w-[20.5rem] lg:w-[10.5rem] h-[3.125rem] lg:h-[3.125rem] bg-[#262626] flex items-cener justify-center py-[0.75rem] lg:py-2 px-[3.69rem] lg:px-2 rounded-[40px]"
    >
      <div class="flex-1">
        <div class="flex items-center justify-center text-white">تومان</div>
      </div>
      <div class="flex-1">
        <div class="flex items-center justify-center">
          <div
            class="w-[10.25rem] lg:w-[5.125rem] h-[2.25rem] lg:h-full bg-[#FF7028] rounded-[40px] text-black flex items-center justify-center"
          >
            تتر
          </div>
        </div>
      </div>
    </div>
    <h2 class="text-[28px] text-white font-medium">نمودار قیمت لحظه ای</h2>
    <div class="hidden lg:flex gap-1 text-base font-bold text-[#FF7028]">
      <h6 class="">مشاهده همه ی رمز ارز ها</h6>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  </div>
  <!-- ///// -->
  <!-- نمودار لحظه ای -->
  <div class="px-0 lg:px-[6.25rem] w-full lg:w-[95rem] mx-auto mt-[2.5rem]">
    <div
      class="h-[41.125rem] bg-gradient-to-b from-[#171717] to-[#262626] rounded-none lg:rounded-[1.875rem] flex flex-col gap-[0.625rem] overflow-hidden"
    >
      <div
        class="h-20 w-full bg-[#262626] grid grid-cols-6 lg:grid-cols-12 px-1 lg:px-24 text-white opacity-50"
      >
        <div class="col-span-1 flex items-center justify-center">
          <span class="">نام ارز دیجیتال</span>
        </div>
        <div
          class="col-span-3 flex items-center justify-center text-base text-white font-light pr-8"
        >
          <span class="">آخرین قیمت (تومان)</span>
        </div>
        <div
          class="col-span-2 flex items-center justify-center text-base font-light"
        >
          <span class="">تغییر ۲۴h</span>
        </div>
        <div
          class="hidden lg:flex lg:col-span-2 items-center justify-center text-base text-white font-light"
        >
          <span class="">حجم معاملات ۲۴h</span>
        </div>
        <div
          class="hidden lg:flex lg:col-span-2 items-center justify-center text-base font-light"
        >
          <span class="">نمودار هفتگی</span>
        </div>
        <div
          class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light"
        ></div>
      </div>
      <div
        class="h-20 w-full bg-[#262626] grid grid-cols-6 lg:grid-cols-14 lg:px-9"
      >
        <div
          class="col-span-1 w-full h-full flex items-center justify-center gap-4"
        >
          <img
            src="~/assets/images/btc.png"
            alt=""
            class="w-[3.125rem] h-[3.125rem]"
          />
        </div>
        <div
          class="col-span-1 flex flex-col items-center justify-center w-full gap-1"
        >
          <p class="text-xs text-white font-thin block">بیت کوین</p>
          <p class="text-[#676767] text-xs font-thin">(BTC)</p>
        </div>
        <div
          class="col-span-3 flex items-center justify-center text-base text-white font-light gap-2"
        >
          <span class="">۳,۹۹۳,۰۰۰,۰۰۰</span>
          <span class="">IRT</span>
        </div>
        <div
          class="col-span-2 flex items-center justify-center text-base text-red-500 font-light"
        >
          <span class="">۰.۵۹٪ -</span>
        </div>
        <div
          class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light"
        >
          <span class="">۷.۲۲۹۲۴۶</span>
          <span class="">BTC</span>
        </div>
        <div
          class="hidden lg:flex col-span-3 items-center justify-center text-base text-green-600 font-light"
        >
          <img src="~/assets/images/nemodar-1.png" alt="" class="" />
        </div>
        <div
          class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light"
        >
          <button
            class="w-full h-11 bg-transparent border-[#676767] border rounded-lg shadow shadow-[#676767] hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000"
          >
            خرید و فروش
          </button>
        </div>
      </div>
      <div
        class="h-20 w-full bg-[#262626] grid grid-cols-6 lg:grid-cols-14 lg:px-9"
      >
        <div
          class="col-span-1 w-full h-full flex items-center justify-center gap-4"
        >
          <img
            src="~/assets/images/btc.png"
            alt=""
            class="w-[3.125rem] h-[3.125rem]"
          />
        </div>
        <div
          class="col-span-1 flex flex-col items-center justify-center w-full gap-1"
        >
          <p class="text-xs text-white font-thin block">بیت کوین</p>
          <p class="text-[#676767] text-xs font-thin">(BTC)</p>
        </div>
        <div
          class="col-span-3 flex items-center justify-center text-base text-white font-light gap-2"
        >
          <span class="">۳,۹۹۳,۰۰۰,۰۰۰</span>
          <span class="">IRT</span>
        </div>
        <div
          class="col-span-2 flex items-center justify-center text-base text-red-500 font-light"
        >
          <span class="">۰.۵۹٪ -</span>
        </div>
        <div
          class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light"
        >
          <span class="">۷.۲۲۹۲۴۶</span>
          <span class="">BTC</span>
        </div>
        <div
          class="hidden lg:flex col-span-3 items-center justify-center text-base text-green-600 font-light"
        >
          <img src="~/assets/images/nemodar-1.png" alt="" class="" />
        </div>
        <div
          class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light"
        >
          <button
            class="w-full h-11 bg-transparent border-[#676767] border rounded-lg shadow shadow-[#676767] hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000"
          >
            خرید و فروش
          </button>
        </div>
      </div>
      <div
        class="h-20 w-full bg-[#262626] grid grid-cols-6 lg:grid-cols-14 lg:px-9"
      >
        <div
          class="col-span-1 w-full h-full flex items-center justify-center gap-4"
        >
          <img
            src="~/assets/images/btc.png"
            alt=""
            class="w-[3.125rem] h-[3.125rem]"
          />
        </div>
        <div
          class="col-span-1 flex flex-col items-center justify-center w-full gap-1"
        >
          <p class="text-xs text-white font-thin block">بیت کوین</p>
          <p class="text-[#676767] text-xs font-thin">(BTC)</p>
        </div>
        <div
          class="col-span-3 flex items-center justify-center text-base text-white font-light gap-2"
        >
          <span class="">۳,۹۹۳,۰۰۰,۰۰۰</span>
          <span class="">IRT</span>
        </div>
        <div
          class="col-span-2 flex items-center justify-center text-base text-red-500 font-light"
        >
          <span class="">۰.۵۹٪ -</span>
        </div>
        <div
          class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light"
        >
          <span class="">۷.۲۲۹۲۴۶</span>
          <span class="">BTC</span>
        </div>
        <div
          class="hidden lg:flex col-span-3 items-center justify-center text-base text-green-600 font-light"
        >
          <img src="~/assets/images/nemodar-1.png" alt="" class="" />
        </div>
        <div
          class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light"
        >
          <button
            class="w-full h-11 bg-transparent border-[#676767] border rounded-lg shadow shadow-[#676767] hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000"
          >
            خرید و فروش
          </button>
        </div>
      </div>
      <div
        class="h-20 w-full bg-[#262626] grid grid-cols-6 lg:grid-cols-14 lg:px-9"
      >
        <div
          class="col-span-1 w-full h-full flex items-center justify-center gap-4"
        >
          <img
            src="~/assets/images/btc.png"
            alt=""
            class="w-[3.125rem] h-[3.125rem]"
          />
        </div>
        <div
          class="col-span-1 flex flex-col items-center justify-center w-full gap-1"
        >
          <p class="text-xs text-white font-thin block">بیت کوین</p>
          <p class="text-[#676767] text-xs font-thin">(BTC)</p>
        </div>
        <div
          class="col-span-3 flex items-center justify-center text-base text-white font-light gap-2"
        >
          <span class="">۳,۹۹۳,۰۰۰,۰۰۰</span>
          <span class="">IRT</span>
        </div>
        <div
          class="col-span-2 flex items-center justify-center text-base text-red-500 font-light"
        >
          <span class="">۰.۵۹٪ -</span>
        </div>
        <div
          class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light"
        >
          <span class="">۷.۲۲۹۲۴۶</span>
          <span class="">BTC</span>
        </div>
        <div
          class="hidden lg:flex col-span-3 items-center justify-center text-base text-green-600 font-light"
        >
          <img src="~/assets/images/nemodar-1.png" alt="" class="" />
        </div>
        <div
          class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light"
        >
          <button
            class="w-full h-11 bg-transparent border-[#676767] border rounded-lg shadow shadow-[#676767] hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000"
          >
            خرید و فروش
          </button>
        </div>
      </div>
      <div
        class="h-20 w-full bg-[#262626] grid grid-cols-6 lg:grid-cols-14 lg:px-9"
      >
        <div
          class="col-span-1 w-full h-full flex items-center justify-center gap-4"
        >
          <img
            src="~/assets/images/btc.png"
            alt=""
            class="w-[3.125rem] h-[3.125rem]"
          />
        </div>
        <div
          class="col-span-1 flex flex-col items-center justify-center w-full gap-1"
        >
          <p class="text-xs text-white font-thin block">بیت کوین</p>
          <p class="text-[#676767] text-xs font-thin">(BTC)</p>
        </div>
        <div
          class="col-span-3 flex items-center justify-center text-base text-white font-light gap-2"
        >
          <span class="">۳,۹۹۳,۰۰۰,۰۰۰</span>
          <span class="">IRT</span>
        </div>
        <div
          class="col-span-2 flex items-center justify-center text-base text-red-500 font-light"
        >
          <span class="">۰.۵۹٪ -</span>
        </div>
        <div
          class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light"
        >
          <span class="">۷.۲۲۹۲۴۶</span>
          <span class="">BTC</span>
        </div>
        <div
          class="hidden lg:flex col-span-3 items-center justify-center text-base text-green-600 font-light"
        >
          <img src="~/assets/images/nemodar-1.png" alt="" class="" />
        </div>
        <div
          class="hidden lg:flex col-span-2 items-center justify-center text-base text-white font-light"
        >
          <button
            class="w-full h-11 bg-transparent border-[#676767] border rounded-lg shadow shadow-[#676767] hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000"
          >
            خرید و فروش
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
