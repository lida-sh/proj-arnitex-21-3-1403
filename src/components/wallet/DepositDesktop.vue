<template>
    <div class="w-full bg-black">
        <div class="w-full max-w-[100rem] mx-auto gap-2 2xl:gap-[1.25rem] flex items-start">
            <!-- <DashboardMenuBar class="max-w-[16.5rem] min-w-[13rem] dashboard-card w-full"></DashboardMenuBar> -->
            <div class="flex flex-col flex-1 gap-2 2xl:gap-[1.25rem]">
                <div class="w-[25.313rem]">
                    <UiButtonTabButton2 class="flex-1 flex-row-reverse" :list="data" v-model="tabIndex">
                    </UiButtonTabButton2>
                </div>
                <div class="bg-[#343434] h-[0.5px] mb-7"></div>

                <WalletTomanDesktop v-if="tabIndex == 1"></WalletTomanDesktop>
                <WalletIdDesktop v-if="tabIndex == 0"></WalletIdDesktop>
                <!-- <h2 class="text-xl font-normal text-white leading-7 mb-[1.563rem]">تراکنش های واریز و برداشت</h2>
                <div class="rounded-3xl overflow-hidden flex flex-col mb-[1.625rem]">
                    <div
                        class="grid grid-cols-12 bg-[#171717] h-[2.813rem] text-xs text-white font-normal leading-[29px] ">
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
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626] ltrDir">۱۴۰۳ / ۰۳
                                / ۰۳</div>
                            <div
                                class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                                ۱۰۰.۰۰۰.۰۰۰</div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">موفق
                            </div>
                            <div
                                class="col-span-2 flex items-center justify-center border-l border-[#262626] gap-[0.5rem]">
                                <span class="ltrDir"> http://arnitex....</span>
                                <IconsDashboardDepositDocLink></IconsDashboardDepositDocLink>
                            </div>
                            <div class="col-span-2 flex items-center justify-center">5843635
                            </div>
                        </div>
                        <div
                            class="grid grid-cols-12 bg-[#0E0E0E] text-xs text-white font-normal leading-[29px] py-2 border-b border-[#262626]">
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">واریز
                            </div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626] ltrDir">۱۴۰۳ / ۰۳
                                / ۰۳</div>
                            <div
                                class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                                ۱۰۰.۰۰۰.۰۰۰</div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">موفق
                            </div>
                            <div
                                class="col-span-2 flex items-center justify-center border-l border-[#262626] gap-[0.5rem]">
                                <span class="ltrDir"> http://arnitex....</span>
                                <IconsDashboardDepositDocLink></IconsDashboardDepositDocLink>
                            </div>
                            <div class="col-span-2 flex items-center justify-center">5843635
                            </div>
                        </div>
                        <div
                            class="grid grid-cols-12 bg-[#0E0E0E] text-xs text-white font-normal leading-[29px] py-2 border-b border-[#262626]">
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">واریز
                            </div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626] ltrDir">۱۴۰۳ / ۰۳
                                / ۰۳</div>
                            <div
                                class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                                ۱۰۰.۰۰۰.۰۰۰</div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">موفق
                            </div>
                            <div
                                class="col-span-2 flex items-center justify-center border-l border-[#262626] gap-[0.5rem]">
                                <span class="ltrDir"> http://arnitex....</span>
                                <IconsDashboardDepositDocLink></IconsDashboardDepositDocLink>
                            </div>
                            <div class="col-span-2 flex items-center justify-center ">5843635
                            </div>
                        </div>
                        <div
                            class="grid grid-cols-12 bg-[#0E0E0E] text-xs text-white font-normal leading-[29px] py-2 border-b border-[#262626]">
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">واریز
                            </div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626] ltrDir">۱۴۰۳ / ۰۳
                                / ۰۳</div>
                            <div
                                class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                                ۱۰۰.۰۰۰.۰۰۰</div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">موفق
                            </div>
                            <div
                                class="col-span-2 flex items-center justify-center border-l border-[#262626] gap-[0.5rem]">
                                <span class="ltrDir"> http://arnitex....</span>
                                <IconsDashboardDepositDocLink></IconsDashboardDepositDocLink>
                            </div>
                            <div class="col-span-2 flex items-center justify-center ">5843635
                            </div>
                        </div>
                        <div class="grid grid-cols-12 bg-[#0E0E0E] text-xs text-white font-normal leading-[29px] py-2 ">
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">واریز
                            </div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626] ltrDir">۱۴۰۳ / ۰۳
                                / ۰۳</div>
                            <div
                                class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                                ۱۰۰.۰۰۰.۰۰۰</div>
                            <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">موفق
                            </div>
                            <div
                                class="col-span-2 flex items-center justify-center border-l border-[#262626] gap-[0.5rem]">
                                <span class="ltrDir"> http://arnitex....</span>
                                <IconsDashboardDepositDocLink></IconsDashboardDepositDocLink>
                            </div>
                            <div class="col-span-2 flex items-center justify-center ">5843635
                            </div>
                        </div>
                    </div>
                </div>
                <h3 class="text-white text-base font-normal leading-[29px]">سوالات متداول</h3>
                <div class="flex flex-col gap-6 mb-[6.563rem]">

                    <div class="w-full">
                        <AppCollaps noStyleBg
                            :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                            :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white h-[4.5rem]']"
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
                        <AppCollaps noStyleBg
                            :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                            :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white h-[4.5rem]']"
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
                        <AppCollaps noStyleBg
                            :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                            :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white h-[4.5rem]']"
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
                        <AppCollaps noStyleBg
                            :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                            :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white h-[4.5rem]']"
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
                </div> -->

            </div>
        </div>

    </div>
</template>
<script setup>
const tabIndex = ref(1)

const data = ref([
    {
        id: 0,
        title: "واریز با شناسه"
    }, {
        id: 1,
        title: "واریز با تومان"
    }
])


</script>
<style scoped>
.ltrDir {
    direction: ltr;
}
</style>