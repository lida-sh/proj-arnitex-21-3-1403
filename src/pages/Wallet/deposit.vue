<template>
    <WalletDepositMob class="block lg:hidden"></WalletDepositMob>
    <WalletDepositDesktop class="hidden lg:block overflow-hidden"></WalletDepositDesktop>
</template>
<script setup lang="ts">

definePageMeta({
    layout: "dashboard",
});
useHead({
    title: 'آرنیتکس | واریز',
})

</script>