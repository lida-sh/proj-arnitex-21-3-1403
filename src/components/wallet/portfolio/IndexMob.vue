<template>
  <div class=" pb-3 flex justify-center items-center">
    <div class="">
      <UiButtonTabButtonDashboard class="flex-1" :list="data" v-model="TabIndex">
      </UiButtonTabButtonDashboard>
    </div>
  </div>

  <WalletPortfolioMob></WalletPortfolioMob>

</template>
<script setup>
const TabIndex = ref(0)

const data = ref([
  {
    id: 1,
    title: "اسپات"
  }, {
    id: 2,
    title: "تعهدی"
  },
])
</script>
<style lang="">

</style>