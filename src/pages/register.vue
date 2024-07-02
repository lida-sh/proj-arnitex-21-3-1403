<script setup>
// w-[100%] sm:w-[50%] md:w-[50%] lg:w-[40%] xl:w-[35%] 
</script>

<template>
  <main class="flex bg-[#171717] w-full min-h-[100vh] pt-[64px] overflow-hidden">
    <RegisterMainSection class="w-full lg:max-w-[35rem] mx-auto"></RegisterMainSection>
    <div class="flex-1 hidden lg:flex relative justify-center items-center z-10 bg-black">
      <AuthFrameImg></AuthFrameImg>
    </div>
  </main>

</template>


<script>
import VOtpInput from "vue3-otp-input";
import axios from 'axios';
import Timer from '../components/auth/Timer';
export default {
  mixins: [Timer],
  data() {
    return {
      isUserHasAcc: "firstStep",
      showResendButton: false,
      email: null,
      Pass: null,
      otp: null,
      errorPass: null,
      registerloader: false,
      otp: ''
    };
  },
  computed: {
    buttonClass() {
      return {
        'bg-[#262626] text-[#676767] transition ease-in-out': !this.email || !this.Pass,
        'bg-[#FF7028] text-white transition ease-in-out': this.email && this.Pass
      };
    }
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
        email: this.email,
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
          this.isUserHasAcc = "otp";
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
        email: this.email,
      });

      const cleanedPass = this.Pass.replace(/\s+/g, '');
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
            this.isUserHasAcc = "otp";
            this.registerloader = false;
            this.startTimer();

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
      this.opt = value;
      console.log(this.opt);
      let data = JSON.stringify({
        email: this.email,
        password1: this.Pass,
        password2: this.Pass,
        otp: this.opt,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://arnitex.ir/api/v1/accounts/register-verify/",
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
          console.log(access);

        })
        .catch((error) => {
          console.log(error);
        });
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

.bgh {
  background: linear-gradient(0deg, #181818 0%, #242424 100%);
  ;
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
