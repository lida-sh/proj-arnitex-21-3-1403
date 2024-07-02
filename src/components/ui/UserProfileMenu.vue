<template>
  <div class="flex flex-col gap-3 w-[15.813rem] bg-[#171717] p-4 rounded-b-lg text-white z-50">
    
    <div class="flex items-center justify-start gap-4">
      <div class="flex items-center justify-center">
        <img src="~/assets/images/user-default.svg" alt="user" class="w-16 h-16">
      </div>
      <div class="flex flex-col">
        <span class="text-sm font-bold">حسن قادری</span>
        <span class="text-[11px] font-bold text-[#EA3C53]">احراز هویت نشده</span>
      </div>
    </div>
    <NuxtLink v-for="(item, index) in links" :to="item.to" :key="index" class="w-full text-sm font-bold">
      <div class="flex items-center gap-3">
        <div v-if="item.icon" class="flex items-center justify-center">
          <component :is="item.icon" />
        </div>
        {{ item.title }}
      </div>
    </NuxtLink>

  </div>
</template>
<script setup lang="ts">
// const props = defineProps<{links:{title: string, to:string, icon: Element}[]}>()
import Dashboard from '~/components/icons/Dashboard.vue'
import HomeAuthentication from '~/components/icons/HomeAuthentication.vue'
import HomeSecurity from '~/components/icons/HomeSecurity.vue'

const links = [
  {
    title: "داشبورد",
    icon: Dashboard,
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
    icon: "",
    to: "/"

  },
  {
    title: "حساب کاربری",
    icon: "",
    to: "/"

  },
  {
    title: "کپی ترید من",
    icon: "",
    to: "/"

  },
  {
    title: "تنظیمات",
    icon: "",
    to: "/"

  },
  {
    title: "دعوت از دوستان",
    icon: "",
    to: "/"

  },
  {
    title: "خروج",
    icon: "logout-menu.svg",
    to: "/"

  },
]
</script>