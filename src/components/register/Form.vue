<script setup lang="ts">
import { useLoginForm } from '~/composables/auth/useRegisterForm'
const emit = defineEmits(['successfulRegister'])

const {
  username,
  password,
  passwordElement,
  passwordFocus,
  usernameErrors,
  passwordErrors,
  isFetching,
  submitForm,
  buttonClass,
  modalTitle
} = useLoginForm()

</script>


<template>
  <form class=" pt-5 pb-[90px]" @submit.prevent="">
    <div class="flex flex-col">
      <label class="text-[16px] my-2" for="user-name">شماره همراه یا ایمیل</label>
      <UiFormInputMaterialInput v-model="username" id="user-name" type="text" :error="usernameErrors"
        placeholder="شماره همراه یا ایمیل خود را وارد کنید" />
    </div>
    <div class="mt-[20px] flex flex-col">
      <label class="text-[16px] my-2" for="password"> رمز عبور</label>
      <UiFormInputMaterialInput type="text" id="password" :focus="passwordFocus" ref="passwordElement"
        :error="passwordErrors" v-model="password" placeholder="رمز عبور خود را وارد کنید" />
    </div>
    <button @click="submitForm" v-if="!isFetching" :class="buttonClass"
      class="w-full py-[0.438rem] font-semibold leading-[2.313rem] bg-[#262626] rounded-[8px] mt-10 text-[#676767] text-[20px]">
      ثبت نام
    </button>
    <button v-else
      class="dash w-full mt-10 py-[0.688rem] text-[#ff7028] bg-[#262626] text-base font-bold leading-[1.813rem] rounded-[8px] ">
      در حال پردازش ...
    </button>
  </form>


  <dialog id="my_modal_2" class="modal">
    <div
      class="modal-box  sm:p-[50px] bg-[#171717] sm:bglogin w-[350px] sm:w-[500px] rounded-[36px] h-[430px] sm:h-[500px]">
      <div class="">
        <div class="mt-[20px] flex flex-col w-full">
          <label class="text-[14px] text-[#fff] my-2" for="">
            {{ modalTitle }}
          </label>

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

</template>

<style scoped>
.dash {
  text-align: center;
  display: table;
  background: -webkit-linear-gradient(left, #ff7028 70%, transparent 70%), -webkit-linear-gradient(left, #ff7028 70%, transparent 70%), -webkit-linear-gradient(top, #ff7028 70%, transparent 70%), -webkit-linear-gradient(top, #ff7028 70%, transparent 70%);
}

.dash {
  background-size: 12px 2px, 12px 2px, 2px 12px, 2px 12px;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-position: 0 0, left bottom, 0 0, right 0;
  -webkit-animation: move 10s linear infinite;
  animation: move 20s linear infinite;
}

@-webkit-keyframes move {
  0% {
    background-position: 0 0, left bottom, 0 0, right 0;
  }

  100% {
    background-position: 1000px 0, -1000px bottom, 0 -1000px, right 1000px;
  }
}

@keyframes move {
  0% {
    background-position: 0 0, left bottom, 0 0, right 0;
  }

  100% {
    background-position: 1000px 0, -1000px bottom, 0 -1000px, right 1000px;
  }
}
</style>