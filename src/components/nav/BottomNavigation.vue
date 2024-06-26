<script setup>

const activeTab = ref(1);

const startOffset = computed(() => {
  switch (activeTab.value) {
    case 1:
      return {
        width: `0px`,
      };
      break;
    case 2:
      return {
        width: `calc(25% - 31px)`,
      };
      break;
    case 3:
      return {
        width: `calc(50% - 62px)`,
      };
      break;
    case 4:
      return {
        width: `calc(75% - 91.5px)`,
      };
      break;
    case 5:
      return {
        width: `100%`,
      };
      break;
  }
  return {
    width: `calc(${10 * (2 * activeTab.value - 1)}% - (123px/2))`,
  };
});
const isActive = (index) => {
  return (index === activeTab.value) ? true : false
}
const moveActiveTo = (index) => {
  activeTab.value = index;
}
</script>

<template>
  <nav class="nav-button-container">
    <div class="z-[100] fixed bottom-0 left-0 h-[4.5rem] w-full">
      <div class="relative flex h-full">
        <span class="dd bottom-nav-back-start bg-[#171717] z-40" :style="startOffset"></span>
        <div class="z-30 relative">
          <span class="selected-circle"></span>
          <IconsBottomNavigationSelected class="indicator mx-[-2px] mb-[-1px]"></IconsBottomNavigationSelected>
        </div>
        <span class="dd bottom-nav-back-end flex-1 bg-[#171717] z-40"></span>

        <div class="absolute bottom-1 w-full px-[40px] text-white z-50">
          <ul class="flex w-full justify-between items-end">
            <li>
              <NuxtLink href="#" @click="moveActiveTo(1)" :class="{ 'bottom-nav-link-selected': isActive(1) }"
                class="nav-link">
                <IconsBottomNavigationHome></IconsBottomNavigationHome>
                <span class="nav-link-text">خانه</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink href="#" @click="moveActiveTo(2)" :class="{ 'bottom-nav-link-selected': isActive(2) }"
                class="nav-link">
                <IconsBottomNavigationMarket></IconsBottomNavigationMarket>
                <span class="nav-link-text">بازار</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink href="#" @click="moveActiveTo(3)" :class="{ 'bottom-nav-link-selected': isActive(3) }"
                class="nav-link">
                <IconsBottomNavigationTransaction></IconsBottomNavigationTransaction>
                <span class="nav-link-text">معامله</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink href="#" @click="moveActiveTo(4)" :class="{ 'bottom-nav-link-selected': isActive(4) }"
                class="nav-link">
                <IconsBottomNavigationWallet></IconsBottomNavigationWallet>
                <span class="nav-link-text">کیف پول</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" @click="moveActiveTo(5)" :class="{ 'bottom-nav-link-selected': isActive(5) }"
                class="nav-link">
                <IconsBottomNavigationProfile></IconsBottomNavigationProfile>
                <span class="nav-link-text">پروفایل</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.dd {
  border-top: 1.2px solid #FF7028;
}

.selected-circle {
  background: linear-gradient(0deg, #171717 0%, #262626 100%);
  border: 1.5px solid #FF7028;
  width: 3.5rem;
  height: 3.5rem;
  display: block;
  border-radius: 999px;
  box-shadow: 0 0 25px rgba(255, 112, 40, 50%);
  position: absolute;
  z-index: 40;
  left: 50%;
  top: 0%;
  transform: translate(-50%, -50%);
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ease-in 0.3s;
}

.nav-link-text {
  font-weight: 300;
  font-size: 0.625rem;
  line-height: 1.25rem;
}

.nav-link>* {
  transition: all ease-in 0.3s;
}

.bottom-nav-link-selected>*:nth-child(1) {
  margin-bottom: 29PX;
}

.bottom-nav-link-selected .nav-link-text {
  color: #FF7028;
}

.bottom-nav-back-start {
  transition: width ease-in 0.2s;
}

/* first
.bottom-nav-back-start {
  width: calc((10%) - (123px/2));
} */
</style>