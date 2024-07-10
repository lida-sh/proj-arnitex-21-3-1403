<template>
  <div class="relative transition duration-1000 flex py-2.5 gap-0 xl:gap-6 items-center">

    <div class="h-[2.125rem] px-[20px] xl:px-0 xl:h-auto border-l border-[#676767] xl:border-l-0 ">
      <div v-if="!isAuthenticated"
        class="justify-center flex w-[7.375rem] xl:w-32 h-[2.063rem] xl:h-[2.625rem] bg-[#FF7028] rounded-2xl text-xs xl:text-base">
        <NuxtLink class="flex items-center ps-3 xl:ps-3.5" to="/register">
          <div class="flex items-center justify-center pl-3 text-sm">ثبت نام</div>
        </NuxtLink>
        <NuxtLink class="flex items-center pe-3 xl:pe-3.5" to="/login">
          <div class="border-r border-white flex items-center justify-center pr-3 text-sm">
            ورود
          </div>
        </NuxtLink>
      </div>
      <div v-else class="flex items-center justify-center h-full xl:gap-[20px] ">
        <div class="flex items-center justify-center h-full relative">
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
            class="fixed xl:absolute h-0 invisible inset-x-0 xl:inset-x-auto top-12 xl:top-[2.438rem] flex flex-col w-screen xl:max-w-[37rem] bg-[#171717] py-6 px-4">
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
        <div @click="toggleMenu"
          class="hidden xl:flex items-center justify-center gap-2.5 h-full relative cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <mask id="mask0_792_125088" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
              height="24">
              <rect width="24" height="24" fill="url(#pattern0_792_125088)" />
            </mask>
            <g mask="url(#mask0_792_125088)">
              <rect width="24" height="24" fill="white" />
            </g>
            <defs>
              <pattern id="pattern0_792_125088" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_792_125088" transform="scale(0.0078125)" />
              </pattern>
              <image id="image0_792_125088" width="128" height="128"
                xlink:href="data:image/png;base64,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" />
            </defs>
          </svg>

        </div>
        <div ref="targetAuth" class="absolute h-0 invisible top-14 left-28">
          <UserProfileMenu></UserProfileMenu>
        </div>
        <IconsHeaderWallet class="hidden xl:block"></IconsHeaderWallet>

      </div>
    </div>

    <div class="hidden xl:flex xl:items-center">
      <IconsHeaderLang></IconsHeaderLang>
    </div>

    <div class="hidden xl:block">
      <UiButtonThemeSwitch></UiButtonThemeSwitch>
    </div>
    <div class="flex items-center justify-center xl:border-r xl:border-[#676767] xl:pr-6 xl:pl-0">
      <a href="/" class="hidden 2xl:block ">
        <IconsLogoDes></IconsLogoDes>
      </a>
      <NuxtLink to="/"
        class="w-16 px-[1.25rem] py-[0.5rem] xl:w-[4.5rem] 2xl:hidden h-full flex items-center justify-center">
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
