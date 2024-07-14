<template>
    <div class="pr-6 pl-[6.25rem]">
        <div class="grid grid-cols-2 mt-[2.313rem] gap-[5.125rem]">
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
                <div class="flex justify-end">
                    <button class="text-[#FF7028] text-base font-bold leading-[29px] h-10"><div class="flex gap-3 ">
                    <span class="">+</span>
                    <span>افزودن شماره شبا جدید</span>
                </div></button>
                </div>
                
            </div>
            <div class="bg-[#171717] rounded-3xl py-[1.625rem] px-[2.875rem]">
                <h2 class="text-base text-white font-medium leading-6 mb-[1.75rem] underline decoration-[#FF7028] underline-offset-8">راهنمای ساخت شناسه واریز</h2>
                 <UiStepper :list="listStep" class-item="text-xs"></UiStepper>
            </div>
        </div>
    </div>

</template>
<script setup>
const listStep = [
    // {title: "برای دریافت شناسه واریز برای مبالغ بیشتر از ۲۵ میلیون تومان ابتدا گزینه ساختن شناسه‌ی جدید را کلیک کنید."},
    {title: " برای دریافت شناسه واریز برای مبالغ بیش از ۲۵,۰۰۰,۰۰۰ تومان، باید گزینه «افزودن شماره شبا جدید» را انتخاب کنید. پس از آن، شناسه واریز ایجاد می‌شود و شما می‌توانید در هنگام واریز وجه از طریق روش‌های پایا، ساتنا یا حساب به حساب، این شناسه را در بخش مربوطه وارد نمایید."},
    {title: "در ادامه کارت مورد نظر برای دریافت شناسه پرداخت را انتخاب کنید یا کارت جدیدی اضافه کنید"},
    {title: "در صفحه ای که باز می شود اطلاعات شخصی خود را وارد کنید و در نهایت شناسه‌ی واریز شما ساخته می‌شود."},
    {title: "در آخر هنگام واریز وجه از روش های پایا، ساتنا و حساب به حساب حتما در بخش شناسه‌ی واریز، شناسه‌ی دریافتی خود را وارد کنید."},
]


</script>
<style scoped>
select {
    background-position: left 1.25rem center
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