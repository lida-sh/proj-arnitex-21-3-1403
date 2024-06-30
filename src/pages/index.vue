<script setup lang="ts">

useHead
  ({
    title: 'آرنیتکس | صفحه اصلی',
  })
</script>
<template>
  <div>
    <main class="bg-black overflow-hidden pt-[64px]">
      <!-- <HomeUserDashboard></HomeUserDashboard> -->
      <HomeHeroSection></HomeHeroSection>
      <HomeTickerTradingviewWidget></HomeTickerTradingviewWidget>
      <HomeFeaturesSection></HomeFeaturesSection>
      <HomeRealtimeCryptoPrice></HomeRealtimeCryptoPrice>
      <HomeCopyTrading></HomeCopyTrading>
      <HomeReferral></HomeReferral>
      <HomeOurAdvantages></HomeOurAdvantages>
      <HomeFAQ></HomeFAQ>
      <HomeGetApp></HomeGetApp>
      <NavBottomNavigation class="block lg:hidden"></NavBottomNavigation>
      <!-- <HomeTickerBanner></HomeTickerBanner> -->
    </main>
  </div>
</template>

<style></style>
