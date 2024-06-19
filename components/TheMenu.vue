<template>
  <div class="bg-[#171717] w-screen h-14 sm:h-16 relative">
    <div
      id="the-menu"
      class="flex justify-between items-center px-[1.44rem] sm:px-[2.87rem] py-2.5 bg-[#171717] text-white shadow-lg text-sm h-full w-full"
    >
      <div class="flex items-center w-auto lg:w-[47.5rem]">
        <!-- <div class="w-[4.5rem] h-full flex items-center justify-center">
        <img src="~/assets/images/setting.png" alt="setting" class="h-6 w-6" />
      </div> -->
        <section class="w-auto">
          <button class="block lg:hidden" @click="toggleMenu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div
            ref="target"
            class="absolute shadow-lg z-20 right-0 top-0 h-[36.625rem] w-auto invisible lg:visible flex flex-col lg:flex-row items-center bg-[#171717] lg:space-x-2 lg:space-x-reverse lg:divide-none lg:static lg:bg-transparent lg:rounded-none lg:shadow-none lg:border-none lg:mt-0 lg:h-auto"
          >
            <div class="flex">
              <div
                class="w-[4.375rem] h-[3.5rem] flex items-center justify-center lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                >
                  <rect
                    x="4.22168"
                    y="-0.191406"
                    width="24"
                    height="2"
                    rx="1"
                    transform="rotate(45 4.22168 -0.191406)"
                    fill="#D9D9D9"
                  />
                  <rect
                    x="11"
                    y="8"
                    width="2"
                    height="2"
                    rx="1"
                    fill="#D9D9D9"
                  />
                  <rect
                    x="2.80762"
                    y="16.7773"
                    width="24"
                    height="2"
                    rx="1"
                    transform="rotate(-45 2.80762 16.7773)"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
              <div class="flex gap-[0.38rem] pl-[1.25rem] py-[0.44rem]">
                <div
                  class="flex items-center justify-center h-[2.625rem] w-[12.5rem] relative lg:hidden"
                >
                  <input
                    type="text"
                    class="h-full w-full rounded-md bg-[#262626] px-4 focus:border-gray-600 focus:ring-0 text-gray-100 border-0"
                    placeholder="جستجوی رمز ارز"
                  />
                  <img
                    src="~/assets/images/zoom.png"
                    class="h-5 w-5 absolute top-3 left-4"
                  />
                </div>
              </div>
            </div>

            <router-link
              v-for="(item, index) in links"
              :key="`menu-${index}`"
              :to="item.to"
              class="w-full lg:w-auto py-3 pr-4"
            >
              <div
                class="flex items-center justify-center gap-[1.12rem] relative w-[7.375rem] hover:text-[#FF7028]"
                @click="toggleSubMenu(index)"
              >
                <div class="text-sm">
                  {{ item.title }}
                </div>
                <div class="" v-if="item.child">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    class="size-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>

                <div
                :class="{'max-h-96':(menu[index]&&item.child)}"
                  class="absolute right-0 w-[10.5rem] top-11 overflow-hidden bg-[#171717] rounded-b-[0.625rem] text-white z-30"
                  :id="`menu-${index}`"
                  v-if="menu[index] && item.child"
                  

                >
                  <template
                    v-for="(subMenu, i) in item.subMenu"
                    :key="`sub-menu-${i}`"
                  >
                    <div
                      class="w-full h-12 bg-black px-[1.6rem] py-3 bg-opacity-50 backdrop-blur-xl hover:bg-[#343434] text-sm hover:text-[#FF7028]"
                    >
                      {{ subMenu.title }}
                    </div>
                  </template>
                </div>
              </div>
            </router-link>
          </div>
        </section>
        <div
          class="flex items-center h-14 w-14 justify-center lg:mr-0 lg:w-[12.5rem] lg:h-[2.625rem] relative mr-[1.94rem]"
        >
          <input
            type="text"
            class="hidden lg:block lg:h-full lg:w-full lg:rounded-md lg:bg-[#262626] lg:px-4 lg:focus:border-gray-600 lg:focus:ring-0 lg:text-gray-100 border-0 placeholder:text-sm"
            placeholder="جستجوی رمز ارز"
          />
          <img
            src="~/assets/images/zoom.png"
            class="h-5 w-5 relative lg:absolute lg:top-3 lg:left-4"
          />
        </div>
      </div>

      <section class="">
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
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
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
    to: "/",
    child: true,
    subMenu: [
      { title: "خرید", to: "/" },
      { title: "فروش", to: "/" },
    ],
  },
  {
    title: "معامله",
    to: "/",
    child: true,
    subMenu: [
      { title: "ساده", to: "/" },
      { title: "پیشرفته", to: "/" },
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
