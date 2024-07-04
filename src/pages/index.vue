<script setup lang="ts">

useHead({
  title: 'آرنیتکس | صفحه اصلی',
})
const { target, toggleMenu, closeMenu, openMenu, divModal } = useMenuProfile();
const test = () => {
  console.log("test")
}
</script>
<template>
  <div>
    <main class="bg-black overflow-hidden pt-[64px] relative">
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
      <HomeNavBottomNavigationWithUserProfile></HomeNavBottomNavigationWithUserProfile>
    
    </main>
  </div>
</template>

<style scoped>

</style>
