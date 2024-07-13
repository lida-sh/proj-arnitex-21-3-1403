<template>
     <div class=" pb-3 flex justify-center items-center">
          <div class="">
            <UiButtonTabButtonDashboard class="flex-1" :list="data" v-model="TabIndex">
            </UiButtonTabButtonDashboard>
          </div>
        </div>

    <WalletHarvestWalletMob v-if="TabIndex == 1"></WalletHarvestWalletMob>
    <WalletWithdrawalCryptocurrencyMob v-if="TabIndex == 0"></WalletWithdrawalCryptocurrencyMob>
</template>
<script setup>
const TabIndex = ref(0)

const data = ref([
    {
        id: 1,
        title: "برداشت رمز ارز"
    }, {
        id: 2,
        title: "برداشت تومان"
    },
])
</script>
<style lang="">

</style>