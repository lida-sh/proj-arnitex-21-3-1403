<template>
    <div class=" pb-7 border-b border-[#343434]">
        <div class=" px-4">
            <UiButtonTabButtonDashboard class="flex-1" :list="data" v-model="TabIndex">
            </UiButtonTabButtonDashboard>
        </div>
    </div>

    <WalletHarvestWallet v-if="TabIndex == 1"></WalletHarvestWallet>
    <WalletWithdrawalCryptocurrency v-if="TabIndex == 0"></WalletWithdrawalCryptocurrency>
</template>
<script setup>
const TabIndex = ref(1)

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