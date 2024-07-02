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

        <dialog id="my_modal_2" class="modal">
          <div
            class="modal-box  sm:p-[50px] bg-[#171717] sm:bglogin w-[350px] sm:w-[500px] rounded-[36px] h-[430px] sm:h-[500px]">
            <div class="">
              <div class="mt-[20px] flex flex-col w-full">
                <label class="text-[14px] text-[#fff] my-2" for="">کد ۵ رقمی به شماره تلفن شما ارسال
                  شد</label>

                <div dir="ltr" class="flex justify-center mt-5 items-center">

                  <v-otp-input ref="otpInput" input-classes="otp-input w-[45px] h-[60px] sm:w-[54px] sm:h-[70px]"
                    :conditionalClass="['one', 'two', 'three', 'four']" :num-inputs="5" :should-auto-focus="true"
                    :should-focus-order="true" @on-change="handleOnChange" @on-complete="handleOnComplete" />
                </div>
              </div>
              <div class=" w-full flex flex-col h-[60px] justify-center items-end">
                <div v-if="timer > 0">{{ formattedTimer }}</div>
                <button class="text-[#FF7028]" @click="sendLoginOtpAgain" v-else v-show="showResendButton">
                  ارسال مجدد کد
                </button>
              </div>

              <button @click="OTP"
                class="w-full h-[45px] sm:h-[51px] bg-[#262626] rounded-[8px] mt-5  text-[#676767] text-[22px]">
                ادامه
              </button>
            </div>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  </div>
</template>

<style scoped></style>