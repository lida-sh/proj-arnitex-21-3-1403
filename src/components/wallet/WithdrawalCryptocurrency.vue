<template>
  <div class="flex-1 pb-[100px]">
    <div class="w-full text-[#fff] z-[100] relative">
      <div class="w-full flex gap-12 ">
        <div class="flex-1 px-8">
          <div class="pb-7 relative">
            <p class="text-[16px] leading-[28px] font-normal pb-2">انتخاب ارز دیجیتال</p>
            <div class="relative">
              <input type="text" name="" id=""
                class="bg-[#000] w-full h-[56px] rounded-2xl border-[#676767] focus:border-white focus:ring-0">
              <IconsDashboardArrowBig class="cursor-pointer left-4 absolute top-1/2 -translate-y-1/2">
              </IconsDashboardArrowBig>
            </div>
          </div>

          <div class="pb-7 relative">
            <p class="text-[16px] leading-[28px] font-normal pb-2"> میزان برداشت (BTC)</p>

            <div class="relative">
              <input type="text" name="" id="" placeholder="نوع شبکه را انتخاب کنید."
                class="bg-[#000] w-full h-[56px] rounded-2xl border-[#676767] focus:border-white focus:ring-0">
              <span
                class="cursor-pointer left-4 absolute top-1/2 -translate-y-1/2 text-[16px] font-normal leading-[22px]">BTC</span>
            </div>
          </div>

          <div class="pb-7 relative">
            <p class="text-[16px] leading-[28px] font-normal pb-2"> نوع شبکه</p>
            <div class="relative">
              <input type="text" name="" id="" placeholder="نوع شبکه را انتخاب کنید."
                class="bg-[#000] w-full h-[56px] rounded-2xl border-[#676767] focus:border-white focus:ring-0">
              <div class="cursor-pointer left-4 py-2 px-1 absolute top-1/2 -translate-y-1/2">
                <IconsDashboardArrowBig></IconsDashboardArrowBig>
              </div>

              
            </div>

          </div>

          <div class="pb-7">
            <p class="text-[16px] leading-[28px] font-normal pb-2"> آدرس مقصد</p>

            <input type="text" name="" id=""
              class="bg-[#000] w-full h-[56px] rounded-2xl border-[#676767] placeholder-[#676767] focus:border-white focus:ring-0"
              placeholder="آدرس کیف پول مقصد را وارد کنید.">
          </div>

          <div class="bg-[#FF7028] h-[56px] rounded-[16px] flex items-center justify-center cursor-pointer">
            <p class="text-[16px] font-medium leading-[24px]">درخواست برداشت </p>
          </div>
          <div class="flex pt-7 items-baseline gap-3">
            <span class="w-[10px] h-[10px] bg-[#FF7028] rounded-full"></span>
            <p class="text-[14px] font-medium leading-[20px] "> برای انتخاب نوع شبکه بررسی کنید کیف‌ پول مقصد از شبکه
              انتخابی پشتیبانی می‌کند.</p>
          </div>
          <div class="flex pt-7 items-baseline gap-3">
            <span class="w-[10px] h-[10px] bg-[#FF7028] rounded-full"></span>
            <p class="flex-1 text-[14px] font-medium leading-[20px] "> درصورت بروز هرگونه اشتباه، مسئولیت آن با خود
              کاربر است.
              بنابراین، آدرس مقصد و نوع شبکه را چک کنید تا از صحت آن مطمئن شوید.
               </p>
          </div>
        </div>
        <div class="flex-1 py-3 px-3 h-[160px]">
          <div class="bg-[#171717] rounded-3xl py-[1.625rem] px-[2.875rem]">
            <h2
              class="text-base text-white font-medium leading-6 mb-[10px] underline decoration-[#FF7028] underline-offset-8">
              راهنما</h2>
            <UiStepper :list="listStep" class-item="text-xs"></UiStepper>
          </div>
          <div class="w-full pt-8">
            <AppCollaps class="!px-6" noStyleBg
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

          <div class="w-full pt-6">
            <AppCollaps class="!px-6" noStyleBg
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
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
const listStep = [
  // {title: "برای دریافت شناسه واریز برای مبالغ بیشتر از ۲۵ میلیون تومان ابتدا گزینه ساختن شناسه‌ی جدید را کلیک کنید."},
  { title: " رمز ارز مورد نظر را انتخاب کرده و مبلغ را وارد کنید." },
  { title: " آدرس مقصد (آدرس کیف‌ پول گیرنده) را وارد کنید." },
  { title: "کد یکبار مصرف برداشت به شماره تلفن یا آدرس ایمیل شما ارسال می‌شود؛ آن را وارد نمایید." },
  { title: "سفارش شما، در صف بررسی قرار می‌گیرد." },
]


</script>

<style scoped>
.dropdown-toggle {
  padding: 10px;
  height: 56px;
  border: 1px solid #676767;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.dropdown-menu {
  border: 1px solid #ccc;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  background-color: rgb(24, 23, 23);

}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.dropdown-item:hover {
  background-color: #3b3b3b;
}

.crypto-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>