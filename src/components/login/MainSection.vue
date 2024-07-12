<!-- old -->
<!-- <script setup>
import VOtpInput from "vue3-otp-input";
const isUserHasAcc = ref('firstStep')
</script>

<template>
  <div class="sm:bglogin">
    <div class="px-[2rem] lg:px-[3.2rem] xl:px-[6.25rem] flex flex-col max-w-[35rem] mx-auto pt-[2.5rem] text-[#fff]">
      <div class=" w-full flex justify-center items-center mt-10">
        <p class="text-[12px] sm:text-[11px] md:text-[11px] lg:text-[12px]"> مطمئن شوید در دامنه <span
            class="text-[#FF7028] mx-1 cursor-pointer">https://arnitex.ir</span> هستید </p>
      </div>

      <div class="w-full mt-[50px]">
        <AuthIconArnitex></AuthIconArnitex>
      </div>

      <form v-if="isUserHasAcc == 'firstStep'" class="mt-[50px]">
        <p class="text-[24px]">ورود به آرنیتکس</p>
        <div class="mt-[20px] flex flex-col">
          <label class="text-[16px] my-2" for="">شماره همراه یا ایمیل</label>
          <input v-model="Username" type="text" placeholder="شماره همراه یا ایمیل خود را وارد کنید"
            class="bg-[#262626] focus:ring-0 focus:border-gray-600 h-[58px] p-3 border-solid border-[2px] border-[#676767] rounded-[8px] placeholder-[#676767] text-[14px]">
        </div>
        <div class="mt-[20px] flex flex-col">
          <label class="text-[16px] my-2" for=""> رمز عبور</label>
          <input type="text" :class="{ 'error-border': errorPass }" v-model="Password"
            placeholder="رمز عبور خود را وارد کنید"
            class="bg-[#262626] focus:ring-0 focus:border-gray-600 h-[58px] p-3 border-solid border-[2px] border-[#676767] rounded-[8px] placeholder-[#676767] text-[14px]">
          <span class="text-[#EA3C53] text-[14px] mt-3" v-if="errorPass">{{ this.errorPass }}</span>
        </div>

        <button @click="sendOTP" v-if="registerloader == false" :class="buttonActive"
          class="w-full h-[45px] sm:h-[51px] bg-[#262626] rounded-[8px] mt-5  text-[#676767] text-[20px]">
          ادامه
        </button>

        <div v-else class="bg-[#262626] mt-5   rounded-[8px] ">
          <button class="indicator-loader sm:h-[51px] text-[20px]  rounded-[8px] ">
            در حال پردازش ...
          </button>
        </div>

      </form>

      <form v-if="isUserHasAcc == 'forget'" class="mt-[50px]">
        <AuthForgetpassword></AuthForgetpassword>
      </form>

      <dialog id="my_modal_2" class="modal">
        <div
          class="modal-box  sm:p-[50px] bg-[#171717] sm:bglogin w-[350px] sm:w-[500px] rounded-[36px] h-[430px] sm:h-[500px]">
          <div v-if="isUserHasAccMob == 'otpMob'">
            <div class="flex w-full justify-between items-center">
              <p class="text-[24px]">ورود به آرنیتکس</p>
              <span class="text-[12px] text-[#FF7028] cursor-pointer">ویرایش شماره همراه</span>
            </div>
            <div class="mt-[20px] flex flex-col w-full">
              <label class="text-[14px] my-2" for="">کد ۵ رقمی به شماره تلفن شما ارسال شد</label>

              <div dir="ltr" class="flex justify-center mt-5 items-center">
                <v-otp-input ref="otpInput" input-classes="otp-input w-[45px] h-[60px] sm:w-[54px] sm:h-[70px]"
                  :conditionalClass="['one', 'two', 'three', 'four']" :num-inputs="5" :should-auto-focus="true"
                  :should-focus-order="true" @on-complete="handleOnComplete" />
              </div>

            </div>
            <div class=" w-full flex flex-col h-[60px] justify-center items-end">
              <div v-if="timer > 0">{{ formattedTimer }}</div>
              <button class="text-[#FF7028]" @click="sendLoginOtpAgain" v-else v-show="showResendButton">
                ارسال مجدد کد
              </button>
            </div>

            <button class="w-full h-[45px] sm:h-[51px] bg-[#262626] rounded-[8px] mt-5  text-[#676767] text-[22px]">
              ادامه
            </button>
          </div>

        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <div v-if="isUserHasAcc == 'firstStep'">
        <div class="w-full h-[100px] flex flex-col justify-center items-center">
          <span class="text-[14px] cursor-pointer text-[#FF7028]" @click="forgetpassword">رمز عبور خود را
            فراموش کردم</span>
        </div>
        <div class="flex mt-2 pb-10 gap-8 w-full justify-center items-center">
          <p class="text-[14px] text-[#676767]">حساب کاربری ندارید ؟</p>
          <router-link to="/register">
            <p class="text-[16px] sm:text-[13px] md:text-[16px] text-[#FF7028] cursor-pointer">ثبت نام
              کنید
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style> -->





<!-- New -->


<script setup>
</script>

<template>
  <div class="sm:bglogin">
    <div class="px-[2rem] lg:px-[3.2rem] xl:px-[6.25rem] flex flex-col max-w-[35rem] mx-auto pt-[2.5rem] text-[#fff]">
      <div class="w-full">
        <AuthIconArnitex></AuthIconArnitex>
      </div>
      <div class="mt-[50px]" v-if="forgetShow == 'firstStep'">
        <div class="flex w-full justify-between items-center">
          <p class="text-[24px]"> ورود به آرنیتکس</p>
        </div>

        <LoginForm></LoginForm>


        <div class="w-full h-[100px] flex flex-col justify-center items-center">
          <span class="text-[14px] cursor-pointer text-[#FF7028]" @click="forgetpassword">رمز عبور خود را
            فراموش کردم</span>
        </div>
        <div class="flex mt-2 pb-10 gap-8 w-full justify-center items-center">
          <p class="text-[14px] text-[#676767]">حساب کاربری ندارید ؟</p>
          <router-link to="/register">
            <p class="text-[16px] sm:text-[13px] md:text-[16px] text-[#FF7028] cursor-pointer">ثبت نام
              کنید
            </p>
          </router-link>
        </div>



        <div class="w-full flex justify-center items-center mb-[2.5rem] ">
          <p class="text-[0.875rem] font-normal"> مطمئن شوید در دامنه
            <a href="https://arnitex.ir" class="text-[#FF7028] mx-1 cursor-pointer">https://arnitex.ir</a>
            هستید
          </p>
        </div>

      </div>
      <form v-if="forgetShow == 'Password'" class="mt-[50px]">
        <AuthForgetpassword></AuthForgetpassword>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      PasswordType: "Password",
      forgetShow: "firstStep",

    };
  },
  methods: {
    forgetpassword() {
      this.forgetShow = "Password";
    }

  },
};
</script>

<style scoped></style>
