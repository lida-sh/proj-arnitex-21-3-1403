<script setup lang="ts">

useHead({
  title: 'آرنیتکس | صفحه اصلی',
})
const { target, toggleMenu, closeMenu, openMenu, divModal } = useMenuProfile();
const test = () => {
  console.log("test")
}
import NavBottomNavigationWithUserProfile from "~/components/home/NavBottomNavigationWithUserProfile.vue";
import { useUserStore } from "~/stores/user"
const user = useUserStore();
await user.fetchUser(true)

</script>

<template>
  <div>
    <main class="bg-black overflow-hidden pt-[64px] relative">

      <HomeUserDashboard v-if="user.isAuthenticated"></HomeUserDashboard>
      <HomeHeroSection v-if="!user.isAuthenticated"></HomeHeroSection>
      <!-- <HomeTickerTradingviewWidget></HomeTickerTradingviewWidget> -->
      <HomeTickerBanner></HomeTickerBanner>
      <HomeFeaturesSection></HomeFeaturesSection>
      <HomeRealtimeCryptoPrice></HomeRealtimeCryptoPrice>
      <HomeCopyTrading2 v-if="user.isAuthenticated"></HomeCopyTrading2>
      <HomeReferral></HomeReferral>
      <HomeOurAdvantages></HomeOurAdvantages>
      <HomeFAQ></HomeFAQ>
      <HomeGetApp></HomeGetApp>
      <NavBottomNavigationWithUserProfile></NavBottomNavigationWithUserProfile>

    </main>
  </div>
</template>

<style scoped></style>
