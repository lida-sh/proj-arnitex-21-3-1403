<script setup lang="ts">
import { useRegisterForm } from '~/composables/auth/useRegisterForm';
import { useRegisterVerify } from '~/composables/auth/useRegisterVerify';
import VOtpInput from "vue3-otp-input";

const emit = defineEmits(['successfulRegister'])
const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null);


const {
  username,
  password,
  passwordElement,
  passwordFocus,
  usernameErrors,
  passwordErrors,
  isFetching: registerFetching,
  submitForm,
  modalTitle,
  enableButton,
  backendError,
  resendOTP: resendOTPRegister
} = useRegisterForm(otpInput);

const {
  verifyCodeModel,
  verifyEnableButton,
  isFetching,
  submitRegisterVerify,
  backendError: verifyBackendError
} = useRegisterVerify(password, username)

const resendOTP = () => {
  resendOTPRegister();
  verifyBackendError.value = "";
}
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
      <UiFormInputMaterialInput type="password" id="password" :focus="passwordFocus" ref="passwordElement"
        :error="passwordErrors" v-model="password" placeholder="رمز عبور خود را وارد کنید" />
    </div>

    <div class="mt-7">
      <div class="text-red-400 mb-2">
        {{ backendError }}
      </div>
      <UiButtonSubmitButton @submit="submitForm" :enableStyle="enableButton" :loading="registerFetching">
        <template #default>
          ثبت نام
        </template>
        <template v-slot:loading>
          در حال پردازش ...
        </template>
      </UiButtonSubmitButton>
    </div>
  </form>

  <dialog id="my_modal_2" class="modal">
    <div class="modal-box  sm:p-[50px] bg-[#171717] sm:bglogin w-[350px] sm:w-[500px] rounded-[36px] ">
      <div class="">
        <div class="mt-[20px] flex flex-col w-full">
          <label class="text-[14px] text-[#fff] my-2" for="">
            {{ modalTitle }}
          </label>

          <div dir="ltr" class="flex justify-center mt-5 items-center">
            <v-otp-input ref="otpInput"
              input-classes="otp-input focus:border-white w-[45px] h-[60px] sm:w-[54px] sm:h-[70px]"
              :conditionalClass="['one', 'two', 'three', 'four']" :num-inputs="5" :should-auto-focus="true"
              :should-focus-order="true" @on-change="" @on-complete="submitRegisterVerify" v-model:value="verifyCodeModel" />
          </div>
        </div>
        <div class="text-red-400 mt-4">
          {{ verifyBackendError }}
        </div>

        <div class="w-full flex flex-col h-[60px] justify-center mt-2 items-end">
          <!-- <div v-if="timer > 0">{{ formattedTimer }}</div> -->

          <button class="text-[#FF7028]" @click="resendOTP">
            ارسال مجدد کد
          </button>
        </div>

        <div class="mt-10">
          <UiButtonSubmitButton @submit="submitRegisterVerify" :loading="isFetching" :enableStyle="verifyEnableButton">
            <template #default>
              ادامه
            </template>
            <template v-slot:loading>
              در حال پردازش ...
            </template>
          </UiButtonSubmitButton>
        </div>

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