<template>
    <div class="px-4 mt-[1.438rem]">
        <select
            class="rtl w-full align-middle shrink h-11 border border-[#676767] focus:ring-0 text-base font-normal leading-7 text-[#676767] focus:border-[#676767] bg-[#171717] rounded-2xl mb-[1.125rem]">
            <option value="">شماره شبای مورد نظر خود را انتخاب کنید.</option>
            <option></option>
            <option></option>
            <option></option>
        </select>
        <div class="flex justify-end items-center mb-[1.625rem]">
            <button @click="plusId"
                class="text-[#FF7028] text-[10px] font-normal leading-[14px] border-[0.5px] border-[#FF7028] px-[1.625rem] py-[0.656rem] rounded-lg bg-[#171717]">
                <div class="flex items-center justify-center gap-3">
                    <IconsWalletPlusMob></IconsWalletPlusMob>
                    <span>افزودن شماره شبا جدید</span>
                </div>
            </button>
        </div>
        <p class="text-[9px] font-normal leading-4 text-white mb-[1.813rem]">با توجه به دلیل محدودیت‌های بانکی، واریز
            بیش از ۲۵,۰۰۰,۰۰۰ تومان از طریق درگاه‌های پرداخت ممکن نیست و برای انجام این کار باید از خدمات پرداخت با
            شناسه (ساتنا، پایا و ...) استفاده کنید.</p>
        <div class="bg-[#171717] px-4 py-[0.948rem] rounded-[14px] mb-[0.813rem]">
            <h2
                class="text-[9px] text-white font-normal leading-4 mb-[0.927rem] underline decoration-[#FF7028] underline-offset-8">
                راهنمای ساخت شناسه واریز</h2>
            <UiStepperMob :list="listStep" class-item="text-[9px] font-normal leading-4"></UiStepperMob>
        </div>
        <h3 class="text-sm font-medium leading-5 text-white mb-[0.938rem]">تراکنش های واریز و برداشت</h3>
        <div class="rounded-2xl overflow-hidden flex flex-col mb-[3.875rem]">
            <div class="grid grid-cols-14 bg-[#171717] h-[2.813rem] text-xs text-white font-normal leading-[29px]">
                <div class="col-span-2 flex items-center justify-center">نوع</div>
                <div class="col-span-3 flex items-center justify-center">زمان</div>
                <div class="col-span-3 flex items-center justify-center">مقدار</div>
                <div class="col-span-3 flex items-center justify-center">وضعیت</div>
                <div class="col-span-3 flex items-center justify-center">جزئیات</div>

            </div>
            <div class="flex flex-col ">
                <div v-for="(item, index) in 6" :key="index" class="flex flex-col cursor-pointer bg-[#0E0E0E] ">
                    <div @click="openDetailsOfDeposits(index)"
                        class="grid grid-cols-14  text-[11px] text-white font-normal leading-4 py-4 border-b border-[#262626] last:border-b-none">
                        <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">واریز
                        </div>
                        <div class="col-span-3 flex items-center justify-center border-l border-[#262626] ltrDir">
                            ۱۴۰۳ / ۰۳
                            / ۰۳</div>
                        <div
                            class="col-span-3 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                            ۱۰۰.۰۰۰.۰۰۰</div>
                        <div class="col-span-3 flex items-center justify-center border-l border-[#262626]">موفق
                        </div>
                        <div class="col-span-3 flex items-center justify-center">
                                <IconsDashboardDepositArrowDown></IconsDashboardDepositArrowDown>
                            </div>
                    </div>
                    <div :id="`details-${index}`"
                        class="max-h-0 flex flex-col text-[11px] text-white font-normal leading-4 bg-[#171717]  rounded-b-xl transition-all duration-500 ease-in-out"
                        :class="{ 'max-h-96 border-b border-[#696969]': detailsRowDeposits[index] }">
                        <div class="flex items-center justify-between py-4 border-b border-[#232323] px-4">
                            <span class="">زمان</span>
                            <span class="">۱۲:۳۰</span>
                        </div>
                        <div class="flex items-center justify-between py-4 border-b border-[#232323] px-4">
                            <span class="">شناسه تراکنش</span>
                            <div class="flex items-center gap-3">
                                <IconsDashboardDepositDocMob></IconsDashboardDepositDocMob>
                                <span class="">1231343434</span>
                            </div>
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
                <h3 class="text-sm font-medium leading-5 text-white mb-4">سوالات متداول</h3>
                <div class="flex flex-col gap-6 mb-6">
                    <div class="w-full">
                        <AppCollaps noStyleBg
                            :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                            :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white h-[4.5rem]']"
                            :withTitleIcon="false">
                            <template #title="{ isOpen }">
                                <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                                    <h3 class="text-xs font-normal leading-[26px] text-white">آیا می‌توانم کیف پولم در
                                        آرنیتکس را با کارت دیگران شارژ کنم؟</h3>
                                    <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                                    <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                                </div>
                            </template>
                            <p class="text-xs font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
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
                                    <h3 class="text-xs font-normal leading-[26px] text-white">محدودیت واریز در روز چه
                                        مقدار است؟</h3>
                                    <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                                    <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                                </div>
                            </template>
                            <p class="text-xs font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
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
                                    <h3 class="text-xs font-normal leading-[26px] text-white">درصورت دریافت خطای کارت
                                        نامعتبر، چه باید کرد؟</h3>
                                    <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                                    <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                                </div>
                            </template>
                            <p class="text-xs font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
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
                                    <h3 class="text-xs font-normal leading-[26px] text-white">چرا وجه از حسابم برداشت
                                        شده ولی هنوز به کیف‌پول آرنیتکس واریز نشده؟</h3>
                                    <IconsDashboardArrowDown v-if="!isOpen" class="shrink-0"></IconsDashboardArrowDown>
                                    <IconsDashboardArrowUp v-else class="shrink-0"></IconsDashboardArrowUp>
                                </div>
                            </template>
                            <p class="text-xs font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                                انتقال پول از کارت به کیف‌پول براساس سازه‌های زمان‌بندی هر بانک انجام می‌شود. همچنین،
                                بستگی به نحوه انتقال
                                (ساتنا، پایا و غیره) و ساعت انتقال دارد. </p>
                        </AppCollaps>
                    </div>
                </div>
    </div>
    <AppModal v-model="openPlusId" >
        <div class=" flex flex-col items-center justify-center px-10 py-[3.25rem] w-full ">
            <p class="text-xs font-normal leading-4 mb-6 text-white">کاربر گرامی واریز شناسه‌دار تنها با شماره کارت ثبت شده به نام خودتان امکان پذیر است.</p>
            <button @click="setId" class="text-base font-normal leading-[29px] text-white bg-[#FF7028] w-full h-10 rounded-xl">ثبت
                شماره کارت</button>
        </div>
    </AppModal>
    <AppModal v-model="opensetId"  title="">
        <div class="flex flex-col px-[1.516rem] py-[1.466rem] w-full gap-3">
            <label class="text-xs font-normal leading-4 text-white">افزودن شماره شبا</label>
            <input type="text" class="h-14 rounded-lg border border-white bg-[#171717] mb-[2.188rem] focus:ring-0 focus:border-[#676767] text-[#A8A8A8] text-base font-normal">
            <button @click="confirmId" class="text-base font-normal leading-[29px] text-white bg-[#FF7028] w-full h-10 rounded-2xl">ثبت</button>

        </div>
    </AppModal>
   
    <AppModal v-model="openConfirmId"  >
        <template #title>
            <div class="px-[1.516rem]"><span class="text-sm font-medium leading-5 text-white">تایید اطلاعات</span></div>
        </template>
        <div class="flex flex-col px-[1.516rem] py-[1.466rem] w-full gap-3">
            <div class="flex items-between justify-between w-full">
                <h6 class="text-base text-[#A8A8A8] font-normal leading-[29px]">شماره کارت</h6>
                <h6 class="text-sm text-white font-medium leading-5">6037967552963355</h6>
            </div>
            <div class="flex items-between justify-between w-full">
                <h6 class="text-base text-[#A8A8A8] font-normal leading-[29px]">شماره شبا</h6>
                <h6 class="text-sm text-white font-medium leading-5">IR570190000000337906588002</h6>
            </div>
            <div class="flex items-between justify-between w-full">
                <h6 class="text-base text-[#A8A8A8] font-normal leading-[29px]">بانک صادر کننده</h6>
                <h6 class="text-sm text-white font-medium leading-5">صادرات</h6>
            </div>
            <div class="flex items-between justify-between w-full">
                <h6 class="text-base text-[#A8A8A8] font-normal leading-[29px]">صاحب حساب</h6>
                <h6 class="text-sm text-white font-medium leading-5">حسن قادری</h6>
            </div>
            <button @click="confirm" class="text-base font-normal leading-[29px] text-white bg-[#FF7028] w-full h-10 rounded-2xl">تایید</button>

        </div>
    </AppModal>
    <AppModal v-model="openContinuAndConfirm">
        <div class="flex flex-col px-[2.313rem] py-[2.094rem] w-full gap-5 items-center justify-center">
            <p class="text-xs font-normal leading-4 text-white">با تکمیل اطلاعات شخصی‌ خود، شناسه پرداخت خود را دریافت کنید.</p>
            <button @click="confirmAndContinue" class="text-base font-normal leading-[29px] text-white bg-[#FF7028] w-full h-10 rounded-2xl">تایید و ادامه</button>
        </div>
    </AppModal>
