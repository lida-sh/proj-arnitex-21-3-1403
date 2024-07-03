<template>
  <div class="bg-[#171717] w-full h-14 sm:h-16 relative z-[1000]">
    <div id="the-menu"
      class="flex justify-between items-center max-w-[110rem] mx-auto px-0 sm:px-[2.87rem] py-2.5 bg-[#171717] text-white shadow-lg text-sm h-full w-full">
      <div class="flex items-center w-auto">
        <!-- <div class="w-[4.5rem] h-full flex items-center justify-center">
        <img src="~/assets/images/setting.png" alt="setting" class="h-6 w-6" />
      </div> -->
        <section class="w-auto">
          <button class="block xl:hidden py-[1.25rem] px-[1.438rem]" @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <div ref="target"
            class="fixed shadow-lg -right-[200rem] top-0 px-0 h-screen w-2/3 xl:visible flex flex-col xl:flex-row items-center bg-[#171717] xl:static xl:bg-transparent xl:rounded-none xl:shadow-none xl:border-none xl:mt-0 xl:h-auto text-sm z-50">
            <div class="flex bg-[#171717] justify-start w-full">
              <div class="w-[4.375rem] h-[3.5rem] flex items-center justify-center xl:hidden mr-0" @click="closeMenu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

              </div>
              <!-- <div class="flex gap-[0.38rem] pl-[1.25rem] py-[0.44rem]">
                <div class="flex items-center justify-center h-[2.625rem] w-[12.5rem] relative xl:hidden">
                  <input type="text"
                    class="h-full w-full rounded-md bg-[#262626] px-4 focus:border-gray-600 focus:ring-0 text-gray-100 border-0"
                    placeholder="جستجوی رمز ارز" />
                  <HeaderMobHSearch class="h-5 w-5 absolute top-3 left-4" />
                </div>
              </div> -->
            </div>

            <router-link v-for="(item, index) in links" :key="`menu-${index}`" :to="item.to"
              class=" group w-full xl:w-auto pr-0 xl:pr-4 bg-[#171717] xl:bg-transparent">
              <div
                class="flex flex-col  xl:flex-row pt-[0.5rem] xl:items-center justify-center relative w-auto xl:w-[5.938rem] hover:text-[#FF7028]"
                :class="{ 'text-[#FF7028] bg-[#343434] xl:bg-transparent': menu[index] }">
                <div class="flex items-center gap-[0.8rem] px-[1.243rem] xl:px-0 py-3">
                  <div class="text-sm">
                    {{ item.title }}
                  </div>
                  <div class="" v-if="item.child">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                      stroke="currentColor" class="size-3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>

                <div
                  class="relative xl:absolute xl:pt-12 max-h-0 group-hover:max-h-96 top-0 xl:h-auto overflow-hidden transition-all duration-300">
                  <div
                    class=" xl:right-0 w-full xl:w-[12.5rem] mt-[0.625rem] bg-[#262626] xl:bg-[#171717] overflow-hidden xl:rounded-b-[0.625rem] text-white z-50"
                    :id="`menu-${index}`">
                    <template v-for="(subMenu, i) in item.subMenu" :key="`sub-menu-${i}`">
                      <div
                        class="w-full h-12 bg-[#262626] px-[1.6rem] py-3 bg-opacity-50 backdrop-blur-xl xl:hover:bg-[#343434] text-sm hover:text-[#FF7028]">

                        <NuxtLink :to="subMenu.to">
                          {{ subMenu.title }}
                        </NuxtLink>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </section>
        <div class="flex items-center justify-center xl:mr-[2rem] xl:w-[12.5rem] h-[2.625rem] relative mr-0">
          
          <input type="text"
            class="peer h-full w-full rounded-md bg-[#262626] px-4 focus:ring-0 focus:border focus:border-[#FF7028] text-gray-100 border-0 placeholder:text-sm"
            placeholder="جستجوی رمز ارز" />
          <img src="~/assets/images/zoom.png" class="h-5 w-5 absolute top-3 left-4" />
          <div class="peer-focus:flex hidden w-14 h-14 text-white absolute left-full  bg-[#171717]  items-center justify-center z-[200]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

          </div>
          <div
            class="fixed xl:absolute  overflow-hidden max-h-0 top-14 xl:top-12 inset-x-0 xl:inset-x-auto xl:min-w-[30rem] xl:-right-1/2 peer-focus:xl:max-h-96 peer-focus:max-h-screen peer-focus:h-screen flex-col divide-[#A8A8A8] divide-y-[0.5px] bg-[#171717] px-[1.25rem] z-[200] transition-all duration-300 xl:max-w-[37.5rem]">
            <div class="flex items-center text-base font-medium  py-[0.938rem]">
              <div class="w-[3.125rem] h-[3.125rem] flex items-center justify-center">
                <img src="~/assets/images/btc.png" alt="" class="w-full h-full">
              </div>
              <h6 class="text-white mr-[0.625rem]">بیت کوین</h6>
              <span class="text-[#A8A8A8] mr-[3.063rem]">(BTC)</span>
            </div>
            <div class="flex items-center text-base font-medium py-[0.938rem]">
              <div class="w-[3.125rem] h-[3.125rem] flex items-center justify-center">
                <img src="~/assets/images/btc.png" alt="" class="w-full h-full">
              </div>
              <h6 class="text-white mr-[0.625rem]">بیت کوین</h6>
              <span class="text-[#A8A8A8] mr-[3.063rem]">(BTC)</span>
            </div>
            <div class="flex items-center text-base font-medium py-[0.938rem]">
              <div class="w-[3.125rem] h-[3.125rem] flex items-center justify-center">
                <img src="~/assets/images/btc.png" alt="" class="w-full h-full">
              </div>
              <h6 class="text-white mr-[0.625rem]">بیت کوین</h6>
              <span class="text-[#A8A8A8] mr-[3.063rem]">(BTC)</span>
            </div>
            <div class="flex items-center text-base font-medium py-[0.938rem]">
              <div class="w-[3.125rem] h-[3.125rem] flex items-center justify-center">
                <img src="~/assets/images/btc.png" alt="" class="w-full h-full">
              </div>
              <h6 class="text-white mr-[0.625rem]">بیت کوین</h6>
              <span class="text-[#A8A8A8] mr-[3.063rem]">(BTC)</span>
            </div>
          </div>
        </div>

      </div>

      <!-- <client-only>
        <button
          v-if="!authStore.isLoggedIn"
          class="btn btn-link lg:ml-4 no-animation"
          @click="() => open()"
        >
          ورود/ثبت نام
        </button>
        <template v-else>
          <the-menu-auth></the-menu-auth>
        </template>
      </client-only>  -->
      <!-- <router-link class="text-gray-600 font-bold" to="/"
        >آکادمی لند</router-link -->

      <the-menu-auth></the-menu-auth>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderMobHSearch from './icons/HeaderMobHSearch.vue';

