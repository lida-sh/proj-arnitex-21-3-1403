<template>
    <div>
        <div class="w-full pt-3">
            <WalletPortfolioCollap noStyleBg
                :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl  h-[4.5rem]']" :withTitleIcon="false">
                <template #title="{ isOpen }">
                    <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                        <h3 class="text-[16px] font-medium leading-[26px] text-[#A8A8A8]"> درصد سود و زیان</h3>
                        <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                        <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                    </div>
                </template>
                <div class="flex justify-between items-center pt-8 font-normal pb-[1.063rem] rounded-b-3xl">
                    <p class="text-[#A8A8A8] text-[14px]">در ۱۸۰ روز گذشته</p>
                    <p class="text-[#5CBC76] text-[20px]">+۱۶۷.۸۷۷</p>
                </div>

                <div class="flex justify-between items-center font-normal pb-[1.063rem] rounded-b-3xl">
                    <p class="text-[#A8A8A8] text-[14px]">در ۹۰ روز گذشته</p>
                    <p class="text-[#5CBC76] text-[20px]">+۱۶۷.۸۷۷</p>
                </div>

                <div class="flex justify-between items-center font-normal pb-[1.063rem] rounded-b-3xl">
                    <p class="text-[#A8A8A8] text-[14px]">در ۳۰ روز گذشته</p>
                    <p class="text-[#EA3C53] text-[20px]">-۲۵.۹۸۷</p>
                </div>

            </WalletPortfolioCollap>
        </div>
        <div class="w-full pt-6">
            <WalletPortfolioCollap noStyleBg
                :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl  h-[4.5rem]']" :withTitleIcon="false">
                <template #title="{ isOpen }">
                    <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                        <h3 class="text-[16px] font-medium leading-[26px] text-[#A8A8A8]"> درصد موفقیت</h3>
                        <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                        <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                    </div>
                </template>
                <div class="flex w-full justify-center items-center pt-8 font-normal pb-[1.063rem] rounded-b-3xl">
                    <p class="text-[#5CBC76] text-[20px]">+۴۳.۸۸</p>
                </div>
            </WalletPortfolioCollap>
        </div>


        <div class="w-full pt-6">
            <WalletPortfolioCollap noStyleBg
                :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl  h-[4.5rem]']" :withTitleIcon="false">
                <template #title="{ isOpen }">
                    <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                        <h3 class="text-[16px] font-medium leading-[26px] text-[#A8A8A8]"> تعداد کل معاملات</h3>
                        <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                        <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                    </div>
                </template>
                <div class="flex justify-between items-center pt-8 font-normal pb-[1.063rem] rounded-b-3xl">
                    <p class="text-[#A8A8A8] text-[14px]"> سود کرده</p>
                    <p class="text-[20px]"> ۲۳ تا</p>
                </div>

                <div class="flex justify-between items-center font-normal pb-[1.063rem] rounded-b-3xl">
                    <p class="text-[#A8A8A8] text-[14px]"> ضرر کرده</p>
                    <p class="text-[20px]">۱۲ تا</p>
                </div>

            </WalletPortfolioCollap>
        </div>

        <div class="w-full pt-6">
            <WalletPortfolioCollap noStyleBg
                :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl  h-[4.5rem]']" :withTitleIcon="false">
                <template #title="{ isOpen }">
                    <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                        <h3 class="text-[16px] font-medium leading-[26px] text-[#A8A8A8]">میانگین سود و ضرر هر معامله
                        </h3>
                        <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                        <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                    </div>
                </template>
                <div class="flex flex-col pt-8 font-normal pb-[1.063rem] rounded-b-3xl">
                    <p class="text-[#A8A8A8] text-[14px]"> میانگین سود در هر معامله</p>
                    <p class="text-[#5CBC76] text-[14px] justify-end flex pt-3"> ۴۱.۱۳٪ (+ ۵.۴۵۶.۹۰۰ )</p>
                </div>

                <div class="flex flex-col font-normal pb-[1.063rem] rounded-b-3xl">
                    <p class="text-[#A8A8A8] text-[14px]"> میانگین سود در هر معامله</p>
                    <p class="text-[#EA3C53] text-[14px] justify-end flex pt-3"> ۴۱.۱۳٪ (+ ۵.۴۵۶.۹۰۰ )</p>
                </div>
            </WalletPortfolioCollap>
        </div>

        <div class="w-full pt-6">
            <WalletPortfolioCollap noStyleBg
                :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
                :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl  h-[4.5rem]']" :withTitleIcon="false">
                <template #title="{ isOpen }">
                    <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                        <h3 class="text-[16px] font-medium leading-[26px] text-[#A8A8A8]">میانگین زمانی </h3>
                        <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                        <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                    </div>
                </template>
                <div class="flex flex-col pt-8 font-normal pb-[1.063rem] rounded-b-3xl">
                    <p class="text-[#A8A8A8] text-[16px]"> میانگین ساعتی که هر معامله باز بوده:</p>
                    <p class="text-[#5CBC76] text-[20px] justify-end flex pt-3"> ۲۲ H</p>
                </div>

                <div class="flex flex-col font-normal pb-[1.063rem] rounded-b-3xl">
                    <p class="text-[#A8A8A8] text-[16px]"> تعداد روزهایی که معامله کرده‌اید:</p>
                    <p class="text-[#5CBC76] text-[20px] justify-end flex pt-3"> ۱۷۸ روز</p>
                </div>

                <div class="flex flex-col font-normal pb-[1.063rem] rounded-b-3xl">
                    <p class="text-[#A8A8A8] text-[16px]"> آخرین تایمی که معامله کرده‌اید:</p>
                    <p class="text-[13px] justify-end flex pt-3">۱۴۰۲-۰۶-۱۲ ۲۱:۳۸</p>
                </div>
            </WalletPortfolioCollap>
        </div>
    </div>
</template>