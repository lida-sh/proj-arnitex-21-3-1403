<template>
    <div class="w-full dashboard-card-mob z-[100] relative">
        <!-- <app-collaps noStyleBg :background-class-content="['bg-gradient-to-t', 'from-[#171717]','from-0%','to-[#262626]','to-90%']" :background-class-title="['bg-gradient-to-t', 'from-[#171717]','from-10%', 'to-[#212121]','to-100%']"> -->
            <app-collaps noStyleBg>
            <template #title>
                <div class=" flex items-center gap-[1.125rem] w-full">
                    <div class="flex items-center justify-center w-12 h-12">
                        <img src="/assets/images/user-default.svg" alt="user" class="w-full h-full">
                    </div>
                    <div class="flex flex-col gap-1">
                        <h3 class="text-xs font-bold text-white">حسن قادری</h3>
                        <h6 class="text-[11px] font-bold text-[#FF7028]">احراز هویت نشده</h6>
                    </div>

                </div>
            </template>
            <div class="flex flex-col  w-full py-6 px-[0.625rem] gap-2">
                <div class="flex items-center gap-1"><span class="text-xs font-normal leading-[22px] text-white text-opacity-50">ایمیل:
                    </span><span class="text-sm font-bold leading-[26px] text-white">a***@g***.com</span></div>
                <div class="flex items-center gap-1"><span class="text-xs font-normal leading-[22px] text-white text-opacity-50">شماره
                        موبایل:
                    </span><span class="text-sm font-bold leading-[26px] text-white">۵۴***۰۹۳۳</span></div>
                <div class="flex items-center gap-1"><span class="text-xs font-normal leading-[22px] text-white text-opacity-50">شناسه
                        حساب کاربری:
                    </span><span class="text-sm font-bold leading-[26px] text-white">E3FgR30</span>
                    <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.3333 4.23833L9.095 0H2.5C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5V16.6667H13.3333V4.23833ZM1.66667 15V2.5C1.66667 2.27899 1.75446 2.06702 1.91074 1.91074C2.06702 1.75446 2.27899 1.66667 2.5 1.66667H8.33333V5H11.6667V15H1.66667ZM16.6667 7.5V20H4.16667V18.3333H15V5.83333L16.6667 7.5Z"
                            fill="white" />
                    </svg>

                </div>
                <div class="flex items-center gap-1">
                    <h3 class="text-xs font-bold text-[#FF7028]">ارتقا به سطح احراز هویت پایه</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-4 text-[#FF7028]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>



            </div>
        
        </app-collaps>
    </div>


</template>
<script>

</script>