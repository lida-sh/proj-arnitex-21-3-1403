<template>
  <div
    id="the-menu"
    class="flex justify-between items-center px-10 py-2.5 bg-[#171717] text-white shadow-lg 3xl:text-sm h-16"
  >
    <div class="flex items-center">
      <div class="w-[4.5rem] h-full flex items-center justify-center">
        <img src="~/assets/images/setting.png" alt="setting" class="h-6 w-6" />
      </div>
      <section>
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
          class="absolute rounded-box border shadow-lg mt-3 z-20 inset-x-10 h-0 invisible lg:visible flex flex-col lg:flex-row items-center bg-white divide-y divide-gray-200 lg:space-x-2 lg:space-x-reverse lg:divide-none lg:static lg:bg-transparent lg:rounded-none lg:shadow-none lg:border-none lg:mt-0 lg:h-auto"
        >
          <router-link
            v-for="(item, index) in links"
            :key="`menu-${index}`"
            :to="item.to"
            class="w-full lg:w-auto py-3 pr-4"
          >
            <div
              class="flex items-center justify-center gap-[1.12rem] relative w-[7.375rem]"
            >
              <div class="text-sm" @click="toggleSubMenu(index)">
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
                class="absolute inset-x-0 h-0 opacity-0 invisible w-[10.5rem] top-11 overflow-hidden border-x-[0.75px] border-b-[1.25px] rounded-b-lg border-[#676767] text-white z-30"
                :id="`sub-menu-${index}`"
                v-if="item.subMenu"
              >
                <template
                  v-for="(subMenu, index) in item.subMenu"
                  :key="`sub-menu-${index}`"
                >
                  <div
                    class="w-full h-12 bg-black px-[1.6rem] py-3 bg-opacity-50 backdrop-blur-xl hover:bg-[#343434] text-sm"
                    :ref="(el) => setChildrenRef(el, index)"
                  >
                    {{ subMenu.title }}
                  </div>
                </template>
              </div>
            </div>
          </router-link>
        </div>
      </section>
    </div>

    <section class="flex items-center">
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
      </client-only> -->
      <!-- <router-link class="text-gray-600 font-bold" to="/"
        >آکادمی لند</router-link
      > -->
      <the-menu-auth></the-menu-auth>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useEventListener, useDebounceFn, onClickOutside } from "@vueuse/core";
import { useRoute } from "vue-router";
import { useMenu } from "~~/composables/useMenu";
import { gsap } from "gsap";
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
  { title: "معامله", to: "/", child: true },
  { title: "کپی تریدینگ", to: "/", child: false },
  { title: "آکادمی", to: "/", child: true },
];
const childrenRef = ref<Element[]>([]);
const setChildrenRef = (el: any, index: number) => {
  if (el) childrenRef.value[index] = el;
};
const { target, openMenu, toggleMenu } = useMenu();

// sub-menu-functions//

</script>

<style scoped></style>
