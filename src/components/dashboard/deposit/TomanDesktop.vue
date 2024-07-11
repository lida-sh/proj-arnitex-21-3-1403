<template>
    <div class="">
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
            <button @click="plusCart" class="w-[6.563rem] h-[2.563rem] border border-[#FF7028] rounded-lg">
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
    </div>
    <AppModal v-model="openPlusCart">
        <div class=" flex flex-col items-center justify-center px-[5.688rem] py-[2.688rem] w-full gap-6">
            <div class="flex flex-col items-center justify-center gap-[2.063rem] w-full">
                <label class="text-base text-white font-bold">افزودن شماره کارت</label>
                <input
                    class="rtl h-[3.5rem] w-full border border-[#676767] focus:ring-0 focus:border-[#676767] text-base font-normal leading-7 text-[#676767] bg-black rounded-lg ">
                </input>
            </div>
            <div class="flex flex-col items-center justify-center gap-[2.063rem] w-full mb-[2.563rem]">
                <h3 class="text-base text-white font-bold leading-[29px]">افزودن شماره شبا</h3>
                <input
                    class="rtl h-[3.5rem] w-full border border-[#676767] focus:ring-0 focus:border-[#676767] text-base font-normal leading-7 text-[#676767] bg-black rounded-lg ">
                </input>
            </div>
            <button @click="confirmCart" class="text-base text-white bg-[#FF7028] w-full h-[3.5rem] rounded-2xl">ثبت
                شماره کارت</button>
        </div>
    </AppModal>
    <AppModal v-model="openConfirmCart" title="تایید اطلاعات">
        <div class="flex flex-col px-[6.688rem] py-[2.688rem] w-full gap-[1.063rem]">
            <div class="flex items-between justify-between w-full">
            <h6 class="text-base text-[#A8A8A8] font-normal leading-[29px]">افزودن شماره کارت</h6>
            <h6 class="text-base text-white font-normal leading-[29px]">6037967552963355</h6>
        </div>
        <div class="flex items-between justify-between w-full">
            <h6 class="text-base text-[#A8A8A8] font-normal leading-[29px]">شماره شبا</h6>
            <h6 class="text-base text-white font-normal leading-[29px]">IR570190000000337906588002</h6>
        </div>
        <div class="flex items-between justify-between w-full">
            <h6 class="text-base text-[#A8A8A8] font-normal leading-[29px]">بانک صادر کننده</h6>
            <h6 class="text-base text-white font-normal leading-[29px]">صادرات</h6>
        </div>
        <div class="flex items-between justify-between w-full">
            <h6 class="text-base text-[#A8A8A8] font-normal leading-[29px]">صاحب حساب</h6>
            <h6 class="text-base text-white font-normal leading-[29px]">حسن قادری</h6>
        </div>
        <button @click="confirm" class="text-base text-white bg-[#FF7028] w-full h-[3.5rem] rounded-2xl">تایید</button>
        

        
        </div>
    </AppModal>
</template>
<script setup>
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
const confirm = ()=>{
    openConfirmCart.value = false
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