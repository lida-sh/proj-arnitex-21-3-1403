<template>

    <div class="hidden overflow-clip w-full bg-black xl:flex flex-col flex-1 gap-2 2xl:gap-[1.25rem]">
        <WalletWithdrawIndex></WalletWithdrawIndex>
    </div>

    <div
        class="w-full bg-black xl:hidden overflow-hidden pt-[1.5rem] px-[1rem] flex-col gap-[0.5rem] max-w-[800px] mx-auto">
        <WalletWithdrawIndexMob></WalletWithdrawIndexMob>
    </div>

</template>

<script setup>

definePageMeta({
    layout: "dashboard",
});

useHead({
    title: 'آرنیتکس | برداشت',
})

</script>
<style></style>
