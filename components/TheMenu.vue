<template>
  <div class="bg-[#171717] w-full h-auto">
    <div
    id="the-menu"
    class="flex justify-between items-center px-10 py-2.5 bg-[#171717] text-white shadow-lg 3xl:text-sm h-16 w-[95rem] mx-auto"
  >
    <div class="flex items-center">
      <!-- <div class="w-[4.5rem] h-full flex items-center justify-center">
        <img src="~/assets/images/setting.png" alt="setting" class="h-6 w-6" />
      </div> -->
      <section>
        <button class="block lg:hidden">
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
              @click="toggleMenu(index)"
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
                class="absolute invisible opacity-0 h-0 right-0 w-[10.5rem] top-11 overflow-hidden border-x-[0.75px] border-b-[1.25px] rounded-b-lg border-[#676767] text-white z-30"
                :id="`menu-${index}`" :ref="(el) => setChildrenRef(el, index)"
              >
                <template
                  v-for="(subMenu, i) in item.subMenu"
                  :key="`sub-menu-${i}`"
                >
                  <div
                    class="w-full h-12 bg-black px-[1.6rem] py-3 bg-opacity-50 backdrop-blur-xl hover:bg-[#343434] text-sm"
                  >
                    {{ subMenu.title }}
                  </div>
                </template>
              </div>
            </div>
          </router-link>
        </div>
      </section>
      <div class="w-[12.5rem] h-[2.625rem] relative">
      <input
        type="text"
        class="h-full w-full rounded-md bg-[#262626] px-4 focus:border-gray-600 focus:ring-0 text-gray-100 border-[#676767]"
        placeholder="جستجوی رمز ارز"
      />
      <img src="~/assets/images/zoom.png" class="absolute top-3 left-4" />
    </div>
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
  </div>
  
</template>

<script setup lang="ts">
const target = ref(null);
const childrenRef = ref<Element[]>([]);
    const setChildrenRef = (el: Element, index: number) => {
      if (el) childrenRef.value[index] = el;
    };
// import { useEventListener, useDebounceFn, onClickOutside } from "@vueuse/core";
// import { useRoute } from "vue-router";
// import { useMenuByRef } from "~~/composables/useMenuByRef";
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
let menu = [false, false, false, false];
let menu1 = false;
// start useMenu //
const menuAnimationArray = ref<any>([]);
let menuAnimation0: any;
let menuAnimation1: any;
let menuAnimation2: any;
let menuAnimation3: any;

const setAnimation = () => {
  // for(let i = 0; i< 4; i++){
  //   let menuAnimation:any
  //   menuAnimation.gsap.to("#menu-"+i, {
  //   autoAlpha: 1,
  //   height: "auto",
  //   overflow: "hidden",
  //   paused: true,
  //   duration: 0.5,
  // });
  // menuAnimationArray.value.push(menuAnimation)
  // }
  menuAnimation0 = gsap.to("#menu-0", {
    autoAlpha: 1,
    height: "auto",
    overflow: "hidden",
    paused: true,
    duration: 0.5,
  });
  menuAnimation1 = gsap.to("#menu-1", {
    autoAlpha: 1,
    height: "auto",
    overflow: "hidden",
    paused: true,
    duration: 0.5,
  });
  menuAnimation2 = gsap.to("#menu-2", {
    autoAlpha: 1,
    height: "auto",
    overflow: "hidden",
    paused: true,
    duration: 0.5,
  });
  menuAnimation3 = gsap.to("#menu-3", {
    autoAlpha: 1,
    height: "auto",
    overflow: "hidden",
    paused: true,
    duration: 0.5,
  });
};
const removeProps = () => {
  gsap.set("#menu-0", { clearProps: "all" });
  gsap.set("#menu-1", { clearProps: "all" });
  gsap.set("#menu-2", { clearProps: "all" });
  gsap.set("#menu-3", { clearProps: "all" });
};
onMounted(async () => {
  await nextTick();
  setAnimation();
});
const toggleMenu = (index: number) => {
  // if (menuAnimationArray[index].progress() === 0) {
  //   menuAnimationArray[index]?.play();
  //   } else {
  //     menuAnimationArray[index]?.reverse();
  //   }
  if (index == 0) {
    if (menuAnimation0.progress() === 0) {
      menuAnimation0?.play();
      menuAnimation1?.reverse();
      menuAnimation2?.reverse();
      menuAnimation3?.reverse();
    } else {
      menuAnimation0?.reverse();
    }
  }
  if (index == 1) {
    if (menuAnimation1.progress() === 0) {
      menuAnimation1?.play();
      menuAnimation0?.reverse();
      menuAnimation2?.reverse();
      menuAnimation3?.reverse();
    } else {
      menuAnimation1?.reverse();
    }
  }
  if (index == 2) {
    if (menuAnimation2.progress() === 0) {
      menuAnimation2?.play();
      menuAnimation0?.reverse();
      menuAnimation1?.reverse();
      menuAnimation3?.reverse();
    } else {
      menuAnimation2?.reverse();
    }
  }
  if (index == 3) {
    if (menuAnimation3.progress() === 0) {
      menuAnimation3?.play();
      menuAnimation0?.reverse();
      menuAnimation1?.reverse();
      menuAnimation2?.reverse();
    } else {
      menuAnimation3?.reverse();
    }
  }
};
//@ts-ignor
// let ref0:ref
// ref0.value = document.getElementById("menu-0");
// const ref1 = document.getElementById("menu-1");
// const ref2 = document.getElementById("menu-2");
// const ref3 = document.getElementById("menu-3");
// onClickOutside(document.getElementById("menu-0"), () => {
//   menuAnimation0?.reverse();
// });
// for(let i = 0; i< 4; i++){
onClickOutside(childrenRef[0], () => {
    menuAnimation1?.reverse()
    menuAnimation2?.reverse()
    menuAnimation3?.reverse() 
});
onClickOutside(childrenRef[1], () => {
    menuAnimation0?.reverse()
    menuAnimation2?.reverse()
    menuAnimation3?.reverse()
});
onClickOutside(childrenRef[2], () => {
    menuAnimation0?.reverse()
    menuAnimation1?.reverse()
    menuAnimation3?.reverse()
});
onClickOutside(childrenRef[3], () => {
    menuAnimation0?.reverse()
    menuAnimation1?.reverse()
    menuAnimation2?.reverse()
});
// onClickOutside(ref2, () => {
//   menuAnimation0?.reverse();
// });
// onClickOutside(ref3, () => {
//   menuAnimation0?.reverse();
// });

// const openMenu = (index: number) => {
//   console.log(index)
//   if(index == 0){

//     menu1 = true;
//   }

// for(let i=0; i < menu.length; i++){
//   menu[i] = false
// }
// menu[index] = true
// console.log(menu)
// };
// const { refMenu_0, refMenu_1, refMenu_2, refMenu_3, toggleMenu } = useMenuByRef();
</script>

<style scoped></style>