</template>
<script setup lang="ts">
const listStep = [
    // {title: "برای دریافت شناسه واریز برای مبالغ بیشتر از ۲۵ میلیون تومان ابتدا گزینه ساختن شناسه‌ی جدید را کلیک کنید."},
    {title: "برای دریافت شناسه واریز برای مبالغ بیشتر از ۲۵ میلیون تومان ابتدا گزینه ساختن شناسه‌ی جدید را کلیک کنید."},
    {title: "در ادامه کارت مورد نظر برای دریافت شناسه پرداخت را انتخاب کنید یا کارت جدیدی اضافه کنید"},
    {title: "در صفحه ای که باز می شود اطلاعات شخصی خود را وارد کنید و در نهایت شناسه‌ی واریز شما ساخته می‌شود."},
    {title: "در آخر هنگام واریز وجه از روش های پایا، ساتنا و حساب به حساب حتما در بخش شناسه‌ی واریز، شناسه‌ی دریافتی خود را وارد کنید."},
]
const depositAmount = ref(null)
const openPlusId = ref(false);
const opensetId = ref(false);
const openConfirmId = ref(false)
const openContinuAndConfirm = ref(false)
const setDepositAmount = (value) => {
    depositAmount.value = value
}
const plusId = () => {
    openPlusId.value = true
};
const setId = ()=>{
    openPlusId.value = false
    opensetId.value = true
}
const confirmId = () => {
    opensetId.value = false
    openConfirmId.value = true
}
const confirm = () => {
    openConfirmId.value = false
    openContinuAndConfirm.value = true
}
const confirmAndContinue = ()=>{
    openContinuAndConfirm.value = false
}
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
<style scoped>
select {
    background-position: left 1.5rem center
}

select>option {
    font-size: 11px;
    font-weight: normal;
    display: block;
    color: #676767;
    /* min-height: 1.2em; */
    padding: 0px 0px 1px;
    white-space: nowrap;
    direction: rtl;
}

input {
    font-size: 16px;
}

.numDir {
    direction: ltr;
}

.ltrDir {
    direction: ltr;
}
</style>