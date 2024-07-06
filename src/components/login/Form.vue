<script setup lang="ts">
import { useLoginForm } from '~/composables/auth/useLoginForm';
import { hasExactLength } from '~/utils/validationUtils'
import VOtpInput from "vue3-otp-input";
import { useFetch } from "@vueuse/core";
import { toast } from "vue-sonner";


const emit = defineEmits(['successfulRegister'])

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
  enableButton
} = useLoginForm();











const config = useRuntimeConfig();
const registerRequestBody: any = ref<any>({});


const {
  isFetching,
  error,
  data,
  execute,
  onFetchFinally,
  onFetchError,
  onFetchResponse,
} = useFetch<{ message: string; error: string }>(
  `${config.public.apiBaseURL}accounts/login-verify/`,
  { headers: { "Content-Type": "application/json;charset=UTF-8" } },
  { immediate: false, updateDataOnError: true }
)
  .post(() => JSON.stringify(registerRequestBody.value))
  .json();

onFetchResponse((response) => {
  // const modal: any = document.getElementById("my_modal_2");
  // if (modal) {
  //   modal.showModal();
  // }
  console.log(response);
});

onFetchError((error) => {
  toast.error(error.message, {
    duration: 6000,
  });
  console.error(error.message);
});





const verifyCodeModel = ref('');
const submitRegisterVerify = async () => {
  registerRequestBody.value =
  {
    password: password.value,
    // password2: password.value,
    otp: verifyCodeModel.value
  }
  if (isValidPhoneNumber(`${username.value}`)) {
    registerRequestBody.value.phone_number = `${username.value}`;
  } else if (isValidEmail(`${username.value}`)) {
    registerRequestBody.value.email = `${username.value}`;
  } else {
    return;
  }

  await execute()
  

  console.log("ffffffffffffffffffffffffffffffffff");
}
const verifyEnableButton = computed(() => {
  return hasExactLength(`${verifyCodeModel.value}`, 5)
});
console.log(`${verifyCodeModel.value}`);

</script>


<template>
  <form class=" pt-5 pb-[10px]" @submit.prevent="">
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

    <div class="mt-10">
      <UiButtonSubmitButton @submit="submitForm" :enableStyle="enableButton" :loading="registerFetching">
        <template #default>
            ادامه
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
              :should-focus-order="true" @on-change="" @on-complete="" v-model:value="verifyCodeModel" />
          </div>
        </div>

        <div class="w-full flex flex-col h-[60px] justify-center items-end">
          <!-- <div v-if="timer > 0">{{ formattedTimer }}</div> -->

          <button class="text-[#FF7028]" @click="">
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