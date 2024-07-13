<template>
    <div class="hidden xl:block overflow-clip w-full bg-black">
        <div class="w-full max-w-[100rem] pt-[5rem] mx-auto gap-2 2xl:gap-[1.25rem] px-2 flex items-start pb-20">
            <DashboardMenuBar class="sticky top-20 max-w-[16.5rem] min-w-[13rem] dashboard-card w-full">
            </DashboardMenuBar>
            <main class="flex flex-col flex-1 gap-2 2xl:gap-[1.25rem]">
                <WalletWithdrawlIndex></WalletWithdrawlIndex>
            </main>
        </div>
    </div>

    <div class="w-full bg-black block xl:hidden overflow-hidden">
        <div class="pt-[1.5rem] px-[1rem] flex flex-col gap-[0.5rem] max-w-[800px] mx-auto">
            <WalletWithdrawlIndexMob></WalletWithdrawlIndexMob>
        </div>
    </div>



</template>
<script setup>

definePageMeta({
    layout: "dashboard",
});

useHead({
    title: 'آرنیتکس | داشبور',
})

</script>
<style></style>
