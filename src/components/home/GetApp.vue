<script setup>

</script>

<template>
  <div class="flex w-[95rem] px-[6.25rem] items-center justify-between py-[6.25rem] mx-auto">
    <div class="flex flex-col gap-4 text-white">
      <h2 class="text-[2.813rem] font-normal">نصب اپلیکیشن آرنیتکس</h2>
      <div class="w-[29.875rem] mb-[3.125rem]">
        <h6 class="text-base font-bold w-full leading-7">
          اپلیکیشن آرنیتکس را در گوشی خود نصب کنید، رمزارزهای مورد نظرتان را
          انتخاب و شروع به معامله کنید.
        </h6>
      </div>
      <div class="relative">
        <button
          class="bg-[#FF7028] w-[10.625rem] h-[3.75rem] text-white font-semibold rounded-md text-[22px] relative z-20">
          نصب کنید
        </button>
        <div class="absolute h-96 w-96 bg-custom-radial-end puls -right-24 -top-48"></div>
      </div>
    </div>

    <div class="w-[51.938rem] h-[32.5rem] aspect-auto relative bg-custom-radial-end pulse">
      <img src="~/assets/images/devices.png" alt="tablet-laptop-and-smartphone" class="w-full h-auto z-20" />
    </div>
  </div>
</template>

<style scoped></style>