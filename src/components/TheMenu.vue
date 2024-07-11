<template>
  <header class="bg-[#171717] w-full h-14 sm:h-16 relative z-[1000]">
    <div id="the-menu"
      class="flex justify-between items-center max-w-[110rem] mx-auto px-0 sm:px-[2.87rem] py-2.5 bg-[#171717] text-white shadow-lg text-sm h-full w-full">
      <div class="flex items-center w-auto">
        <div class="w-auto flex xl:block self-stretch">
          <button class="block xl:hidden px-[1.25rem]" @click="toggleMenu">
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="2" rx="1" fill="#D9D9D9" />
              <rect y="7" width="24" height="2" rx="1" fill="#D9D9D9" />
              <rect y="14" width="24" height="2" rx="1" fill="#D9D9D9" />
            </svg>
          </button>

          <div ref="target"
            class="min-w-[18rem] xl:min-w-[unset] gap-2 fixed shadow-lg -right-[200rem] top-0 px-0 h-screen xl:visible flex flex-col xl:flex-row items-center bg-[#171717] xl:static xl:bg-transparent xl:rounded-none xl:shadow-none xl:border-none xl:mt-0 xl:h-auto text-sm z-50">
            <div class="flex bg-[#171717] justify-start w-full">
              <div class="w-[4.375rem] h-[3.5rem] flex items-center justify-center xl:hidden mr-0" @click="closeMenu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <div v-for="(item, index) in links" :key="`menu-${item.title}`"
              class="w-full xl:w-[unset] group flex xl:flex-row flex-col items-center xl:px-3">
              <NuxtLink :to="item.to" class="w-full xl:w-auto bg-[#171717] xl:bg-transparent cursor-pointer">
                <div
                  class="flex flex-col xl:flex-row xl:items-center justify-center relative w-auto xl: hover:text-[#FF7028]"
                  :class="{ 'text-[#FF7028] bg-[#343434] xl:bg-transparent': menu[index] }">
                  <div class="flex items-center gap-[0.8rem] px-[1.243rem] xl:px-0 py-3">
                    <div class="text-sm whitespace-nowrap">
                      {{ item.title }}
                    </div>
                    <div v-if="item.child">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                        stroke="currentColor" class="size-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </NuxtLink>
              <div
                class="relative xl:absolute self-stretch xl:top-full max-h-0 group-hover:max-h-96 xl:h-auto overflow-hidden transition-all duration-300">
                <div
                  class="xl:right-0 w-full bg-[#262626] xl:bg-[#171717] overflow-hidden xl:rounded-b-[0.625rem] text-white z-50"
                  :id="`menu-${index}`">
                  <template v-for="(subMenuItem, i) in item.subMenu" :key="`sub-menu-${subMenuItem.title}`">
                    <div>
                      <NuxtLink :to="subMenuItem.to"
                        class="w-full block h-12 bg-[#262626] px-[1.6rem] py-3 bg-opacity-50 backdrop-blur-xl xl:hover:bg-[#343434] text-sm hover:text-[#FF7028]">
                        {{ subMenuItem.title }}
                      </NuxtLink>
                    </div>
                  </template>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="hidden xl:flex items-center justify-center xl:ms-[1.375rem] h-[2.625rem] relative cursor-pointer mr-0">
          <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.8283 20.4151C21.7347 19.32 20.6411 18.2249 19.5475 17.1298C18.7995 16.3808 18.0467 15.627 17.2987 14.878L17.0336 14.6125L17.2277 14.2949C17.7769 13.4037 18.1651 12.4745 18.3876 11.5311C18.8752 9.51158 18.6811 7.38776 17.8432 5.54365C17.0526 3.76115 15.6986 2.24888 14.0274 1.28179L14.0085 1.2723C13.7907 1.13483 13.554 1.02105 13.2984 0.902533C13.1989 0.855126 13.0995 0.807719 12.9954 0.760313C10.491 -0.330041 7.56524 -0.244709 5.16501 0.997346H5.15554C2.85472 2.13511 1.06046 4.30159 0.355065 6.79518C0.137292 7.54421 0.0189368 8.3596 0 9.21292V9.52106C0.0378736 10.9385 0.374001 12.3086 0.975244 13.4795V13.489C1.86527 15.2857 3.33761 16.7743 5.1366 17.6703H5.14134C7.38534 18.8365 10.1643 18.9882 12.5693 18.0827H12.574C13.251 17.8362 13.9327 17.4806 14.6476 16.9971L14.9695 16.779L15.2441 17.054C16.1436 17.9547 17.0431 18.8554 17.9473 19.7609C18.861 20.6759 19.7747 21.5908 20.6884 22.5058C20.9583 22.7902 21.2944 22.9609 21.6305 22.9893H21.6447C22.1276 23.0509 22.6342 22.8423 22.9372 22.4678L22.9466 22.4583C23.1502 22.2213 23.2686 21.8942 23.2875 21.5387V21.496C23.2733 21.0978 23.1029 20.709 22.8141 20.4246L22.8283 20.4151ZM16.3566 10.2938C16.2099 11.4221 15.7743 12.5172 15.1021 13.4558C14.1694 14.7642 12.8107 15.7266 11.2674 16.1627C10.6377 16.3429 9.98442 16.433 9.3311 16.433C8.46947 16.433 7.61258 16.2765 6.81724 15.9684C4.71999 15.1862 3.06302 13.3563 2.49492 11.1898C1.98836 9.33144 2.28188 7.25503 3.28553 5.63846C3.82523 4.74247 4.58743 3.95552 5.48693 3.37242C6.39116 2.78458 7.41848 2.41006 8.45527 2.28681C9.85186 2.11614 11.2911 2.36266 12.5172 2.98843C13.6629 3.56205 14.6381 4.44855 15.3341 5.55313C16.2099 6.93266 16.5839 8.65826 16.3566 10.2938Z"
              fill="white" />
          </svg>
<!-- 
          <input type="text"
            class="peer h-full w-full rounded-md bg-[#262626] px-4 focus:ring-0 focus:border focus:border-[#FF7028] text-gray-100 border-0 placeholder:text-sm"
            placeholder="جستجوی رمز ارز" />
          <div
            class="peer-focus:flex hidden w-14 h-14 text-white absolute left-full  bg-[#171717]  items-center justify-center z-[200]">
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
          </div> -->
        </div>

      </div>
      <the-menu-auth></the-menu-auth>
    </div>
  </header>
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
    to: "/",
    child: true,
    subMenu: [
      { title: "ساده", to: "/trade-simple" },
      { title: "پیشرفته", to: "/trade-adv" },
      { title: "تعهدی", to: "/" },
    ],
  },
  {
    title: "کپی تریدینگ", to: "/", child: false
  },
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
