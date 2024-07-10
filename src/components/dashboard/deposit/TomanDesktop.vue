<template>
    <div class="bg-[#343434] h-[0.5px] mb-7"></div>
    <h3 class="text-base font-normal leading-7 text-white mb-4">مبلغ واریزی (تومان)</h3>
    <div class="flex flex-col gap-4 mb-[2.813rem]">
        <input v-model="depositAmount"
            class="rtl w-full border border-[#676767] focus:ring-0 focus:border-[#676767] text-base font-normal leading-7 text-[#676767] bg-black rounded-2xl ">
        </input>
        <div class="flex gap-4">
            <div @click="setDepositAmount(500000)"
                class="h-10 rounded-2xl text-base font-normal leading-7 text-[#676767] border border-[#676767] px-4 py-1.5 numDir">
                ۵ ، ۰۰۰ ، ۰۰۰</div>

            <div @click="setDepositAmount(20000000)"
                class="h-10 rounded-2xl text-base font-normal leading-7 text-[#676767] border border-[#676767] px-4 py-1.5 numDir">
                ۲۰ ، ۰۰۰ ، ۰۰۰</div>

            <div @click="setDepositAmount(25000000)"
                class="h-10 rounded-2xl text-base font-normal leading-7 text-[#676767] border border-[#676767] px-4 py-1.5 numDir">
                ۲۵ ، ۰۰۰ ، ۰۰۰</div>
        </div>
    </div>


    <div class="flex justify-between items-center mb-4">
        <h3 class="text-base font-normal leading-7 text-white mb-4">شماره کارت</h3>
        <button class="w-[6.563rem] h-[2.563rem] border border-[#FF7028] rounded-lg">
            <div class="text-[#FF7028] text-base font-bold leading-[29px]">+ کارت</div>
        </button>
    </div>
    <select
        class="rtl w-full h-[5.5rem] border border-[#676767] focus:ring-0 text-base font-normal leading-7 text-[#676767] focus:border-[#676767] bg-[#171717] rounded-2xl mb-[1.813rem]">
        <option value="">شماره کارت مورد نظر را انتخاب کنید.</option>
        <option></option>
        <option></option>
        <option></option>
    </select>
    <button
        class="bg-[#FF7028] h-[3.5rem] w-full text-white text-base rounded-2xl font-normal leading-[29px] 3.313">انتقال
        به درگاه پرداخت</button>
    <div class="bg-[#0E0E0E] rounded-2xl px-[1.625rem] pt-10 pb-[2.688rem] grid grid-cols-11 gap-[1.125rem]">
        <div
            class="col-span-3 bg-[#262626] rounded-2xl flex flex-col items-center justify-center pt-[0.875rem] pb-[2.125rem] px-[2.125rem] gap-[1.798rem]">
            <IconsDashboardDepositHour24></IconsDashboardDepositHour24>
            <div class="flex flex-col gap-[0.625rem]">
                <p class="text-sm font-bold leading-[19.6px] text-white">سقف واریز برای هر کارت در ۲۴ ساعت
                </p>
                <p class="text-sm font-bold leading-[19.6px] text-white">۰۰۰ ، ۰۰۰ ، ۲۵ میلیون تومان</p>
            </div>

        </div>
        <div
            class="col-span-8 bg-[#262626] rounded-2xl flex flex-col items-center justify-center pt-[0.875rem] pb-[2.125rem] px-[2.125rem] gap-[1.798rem] mb-[1.625rem] h-full">
            <ul class="list-disc text-white">
                <li class="">لطفاً در صورت استفاده از فیلترشکن، آن را خاموش کنید.به دستور پلیس فتا، برای
                    واریز ریالی IP شما باید کشور ایران باشد. </li>
                <li class="">محدودیت واریز ۰۰۰ ، ۰۰۰ ، ۲۵ (تومان) در روز برای شما وجود دارد.</li>
                <li class="">
                    <div class="flex items-center gap-2"><span>محدودیت واریز ۰۰۰ ، ۰۰۰ ، ۲۵ (تومان) در روز
                            برای شما وجود دارد.
                        </span><span class="text-[#FF7028]">ارتقای سطح احراز هویت</span>
                        <IconsDashboardDepositArrowLeft></IconsDashboardDepositArrowLeft>
                    </div>
                </li>
            </ul>
        </div>

    </div>
    <h2 class="text-xl font-normal text-white leading-7 mb-[1.563rem]">تراکنش های واریز و برداشت</h2>
    <div class="rounded-3xl overflow-hidden flex flex-col mb-[1.625rem]">
        <div class="grid grid-cols-12 bg-[#171717] h-[2.813rem] text-xs text-white font-normal leading-[29px] ">
            <div class="col-span-2 flex items-center justify-center">نوع</div>
            <div class="col-span-2 flex items-center justify-center">زمان</div>
            <div class="col-span-2 flex items-center justify-center">مقدار</div>
            <div class="col-span-2 flex items-center justify-center">وضعیت</div>
            <div class="col-span-2 flex items-center justify-center">لینک تراکنش</div>
            <div class="col-span-2 flex items-center justify-center">شناسه</div>
        </div>
        <div class="flex flex-col ">
            <div
                class="grid grid-cols-12 bg-[#0E0E0E] text-xs text-white font-normal leading-[29px] py-2 border-b border-[#262626]">
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">واریز
                </div>
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">۱۴۰۳ / ۰۳
                    / ۰۳</div>
                <div class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                    ۱۰۰.۰۰۰.۰۰۰</div>
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">موفق
                </div>
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">
                    http://arnitex....</div>
                <div class="col-span-2 flex items-center justify-center">5843635
                </div>
            </div>
            <div
                class="grid grid-cols-12 bg-[#0E0E0E] text-xs text-white font-normal leading-[29px] py-2 border-b border-[#262626]">
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">واریز
                </div>
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">۱۴۰۳ / ۰۳
                    / ۰۳</div>
                <div class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                    ۱۰۰.۰۰۰.۰۰۰</div>
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">موفق
                </div>
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">
                    http://arnitex....</div>
                <div class="col-span-2 flex items-center justify-center">5843635
                </div>
            </div>
            <div
                class="grid grid-cols-12 bg-[#0E0E0E] text-xs text-white font-normal leading-[29px] py-2 border-b border-[#262626]">
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">واریز
                </div>
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">۱۴۰۳ / ۰۳
                    / ۰۳</div>
                <div class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                    ۱۰۰.۰۰۰.۰۰۰</div>
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">موفق
                </div>
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">
                    http://arnitex....</div>
                <div class="col-span-2 flex items-center justify-center ">5843635
                </div>
            </div>
            <div
                class="grid grid-cols-12 bg-[#0E0E0E] text-xs text-white font-normal leading-[29px] py-2 border-b border-[#262626]">
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">واریز
                </div>
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">۱۴۰۳ / ۰۳
                    / ۰۳</div>
                <div class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                    ۱۰۰.۰۰۰.۰۰۰</div>
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">موفق
                </div>
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">
                    http://arnitex....</div>
                <div class="col-span-2 flex items-center justify-center ">5843635
                </div>
            </div>
            <div class="grid grid-cols-12 bg-[#0E0E0E] text-xs text-white font-normal leading-[29px] py-2 ">
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">واریز
                </div>
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">۱۴۰۳ / ۰۳
                    / ۰۳</div>
                <div class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                    ۱۰۰.۰۰۰.۰۰۰</div>
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">موفق
                </div>
                <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">
                    http://arnitex....</div>
                <div class="col-span-2 flex items-center justify-center ">5843635
                </div>
            </div>
        </div>
    </div>
    <h3 class="text-white text-base font-normal leading-[29px]">سوالات متداول</h3>
    <div class="flex flex-col gap-6 mb-[6.563rem]">

        <div class="w-full">
            <AppCollaps noStyleBg :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white']"
                :withTitleIcon="false">
                <template #title="{ isOpen }">
                    <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                        <h3 class="text-sm font-normal leading-[26px] text-white">آیا می‌توانم کیف پولم در
                            آرنیتکس را با کارت دیگران شارژ کنم؟</h3>
                        <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                        <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                    </div>
                </template>
                <p class="text-sm font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                    خیر. برای شارژ و
                    برداشت حساب خود در آرنیتکس لازم است مشخصات احراز شده با اطلاعات صاحب حساب مطابقت داشته
                    باشد.</p>
            </AppCollaps>
        </div>
        <div class="w-full">
            <AppCollaps noStyleBg :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white']"
                :withTitleIcon="false">
                <template #title="{ isOpen }">
                    <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                        <h3 class="text-sm font-normal leading-[26px] text-white">محدودیت واریز در روز چه
                            مقدار است؟</h3>
                        <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                        <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                    </div>
                </template>
                <p class="text-sm font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                     واریز بدون شناسه به کیف پول براساس محدودیت‌های بانکی تا ۲۵,۰۰۰,۰۰۰ تومان از هر کارت
                    امکان‌پذیر است. سقف
                    واریز با شناسه بستگی به بانک موردنظر دارد. بنابراین، برای اطلاع از سقف واریز با شناسه،
                    به بانک مورد نظر
                    مراجعه کنید.</p>
            </AppCollaps>
        </div>
        <div class="w-full">
            <AppCollaps noStyleBg :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white']"
                :withTitleIcon="false">
                <template #title="{ isOpen }">
                    <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                        <h3 class="text-sm font-normal leading-[26px] text-white">درصورت دریافت خطای کارت
                            نامعتبر، چه باید کرد؟</h3>
                        <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                        <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                    </div>
                </template>
                <p class="text-sm font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                    اطلاعات وارد شده را بررسی کنید تا در صورت وجود اشتباه، آن را تصحیح نمایید. </p>
            </AppCollaps>
        </div>
        <div class="w-full">
            <AppCollaps noStyleBg :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white']"
                :withTitleIcon="false">
                <template #title="{ isOpen }">
                    <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                        <h3 class="text-sm font-normal leading-[26px] text-white">چرا وجه از حسابم برداشت
                            شده ولی هنوز به کیف‌پول آرنیتکس واریز نشده؟</h3>
                        <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                        <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                    </div>
                </template>
                <p class="text-sm font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                    انتقال پول از کارت به کیف‌پول براساس سازه‌های زمان‌بندی هر بانک انجام می‌شود. همچنین،
                    بستگی به نحوه انتقال
                    (ساتنا، پایا و غیره) و ساعت انتقال دارد. </p>
            </AppCollaps>
        </div>
    </div>
</template>
<script setup>
const depositAmount = ref(null)
const setDepositAmount = (value) => {
    depositAmount.value = value
}
</script>
<style scoped>
select {
    background-position: left 2.625rem center
}

select>option {
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

.numDir {
    direction: ltr;
}
</style>