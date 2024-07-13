<template>
    <div class="w-full bg-black">
        <!-- <div class="w-full pt-[5rem] mx-auto gap-2 2xl:gap-[1.25rem] px-2 flex items-start"> -->
        <main class="flex flex-col flex-1 pt-[0.938rem]">
            <div
                class="h-[3.5rem] bg-[#171717] flex items-center justify-center text-white text-base font-normal leading-7">
                <span class=""> واریز تومان</span>
                <IconsDashboardDepositArrowRight class="absolute y-1/2 right-[1.143rem]">
                </IconsDashboardDepositArrowRight>
            </div>
            <div class="w-[25.313rem] mt-[0.938rem] px-[1.438rem]">
                <UiButtonTabButtonDashboard class="flex-1 flex-row-reverse" :list="data" v-model="TabIndex">
                </UiButtonTabButtonDashboard>
            </div>
           <DashboardDepositTomanMob v-if="TabIndex == 1"></DashboardDepositTomanMob>

           <DashboardDepositIdMob v-if="TabIndex == 0"></DashboardDepositIdMob >

        </main>
        <!-- </div> -->
    </div>
    
</template>
<script setup lang="ts">

const TabIndex = ref(1)

const data = ref([
    {
        id: 0,
        title: "واریز با شناسه"
    }, {
        id: 1,
        title: "واریز با تومان"
    }
])
const depositAmount = ref(null)
const openPlusCart = ref(false);
const openConfirmCart = ref(false)
const setDepositAmount = (value) => {
    depositAmount.value = value
}
const plusCart = () => {
    openPlusCart.value = true
};
const confirmCart = () => {
    openPlusCart.value = false
    openConfirmCart.value = true
}
const confirm = () => {
    openConfirmCart.value = false
}
const detailsRowDeposits = ref<boolean[]>([]);
const openDetailsOfDeposits = (index: number) => {
    if (detailsRowDeposits.value[index] === false) {
        for (let i = 0; i <= 6; i++) {
            detailsRowDeposits.value[i] = false;
        }
        detailsRowDeposits.value[index] = true;
    } else {
        for (let i = 0; i <= 6; i++) {
            detailsRowDeposits.value[i] = false;
        }
    }

}
onMounted(()=>{
    console.log(TabIndex.value)
})

</script>
<style scoped>


select {
    background-position: left 1.5rem center
}

select>option {
    font-size: 11px;
    font-weight: normal;
    display: block;
    color: #676767;
    /* min-height: 1.2em; */
    padding: 0px 0px 1px;
    white-space: nowrap;
    direction: rtl;
}

input {
    font-size: 16px;
}

.numDir {
    direction: ltr;
}

.ltrDir {
    direction: ltr;
}
</style>