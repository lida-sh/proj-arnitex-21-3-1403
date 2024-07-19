<script setup>
const showDepositModal = ref(false);

const depositCryptoCallBack = () => {
  showDepositModal.value = false;
  setTimeout(() => {
    showSelectCoinModal.value = true;
  }, 100);
}

const showSelectCoinModal = ref(false);

</script>

<template>
  <DashboardTotalAssetsMob></DashboardTotalAssetsMob>
  <div class="my-3">
    <div class="text-white bg-[#171717] px-10 py-2 rounded-2xl flex justify-between items-center">
      <span class="font-normal text-base leading-7"> پاداش: </span>
      <span class="font-semibold text-2xl leading-9"> ۵۸۰۰ </span>
      <span class="font-semibold text-sm leading-9">(ADX)</span>
    </div>

    <div class="flex gap-3 mt-2">
      <button @click="() => { showDepositModal = true }"
        class="bg-[#131313] rounded-2xl px-6 py-4 flex items-center justify-between basis-1/2">
        <IconsWalletAssetsDepositMob></IconsWalletAssetsDepositMob>
        <span class="text-white text-base leading-7 mt-[3px]">واریز</span>
      </button>
      <NuxtLink to="/wallet/withdraw"class="bg-[#131313] rounded-2xl px-6 py-4 flex items-center justify-between basis-1/2">
        <IconsWalletAssetsHarvestMob></IconsWalletAssetsHarvestMob>
        <span class="text-white text-base leading-7 mt-[3px]">برداشت</span>
      </NuxtLink>
    </div>
  </div>

  <SharedModalDepositMob v-model:showModal="showDepositModal" name="deposit" @deposit-crypto="depositCryptoCallBack"></SharedModalDepositMob>
  <SharedModalSelectCoinMob v-model:showModal="showSelectCoinModal"></SharedModalSelectCoinMob>
</template>

<style scoped></style>