<script setup lang="ts">
import { isEmailOrIranianPhoneNumber } from '~/utils/validationUtils'
const route = useRoute()
const router = useRouter()
const username = ref<null | string>(null)
const passwordElement = ref(null)
const passwordFocus = ref(false)

onMounted(() => {
  const routValue = route.query.u || ''
  if (routValue !== '') {
    const { u, ...queryWithoutNumber } = route.query
    router.replace({ query: queryWithoutNumber })
  }
  if (isEmailOrIranianPhoneNumber(`${routValue}`)) {
    username.value = `${routValue}`
    passwordFocus.value = true
  }
})

const password = ref<null | string>(null)
const passwordError = ref<string>('')
const loading = ref<boolean>(false)

const submitForm = () => {

}

const buttonActive = computed(() => {
  return {
    'bg-[#262626] text-[#676767] transition ease-in-out': !username || !password,
    'bg-[#FF7028] text-white transition ease-in-out': username && password
  };
})
</script>

<template>
  <form class=" pt-5 pb-[90px]" @submit.prevent="">
    <div class="flex flex-col">
      <label class="text-[16px] my-2" for="user-name">شماره همراه یا ایمیل</label>
      <UiFormInputMaterialInput v-model="username" id="user-name" type="text"
        placeholder="شماره همراه یا ایمیل خود را وارد کنید" />
    </div>
    <div class="mt-[20px] flex flex-col">
      <label class="text-[16px] my-2" for="password"> رمز عبور</label>
      <UiFormInputMaterialInput type="text" id="password" :focus="passwordFocus" ref="passwordElement"
        :class="{ 'error-border': passwordError }" :error="passwordError" v-model="password"
        placeholder="رمز عبور خود را وارد کنید" />
    </div>

    <button @click="submitForm" v-if="!loading" :class="buttonActive"
      class="w-full h-[45px] sm:h-[51px] bg-[#262626] rounded-[8px] mt-5  text-[#676767] text-[20px]">
      ثبت نام
    </button>

    <div v-else class="bg-[#262626] mt-5   rounded-[8px] ">
      <button class="indicator-loader sm:h-[51px] text-[20px] rounded-[8px] ">
        در حال پردازش ...
      </button>
    </div>
  </form>
</template>

<style scoped></style>