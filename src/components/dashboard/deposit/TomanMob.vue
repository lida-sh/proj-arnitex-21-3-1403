<template>
    <div class="px-4 mt-[1.188rem]">
        <label class="text-white text-base font-normal leading-7 mb-[0.813rem]">مبلغ واریزی (تومان)</label>
        <input type="text"
            class="rtl w-full h-[2.75rem] border border-[#676767] focus:ring-0 text-[11px] font-normal leading-4 placeholder-[#676767] text-[#676767] focus:border-[#676767] bg-[#171717] rounded-lg mb-[1.813rem]"
            placeholder="مبلغ را وارد کنید (حداقل مبلغ ۵۰،۰۰۰ تومان است)">
        <div class="flex items-center mb-[1.875rem]">
            <div class="flex-1 flex items-center justify-center">
                <div @click="setDepositAmount(500000)"
                    class="h-10 rounded-lg text-base font-normal leading-7 text-[#676767] border border-[#676767] px-4 py-1.5 numDir">
                    ۵ ، ۰۰۰ ، ۰۰۰</div>
            </div>
            <div class="flex-1 flex items-center justify-center">
                <div @click="setDepositAmount(20000000)"
                    class="h-10 rounded-lg text-base font-normal leading-7 text-[#676767] border border-[#676767] px-4 py-1.5 numDir">
                    ۲۰ ، ۰۰۰ ، ۰۰۰</div>
            </div>
            <div class="flex-1 flex items-center justify-center">
                <div @click="setDepositAmount(25000000)"
                    class="h-10 rounded-lg text-base font-normal leading-7 text-[#676767] border border-[#676767] px-4 py-1.5 numDir">
                    ۲۵ ، ۰۰۰ ، ۰۰۰</div>
            </div>

        </div>
        <label class="text-sm leading-5 font-normal text-white">شماره کارت</label>
        <select
            class="rtl w-full align-middle h-11 border border-[#676767] focus:ring-0 text-base font-normal leading-7  focus:border-[#676767] bg-[#171717] rounded-xl mb-3">
            <option value="">شماره کارت مورد نظر را انتخاب کنید.</option>
            <option></option>
            <option></option>
            <option></option>
        </select>
        <div class="flex justify-end mb-[1.813rem]">
            <button @click="plusCart"
                class="w-[5.875rem] h-10 border border-[#FF7028] rounded-xl flex items-center justify-center">
                <div class="text-[#FF7028] text-[11px] font-normal leading-4">+ کارت</div>
            </button>
        </div>
        <div class="bg-[#0E0E0E] px-6 py-[1.875rem] flex flex-col w-full rounded-2xl mb-4">
            <div class="bg-[#262626] w-full py-4 px-[1.563rem] flex justify-between items-center rounded-2xl mb-4">
                <IconsDashboardDepositHour24Mob></IconsDashboardDepositHour24Mob>
                <div class="flex flex-col text-white text-xs font-normal leading-[22px]">
                    <p class="">سقف واریز ۲۴ ساعت</p>
                    <p class="">۰۰۰ ، ۰۰۰ ، ۲۵ میلیون تومان</p>
                </div>
            </div>
            <div class="px-[1.813rem]">
                <ul class="text-xs font-normal leading-[22px] text-white list-disc flex flex-col gap-5">
                    <li class="">لطفاً اگر از فیلترشکن استفاده می‌کنید، آن را خاموش کنید. طبق دستور پلیس فتا،
                        برای واریز ریالی،IP شما باید مربوط به کشور ایران باشد.</li>
                    <li class=""><span class="">محدودیت واریز ۰۰۰ ، ۰۰۰ ، ۲۵ (تومان) در روز برای شما وجود دارد.
                        </span><span class="text-[#FF7028]">ارتقای سطح احراز هویت </span></li>
                    <li class="">برای پرداخت بیشتر از 25 میلیون تومان از واریز با شناسه استفاده کنید.</li>
                </ul>
            </div>
        </div>
        <h3 class="text-sm font-medium leading-5 text-white mb-[0.938rem]">تراکنش های واریز و برداشت</h3>
        <div class="rounded-2xl overflow-hidden flex flex-col mb-[3.875rem]">
            <div class="grid grid-cols-9 bg-[#171717] h-[2.813rem] text-xs text-white font-normal leading-[29px] ">
                <div class="col-span-2 flex items-center justify-center">نوع</div>
                <div class="col-span-2 flex items-center justify-center">زمان</div>
                <div class="col-span-2 flex items-center justify-center">مقدار</div>
                <div class="col-span-2 flex items-center justify-center">وضعیت</div>
                <div class="col-span-1 flex items-center justify-center">جزئیات</div>

            </div>
            <div class="flex flex-col ">
                <div v-for="(item, index) in 6" :key="index" class="flex flex-col cursor-pointer">
                    <div @click="openDetailsOfDeposits(index)"
                        class="grid grid-cols-9 bg-[#0E0E0E] text-[11px] text-white font-normal leading-4 py-4 border-b border-[#262626] last:border-b-none">
                        <div class="col-span-2 flex items-center justify-center border-l border-[#262626]">واریز
                        </div>
                        <div class="col-span-2 flex items-center justify-center border-l border-[#262626] ltrDir">
                            ۱۴۰۳ / ۰۳
                            / ۰۳</div>
                        <div
                            class="col-span-2 flex items-center justify-center text-[#319B54] border-l border-[#262626]">
                            ۱۰۰.۰۰۰.۰۰۰</div>
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
                <AppCollaps noStyleBg :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
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
                <AppCollaps noStyleBg :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
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
                <AppCollaps noStyleBg :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
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
                <AppCollaps noStyleBg :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
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
        </div>
    </div>
    <AppModal v-model="openPlusCart" mobile>
        <div class=" flex flex-col items-center justify-center px-[1.516rem] py-[1.466rem] w-full ">
            <div class="flex flex-col items-center justify-center gap-4 w-full mb-4">
                <label class="text-[10px] text-white font-normal leading-[14px]">افزودن شماره کارت</label>
                <input
                    class="rtl h-8 w-full border border-[#676767] focus:ring-0 focus:border-[#676767] text-base font-normal leading-7 text-[#676767] bg-black rounded-lg ">
                </input>
            </div>
            <div class="flex flex-col items-center justify-center gap-4 w-full mb-[1.688rem]">
                <h3 class="text-[10px] text-white font-normal leading-[14px]">افزودن شماره شبا</h3>
                <input
                    class="rtl h-8 w-full border border-[#676767] focus:ring-0 focus:border-[#676767] text-base font-normal leading-7 text-[#676767] bg-black rounded-lg ">
                </input>
            </div>
            <button @click="confirmCart" class="text-[7.845px] text-white bg-[#FF7028] w-full h-8 rounded-xl">ثبت
                شماره کارت</button>
        </div>
    </AppModal>
    <AppModal v-model="openConfirmCart" mobile title="تایید اطلاعات">
        <div class="flex flex-col px-[1.516rem] py-[1.466rem] w-full gap-3">
            <div class="flex items-between justify-between w-full">
                <h6 class="text-[10px] text-[#A8A8A8] font-normal leading-[14px]">شماره کارت</h6>
                <h6 class="text-[10px] text-white font-normal leading-[14px]">6037967552963355</h6>
            </div>
            <div class="flex items-between justify-between w-full">
                <h6 class="text-[10px] text-[#A8A8A8] font-normal leading-[14px]">شماره شبا</h6>
                <h6 class="text-[10px] text-white font-normal leading-[14px]">IR570190000000337906588002</h6>
            </div>
            <div class="flex items-between justify-between w-full">
                <h6 class="text-[10px] text-[#A8A8A8] font-normal leading-[14px]">بانک صادر کننده</h6>
                <h6 class="text-[10px] text-white font-normal leading-[14px]">صادرات</h6>
            </div>
            <div class="flex items-between justify-between w-full">
                <h6 class="text-[10px] text-[#A8A8A8] font-normal leading-[14px]">صاحب حساب</h6>
                <h6 class="text-[10px] text-white font-normal leading-[14px]">حسن قادری</h6>
            </div>
            <button @click="confirm" class="text-[8.543px] text-white bg-[#FF7028] w-full h-8 rounded-xl">تایید</button>

        </div>
    </AppModal>
</template>
<script setup lang="ts">


const depositAmount = ref(null)
const openPlusCart = ref(false);
const openConfirmCart = ref(false)
const setDepositAmount = (value) => {
    depositAmount.value = value
}
const plusCart = () => {
    openPlusCart.value = true
};
const confirmCart = () => {
    openPlusCart.value = false
    openConfirmCart.value = true
}
const confirm = () => {
    openConfirmCart.value = false
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