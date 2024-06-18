<template>
  <div>
    <main class="bg-black -z-1">
      <div class="relative w-[95rem] mx-auto">
        <div class="absolute top-0 left-0 w-[88.75rem] h-[48.125rem]">
          <img src="~/assets/images/Frame.png" alt="" class="h-full w-full" />
        </div>
        <div class="w-full h-[60rem] grid grid-cols-12 pr-24 pl-[5.563rem]">
          <!-- <div class="absolute">
          <img src="~/assets/images/Frame.png" alt="" class="">
        </div> -->
          <div class="col-span-3 z-10">
            <div
              class="flex flex-col gap-7 h-full w-full text-white items-start justify-center"
            >
              <div class="h-14 w-full text-5xl font-bold">صرافی آرنیتکس</div>
              <div class="w-full h-32 text-4xl font-medium">
                بازار بین المللی خرید و فروش ارز دیجیتال
              </div>
              <div
                class="w-[22.5rem] h-14 relative rounded-md overflow-hidden text-white text-base"
              >
                <input
                  type="text"
                  class="w-full h-full bg-[#262626] border-2 border-[#676767] focus:ring-0 focus:border-gray-600 text-white placeholder-white"
                  placeholder="شماره همراه یا ایمیل"
                />
                <div
                  class="bg-[#FF7028] absolute left-0 top-0 h-full w-28 flex items-center justify-center rounded-md"
                >
                  ثبت نام
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-9">
            <div class="w-full h-auto relative"></div>
          </div>
        </div>
      </div>

      <div class="h-auto w-full z-30">
        <!-- <app-marquee></app-marquee> -->
        <app-ticker :items="items"></app-ticker>
      </div>

      <div
        class="flex px-[6.25rem] py-20 gap-[5.438rem] w-[95rem] h-[20.625rem] mx-auto"
      >
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
      <div
        class="flex flex-col h-[38.75rem] bg-[#171717] rounded-[30px] w-[88.75rem] mx-auto"
      >
        <div
          class="flex px-[4.063rem] pt-[3.125rem] h-full gap-[3.375rem] pb-[#3.313]"
        >
          <div
            class="flex-1 hover:bg-gradient-to-b hover:from-[#262626] hover:to-[#171717] rounded-2xl hover:shadow-[0.25px_-2px_2px_rgba(103,103,103,100)] hover:-translate-y-5 transition-all duration-3000"
          >
            <service-plus
              title="خرید و فروش آسان"
              description="خرید و فروش بیش از 130 توکن"
            >
              <template #icon>
                <img src="~/assets/images/خرید و فروش آنی.png" alt="wage" />
              </template>
            </service-plus>
          </div>
          <div
            class="flex-1 hover:bg-gradient-to-b hover:from-[#262626] hover:to-[#171717] rounded-2xl hover:shadow-[0.25px_-2px_2px_rgba(103,103,103,100)] hover:-translate-y-5 transition-all duration-3000"
          >
            <service-plus
              title="معامله تعهدی"
              description="باز کردن موقعیت لانگ و شورت"
            >
              <template #icon>
                <img src="~/assets/images/معامله تعهدی.png" alt="wage" />
              </template>
            </service-plus>
          </div>
          <div
            class="flex-1 hover:bg-gradient-to-b hover:from-[#262626] hover:to-[#171717] rounded-2xl hover:shadow-[0.25px_-2px_2px_rgba(103,103,103,100)] hover:-translate-y-5 transition-all duration-3000"
          >
            <service-plus
              title="معامله پیشرفته"
              description="کپی برداری از استراتژی تریدرهای حرفه ای"
            >
              <template #icon>
                <img src="~/assets/images/کپی تریدینگ.png" alt="wage" />
              </template>
            </service-plus>
          </div>
          <div
            class="flex-1 hover:bg-gradient-to-b hover:from-[#262626] hover:to-[#171717] rounded-2xl hover:shadow-[0.25px_-2px_2px_rgba(103,103,103,100)] hover:-translate-y-5 transition-all duration-3000"
          >
            <service-plus
              title="معامله ساده"
              description="سفارش گذاری با قیمت ثابت . حد و ضرر و..."
            >
              <template #icon>
                <img src="~/assets/images/معامله اسپات.png" alt="wage" />
              </template>
            </service-plus>
          </div>
        </div>
        <div
          class="w-full h-[3.75rem] flex items-center justify-center px-[10.75rem] py-[5.563rem] gap-20"
        >
          <div class="w-[25.5rem] h-0.5 bg-[#FF7028]"></div>
          <button class="bg-[#FF7028] w-[13.5rem] h-14 text-white rounded-md">
            شروع معامله
          </button>
          <div class="w-[25.5rem] h-0.5 bg-[#FF7028]"></div>
        </div>
      </div>
      <!-- ///// -->
      <div
        class="flex items-cener mt-[6.563rem] mb-10 w-[95rem] px-[7.688rem] mx-auto gap-[21rem]"
      >
        <div
          class="w-[10.5rem] h-[3.125rem] bg-[#262626] flex items-cener justify-center py-2 px-2 rounded-[40px]"
        >
          <div class="flex-1">
            <div class="items-center justify-center text-white">تومان</div>
          </div>
          <div class="flex-1">
            <div
              class="w-[5.125rem] h-full bg-[#FF7028] rounded-[40px] text-black flex items-center justify-center"
            >
              تتر
            </div>
          </div>
        </div>
        <h2 class="text-[28px] text-white font-medium">نمودار قیمت لحظه ای</h2>
        <div class="flex gap-1 text-base font-bold text-[#FF7028]">
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
      <div class="px-[6.25rem] w-[95rem] mx-auto mt-[2.5rem]">
        <div
          class="h-[41.125rem] bg-gradient-to-b from-[#171717] to-[#262626] rounded-[1.875rem] flex flex-col gap-[0.625rem] overflow-hidden"
        >
          <div
            class="h-20 w-full bg-[#262626] grid grid-cols-12 px-24 text-white opacity-50"
          >
            <div class="col-span-1 flex items-center justify-center">
              <span class="">نام</span>
            </div>
            <div
              class="col-span-3 flex items-center justify-center text-base text-white font-light gap-2"
            >
              <span class="">آخرین قیمت (تومان)</span>
            </div>
            <div
              class="col-span-2 flex items-center justify-center text-base font-light"
            >
              <span class="">تغییر ۲۴h</span>
            </div>
            <div
              class="col-span-2 flex items-center justify-center text-base text-white font-light"
            >
              <span class="">حجم معاملات ۲۴h</span>
            </div>
            <div
              class="col-span-2 flex items-center justify-center text-base font-light"
            >
              <span class="">نمودار هفتگی</span>
            </div>
            <div
              class="col-span-2 flex items-center justify-center text-base text-white font-light"
            ></div>
          </div>
          <div class="h-20 w-full bg-[#262626] grid grid-cols-12 px-24">
            <div class="col-span-1 flex items-center justify-center">
              <img
                src="~/assets/images/btc.png"
                alt=""
                class="w-[3.125rem] h-[3.125rem]"
              />
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
              class="col-span-2 flex items-center justify-center text-base text-white font-light"
            >
              <span class="">۷.۲۲۹۲۴۶</span>
              <span class="">BTC</span>
            </div>
            <div
              class="col-span-2 flex items-center justify-center text-base text-green-600 font-light"
            >
              <img src="~/assets/images/nemodar-1.png" alt="" class="" />
            </div>
            <div
              class="col-span-2 flex items-center justify-center text-base text-white font-light"
            >
              <button
                class="w-full h-11 bg-transparent border-[#676767] border rounded-lg shadow shadow-[#676767] hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000"
              >
                خرید و فروش
              </button>
            </div>
          </div>
          <div class="h-20 w-full bg-[#262626] grid grid-cols-12 px-24">
            <div class="col-span-1 flex items-center justify-center">
              <img
                src="~/assets/images/btc.png"
                alt=""
                class="w-[3.125rem] h-[3.125rem]"
              />
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
              class="col-span-2 flex items-center justify-center text-base text-white font-light"
            >
              <span class="">۷.۲۲۹۲۴۶</span>
              <span class="">BTC</span>
            </div>
            <div
              class="col-span-2 flex items-center justify-center text-base text-green-600 font-light"
            >
              <img src="~/assets/images/nemodar-1.png" alt="" class="" />
            </div>
            <div
              class="col-span-2 flex items-center justify-center text-base text-white font-light"
            >
              <button
                class="w-full h-11 bg-transparent border-[#676767] border rounded-lg shadow shadow-[#676767] hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000"
              >
                خرید و فروش
              </button>
            </div>
          </div>
          <div class="h-20 w-full bg-[#262626] grid grid-cols-12 px-24">
            <div class="col-span-1 flex items-center justify-center">
              <img
                src="~/assets/images/btc.png"
                alt=""
                class="w-[3.125rem] h-[3.125rem]"
              />
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
              class="col-span-2 flex items-center justify-center text-base text-white font-light"
            >
              <span class="">۷.۲۲۹۲۴۶</span>
              <span class="">BTC</span>
            </div>
            <div
              class="col-span-2 flex items-center justify-center text-base text-green-600 font-light"
            >
              <img src="~/assets/images/nemodar-1.png" alt="" class="" />
            </div>
            <div
              class="col-span-2 flex items-center justify-center text-base text-white font-light"
            >
              <button
                class="w-full h-11 bg-transparent border-[#676767] border rounded-lg shadow shadow-[#676767] hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000"
              >
                خرید و فروش
              </button>
            </div>
          </div>
          <div class="h-20 w-full bg-[#262626] grid grid-cols-12 px-24">
            <div class="col-span-1 flex items-center justify-center">
              <img
                src="~/assets/images/btc.png"
                alt=""
                class="w-[3.125rem] h-[3.125rem]"
              />
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
              class="col-span-2 flex items-center justify-center text-base text-white font-light"
            >
              <span class="">۷.۲۲۹۲۴۶</span>
              <span class="">BTC</span>
            </div>
            <div
              class="col-span-2 flex items-center justify-center text-base text-green-600 font-light"
            >
              <img src="~/assets/images/nemodar-1.png" alt="" class="" />
            </div>
            <div
              class="col-span-2 flex items-center justify-center text-base text-white font-light"
            >
              <button
                class="w-full h-11 bg-transparent border-[#676767] border rounded-lg shadow shadow-[#676767] hover:bg-[#319B54] hover:shadow-[#319B54] transition-all duration-3000"
              >
                خرید و فروش
              </button>
            </div>
          </div>
          <div class="h-20 w-full bg-[#262626] grid grid-cols-12 px-24">
            <div class="col-span-1 flex items-center justify-center">
              <img
                src="~/assets/images/btc.png"
                alt=""
                class="w-[3.125rem] h-[3.125rem]"
              />
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
              class="col-span-2 flex items-center justify-center text-base text-white font-light"
            >
              <span class="">۷.۲۲۹۲۴۶</span>
              <span class="">BTC</span>
            </div>
            <div
              class="col-span-2 flex items-center justify-center text-base text-green-600 font-light"
            >
              <img src="~/assets/images/nemodar-1.png" alt="" class="" />
            </div>
            <div
              class="col-span-2 flex items-center justify-center text-base text-white font-light"
            >
              <button
                class="w-full h-11 bg-transparent border-[#676767] border rounded-lg shadow shadow-[#676767] hover:bg-[#319B54] hover:shadow-[#319B54]"
              >
                خرید و فروش
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="h-64 w-full flex items-center justify-center">
        <h4 class="text-white text-3xl font-medium">چرا آرنیتکس</h4>
      </div>
      <div class="grid grid-cols-12 px-28 gap-8 py-24 w-[95rem] mx-auto">
        <div class="col-span-6">
          <div
            class="flex items-center justify-center w-full h-full gap-20 p-20 bg-[#171717] rounded-box"
          >
            <div
              class="w-28 h-[7.188rem] flex items-center justify-center rounded-box"
            >
              <img
                src="~/assets/images/انجام معاملات پ.png"
                alt=""
                class="w-full h-full"
              />
            </div>
            <h6 class="text-lg text-white font-medium">
              انجام معاملات پیشرفته
            </h6>
          </div>
        </div>
        <div class="col-span-6">
          <div
            class="flex items-center justify-center w-full h-full gap-20 p-20 bg-[#171717] rounded-box"
          >
            <div
              class="w-28 h-[6.25rem] flex items-center justify-center rounded-box"
            >
              <img
                src="~/assets/images/احراز هویت آسان.png"
                alt=""
                class="w-full h-full"
              />
            </div>
            <h6 class="text-lg text-white font-medium">احراز هویت آسان</h6>
          </div>
        </div>
        <div class="col-span-6">
          <div
            class="flex items-center justify-center w-full h-full gap-20 p-20 bg-[#171717] rounded-box"
          >
            <div
              class="w-28 h-[6.25rem] flex items-center justify-center rounded-box"
            >
              <img
                src="~/assets/images/امنیت سیستم برداشت وجه.png"
                alt=""
                class="w-full h-full"
              />
            </div>
            <h6 class="text-lg text-white font-medium">
              امنیت سیستم برداشت وجه
            </h6>
          </div>
        </div>
        <div class="col-span-6">
          <div
            class="flex items-center justify-center w-full h-full gap-20 p-20 bg-[#171717] rounded-box"
          >
            <div
              class="w-28 h-[6.25rem] flex items-center justify-center rounded-box"
            >
              <img
                src="~/assets/images/تسویه سریع.png"
                alt=""
                class="w-full h-full"
              />
            </div>
            <h6 class="text-lg text-white font-medium">تسویه سریع</h6>
          </div>
        </div>
        <div class="col-span-6 mt-32">
          <div
            class="flex flex-col items-center justify-center w-full h-[30.375rem] gap-8 rounded-box"
          >
            <div
              class="w-[13.375rem] h-52 flex items-center justify-center rounded-box"
            >
              <img
                src="~/assets/images/book.png"
                alt=""
                class="w-full h-full"
              />
            </div>
            <h6 class="text-lg text-white font-medium">
              مقالات 3 دقیقه ای برای شروع
            </h6>
            <button
              class="bg-[#FF7028] w-[10.625rem] h-[3.75rem] text-white rounded-md"
            >
              بیشتر
            </button>
          </div>
        </div>
        <div class="col-span-6 mt-32">
          <div class="flex flex-col gap-[3.75rem]">
            <div
              class="w-full h-[7.625rem] flex items-center rounded-box bg-[#171717] p-10 gap-10"
            >
              <img
                src="~/assets/images/arrow-top-right.png"
                alt=""
                class="w-10 h-10"
              />
              <h6 class="text-lg text-white font-medium">
                مفاهیم ابتدایی درباره ارز های دیجیتال
              </h6>
            </div>
            <div
              class="w-full h-[7.625rem] flex items-center rounded-box bg-[#171717] p-10 gap-10"
            >
              <img
                src="~/assets/images/arrow-top-right.png"
                alt=""
                class="w-10 h-10"
              />
              <h6 class="text-lg text-white font-medium">
                آشنایی با انواع معاملات ارز دیجیتال
              </h6>
            </div>
            <div
              class="w-full h-[7.625rem] flex items-center rounded-box bg-[#171717] p-10 gap-10"
            >
              <img
                src="~/assets/images/arrow-top-right.png"
                alt=""
                class="w-10 h-10"
              />
              <h6 class="text-lg text-white font-medium">
                مدیریت سرمایه چیست ؟
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col px-28 gap-4">
        <h6 class="text-lg text-white font-medium">سوالات متداول</h6>
        <div class="w-full">
          <app-collaps>
            <template #title>
              <h6 class="text-sm text-white font-normal">
                قیمت رمز ارز ها را از کجا ببینم ؟
              </h6>
            </template>
            <p class="text-xs text-white font-light py-8">
              در صفحه‌ی قیمت لحظه‌ای می‌توانید لیست قیمت رمزارزهای لیست‌شده در
              نوبیتکس را ببینید. همچنین، در صفحه‌ی بازار هر رمزارز علاوه بر
              قیمت، می‌توانید به نمودار تغییرات قیمت و سایر نمودارهای مربوط به
              آن دسترسی داشته باشید و خرید و فروش انجام دهید.
            </p>
          </app-collaps>
        </div>
        <div class="">
          <app-collaps>
            <template #title>
              <h6 class="text-sm text-white font-normal">
                چطور شروع کنم و برای شروع معامله چه چیزهایی لازم است ؟
              </h6>
            </template>
            <p class="text-xs text-white font-light py-8">
              برای شروع معاملات رمز ارزها، ابتدا تحقیق کنید و مفاهیم پایه‌ای
              ارزهای دیجیتال و بلاکچین را بیاموزید. سپس یک کیف پول دیجیتال را
              انتخاب کنید. در یک صرافی معتبر ثبت‌نام و احراز هویت کنید. پس از
              واریز پول به حساب صرافی، ارزهای دیجیتال معروفی مانند بیت‌کوین و
              اتریوم را خریداری کرده و به کیف پول خود منتقل کنید. مدیریت ریسک را
              جدی بگیرید و همیشه مبلغی را سرمایه‌گذاری کنید که می‌توانید از دست
              بدهید. پیگیری اخبار و تحلیل‌های بازار مهم است. با مبالغ کم شروع
              کنید و به تدریج معاملات خود را گسترش دهید. منابع آموزشی مانند
              وبسایت‌های خبری (CoinDesk، CoinTelegraph)، کتاب‌ها (مانند
              "Mastering Bitcoin") و دوره‌های آنلاین (Coursera، Udemy) می‌توانند
              مفید باشند. با این روش‌ها و یادگیری مداوم، می‌توانید به تدریج به
              یک معامله‌گر موفق در بازار ارزهای دیجیتال تبدیل شوید.
            </p>
          </app-collaps>
        </div>
        <div class="">
          <app-collaps>
            <template #title>
              <h6 class="text-sm text-white font-normal">
                کسب درآمد در آرنیتکس چه روش هایی دارد ؟
              </h6>
            </template>
            <p class="text-xs text-white font-light py-8">
              کسب درآمد از طریق دعوت دوستان به صرافی‌های ارز دیجیتال یک راه مؤثر
              است. پس از ثبت‌نام و دریافت لینک معرفی در آرنیتکس، آن را از طریق
              شبکه‌های اجتماعی، وبسایت‌ها، وبلاگ‌ها، و پیام‌رسان‌ها به اشتراک
              بگذارید. هر بار که دوستان شما از طریق لینک شما ثبت‌نام کرده و
              معامله می‌کنند، شما کمیسیونی از کارمزد معاملات آن‌ها دریافت
              می‌کنید. برای اطلاعات بیشتر به صفحه دعوت از دوستان مراجعه کنید
            </p>
          </app-collaps>
        </div>
        <div class="">
          <app-collaps>
            <template #title>
              <h6 class="text-sm text-white font-normal">
                چگونه بیت‌کوین، تتر و سایر رمزارزها را در آرنیتکس بخرم؟
              </h6>
            </template>
            <p class="text-xs text-white font-light py-8">
              وارد وبسایت آرنیتکس شوید و یک حساب کاربری ایجاد کنید. فرآیند
              ثبت‌نام معمولاً شامل ارائه اطلاعات شخصی و تأیید ایمیل است. آرنیتکس
              هم مانند بسیاری از صرافی‌ها برای افزایش امنیت و رعایت مقررات، نیاز
              به احراز هویت دارد. این فرآیند معمولاً شامل چند مرحله میباشد. بعد
              از تأیید هویت، وارد حساب کاربری خود شوید و به بخش واریز بروید.
              می‌توانید وجه خود را از طریق روش‌های مختلف مانند انتقال بانکی یا
              شناسه واریزدار واریز کنید. پس از واریز وجه، به بخش خرید/فروش بروید
              و ارز مورد نظر خود را انتخاب کنید. برای خرید بیت کوین (BTC)، در
              بخش خرید، بیت کوین را انتخاب کنید. مقدار بیت کوینی که می‌خواهید
              بخرید یا مبلغی که می‌خواهید هزینه کنید را وارد کنید و سفارش خود را
              تأیید کنید. برای خرید تتر (USDT)، در بخش خرید، تتر را انتخاب کنید.
              مقدار تتری که می‌خواهید بخرید یا مبلغی که می‌خواهید هزینه کنید را
              وارد کنید و سفارش خود را تأیید کنید. با دنبال کردن این مراحل،
              می‌توانید به راحتی بیت کوین و تتر را در آرنیتکس خریداری کرده و از
              آن‌ها بهره‌برداری کنید
            </p>
          </app-collaps>
        </div>
      </div>
      <!-- <div class="flex px-48 items-center justify-between py-[6.25rem]"> -->
      <div class="flex px-48 items-center justify-between py-[6.25rem]">
        <div class="flex flex-col gap-4 text-white">
          <h2 class="text-[2.813rem] font-medium">نصب اپلیکیشن آرنیتکس</h2>
          <div class="w-[29.875rem] mb-[3.125rem]">
            <h6 class="text-base font-thin w-full">
              اپلیکیشن آرنیتکس را در گوشی خود نصب کنید، رمزارزهای مورد نظرتان را
              انتخاب و شروع به معامله کنید.
            </h6>
          </div>

          <button
            class="bg-[#FF7028] w-[51.9375remrem] h-[3.75rem] text-white rounded-md text-[22px]"
          >
            نصب کنید
          </button>
        </div>

        <div class="w-[51.938rem] h-[32.5rem]">
          <img
            src="~/assets/images/devices.png"
            alt="tablet-laptop-and-smartphone"
            class="w-full h-full"
          />
        </div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/24/solid";

import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

const token = authStore.getToken;
console.log("Token:", token);

const items = [
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1.png",
    name: "بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1.png",
    name: "بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1.png",
    name: "بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1.png",
    name: "بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1.png",
    name: "بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1.png",
    name: "بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1",
    name: "بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1.png",
    name: "بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1.png",
    name: "بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1.png",
    name: "بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1",
    name: "بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1.png",
    name: "بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1.png",
    name: "بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1.png",
    name: "بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1",
    name: "بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
];
</script>
<style>
.home-header {
  background-image: url("~/assets/images/hero-bg1.png");
  background-size: 100% 100%;
}
</style>
