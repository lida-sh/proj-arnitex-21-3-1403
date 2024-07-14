<template>
<div class="w-full max-w-[100rem] mx-auto px-2 flex items-start">
            <!-- <DashboardMenuBar class="max-w-[16.5rem] min-w-[13rem] dashboard-card w-full"></DashboardMenuBar> -->
            <div class="flex flex-col flex-1 pt-[0.563rem]">
                <h1 class="text-[22px] text-white font-normal leading-7 ">واریز ارز دیجیتال</h1>
                <div class="bg-[#343434] h-[0.5px] mb-7"></div>
                <div class="grid grid-cols-11 gap-[1.625rem] mb-10">
                    <div class="col-span-6 flex flex-col gap-[2.438rem]">
                        <div class="flex items-center justify-between ">
                            <h6 class="text-base font-medium leading-6 text-white w-1/3 align-middle">انتخاب ارز دیجیتال
                            </h6>
                            <select
                                class="rtl w-full align-middle h-14 border border-[#676767] focus:ring-0 text-base font-normal leading-7 text-[#676767] focus:border-[#676767] bg-transparent rounded-2xl">
                                <option value="">بیت کوین</option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <div class="flex items-center justify-between mb-[3.75rem]">
                            <h6 class="text-base font-medium leading-6 text-white w-1/3 align-middle">انتخاب شبکه</h6>
                            <select
                                class="rtl w-full align-middle h-14 border border-[#676767] focus:ring-0 text-base font-normal leading-7 text-[#676767] focus:border-[#676767] bg-transparent rounded-2xl">
                                <option value="">شبکه</option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <div class="flex items-center justify-between ">
                            <h6 class="text-base font-medium leading-6 text-white w-1/3 align-middle">آدرس واریز</h6>
                            <div class="bg-[#1C1C1C] rounded-3xl py-[2.875rem] px-5 flex items-center">
                                <IconsDashboardDepositDocLink></IconsDashboardDepositDocLink>
                                <div class="">
                                    <span
                                        class="text-white text-base font-medium leading-6 mr-[1.875rem] ml-2">1Gn15darKRZxfXdqLUNQ79SYF5PCwm31yL</span>
                                </div>
                                <svg width="70" height="69" viewBox="0 0 70 69" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect x="0.5" width="69" height="69" fill="url(#pattern0_567_90995)" />
                                    <defs>
                                        <pattern id="pattern0_567_90995" patternContentUnits="objectBoundingBox"
                                            width="1" height="1">
                                            <use xlink:href="#image0_567_90995" transform="scale(0.00444444)" />
                                        </pattern>
                                        <image id="image0_567_90995" width="225" height="225"
                                            xlink:href="data:image/png;base64,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" />
                                    </defs>
                                </svg>



                            </div>

                        </div>

                    </div>
                    <div class="col-span-5 flex flex-col justify-start">
                        <div class="rounded-3xl bg-[#171717] pr-[3.25rem] pl-[1.125rem] py-6">
                            <h2
                                class="text-base text-white font-medium leading-6 mb-[1.125rem] underline decoration-[#FF7028] underline-offset-8">
                                راهنما:</h2>
                            <UiStepper :list="listStep" classItem="text-sm"></UiStepper>
                        </div>
                    </div>
                </div>


                <h2 class="text-base font-normal text-white leading-7 mb-[1.188rem]">آخرین واریزهای ارز دیجیتال</h2>
                <div class="rounded-3xl overflow-hidden flex flex-col mb-[5.375rem]">
                    <div
                        class="grid grid-cols-12 bg-[#171717] h-[2.813rem] text-xs text-white font-normal leading-[29px] ">
                        <div class="col-span-2 flex items-center justify-center">رمز ارز</div>
                        <div class="col-span-2 flex items-center justify-center">تاریخ</div>
                        <div class="col-span-2 flex items-center justify-center">مقدار</div>
                        <div class="col-span-2 flex items-center justify-center">شبکه</div>
                        <div class="col-span-2 flex items-center justify-center">لینک</div>
                        <div class="col-span-2 flex items-center justify-center">وضعیت</div>
                    </div>
                    <div class="flex flex-col ">
                        <div
                            class="grid grid-cols-12 bg-[#0E0E0E] text-xs text-white font-normal leading-[29px] py-2 border-b border-[#262626]">
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">بیت کوین
                            </div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626] ltrDir">۱۴۰۳ / ۰۳
                                / ۰۳</div>
                            <div
                                class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                                ۱۰۰  واریز</div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">Bitcoin
                            </div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">
                                D8H5631N5E9D8R4H6WZ</div>
                            <div class="col-span-2 flex items-center justify-center text-[#EA3C53]">ناموفق
                            </div>
                        </div>
                        <div
                            class="grid grid-cols-12 bg-[#0E0E0E] text-xs text-white font-normal leading-[29px] py-2 border-b border-[#262626]">
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">بیت کوین
                            </div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626] ltrDir">۱۴۰۳ / ۰۳
                                / ۰۳</div>
                            <div
                                class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                                ۱۰۰  واریز</div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">Bitcoin
                            </div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">
                                D8H5631N5E9D8R4H6WZ</div>
                            <div class="col-span-2 flex items-center justify-center text-[#EA3C53]">ناموفق
                            </div>
                        </div>
                        <div
                            class="grid grid-cols-12 bg-[#0E0E0E] text-xs text-white font-normal leading-[29px] py-2 border-b border-[#262626]">
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">بیت کوین
                            </div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626] ltrDir">۱۴۰۳ / ۰۳
                                / ۰۳</div>
                            <div
                                class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                                ۱۰۰  واریز</div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">Bitcoin
                            </div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">
                                D8H5631N5E9D8R4H6WZ</div>
                            <div class="col-span-2 flex items-center justify-center text-[#EA3C53]">ناموفق
                            </div>
                        </div>
                        <div
                            class="grid grid-cols-12 bg-[#0E0E0E] text-xs text-white font-normal leading-[29px] py-2 border-b border-[#262626]">
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">بیت کوین
                            </div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626] ltrDir">۱۴۰۳ / ۰۳
                                / ۰۳</div>
                            <div
                                class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                                ۱۰۰  واریز</div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">Bitcoin
                            </div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">
                                D8H5631N5E9D8R4H6WZ</div>
                            <div class="col-span-2 flex items-center justify-center text-[#EA3C53]">ناموفق
                            </div>
                        </div>
                        <div
                            class="grid grid-cols-12 bg-[#0E0E0E] text-xs text-white font-normal leading-[29px] py-2 ">
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">بیت کوین
                            </div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626] ltrDir">۱۴۰۳ / ۰۳
                                / ۰۳</div>
                            <div
                                class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                                ۱۰۰  واریز</div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">Bitcoin
                            </div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">
                                D8H5631N5E9D8R4H6WZ</div>
                            <div class="col-span-2 flex items-center justify-center text-[#EA3C53]">ناموفق
                            </div>
                        </div>
                    </div>
                </div>
                <h3 class="text-white text-base font-normal leading-[29px] mb-4">سوالات متداول</h3>
                <div class="flex flex-col gap-6 mb-[6.563rem]">

                    <div class="w-full">
                        <AppCollaps noStyleBg
                            :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                            :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white h-[4.5rem]']"
                            :withTitleIcon="false">
                            <template #title="{ isOpen }">
                                <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                                    <h3 class="text-sm font-normal leading-[26px] text-white">
                                        برای واریز رمز ارز با مموی اجباری مانند سولانا، تگ یا کامنت را وارد نکرده‌ام، انتقال انجام می‌شود؟</h3>
                                    <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                                    <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                                </div>
                            </template>
                            <p class="text-sm font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                                متاسفانه، انتقال رمز ارزهایی که نیاز به مموی اجباری دارند، بدون وارد کردن تگ یا کامنت به درستی انجام نمی‌شود و در صورت ارسال، توکن موردنظر در شبکه گم می‌شود.</p>
                        </AppCollaps>
                    </div>
                    <div class="w-full">
                        <AppCollaps noStyleBg
                            :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                            :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white h-[4.5rem]']"
                            :withTitleIcon="false">
                            <template #title="{ isOpen }">
                                <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                                    <h3 class="text-sm font-normal leading-[26px] text-white">
                                        واریز و برداشت رمز ارزها چقدر طول می‌کشد؟</h3>
                                    <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                                    <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                                </div>
                            </template>
                            <p class="text-sm font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                                 سرعت انتقال رمز ارزها به دو عامل بستگی دارد: شبکه انتخابی شما و ترافیک شبکه. به عنوان مثال، سرعت شبکه ترون نسبتاً بالا است. در شرایط ترافیک بالا، انتقال‌ها در صف تأیید شبکه قرار می‌گیرند.</p>
                        </AppCollaps>
                    </div>
                    
                </div>

            </div>
        </div>
</template>
<script setup lang="ts">

const listStep = [
    { title: "بعد از انتخاب رمز ارز مورد نظر و نوع شبکه، آدرس واریزی کیف پول به شما نمایش داده خواهد شد." },
    { title: "آدرس را کپی کنید یا QR Code را اسکن کنید." },
    { title: " آدرس را در بخش آدرس مقصد در صفحه برداشت پیست کنید و بعد از تکمیل مراحل، تراکنش را ارسال کنید." },
]
</script>
<style>

select {
    background-position: left 1.25rem center
}

select>option {
    background-color: transparent;
    font-weight: normal;
    display: block;
    color: #676767;
    min-height: 1.2em;
    padding: 0px 2px 1px;
    white-space: nowrap;
    direction: rtl;
}

input {
    font-size: 16px;
}
.ltrDir {
    direction: ltr;
}
</style>