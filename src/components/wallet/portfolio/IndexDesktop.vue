<template>
    <div class=" pb-7 border-b border-[#343434]">
        <div class=" px-4">
            <UiButtonTabButtonDashboard class="flex-1" :list="data" v-model="TabIndex">
            </UiButtonTabButtonDashboard>
        </div>
    </div>

    <WalletPortfolio></WalletPortfolio>
    <!-- <WalletWithdrawalCryptocurrency v-if="TabIndex == 0"></WalletWithdrawalCryptocurrency> -->
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