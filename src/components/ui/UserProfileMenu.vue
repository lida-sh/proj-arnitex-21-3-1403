<template>
  <div class="flex flex-col gap-3 w-[20.375rem] bg-[#171717] p-4 pb-[5rem] pt-6 rounded-b-lg text-white z-50 ">

    <div class="flex items-center justify-between gap-4 bg-[#262626] w-full p-4">
      <div class="flex justify-start items-center gap-4">
        <div class="flex items-center justify-center">
          <img src="~/assets/images/user-default.svg" alt="user" class="w-16 h-16">
        </div>
        <div class="flex flex-col">
          <span class="text-sm font-bold">حسن قادری</span>
          <span class="text-[11px] font-bold text-[#EA3C53]">احراز هویت نشده</span>
        </div>
        
      </div>
      <div class="flex items-center justify-center text-[#FF7028]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>

        </div>
    </div>
    <div class="flex flex-col gap-4">
      <NuxtLink v-for="(item, index) in links" :to="item.to" :key="index" class="w-full text-sm font-bold text-white z-[200] last:text-[#EA3C53]">
        <div class="flex items-center gap-3 z-[200]">
          <div class="flex items-center justify-center text-white">
          <component :is="item.icon"/>
        </div>
          {{ item.title }}
        </div>
      </NuxtLink>
      
    </div>
  </div>
</template>
<script setup>
// const props = defineProps<{links:{title: string, to:string, icon: Element}[]}>()

import DashboardMenuDrawer from '~/components/icons/DashboardMenuDrawer.vue'
import HomeAuthentication from '~/components/icons/HomeAuthentication.vue'
import HomeSecurity from '~/components/icons/HomeSecurity.vue'
import ProfileBankAccounts from '~/components/icons/ProfileBankAccounts.vue'
import ProfileUserAccount from '~/components/icons/ProfileUserAccount.vue'
import ProfileMyCopyTrade from '~/components/icons/ProfileMyCopyTrade.vue'
import ProfileSetting from '~/components/icons/ProfileSetting.vue'
import ProfileInviteFriend from '~/components/icons/ProfileInviteFriend.vue'
import ProfileSignout from '~/components/icons/ProfileSignout.vue'
import IconsDashboard  from '~/components/icons/Dashboard.vue'

const links = [
  {
    title: "داشبورد",
    icon: DashboardMenuDrawer,
    to: "/"

  },
  {
    title: "احراز هویت",
    icon: HomeAuthentication,
    to: "/"

  },
  {
    title: "امنیت",
    icon: HomeSecurity,
    to: "/"

  },
  {
    title: "حساب بانکی",
    icon: ProfileBankAccounts,
    to: "/"

  },
  {
    title: "حساب کاربری",
    icon: ProfileUserAccount,
    to: "/"

  },
  {
    title: "کپی ترید من",
    icon: ProfileMyCopyTrade,
    to: "/"

  },
  {
    title: "تنظیمات",
    icon: ProfileSetting,
    to: "/"

  },
  {
    title: "دعوت از دوستان",
    icon: ProfileInviteFriend,
    to: "/"

  },
  {
    title: "خروج",
    icon: ProfileSignout,
    to: "/"

  },
]
</script>