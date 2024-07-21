<script setup lang="ts">

import DashboardMenuDrawer from "~/components/icons/DashboardMenuDrawer.vue"
import DashboardMenuWallet from "~/components/icons/DashboardMenuWallet.vue"
import DashboardMenuUserAdd from "~/components/icons/DashboardMenuUserAdd.vue"
import DashboardMenuAward from "~/components/icons/DashboardMenuAward.vue"
import DashboardMenuProfile from "~/components/icons/DashboardMenuProfile.vue"
import DashboardMenuSetting from "~/components/icons/DashboardMenuSetting.vue"

const router = useRouter();

interface MenuItem {
  id: number,
  title: string,
  selected: boolean,
  callBack: Function,
}

const menuList = ref([
  {
    id: 1,
    title: "داشبورد",
    path: 'dashboard',
    selected: false,
    hasSubmenu: false,
    isSubmenuOpen: false,
    submenu: [],
    callBack: (item: any) => {
      router.push('/dashboard')
    }
  },
  {
    id: 2,
    title: "کیف پول",
    path: 'wallet',
    selected: false,
    hasSubmenu: true,
    isSubmenuOpen: false,
    submenu: [
      {
        title: "دارایی‌ها",
        to: "/wallet/assets"
      },
      {
        title: "واریز",
        to: "/wallet/deposit"
      },
      {
        title: "برداشت",
        to: "/wallet/withdraw"
      },
      {
        title: "حساب‌های بانکی",
        to: "/"
      },
      {
        title: "پورتفوی حساب",
        to: "/wallet/portfolio"
      },
      {
        title: "تاریخچه",
        to: "/"
      },
    ],
    link: '/',
    callBack: (item: any) => {
      item.isSubmenuOpen = !item.isSubmenuOpen
      // router.push('/dashboard/deposit')
    }
  },
  {
    id: 3,
    title: "دعوت از دوستان",
    selected: false,
    hasSubmenu: false,
    isSubmenuOpen: false,
    submenu: [],
    callBack: (item: any) => {
      // menuList.value[0].hasSubmenu = !menuList.value[0].hasSubmenu
    }
  },
  {
    id: 4,
    title: "پاداش‌ها",
    selected: false,
    hasSubmenu: false,
    isSubmenuOpen: false,
    submenu: [],
    callBack: (item: any) => {
      // menuList.value[0].hasSubmenu = !menuList.value[0].hasSubmenu
    }
  },
  {
    id: 5,
    title: "پروفایل",
    selected: false,
    hasSubmenu: true,
    isSubmenuOpen: false,
    submenu: [
      {
        title: "احراز هویت",
        to: "/"
      },
      {
        title: "امنیت",
        to: "/"
      },
    ],
    callBack: (item: any) => {
      item.isSubmenuOpen = !item.isSubmenuOpen
      // router.push('/dashboard/deposit')
    }
  },
  {
    id: 6,
    title: "تنظیمات",
    selected: false,
    hasSubmenu: false,
    isSubmenuOpen: false,
    submenu: [],
    callBack: (item: any) => {
      // menuList.value[0].hasSubmenu = !menuList.value[0].hasSubmenu
    }
  },
])

const icons = [
  {
    id: 1,
    component: DashboardMenuDrawer
  },
  {
    id: 2,
    component: DashboardMenuWallet
  },
  {
    id: 3,
    component: DashboardMenuUserAdd
  },
  {
    id: 4,
    component: DashboardMenuAward
  },
  {
    id: 5,
    component: DashboardMenuProfile
  },
  {
    id: 6,
    component: DashboardMenuSetting
  },
]


const getIcon = (id: number) => {
  return icons.find((object) => {
    return object.id === id
  })?.component;
}

const route = useRoute()

watch(
  () => route.path,
  (newPath) => {
    // get the first path of the route		
    const firstPath = newPath.split('/')[1];

    // search for the menu item that has the same path as the firstPath
    const menuItem = menuList.value.find((item) => item.path === firstPath)

    // if the menu item is found
    if (menuItem) {
      // set the selected property of the menu item to true

      menuItem.selected = true
      menuItem.isSubmenuOpen = true
      // set the selected property of the other menu items to false
      menuList.value.forEach((item) => {
        if (item !== menuItem) {
          item.selected = false
        }
      })
    }
  },
  {
    immediate: true
  }
)

</script>

<template>
  <aside>
    <ul class="text-white dashboard-menu py-[1.5rem] text-sm font-bold z-50 flex flex-col gap-4">

      <template v-for="(item, index) in menuList" :key="item">
        <li>
          <div :class="{ 'selected-dashboard-item': item.selected && !item.hasSubmenu }"
            class="dashboard-item cursor-pointer pl-[1.375rem] gap-4 flex">
            <button class="flex flex-1 items-center gap-[0.625rem] rounded-lg h-12 justify-between"
              @click="item.callBack(item)">
              <div class="flex items-center gap-[0.625rem] ">
                <component :is="getIcon(item.id)"></component>
                <span class="font-bold text-sm leading-[1.625rem]">{{ item.title }}</span>
              </div>
              <IconsDashboardArrowDown v-if="item.hasSubmenu" :class="{ 'sub-menu-arrow-open': item.isSubmenuOpen }"
                class="sub-menu-arrow">
              </IconsDashboardArrowDown>
            </button>
          </div>

          <UiCollapse class="block" :is-open="item.isSubmenuOpen">
            <ul>
              <li v-for="(submenuItem, index) in item.submenu" :key="submenuItem.title">

                <NuxtLink :to="submenuItem.to" :class="{ 'selected-dashboard-item': route.path === submenuItem.to }"
                  class="dashboard-item font-normal cursor-pointer gap-14 h-12 items-center flex">
                  {{ submenuItem.title }}
                </NuxtLink>
              </li>
            </ul>

          </UiCollapse>
        </li>
      </template>

    </ul>
  </aside>
</template>

<style>
.dashboard-item::before {
  align-self: stretch;
  content: "";
  width: 4px;
  display: inline-block;
  border-radius: 2px 0px 0px 2px;
  background: linear-gradient(180deg, #00000000 0%, #00000000 100%);
}

.dashboard-item:hover {
  background: #252525;
}

/* .dashboard-item:hover::before {
	background: linear-gradient(180deg, #686868 0%, #686868 100%);
} */

.selected-dashboard-item::before {
  background: linear-gradient(180deg, #FF7028 0%, #994318 100%) !important;
}

.selected-dashboard-item {
  color: #FF7028;
}

.sub-menu-arrow {
  transition: transform 0.3s ease-in;
  transform: rotate(0);

}

.sub-menu-arrow-open {
  transform: rotate(180deg);
}
</style>