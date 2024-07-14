<template>
    <div class="flex flex-col pt-[1.313rem]">
        <!-- <div
            class="h-[3.5rem] bg-[#171717] flex items-center justify-center text-white text-base font-normal leading-7">
            <span class="">واریز رمز ارز</span>
            <IconsDashboardDepositArrowRight class="absolute y-1/2 right-[1.143rem]">
            </IconsDashboardDepositArrowRight>
        </div> -->
        <div class="flex flex-col flex-1 px-4">
            <h1 class="text-base text-white font-medium leading-6 mb-5 ">واریز ارز دیجیتال</h1>
            <div class="flex items-center mb-6">
                <h6 class="text-sm font-medium leading-5 text-white w-1/3">انتخاب ارز دیجیتال
                </h6>
                <select
                    class="rtl w-2/3 align-middle h-11 border border-[#676767] focus:ring-0 text-base font-normal leading-7 text-[#676767] focus:border-[#676767] bg-transparent rounded-xl">
                    <option value="">بیت کوین</option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </div>
            <div class="flex items-center  mb-[1.625rem]">
                <h6 class="text-sm font-medium leading-5 text-white w-1/3 flex-wrap">انتخاب شبکه
                </h6>
                <select
                    class="rtl w-2/3 align-middle flex flex-wrap h-11 border border-[#676767] focus:ring-0 text-base font-normal leading-7 text-[#676767] focus:border-[#676767] bg-transparent rounded-xl">
                    <option value="">شبکه</option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </div>
            <h6 class="text-sm font-medium leading-5 text-white mb-[1.625rem]">آدرس واریز</h6>
            <div
                class="bg-[#171717] rounded-2xl py-4 px-[2.25rem] flex flex-row items-center flex-wrap mb-[2.375rem] w-full">
                <div class="flex-1 flex items-center justify-center">
                    <IconsDashboardDepositDocLink ></IconsDashboardDepositDocLink>
                </div>
                <div class="flex-1 flex flex-col gap-1 ml-4 mr-4">
                    <span class="text-white text-[13px] font-medium leading-5">1Gn15darKRZxfXd</span>
                    <span class="text-white text-[13px] font-medium leading-5">dqLUNQ79SYF5P</span>
                </div>
                <div class="flex-1">
                    <svg width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect x="0.140137" y="0.000976562" width="58" height="58" fill="url(#pattern0_567_91218)" />
                    <defs>
                        <pattern id="pattern0_567_91218" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_567_91218" transform="scale(0.00444444)" />
                        </pattern>
                        <image id="image0_567_91218" width="225" height="225"
                            xlink:href="data:image/png;base64,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" />
                    </defs>
                </svg>
                </div>
                

            </div>
            <div class="flex flex-col rounded-2xl bg-[#171717] pr-[1.125rem] pl-4 py-3 mb-[1.938rem]">
                <h2
                    class="text-[11px] text-white font-medium leading-[15.782px] underline decoration-[#FF7028] underline-offset-8 mb-[0.625rem]">
                    راهنما:</h2>
                <UiStepper :list="listStep" classItem="text-sm"></UiStepper>
            </div>
            <h2 class="text-base font-medium text-white leading-6 mb-[1.125rem]">تراکنش های واریز و برداشت</h2>
            <div class="rounded-2xl overflow-hidden flex flex-col mb-6">
                <div class="grid grid-cols-9 bg-[#171717] h-[2.813rem] text-xs text-white font-normal leading-[29px] ">
                    <div class="col-span-2 flex items-center justify-center">رمز ارز</div>
                    <div class="col-span-2 flex items-center justify-center">تاریخ</div>
                    <div class="col-span-2 flex items-center justify-center">مقدار</div>
                    <div class="col-span-2 flex items-center justify-center">وضعیت</div>
                    <div class="col-span-1 flex items-center justify-center">جزئیات</div>
                </div>
                <div class="flex flex-col ">
                    <div v-for="(item, index) in 6" :key="index" class="flex flex-col cursor-pointer">
                        <div @click="openDetailsOfDeposits(index)"
                            class="grid grid-cols-9 bg-[#0E0E0E] text-[11px] text-white font-normal leading-4 py-4 border-b border-[#262626] last:border-b-none">
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">بیت کوین
                            </div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626] ltrDir">
                                ۱۴۰۳ / ۰۳
                                / ۰۳</div>
                            <div
                                class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                                ۱۰۰ واریز</div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">موفق
                            </div>
                            <div class="col-span-1 flex items-center justify-center">
                                <IconsDashboardDepositArrowDown></IconsDashboardDepositArrowDown>
                            </div>
                        </div>
                        <div :id="`details-${index}`"
                            class="max-h-0 flex flex-col text-[11px] text-white font-normal leading-4 bg-[#171717] border-b border-[#696969] rounded-b-xl transition-all duration-500 ease-in-out"
                            :class="{ 'max-h-96': detailsRowDeposits[index] }">
                            <div class="flex items-center justify-between py-4 border-b border-[#232323] px-4">
                                <span class="">شبکه</span>
                                <span class="">Bitcoin</span>
                            </div>
                            <div class="flex items-center justify-between py-4 border-b  border-[#232323] px-4">
                                <span class="">لینک</span>
                                <div class="flex items-center gap-3">
                                    <IconsDashboardDepositDocMob></IconsDashboardDepositDocMob>
                                    <span class="">uykhkjjkh123651</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="text-white text-base font-normal leading-[29px]">سوالات متداول</h3>
            <div class="flex flex-col gap-6 mb-6">
                <div class="w-full">
                    <AppCollaps noStyleBg
                        :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                        :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white h-[4.5rem]']"
                        :withTitleIcon="false">
                        <template #title="{ isOpen }">
                            <div class="flex items-center justify-between w-full gap-2" :class="{ '': isOpen }">
                                <h3 class="text-xs font-normal leading-5 text-white">
                                    برای واریز رمز ارز با مموی اجباری مانند سولانا، تگ یا کامنت را وارد نکرده‌ام، انتقال
                                    انجام می‌شود؟</h3>
                                    <IconsDashboardArrowDown class="flex shrink-0" v-if="!isOpen"></IconsDashboardArrowDown>
                                    <IconsDashboardArrowUp class="flex shrink-0" v-else></IconsDashboardArrowUp>
                            </div>
                        </template>
                        <p class="text-xs font-normal leading-5 text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                            متاسفانه، انتقال رمز ارزهایی که نیاز به مموی اجباری دارند، بدون وارد کردن تگ یا کامنت به
                            درستی
                            انجام نمی‌شود و در
                            صورت ارسال، توکن موردنظر در شبکه گم می‌شود.</p>
                    </AppCollaps>
                </div>
                <div class="w-full">
                    <AppCollaps noStyleBg
                        :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                        :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white h-[4.5rem]']"
                        :withTitleIcon="false">
                        <template #title="{ isOpen }">
                            <div class="flex items-center justify-between w-full gap-2" :class="{ '': isOpen }">
                                <h3 class="text-xs font-normal leading-4 text-white">
                                    واریز و برداشت رمز ارزها چقدر طول می‌کشد؟</h3>
                                <IconsDashboardArrowDown class="flex shrink-0" v-if="!isOpen"></IconsDashboardArrowDown>
                                <IconsDashboardArrowUp class="flex shrink-0" v-else></IconsDashboardArrowUp>
                            </div>
                        </template>
                        <p class="text-xs font-normal leading-4 text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                             سرعت انتقال رمز ارزها به دو عامل بستگی دارد: شبکه انتخابی شما و ترافیک شبکه. به عنوان مثال،
                            سرعت شبکه ترون
                            نسبتاً بالا است. در شرایط ترافیک بالا، انتقال‌ها در صف تأیید شبکه قرار می‌گیرند.</p>
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
const detailsRowDeposits = ref<boolean[]>([]);
const openDetailsOfDeposits = (index: number) => {
    if (detailsRowDeposits.value[index] === false) {
        for (let i = 0; i <= 6; i++) {
            detailsRowDeposits.value[i] = false;
        }
        detailsRowDeposits.value[index] = true;
    } else {
        for (let i = 0; i <= 6; i++) {
            detailsRowDeposits.value[i] = false;
        }
    }

}
</script>