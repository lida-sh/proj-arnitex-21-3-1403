<script setup>
import FooterLang from '../icons/FooterLang.vue';


const data = {
  quickAccess: {
    title: "دسترسی سریع",
    list:
      [
        {
          title: "صفحه‌ی اصلی",
          path: "/",
          linkType: "inner"
        },
        {
          title: "احراز هویت و سطوح کاربری",
          path: "/",
          linkType: "inner"
        },
        {
          title: "راهنمای ثبت نام",
          path: "/",
          linkType: "inner"
        },
        {
          title: "بازارهای رمز ارز دیجیتال",
          path: "/",
          linkType: "inner"
        },
        {
          title: "دانلود اپلیکیشن",
          path: "/",
          linkType: "inner"
        },
        {
          title: "کارمزد آرنیتکس",
          path: "/",
          linkType: "inner"
        },
      ]
  },
  info: {
    title: "آرنیتکس",
    list:
      [
        {
          title: "درباره ما",
          path: "/",
          linkType: ""
        },
        {
          title: "موقعیت شغلی",
          path: "/",
          linkType: ""
        },
        {
          title: "قوانین و مقررات",
          path: "/",
          linkType: ""
        },
      ]
  },
  academy: {
    title: "آکادمی",
    list:
      [
        {
          title: "اخبار",
          path: "/",
          linkType: ""
        },
        {
          title: "مقالات",
          path: "/",
          linkType: ""
        },
        {
          title: "فیلم های آموزشی",
          path: "/",
          linkType: ""
        },
        {
          title: "مقالات سه دقیقه ای",
          path: "/",
          linkType: ""
        },
      ]
  },
  contact: {
    title: "ارتباط با ما",
    list:
      [
        {
          title: "info@arnitex.ir",
          path: "/",
          linkType: ""
        },
        {
          title: "چت آنلاین",
          path: "/",
          linkType: ""
        },
        {
          title: "انتقادات و پیشنهادات",
          path: "/",
          linkType: ""
        },
        {
          title: "شبکه های اجتماعی",
          path: "/",
          linkType: ""
        },
      ]
  },
}
</script>

<template>
  <footer class="bg-gradient-to-b z-[49] relative from-[#262626] to-[#171717] w-full pb-4">
    <div class="c-container py-[3.125rem] pb-[8rem] lg:pb-unset z-10">
      <FooterNav :data="data" class="hidden lg:block"></FooterNav>
      <FooterNavMob :data="data" class="lg:hidden block"></FooterNavMob>

      <div class="flex flex-col-reverse lg:flex-row items-center justify-between mt-[1.875rem] lg:mt-24">
        <h6 class="text-xs leading-[1.375rem] font-normal text-[#676767]">تمامی حقوق برای آرنیتکس محفوظ می باشد</h6>

        <div class="flex flex-col-reverse lg:flex-row items-center mb-[3.125rem] lg:mb-0">
          <div class="flex items-center">
            <div
              class="w-[7.25rem] h-[2.625rem] border-[#676767] border flex items-center justify-between px-4 py-2.5 rounded-md ml-3">
              <span class="text-base font-thin text-white">فارسی</span>
              <div class="w-5">
                <FooterLang></FooterLang>
              </div>
            </div>
            <div
              class="w-[3.75rem] h-[1.875rem] border-0 lg:border-l ml-0 lg:ml-[1.625rem] flex items-center justify-center">
              <UiThemMoonFooter></UiThemMoonFooter>
            </div>
          </div>

          <NuxtLink to="/" class="w-30 flex items-center h-auto justify-center mb-[2rem] lg:mb-0">
            <IconsFooterLogo></IconsFooterLogo>
          </NuxtLink>

        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>