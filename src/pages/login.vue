 

<!-- <script setup>
import VOtpInput from "vue3-otp-input";
</script>

<template>
  <div class="flex w-full min-h-[100vh]">
    <div class="w-[100%] sm:w-[50%] md:w-[50%] lg:w-[40%] xl:w-[35%] bg-[#171717] sm:bglogin">
      <div
        class=" px-[30px] sm:px-[40px] md:px-[50px] lg:px-[60px] xl:px-[50px] 2xl:px-[110px] flex flex-col text-[#fff]">
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

    <div class="w-[70%] hidden sm:flex justify-center items-center -z-10 bg-black">
      <AuthFrameImg></AuthFrameImg>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';
import axios from 'axios';
import Timer from '../components/auth/Timer';

export default {
  mixins: [Timer],
  data() {
    return {
      isUserHasAcc: "firstStep",
      isUserHasAccMob: "firstStep",
      showResendButton: false,
      Username: null,
      Password: null,
      // timer: 180,
      errorPass: null,
      otp: null,
      registerloader: false
    };
  },
  computed: {
    buttonActive() {
      return {
        'bg-[#262626] text-[#676767] transition ease-in-out': !this.Username || !this.Password,
        'bg-[#FF7028] text-white transition ease-in-out': this.Username && this.Password
      };
    },
  },
  methods: {
    // ResendOtp
    sendLoginOtpAgain() {
      this.timer = 180;
      this.showResendButton = false;
      if (this.timer > 0) {
        this.startTimer();
      }
      let data = JSON.stringify({
        email: this.Username,
      });
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://arnitex.ir/api/v1/accounts/send-otp/",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios
        .request(config)
        .then((response) => {
          console.log(response);
          this.startTimer();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    sendOTP(event) {
      event.preventDefault();
      this.errorPass = null;
      let data = JSON.stringify({
        email: this.Username,
      });

      const cleanedPass = this.Password.replace(/\s+/g, '');
      if (cleanedPass && cleanedPass.length > 7) {
        this.registerloader = true;
        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "https://arnitex.ir/api/v1/accounts/send-otp/",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };
        axios
          .request(config)
          .then((response) => {
            console.log(response);
            this.startTimer();
            this.registerloader = false;
            this.isUserHasAccMob = "otpMob";
            const modal = document.getElementById('my_modal_2');
            if (modal) {
              modal.showModal();
            }


          })
          .catch((error) => {
            console.log(error);
            this.registerloader = false;
            this.registerText = " ثبت نام";
          });
      } else {
        this.errorPass = ' رمز عبور  باید بیشتر از 8 کارکتر باشد ';
      }
    },

    handleOnComplete(value) {
      this.optcode = value;
      console.log(this.optcode);
      let data = JSON.stringify({
        email: this.Username,
        password: this.Password,
        otp: this.optcode,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://arnitex.ir/api/v1/accounts/login-verify/",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios
        .request(config)
        .then((response) => {
          console.log(response);
          let access = response.data.access;
          const authStore = useAuthStore();
          authStore.setToken(access);
          console.log('Token saved:', access);
          // console.log(access);

        })
        .catch((error) => {
          console.log(error);
        });
    },
    forgetpassword() {
      this.isUserHasAcc = "forget";

    }
  },
};
</script>
<style>
.error-border {
  border-color: #EA3C53;
}

@media (min-width: 640px) {
  .sm\:bglogin {
    background: linear-gradient(0deg, #0b0b0b 0%, #242424 100%);
    ;
  }
}


.otp-input {
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  background-color: #262626;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}

.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


.indicator-loader {
  height: 45px;
  width: 100%;
  color: #FF7028;
  background: linear-gradient(90deg, #FF7028 50%, transparent 50%), linear-gradient(90deg, #FF7028 50%, transparent 50%), linear-gradient(0deg, #FF7028 50%, transparent 50%), linear-gradient(0deg, #FF7028 50%, transparent 50%);
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 25px 3px, 25px 3px, 3px 25px, 3px 0;
  background-position: 0px 0px, 97px 42px, 0px 42px, 97px 10px;

  animation: border-dance 4s infinite linear;
}

@keyframes border-dance {
  0% {
    background-position: 0px 0px, 197px 42px, 0px 197px, 42px 0px;
  }

  100% {
    background-position: 197px 0px, 0px 42px, 0px 0px, 42px 197px;
  }
}
</style> -->




























































<template>
  <main class="flex bg-[#171717] w-full min-h-[100vh] pt-[64px] overflow-hidden">
    <LoginMainSection class="w-full lg:max-w-[35rem] mx-auto"></LoginMainSection>
    <div class="flex-1 hidden lg:flex relative justify-center items-center z-10 bg-black">
      <AuthFrameImg></AuthFrameImg>
    </div>
  </main>

</template>

<style>
.error-border {
  border-color: #EA3C53;
}

@media (min-width: 640px) {
  .sm\:bglogin {
    background: linear-gradient(0deg, #0b0b0b 0%, #242424 100%);
  }
}

.bgh {
  background: linear-gradient(0deg, #181818 0%, #242424 100%);
}

.otp-input {
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  background-color: #262626;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}

.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.indicator-loader {
  height: 45px;
  width: 100%;
  color: #FF7028;
  background: linear-gradient(90deg, #FF7028 50%, transparent 50%), linear-gradient(90deg, #FF7028 50%, transparent 50%), linear-gradient(0deg, #FF7028 50%, transparent 50%), linear-gradient(0deg, #FF7028 50%, transparent 50%);
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 25px 3px, 25px 3px, 3px 25px, 3px 0;
  background-position: 0px 0px, 97px 42px, 0px 42px, 97px 10px;

  animation: border-dance 4s infinite linear;
}

@keyframes border-dance {
  0% {
    background-position: 0px 0px, 197px 42px, 0px 197px, 42px 0px;
  }

  100% {
    background-position: 197px 0px, 0px 42px, 0px 0px, 42px 197px;
  }
}
</style>










