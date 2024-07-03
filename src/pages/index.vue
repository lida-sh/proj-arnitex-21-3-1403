<script setup lang="ts">

useHead({
    title: 'آرنیتکس | صفحه اصلی',
  })
const { target, toggleMenu, closeMenu, openMenu } = useMenuProfile();
const test = () => {
  console.log("test")
}
</script>
<template>
  <div>
    <main class="bg-black overflow-hidden pt-[64px]">
      <!-- <HomeUserDashboard></HomeUserDashboard> -->

      <HomeHeroSection></HomeHeroSection>
      <!-- <HomeTickerTradingviewWidget></HomeTickerTradingviewWidget> -->
      <HomeTickerBanner></HomeTickerBanner>
      <HomeFeaturesSection></HomeFeaturesSection>
      <HomeRealtimeCryptoPrice></HomeRealtimeCryptoPrice>
      <HomeCopyTrading></HomeCopyTrading>
      <HomeReferral></HomeReferral>
      <HomeOurAdvantages></HomeOurAdvantages>
      <HomeFAQ></HomeFAQ>
      <HomeGetApp></HomeGetApp>
      <div class="relative">
        <NavBottomNavigation class="block lg:hidden" @toggleToProfileMenu="toggleMenu"></NavBottomNavigation>

        <div ref="target"
          class="xl:hidden fixed h-screen w-screen inset-x-0 -bottom-[150rem] z-[100] flex flex-col justify-end modal">
          <div class="h-auto flex flex-col z-[200] w-screen bg-[#171717]">
            <div class="flex items-center justify-start p-4 ">
              <svg @click="closeMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6 z-[100] text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
            <UiUserProfileMenu></UiUserProfileMenu>
          </div>


        </div>
      </div>



    </main>
  </div>
</template>

<style scoped>
.modal{
  /* pointer-events: unset; */
}
</style>
