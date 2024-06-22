<script setup>
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
    <div class="w-full max-w-[95rem] mx-auto h-full z-10 px-[6.25rem] py-[3.125rem]">
      <FooterNav :data="data" class="hidden lg:block"></FooterNav>
      <FooterNavMob :data="data" class="lg:hidden block"></FooterNavMob>

      <div class="flex flex-col-reverse lg:flex-row items-center justify-between mt-24">
        <h6 class="text-xs font-normal text-[#676767]">تمامی حقوق برای آرنیتکس محفوظ می باشد</h6>
        <div class="flex flex-col items-center">

          <div class="flex items-center">
            <div
              class="w-[7.25rem] h-[2.625rem] border-[#676767] border flex items-center justify-between px-4 py-2.5 rounded-md ml-3">
              <span class="text-base font-thin text-white">فارسی</span>
              <div class="h-5 w-5">
                <img src="~/assets/images/Vector.png" alt="" class="">
              </div>
            </div>

            <div class="w-[3.75rem] h-[1.875rem] border-none  lg:border-l ml-[1.625rem] flex items-center justify-center">
              <img src="~/assets/images/moon.png" alt="" class="w-5 h-5">
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-30 h-4 flex items-center justify-center">
              <img src="~/assets/images/arnitex.png" alt="" class="">
            </div>
            <div class="h-16 w-[4.5rem] flex items-center justify-center">
              <img src="~/assets/images/logo.png" alt="" class="w-8 h-7">
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>