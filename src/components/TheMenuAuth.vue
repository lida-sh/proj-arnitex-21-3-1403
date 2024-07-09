<template>
  <div class="relative transition duration-1000 flex py-2.5 gap-4 xl:gap-8 items-center">
    <div class="hidden xl:flex xl:items-center">
      <div class="flex ml-[1.8rem]">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.74297 0H10.2539C11.5816 0.040625 12.9051 0.33125 14.1133 0.8875C16.2488 1.84844 18.0195 3.58711 19.027 5.70078C19.6289 6.94961 19.9508 8.32578 20 9.70977V10.2551C19.9566 11.7187 19.5988 13.1734 18.9375 14.4812C18.2637 15.8133 17.293 16.9953 16.1109 17.9074C14.9293 18.8254 13.5391 19.4754 12.0742 19.7828C11.477 19.9133 10.8672 19.9746 10.257 20H9.74375C8.20352 19.9539 6.67266 19.5598 5.31328 18.8305C3.37461 17.7988 1.78906 16.116 0.887891 14.1121C0.336328 12.9164 0.0484375 11.607 0 10.293V9.71133C0.0542969 8.00742 0.542578 6.31875 1.42539 4.85938C2.36484 3.30312 3.72969 2.00312 5.33945 1.15664C6.69063 0.433594 8.21289 0.0457031 9.74297 0ZM7.46367 1.6375C5.64844 2.18203 4.03203 3.34453 2.92109 4.87773C3.99531 5.30469 5.10586 5.6418 6.23984 5.8668C6.73047 4.25 7.51328 2.72383 8.53945 1.38164C8.17656 1.44766 7.81602 1.52773 7.46367 1.6375ZM11.4582 1.38203C12.4848 2.72383 13.2672 4.25078 13.759 5.86719C14.8941 5.64531 16.0043 5.3043 17.0793 4.8793C15.7543 3.0418 13.6953 1.75078 11.4582 1.38203ZM7.49336 6.05781C9.1543 6.27773 10.8438 6.27148 12.5055 6.06055C11.9828 4.41875 11.1223 2.8875 10.0004 1.58047C8.87774 2.88633 8.01719 4.41719 7.49336 6.05781ZM2.24453 5.96133C1.51094 7.36445 1.16367 8.96758 1.26797 10.5484C1.34062 11.7645 1.68516 12.9582 2.24141 14.0402C3.43594 13.5629 4.6668 13.1699 5.92969 12.9187C5.5293 11.0039 5.52773 9.00703 5.92891 7.09219C4.66758 6.83477 3.43633 6.44492 2.24453 5.96133ZM14.0691 7.09219C14.4727 9.00586 14.468 11.002 14.0691 12.916C15.3301 13.168 16.5625 13.5547 17.7527 14.0406C18.1902 13.207 18.4914 12.302 18.6402 11.3723C18.9387 9.53477 18.6207 7.60586 17.7527 5.95937C16.5633 6.44922 15.3297 6.83359 14.0691 7.09219ZM7.16914 12.725C9.04453 12.4676 10.9547 12.4688 12.8301 12.7246C13.2125 10.9375 13.2152 9.07031 12.8316 7.2832C12.3129 7.35469 11.7914 7.40938 11.2695 7.45078C9.90078 7.56289 8.52461 7.46914 7.1668 7.28398C6.78281 9.0707 6.78476 10.9383 7.16914 12.725ZM7.49453 13.9395C8.01641 15.5816 8.87813 17.1125 10.0004 18.4191C11.1211 17.1113 11.9828 15.5813 12.5055 13.9395C10.8441 13.7262 9.15586 13.7258 7.49453 13.9395ZM2.92109 15.1223C3.2125 15.516 3.52891 15.8918 3.88086 16.2328C5.1418 17.4805 6.79297 18.3207 8.54062 18.6184C7.51484 17.2762 6.73086 15.75 6.23984 14.1332C5.10547 14.357 3.99531 14.6949 2.92109 15.1223ZM13.7586 14.1328C13.2668 15.7492 12.484 17.2758 11.4582 18.6184C12.2215 18.4863 12.9691 18.2586 13.6707 17.9293C15.0227 17.3055 16.2039 16.3242 17.0793 15.1211C16.0039 14.6965 14.8941 14.3543 13.7586 14.1328Z"
            fill="white" />
        </svg>
      </div>
      <UiThemeToggle></UiThemeToggle>
    </div>

    <div class="h-[2.125rem] px-[2.125rem] xl:px-0 xl:h-auto border-l border-[#676767] xl:border-l-0 ">
      <div v-if="!isAuthenticated"
        class="justify-center flex w-[7.375rem] xl:w-36 h-[2.063rem] xl:h-[2.625rem] bg-[#FF7028] rounded-md text-xs xl:text-base">
        <NuxtLink class="flex items-center ps-3 xl:ps-3.5" to="/register">
          <div class="flex items-center justify-center pl-3">ثبت نام</div>
        </NuxtLink>
        <NuxtLink class="flex items-center pe-3 xl:pe-3.5" to="/login">
          <div class="border-r border-white flex items-center justify-center pr-3">
            ورود
          </div>
        </NuxtLink>
      </div>
      <div v-else class="flex items-center justify-center h-full">
        <div class="flex items-center justify-center h-full ml-[2.375rem] relative">
          <div class="" @click="toggleMenuNotif()">
            <IconsHeaderMobNotification></IconsHeaderMobNotification>
          </div>

          <div v-if="closeMenuNotification"
            class="fixed flex xl:hidden items-center justify-center right-0 top-0 w-[4.375rem] h-[3.5rem] bg-[#171717]"
            @click="closeMenuNotif">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

          </div>
          <div ref="targetNotif"
            class="fixed xl:absolute h-0 invisible inset-x-0 xl:inset-x-auto  top-12 xl:top-[2.438rem] flex flex-col w-screen xl:max-w-[37rem] bg-[#171717] py-6 px-4">
            <div class="flex items-center justify-center gap-4 ">
              <button class="w-[9.75rem] h-[3.5rem] bg-[#FF7028] flex items-center justify-center rounded-lg">همه پیام
                ها</button>
              <button class="w-[9.75rem] h-[3.5rem] bg-[#343434] flex items-center justify-center rounded-lg">خوانده
                نشده
                ها</button>
            </div>
            <div class="flex flex-col divide-y-[0.5px] divide-[#ABABAB] ">
              <div class="flex flex-col py-6">
                <span class="text-[11px]">۱۴۰۳/۰۴/۰۶ - ۱۱:۲۷</span>
                <h6 class="text-[11px] font-normal mt-1">ورود به حساب کاربری</h6>
                <p class="text-sm font-normal mt-8">دستگاهی با نام phone, iOS 17_5_1, Safari, iPhone در تاریخ 1403/04/06
                  در ساعت 11:27 وارد حساب کاربری شما شده است.</p>
              </div>
              <div class="flex flex-col py-6">
                <span class="text-[11px]">۱۴۰۳/۰۴/۰۶ - ۱۱:۲۷</span>
                <h6 class="text-[11px] font-normal mt-1">ورود به حساب کاربری</h6>
                <p class="text-sm font-normal mt-8">دستگاهی با نام phone, iOS 17_5_1, Safari, iPhone در تاریخ 1403/04/06
                  در ساعت 11:27 وارد حساب کاربری شما شده است.</p>
              </div>
              <div class="flex flex-col py-6">
                <span class="text-[11px]">۱۴۰۳/۰۴/۰۶ - ۱۱:۲۷</span>
                <h6 class="text-[11px] font-normal mt-1">ورود به حساب کاربری</h6>
                <p class="text-sm font-normal mt-8">دستگاهی با نام phone, iOS 17_5_1, Safari, iPhone در تاریخ 1403/04/06
                  در ساعت 11:27 وارد حساب کاربری شما شده است.</p>
              </div>
            </div>

          </div>
        </div>
        <div class="hidden xl:flex items-center justify-center h-full ml-[0.813rem]">
          <IconsHeaderWallet></IconsHeaderWallet>
        </div>
        <div @click="toggleMenu"
          class="hidden xl:flex items-center justify-center gap-2.5 h-full min-w-[8.625rem] relative cursor-pointer">
          <span class="text-sm font-bold">حسن قادری</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
            stroke="currentColor" class="size-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div ref="targetAuth" class="absolute h-0 invisible top-14 left-28">
          <UserProfileMenu></UserProfileMenu>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center xl:border-r xl:border-[#676767] xl:pr-6 pl-[0.44rem] xl:pl-0">
      <a href="/" class="hidden 2xl:block ">
        <IconsLogoDes></IconsLogoDes>
      </a>
      <NuxtLink to="/"
        class="w-16 px-[1.25rem] py-[0.5rem] xl:w-[4.5rem]  2xl:hidden h-full flex items-center justify-center">
        <IconsHeaderMobLogo></IconsHeaderMobLogo>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import UserProfileMenu from './ui/UserProfileMenu.vue';

import { useUserStore } from "~/stores/user"
const user = useUserStore();
await user.fetchUser();

const isAuthenticated = computed(() => {
  return user.isAuthenticated
})


const { toggleMenu, closeMenu, targetAuth } = useMenuAuth()
const { targetNotif, toggleMenuNotif, closeMenuNotif, openMenuNotif, closeMenuNotification } = useMenuNotif()
</script>
