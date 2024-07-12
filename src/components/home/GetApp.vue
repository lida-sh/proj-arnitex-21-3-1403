<script setup></script>

<template>
  <section class="block">
    <div
      class="flex flex-col-reverse xl:flex-row items-center justify-between c-container py-[6.25rem]">
      <div class="items-center xl:items-start text-center xl:text-start flex flex-col gap-4 text-white">
        <h2 class="hidden xl:block text-[2.813rem] font-normal">نصب اپلیکیشن آرنیتکس</h2>
        <div class="max-w-[29.875rem] mb-[2.5rem] xl:mb-[3.125rem] mt-[2.5rem] xl:mt-0">
          <h6 class="text-base font-bold w-full leading-7">
            اپلیکیشن آرنیتکس را در گوشی خود نصب کنید، رمزارزهای مورد نظرتان را
            انتخاب و شروع به معامله کنید.
          </h6>
        </div>
        <div class="relative text-center xl:text-start">
          <button
            class="bg-[#FF7028] w-[10.625rem] h-[3.75rem] text-white font-semibold rounded-md text-[22px] relative z-20">
            نصب کنید
          </button>
          <div class="absolute h-96 w-96 -translate-x-1/2 z-[1] -translate-y-1/2 left-1/2 top-1/2 pointer-events-none">
            <UiPulsShadow></UiPulsShadow>
          </div>
        </div>
      </div>

      <div class="max-w-[51.938rem] h-auto aspect-auto relative">
        <img src="~/assets/images/devices.png" alt="tablet-laptop-and-smartphone" class="w-full h-auto relative z-20" />
        <div
          class="absolute h-[50rem] w-[60rem] -translate-x-1/2 z-[1] -translate-y-1/2 left-1/2 top-1/2 pointer-events-none">
          <UiPulsShadow></UiPulsShadow>
        </div>
      </div>
      <h2 class="text-[2.813rem] leading-[4.688rem] text-center xl:hidden z-10 mb-[3rem] text-white font-normal">نصب
        اپلیکیشن آرنیتکس</h2>
    </div>
  </section>
</template>

<style scoped></style>