// const childrenRef = ref<Element[]>([]);
// const setChildrenRef = (el: Element, index: number) => {
//   if (el) childrenRef.value[index] = el;
// };
// import { useEventListener, useDebounceFn, onClickOutside } from "@vueuse/core";
// import { useRoute } from "vue-router";
// import { useMenuByRef } from "~~/composables/useMenuByRef";

const links = [
  {
    title: "خرید آسان",
    to: "/trade-simple",
    child: false,

  },
  {
    title: "معامله",
    to: "",
    child: true,
    subMenu: [
      { title: "ساده", to: "/trade-simple" },
      { title: "پیشرفته", to: "/trade-adv" },
      { title: "تعهدی", to: "/" },
    ],
  },
  { title: "کپی تریدینگ", to: "/", child: false },
  {
    title: "آکادمی",
    to: "/",
    child: true,
    subMenu: [
      { title: "اخبار", to: "/" },
      { title: "مقالات 3 دقیقه ای", to: "/" },
      { title: "فیلم های آموزشی", to: "/" },
      { title: "مقالات آموزشی", to: "/" },
    ],
  },
  {
    title: "سایر",
    to: "/",
    child: true,
    subMenu: [
      { title: "ماشین حساب دیجیتال", to: "/" },
      { title: "راهنمای سایت", to: "/" },
      { title: "کارمزدها", to: "/" },
      { title: "دعوت از دوستان", to: "/" },
    ],
  },
];
const menu = ref<boolean[]>([]);
const toggleSubMenu = (index: number) => {
  if (menu.value[index] === false) {
    for (let i = 0; i <= 4; i++) {
      menu.value[i] = false;
    }
    menu.value[index] = true;
  } else {
    for (let i = 0; i <= 4; i++) {
      menu.value[i] = false;
    }
  }
};
// const closeMenu = (index: number) => {
//   console.log(index);
// };

onBeforeMount(() => {
  for (let i = 0; i <= 4; i++) {
    menu.value[i] = false;
  }
});

const { target, toggleMenu, closeMenu, openMenu } = useMenu();

</script>

<style scoped></style>
