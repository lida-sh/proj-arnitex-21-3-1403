<script setup>
const showModal = ref(false);

</script>

<template>
  <div>
    <div class="gap-[1.5rem] flex">
      <WalletAssetsTotalInventory class="basis-[40%]"></WalletAssetsTotalInventory>
      <WalletAssetsChart class="basis-[60%]"></WalletAssetsChart>
    </div>
    <WalletAssetsCoinList class="mt-[2.5rem]"></WalletAssetsCoinList>
  </div>
</template>

<style scoped></style>