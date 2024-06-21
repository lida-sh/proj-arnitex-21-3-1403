<script setup>
import VOtpInput from "vue3-otp-input";
</script>
<template>
  <div class="flex w-full justify-between items-center">
    <p class="text-[24px]">بازنشانی رمز عبور</p>
    <router-link to="/login">
      <span class="text-[12px] text-[#FF7028] cursor-pointer" @Click="">صفحه ی ورود</span>
    </router-link>
  </div>

  <div class="mt-[20px] flex flex-col">
    <label class="text-[16px] my-2" for="">شماره همراه یا ایمیل</label>
    <input v-model="Username" type="text" placeholder="شماره همراه یا ایمیل خود را وارد کنید"
      class="bg-[#262626] h-[58px] focus:ring-0 focus:border-gray-600 p-3 border-solid border-[2px] border-[#676767] rounded-[8px] placeholder-[#676767] text-[14px]">
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

  <div class="items-center flex justify-center mt-4">
    <span class="text-[#FFA928] text-[14px] text-center w-[320px] sm:text-[14px] relative top-3">بعد
      بعد از تغییر رمز عبور، امکان برداشت ریالی و رمز ارز را تا 24 ساعت نخواهید داشت</span>
  </div>
  <dialog id="my_modal_2" class="modal">
    <div
      class="modal-box p-[30px] sm:p-[50px] bg-[#171717] sm:bglogin w-[360px] sm:w-[500px] rounded-[36spx] h-[430px] sm:h-[500px]">
      <div class="flex w-full justify-between items-center">
        <p class="text-[24px]">بازنشانی رمز عبور</p>
        <span class="text-[12px] text-[#FF7028] cursor-pointer">ویرایش شماره همراه</span>
      </div>
      <div v-if="newPasswordAcc == 'newPassword'">
        <div class="mt-[20px] relative flex flex-col">
          <label class="text-[16px] my-2" for="">رمز عبور جدید</label>
          <input v-model="newPassword" :type="PasswordType" placeholder="رمز عبور جدید خود را وارد نمایید"
            class="bg-[#262626] focus:ring-0 focus:border-gray-600 h-[58px] p-3 border-solid border-[2px] border-[#676767] rounded-[8px] placeholder-[#676767] text-[14px]">
            <span class=" absolute text-[14px] left-3 cursor-pointer top-[60px]" @click="switchVisibility">s</span>
        </div>
        <div class="mt-[25px] flex flex-col">
          <input v-model="newPassword2" :type="PasswordType" type="text" placeholder="تکرار رمز عبور جدید"
            class="bg-[#262626] focus:ring-0 focus:border-gray-600 h-[58px] p-3 border-solid border-[2px] border-[#676767] rounded-[8px] placeholder-[#676767] text-[14px]">
        </div>

        <button @click="changepageModal" :class="buttonActive"
          class="w-full h-[45px] sm:h-[51px] bg-[#262626] rounded-[8px] mt-5  text-[#676767] text-[22px]">
          ادامه
        </button>
      </div>
      <div v-if="newPasswordAcc == 'otp'">
        <div class="mt-[20px] flex flex-col w-full">
          <label class="text-[14px] my-2" for="">کد ۵ رقمی به شماره تلفن شما ارسال شد</label>

          <div dir="ltr" class="flex justify-center mt-5 items-center">

            <v-otp-input ref="otpInput"
              input-classes="otp-input w-[45px] h-[60px] sm:w-[54px] sm:h-[70px] focus:ring-0 focus:border-gray-600"
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

        <span class="text-[#008DAC] text-[12px] sm:text-[14px] relative top-3 items-center flex justify-center">بعد
          از تکمیل نوشتار اطلاعات به طور خودکار کد بررسی شود</span>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>


<script>
import { ref } from 'vue';
// import { useAuthStore } from '~/stores/auth';
import axios from 'axios';
import Timer from './Timer';

export default {
  mixins: [Timer],
  data() {
    return {
      PasswordType: "Password",
      newPasswordAcc: "firstStep",
      showResendButton: false,
      Username: null,
      Password: null,
      otp: null,
      registerloader: false,
      newPassword: null,
      newPassword2: null,
    };
  },
  computed: {
    buttonActive() {
      return {
        'bg-[#262626] text-[#676767] transition ease-in-out': !this.Username,
        'bg-[#FF7028] text-white transition ease-in-out': this.Username
      };
    },
    buttonActiveNewPass() {
      return {
        'bg-[#262626] text-[#676767] transition ease-in-out': !this.Username,
        'bg-[#FF7028] text-white transition ease-in-out': this.Username
      };
    },
  },
  methods: {

    switchVisibility(){
      this.PasswordType = this.PasswordType === "Password" ? "text" : "Password";
    },
 
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
          // this.isUserHasAcc = "otp";
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

      if (this.Username) {
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

            this.registerloader = false;
            this.newPasswordAcc = "newPassword";
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
      }
    },

    handleOnComplete(value) {
      this.optcode = value;
      console.log(this.optcode);
      let data = JSON.stringify({
        email: this.Username,
        new_password: this.newPassword,
        otp: this.optcode,
      });


      if (this.newPassword == this.newPassword2) {
        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "https://arnitex.ir/api/v1/accounts/forget-password-verify/",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };
        axios
          .request(config)
          .then((response) => {
            console.log(response);
            // let access = response.data.access;
            // console.log(access);
            setTimeout(() => {
              window.location.reload();
            }, 2000)

          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    changepageModal(event) {
      event.preventDefault();
      if (this.newPassword == this.newPassword2) {
        this.newPasswordAcc = "otp";
        this.startTimer();
      }
    }
  },
};
</script>