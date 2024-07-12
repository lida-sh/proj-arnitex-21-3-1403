<script setup lang="ts">
import { toast } from 'vue-sonner'
import { isEmailOrPhoneNumber } from '~/utils/validationUtils'

const router = useRouter()

const inputText = ref('')
const inputPlaceHolder = "شماره همراه یا ایمیل"
const inputFocus = ref(false)
const placeholderText = computed(() => {
  return inputFocus.value ? '' : inputPlaceHolder
})

const submitForm = () => {
  let errorMessage = 'خطایی پیش آمده!'
  if (!inputText.value) {
    errorMessage = 'خطا - ورودی خالی است!'
  }
  if (isEmailOrPhoneNumber(inputText.value)) {
    router.push({ path: "/register", query: { u: `${inputText.value}` } })
    return;
  } else {
    errorMessage = 'خطا - ورودی معتبر وارد کنید!'
  }
  toast.error(errorMessage, {
    duration: 6000,
  })
}

const store = useCoinWebSocketStore()


</script>

<template>
  <section class="block">
    <div class="w-screen max-w-[95rem] mx-auto">
      <div
        class="relative w-full h-auto gap-[1.104rem] lg:flex lg:justify-between lg:pr-24 lg:pl-[5.563rem] px-4 mx-auto  py-10 sm:max-w-[38rem] lg:max-w-full">
        <!-- <div class="absolute">
        <img src="~/assets/images/Frame.png" alt="" class="">
      </div> -->
        <div class="flex flex-col justify-center items-center z-10 relative ">
          <div
            class="flex flex-col gap-[0.563rem] lg:gap-7 h-full w-full text-white z-10 justify-center items-center xl:items-start">
            <div class="text-[2.813rem] font-bold lg:text-5xl lg:font-black z-[10]">
              صرافی آرنیتکس
            </div>            
            <div class="text-base lg:text-3xl font-bold lg:font-normal lg:w-[24rem] z-10">
              بازار بین المللی خرید و فروش ارز دیجیتال
            </div>
            <div
              class="flex w-[20.5rem] lg:w-[22.5rem] h-14 mt-[3.75rem] lg:mt-[1.75rem] rounded-md text-white relative text-base z-[1]">

              <input v-model="inputText" @keyup.enter="submitForm" @focus="inputFocus = true" @blur="inputFocus = false" type="text"
                class="centered-input w-full h-full bg-[#262626] rounded-lg border-2 border-[#676767] focus:ring-0 focus:border-gray-600 text-white relative placeholder-white z-10"
                :placeholder="placeholderText" />
              <button @click="submitForm"
                class="bg-[#FF7028] relative mr-[-1.25rem] left-0 top-0 h-full w-28 flex items-center justify-center rounded-lg z-20">
                ثبت نام
              </button>
              <div class="absolute w-[34.375rem] h-[34.375rem] left-12 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                <UiPulsShadow></UiPulsShadow>
              </div>
            </div>
          </div>
          <!-- <div class="absolute w-[34.375rem] h-[34.375rem] top-48 -left-52">
            <UiPulsShadow></UiPulsShadow>
          </div> -->
        </div>
        <!-- <div class="hidden lg:col-span-9">
      <div class="w-full h-auto relative"></div>
    </div> -->
        <!-- <div class="aspect-w-40 aspect-h-21 drop-shadow-lg filter blur-[4px]">
        <figure class="overflow-hidden">
          <img class="w-full h-full" loading="lazy" :src="data.src" />
        </figure>
      </div> -->
        <div class="flex items-center justify-center mt-[2rem] lg:mt-[unset] lg:justify-end relative z-30">
          <div class="aspect-video">
            <figure class="">
              <img src="~/assets/images/123.png" alt=""
                class="relative w-[18.188rem] sm:w-full lg:w-[46.938rem] h-auto z-30" />
            </figure>

          </div>
          <div class="absolute w-full h-full top-0 left-0 -z-1">
            <UiPulsShadow></UiPulsShadow>
          </div>
          <!-- <img src="~/assets/images/Group 26086262.png" alt=""
            class="lg:hidden block h-[11.80863rem] w-[11.80863rem]" />  -->
          <!-- <div class="absolute lg:w-full lg:h-full top -left-52 -z-1">
            <UiPulsShadow></UiPulsShadow>
          </div>
          <div class="absolute lg:w-full lg:h-full -top-10 left-0 -z-1">
            <UiPulsShadow></UiPulsShadow>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.centered-input::placeholder {
  text-align: right;
  direction: rtl;
}

.centered-input {
  text-align: center;
  padding-inline-end: 1.5rem;
  width: 100%;
  box-sizing: border-box;
}
</style>
