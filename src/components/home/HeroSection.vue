<script setup>
import gsap from "gsap";
let animation;
const setAnimation = () => {
  animation = gsap.to(".puls", {
    scale: 1.5,
    ease: "power4.out",
    duration: 2,
    paused: true,
    repeat: -1,
    yoyo: true,
    scrollTrigger: ".puls",
  });
};
onMounted(() => {
  setAnimation();
  animation.play();
});
</script>

<template>
  <div class="w-screen lg:w-[95rem] lg:mx-auto">
    <div class="relative w-full h-full lg:h-[60rem] lg:flex lg:justify-between lg:pr-24 lg:pl-[5.563rem] px-4 py-6">
      <!-- <div class="absolute">
          <img src="~/assets/images/Frame.png" alt="" class="">
        </div> -->
      <div class="flex flex-col z-10 relative">
        <div class="flex flex-col gap-3 lg:gap-7 h-full w-full text-white items-start justify-center">
          <div class="h-14 w-full text-[2.8125rem] lg:text-5xl font-black">
            صرافی آرنیتکس
          </div>
          <div class="w-[20.5rem] h-32 text-[2rem] lg:text-4xl font-normal">
            بازار بین المللی خرید و فروش ارز دیجیتال
          </div>
          <div class="w-[20.5rem] lg:w-[22.5rem] h-14 relative rounded-md overflow-hidden text-white text-base">
            <input type="text"
              class="w-full h-full bg-[#262626] border-2 border-[#676767] focus:ring-0 focus:border-gray-600 text-white placeholder-white z-20"
              placeholder="شماره همراه یا ایمیل" />
            <div
              class="bg-[#FF7028] absolute left-0 top-0 h-full w-28 flex items-center justify-center rounded-md z-20">
              ثبت نام
            </div>
          </div>
        </div>
        <div class="absolute w-[34.375rem] h-[34.375rem] bg-custom-radial-end puls top-72 -left-52 -z-10"></div>
      </div>
      <!-- <div class="hidden lg:col-span-9">
            <div class="w-full h-auto relative"></div>
          </div> -->
      <div class="flex items-center justify-end relative">
        <img src="~/assets/images/123.png" alt="" class="hidden lg:block w-[46.938rem] h-[41.25rem] z-30" />
        <img src="~/assets/images/Group 26086262.png" alt="" class="lg:hidden block h-[11.80863rem] w-[11.80863rem]" />
        <div class="absolute lg:w-full lg:h-full bg-custom-radial-end -top-10 -left-52 -z-1"></div>
        <div class="absolute lg:w-full lg:h-full bg-custom-radial-end -top-10 left-0 -z-1"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
