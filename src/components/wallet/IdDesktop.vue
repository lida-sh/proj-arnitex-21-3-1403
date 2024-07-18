<template>
    <div class="pr-6 pl-[6.25rem]">
        <div class="grid grid-cols-2 mt-[2.313rem] gap-[5.125rem] mb-[7.125rem]">
            <div class="col-span-1">
                <ul class="text-base leading-7 font-normal text-white mb-[2.188rem]">
                    <li class="list-disc marker:text-[#FF7028]">واریز بیشتر از ۲۵,۰۰۰,۰۰۰ تومان، از طریق درگاه‌های
                        پرداخت امکان پذیر نیست. بنابراین،
                        برای واریز مبالغ بیشتر، لطفاً از واریز با شناسه استفاده کنید.</li>
                </ul>
                <select
                    class="rtl w-full h-[3.75rem] border border-[#676767] focus:ring-0 text-base font-normal leading-7 text-[#676767] focus:border-[#676767] bg-transparent rounded-2xl mb-[1.813rem]">
                    <option value="">شماره شبای مورد نظر خود را انتخاب کنید.</option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
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
        <div class="flex flex-col gap-6 mb-[6.563rem]">

            <div class="w-full">
                <AppCollaps noStyleBg :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                    :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white h-[4.5rem]']"
                    :withTitleIcon="false">
                    <template #title="{ isOpen }">
                        <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                            <h3 class="text-sm font-normal leading-[26px] text-white"> در صورت مشاهده خطای کارت نامعتبر چه باید کرد؟</h3>
                            <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                            <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                        </div>
                    </template>
                    <p class="text-sm font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                        لطفاً اطلاعاتی که وارد کردید را مجدد بررسی کنید و درصورت وجود اشتباه، آن را برطرف کنید. </p>
                </AppCollaps>
            </div>
            <div class="w-full">
                <AppCollaps noStyleBg :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                    :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white h-[4.5rem]']"
                    :withTitleIcon="false">
                    <template #title="{ isOpen }">
                        <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                            <h3 class="text-sm font-normal leading-[26px] text-white"> آیا می‌توانم کیف پولم در آرنیتکس را با کارت دیگران شارژ کنم؟</h3>
                            <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                            <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                        </div>
                    </template>
                    <p class="text-sm font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                         خیر. برای شارژ و برداشت حساب خود در آرنیتکس لازم است مشخصات احراز شده با اطلاعات صاحب حساب مطابقت داشته باشد.</p>
                </AppCollaps>
            </div>
            <div class="w-full">
                <AppCollaps noStyleBg :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                    :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white h-[4.5rem]']"
                    :withTitleIcon="false">
                    <template #title="{ isOpen }">
                        <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                            <h3 class="text-sm font-normal leading-[26px] text-white"> آیا بعد از واریز مبلغ با استفاده از شناسه، محدودیت زمانی برای برداشت رمز ارز دارم؟ </h3>
                            <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                            <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                        </div>
                    </template>
                    <p class="text-sm font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                        خیر هیچ محدودیت زمانی برای برداشت و انتقال رمز ارز بعد از واریز پول به کیف‌پول خود ندارید.   </p>
                </AppCollaps>
            </div>
            <div class="w-full">
                <AppCollaps noStyleBg :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                    :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white h-[4.5rem]']"
                    :withTitleIcon="false">
                    <template #title="{ isOpen }">
                        <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                            <h3 class="text-sm font-normal leading-[26px] text-white">چرا وجه از حسابم برداشت شده ولی هنوز به کیف‌پول آرنیتکس واریز نشده؟</h3>
                            <IconsDashboardArrowDown v-if="!isOpen" class="shrink-0"></IconsDashboardArrowDown>
                            <IconsDashboardArrowUp v-else class="shrink-0"></IconsDashboardArrowUp>
                        </div>
                    </template>
                    <p class="text-sm font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                        انتقال پول از کارت بانکی به کیف‌پول آرنیتکس براساس سازه‌های زمان‌بندی هر بانک انجام می‌شود. همچنین، بستگی به نحوه انتقال (ساتنا، پایا و غیره) و ساعت انتقال دارد.</p>
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