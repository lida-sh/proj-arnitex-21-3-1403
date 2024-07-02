<script setup>
import VOtpInput from "vue3-otp-input";

</script>

<template>
  <div class="sm:bglogin">
    <div class="px-[2rem] lg:px-[3.2rem] xl:px-[6.25rem] flex flex-col max-w-[35rem] mx-auto pt-[2.5rem] text-[#fff]">


      <div class="w-full">
        <AuthIconArnitex></AuthIconArnitex>
      </div>


      <div class="mt-[50px]">
        <div class="flex w-full justify-between items-center">
          <p class="text-[24px]"> ثبت نام در آرنیتکس</p>

          <router-link to="/login">
            <span class="text-[12px] text-[#FF7028] cursor-pointer"> ورود به آرنیتکس</span>
          </router-link>
        </div>

        <RegisterForm></RegisterForm>

        <div class="w-full flex justify-center items-center mb-[2.5rem] ">
          <p class="text-[0.875rem] font-normal"> مطمئن شوید در دامنه
            <a href="https://arnitex.ir" class="text-[#FF7028] mx-1 cursor-pointer">https://arnitex.ir</a>
            هستید
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped></style>