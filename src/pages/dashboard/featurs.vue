<template>
    <div class="px-4 pt-[1.563rem] pb-[60rem] w-full h-screen bg-black flex flex-col gap-[0.563rem]">

       <div v-for="feature in featurs" class="w-full bg-[#171717] rounded-lg py-2 flex flex-col">
        <h2 class="text-base font-normal leading-7 text-white mr-[1.313rem] mt-2">{{feature.title}}</h2>
        <div class="grid grid-cols-4 p-3 gap-4">
          <div v-for="subFeature in feature.subFeaturs" class="flex flex-col items-center justify-center gap-3">
            <component :is="subFeature.icon"/>
            <h6 class="text-white text-xs font-normal leading-[22px]">{{ subFeature.subTitle }}</h6>
          </div>
        </div>
       </div>
    </div>
</template>
<script setup>
import IconsDashboardSimpleTradeNav from "~/components/icons/dashboard/SimpleTradeNav.vue"
import IconsDashboardComplexTradeNav from "~/components/icons/dashboard/ComplexTradeNav.vue"
import IconsDashboardAccrualTradeNav from "~/components/icons/dashboard/AccrualTradeNav.vue"
import IconsDashboardCopyTradeNav from "~/components/icons/dashboard/CopyTradeNav.vue"
import IconsDashboardDepositNav from "~/components/icons/dashboard/DepositNav.vue"
import IconsMarkets from "~/components/icons/dashboard/Markets.vue"
import IconsOrders from "~/components/icons/dashboard/Orders.vue"
import IconsCalculator from "~/components/icons/dashboard/Calculator.vue"
import IconsAuthentication from "~/components/icons/dashboard/Authentication.vue"
import IconsSecurity from "~/components/icons/dashboard/Security.vue"
import IconsDeposit from "~/components/icons/dashboard/Deposit.vue"
import IconsHarvest from "~/components/icons/dashboard/Harvest.vue"
import IconsAssets from "~/components/icons/dashboard/Assets.vue"
import IconsHistory from "~/components/icons/dashboard/History.vue"
import IconsVerifiedAccounts from "~/components/icons/dashboard/VerifiedAccounts.vue"
import IconsPortfolio from "~/components/icons/dashboard/Portfolio.vue"
import IconsFAQs from "~/components/icons/dashboard/FAQs.vue"
import IconsInviteFriends from "~/components/icons/dashboard/InviteFriends.vue"
import IconsSettings from "~/components/icons/dashboard/Settings.vue"
import IconsAccademy from "~/components/icons/dashboard/Accademy.vue"
import IconsSupport from "~/components/icons/dashboard/Support.vue"
definePageMeta({
  layout: "dashboard",
});
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
const featurs = [
    {
        title: "معامله",
        subFeaturs: [
      { subTitle: "معامله ساده", to: "/", icon:IconsDashboardSimpleTradeNav },
      { subTitle: "معامله پیشرفته ", to: "/", icon:IconsDashboardComplexTradeNav },
      { subTitle: "معامله تعهدی ", to: "/",icon:IconsDashboardAccrualTradeNav },
      { subTitle: "کپی ترید", to: "/",icon:IconsDashboardCopyTradeNav },
      { subTitle: "بازارها", to: "/",icon:IconsMarkets },
      { subTitle: "سفارشات", to: "/",icon:IconsOrders },
      { subTitle: "ماشین حساب ", to: "/",icon: IconsCalculator},
    ]},
    {
        title: "کیف پول",
        subFeaturs: [
      { subTitle: "واریز", to: "/", icon:IconsDeposit },
      { subTitle: "برداشت", to: "/", icon:IconsHarvest },
      { subTitle: "تاریخچه", to: "/", icon:IconsHistory },
      { subTitle: "دارایی‌ها", to: "/", icon:IconsAssets },
      { subTitle: "پورتفولیو", to: "/", icon:IconsPortfolio },
      { subTitle: "حساب‌های بانکی", to: "/", icon:IconsVerifiedAccounts },
    ]
    },
    {
        title: "پروفایل",
        subFeaturs: [
      { subTitle: "امنیت", to: "/", icon:IconsSecurity },
      { subTitle: "احراز هویت", to: "/", icon:IconsAuthentication },
    ]
    },
    {
        title: "راهنما و پشتیبانی",
        subFeaturs: [
      { subTitle: "سوالات متداول", to: "/", icon:IconsFAQs },
      { subTitle: "دعوت از دوستان", to: "/", icon:IconsInviteFriends },
      { subTitle: "تنظیمات", to: "/", icon:IconsSettings },
      { subTitle: "آکامی", to: "/", icon:IconsAccademy },
      { subTitle: "پشتیبانی", to: "/", icon:IconsSupport },
    ]
    },
    ];
</script>
