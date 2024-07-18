<template>
    <div class="flex flex-col items-center gap-4 w-full">
        <div v-for="(item, index) in items" :key="index" class="w-full px-8 py-[1.375rem] bg-[#171717] flex items-center justify-between rounded-2xl">
            <div class="flex items-center gap-8">
                <div class="px-4 py-[1.188rem] bg-[#D0D0D0] rounded-2xl">
                    <img src="~/assets/images/saderat-logo.png" alt="" class="">
                </div>
                <div class="flex flex-col gap-2 text-white">
                    <span class="text-xs font-bold leading-[16.8px]">{{ item.bankName }}</span>
                    <div class="flex gap-[1.063rem] items-center">
                        <span class="text-[10px] font-normal leading-[14px]">شماره کارت</span>
                        <span class="text-base font-normal leading-[22.4px]">{{ item.cartNumber }}</span>
                    </div>
                    <div class="flex gap-[1.063rem] items-center">
                        <span class="text-[10px] font-normal leading-[14px]">شماره شبا</span>
                        <span class="text-base font-normal leading-[22.4px]">{{ item.idNumber }}</span>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="text-xs font-normal leading-[16.8px] ">
                    <div v-if="item.status == 1" class="border border-[#5CBC76] flex items-center justify-center gap-2 w-[7.625rem] h-11 rounded-lg">
                        <IconsWalletConfirmAccount></IconsWalletConfirmAccount>
                        <span class="text-[#5CBC76]">تایید شده</span>
                    </div>
                    <div v-if="item.status == 2" class="border border-[#EA3C53] flex items-center justify-center gap-2 w-[7.625rem] h-11 rounded-lg">
                        <IconsWalletUnConfirmAccount></IconsWalletUnConfirmAccount>
                        <span class="text-[#EA3C53]">تایید نشده</span>
                    </div>
                    <div v-if="item.status == 3" class="border border-[#FFC368] flex items-center justify-center gap-2 w-[7.625rem] h-11 rounded-lg">
                        <IconsWalletPendingAccount></IconsWalletPendingAccount>
                        <span class="text-[#FFC368]">درحال بررسی</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    layout: "dashboard"
})
const items = ref<{bankLogo: string, bankName:string, cartNumber:string, idNumber:string, status: number}[]>([
    {
        bankLogo: "~/assets/images/saderat-logo.png",
        bankName: "بانک صادرات",
        cartNumber: "۶۰۳۷ - ۶۹۷۵ - ۵۲۹۷ - ۶۸۴۴",
        idNumber: "IR  ۶۰۳۷۶۹۷۵۵۲۹۷۶۸۴۴",
        status: 1
    },
    {
        bankLogo: "~/assets/images/saderat-logo.png",
        bankName: "بانک صادرات",
        cartNumber: "۶۰۳۷ - ۶۹۷۵ - ۵۲۹۷ - ۶۸۴۴",
        idNumber: "IR  ۶۰۳۷۶۹۷۵۵۲۹۷۶۸۴۴",
        status: 2
    },
    {
        bankLogo: "~/assets/images/saderat-logo.png",
        bankName: "بانک صادرات",
        cartNumber: "۶۰۳۷ - ۶۹۷۵ - ۵۲۹۷ - ۶۸۴۴",
        idNumber: "IR  ۶۰۳۷۶۹۷۵۵۲۹۷۶۸۴۴",
        status: 3
    },
])

</script>