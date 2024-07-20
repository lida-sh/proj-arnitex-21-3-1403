<template>
    <div class="pr-6 pl-[6.25rem]">
        <div class="grid grid-cols-2 mt-[2.313rem] gap-[5.125rem] mb-[7.125rem]">
            <div class="col-span-1">
                <ul class="text-base leading-7 font-normal text-white mb-[2.188rem]">
                    <li class="list-disc marker:text-[#FF7028]">واریز بیشتر از ۲۵,۰۰۰,۰۰۰ تومان، از طریق درگاه‌های
                        پرداخت امکان پذیر نیست. بنابراین،
                        برای واریز مبالغ بیشتر، لطفاً از واریز با شناسه استفاده کنید.</li>
                </ul>

                <div class="relative mb-7">
                    <input type="text" name="" id="" placeholder="شماره شبای مورد نظر خود را انتخاب کنید."
                        class="bg-[#000] w-full h-[56px] rounded-2xl border-[#676767] placeholder:text-[#676767] focus:border-white focus:ring-0">
                    <IconsDashboardArrowBig class="cursor-pointer left-4 absolute top-1/2 -translate-y-1/2">
                    </IconsDashboardArrowBig>
                </div>

                <div class="flex justify-end h-10">
                    <button
                        class="text-[#FF7028] text-base font-bold leading-[29px] py-[0.375rem] rounded-lg border border-[#FF7028] flex items-center gap-3 justify-center bg-[#171717] px-[1.625rem]">
                        <IconsWalletPlus></IconsWalletPlus>
                        <span>افزودن شماره شبا جدید</span>
                    </button>
                </div>

            </div>
            <div class="bg-[#171717] rounded-3xl py-[1.625rem] px-[1.063rem]">
                <h2
                    class="text-base text-white font-medium leading-6 mb-[1.75rem] underline decoration-[#FF7028] underline-offset-8">
                    راهنمای ساخت شناسه واریز</h2>
                <UiStepper :list="listStep" class-item="text-sm"></UiStepper>
            </div>
        </div>
        <h2 class="text-xl font-normal text-white leading-7 mb-[1.563rem]">تراکنش های واریز و برداشت</h2>
        <div class="rounded-3xl overflow-hidden flex flex-col mb-[3.5rem]">
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
                    <div class="col-span-2 flex items-center justify-center border-l border-[#262626] ltrDir">۱۴۰۳ / ۰۳
                        / ۰۳</div>
                    <div class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                        ۱۰۰.۰۰۰.۰۰۰</div>
                    <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">موفق
                    </div>
                    <div class="col-span-2 flex items-center justify-center border-l border-[#262626] gap-[0.5rem]">
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
                    <div class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                        ۱۰۰.۰۰۰.۰۰۰</div>
                    <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">موفق
                    </div>
                    <div class="col-span-2 flex items-center justify-center border-l border-[#262626] gap-[0.5rem]">
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
                    <div class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                        ۱۰۰.۰۰۰.۰۰۰</div>
                    <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">موفق
                    </div>
                    <div class="col-span-2 flex items-center justify-center border-l border-[#262626] gap-[0.5rem]">
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
                    <div class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                        ۱۰۰.۰۰۰.۰۰۰</div>
                    <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">موفق
                    </div>
                    <div class="col-span-2 flex items-center justify-center border-l border-[#262626] gap-[0.5rem]">
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
                    <div class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                        ۱۰۰.۰۰۰.۰۰۰</div>
                    <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">موفق
                    </div>
                    <div class="col-span-2 flex items-center justify-center border-l border-[#262626] gap-[0.5rem]">
                        <span class="ltrDir"> http://arnitex....</span>
                        <IconsDashboardDepositDocLink></IconsDashboardDepositDocLink>
                    </div>
                    <div class="col-span-2 flex items-center justify-center ">5843635
                    </div>
                </div>
            </div>
        </div>
        <h3 class="text-white text-base font-normal leading-[29px] mb-2">سوالات متداول</h3>
        <div class="flex flex-col gap-6 mb-[1rem]">

            <div class="w-full">
                <AppCollaps noStyleBg class="!px-6"
                    :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                    :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px] border-[#7d7d7d] h-[4.5rem]']"
                    :withTitleIcon="false">
                    <template #title="{ isOpen }">
                        <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                            <h3 class="text-sm font-normal leading-[26px] text-white">آیا می‌توانم کیف پولم در
                                آرنیتکس را با کارت دیگران شارژ کنم؟</h3>
                            <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                            <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                        </div>
                    </template>
                    <p class="-mx-8 text-sm font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                        خیر. برای شارژ و
                        برداشت حساب خود در آرنیتکس لازم است مشخصات احراز شده با اطلاعات صاحب حساب مطابقت داشته
                        باشد.</p>
                </AppCollaps>
            </div>
            <div class="w-full">
                <AppCollaps noStyleBg class="!px-6"
                    :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                    :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px] border-[#7d7d7d] h-[4.5rem]']"
                    :withTitleIcon="false">
                    <template #title="{ isOpen }">
                        <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                            <h3 class="text-sm font-normal leading-[26px] text-white">محدودیت واریز در روز چه
                                مقدار است؟</h3>
                            <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                            <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                        </div>
                    </template>
                    <p class="-mx-8 text-sm font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                         واریز بدون شناسه به کیف پول براساس محدودیت‌های بانکی تا ۲۵,۰۰۰,۰۰۰ تومان از هر کارت
                        امکان‌پذیر است. سقف
                        واریز با شناسه بستگی به بانک موردنظر دارد. بنابراین، برای اطلاع از سقف واریز با شناسه،
                        به بانک مورد نظر
                        مراجعه کنید.</p>
                </AppCollaps>
            </div>
            <div class="w-full">
                <AppCollaps noStyleBg class="!px-6"
                    :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                    :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px] border-[#7d7d7d] h-[4.5rem]']"
                    :withTitleIcon="false">
                    <template #title="{ isOpen }">
                        <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                            <h3 class="text-sm font-normal leading-[26px] text-white">درصورت دریافت خطای کارت
                                نامعتبر، چه باید کرد؟</h3>
                            <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                            <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                        </div>
                    </template>
                    <p class="-mx-8 text-sm font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                        اطلاعات وارد شده را بررسی کنید تا در صورت وجود اشتباه، آن را تصحیح نمایید. </p>
                </AppCollaps>
            </div>
            <div class="w-full">
                <AppCollaps noStyleBg class="!px-6"
                    :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                    :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px] border-[#7d7d7d] h-[4.5rem]']"
                    :withTitleIcon="false">
                    <template #title="{ isOpen }">
                        <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                            <h3 class="text-sm font-normal leading-[26px] text-white">چرا وجه از حسابم برداشت
                                شده ولی هنوز به کیف‌پول آرنیتکس واریز نشده؟</h3>
                            <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                            <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                        </div>
                    </template>
                    <p class="-mx-8 text-sm font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                        انتقال پول از کارت به کیف‌پول براساس سازه‌های زمان‌بندی هر بانک انجام می‌شود. همچنین،
                        بستگی به نحوه انتقال
                        (ساتنا، پایا و غیره) و ساعت انتقال دارد. </p>
                </AppCollaps>
            </div>
        </div>
    </div>

</template>
<script setup>
const listStep = [
    // {title: "برای دریافت شناسه واریز برای مبالغ بیشتر از ۲۵ میلیون تومان ابتدا گزینه ساختن شناسه‌ی جدید را کلیک کنید."},
    { title: " برای دریافت شناسه واریز برای مبالغ بیش از ۲۵,۰۰۰,۰۰۰ تومان، باید گزینه «افزودن شماره شبا جدید» را انتخاب کنید. پس از آن، شناسه واریز ایجاد می‌شود و شما می‌توانید در هنگام واریز وجه از طریق روش‌های پایا، ساتنا یا حساب به حساب، این شناسه را در بخش مربوطه وارد نمایید." },
    { title: "در ادامه کارت مورد نظر برای دریافت شناسه پرداخت را انتخاب کنید یا کارت جدیدی اضافه کنید" },
    { title: "در صفحه ای که باز می شود اطلاعات شخصی خود را وارد کنید و در نهایت شناسه‌ی واریز شما ساخته می‌شود." },
    { title: "در آخر هنگام واریز وجه از روش های پایا، ساتنا و حساب به حساب حتما در بخش شناسه‌ی واریز، شناسه‌ی دریافتی خود را وارد کنید." },
]


</script>
<style scoped>
select {
    background-position: left 1.25rem center;
    background-position: white
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