<template>
    <div class="w-full bg-black">
        <div class="w-full max-w-[100rem] pt-[5rem] mx-auto gap-2 2xl:gap-[1.25rem] px-2 flex items-start">
            <DashboardMenuBar class="max-w-[16.5rem] min-w-[13rem] dashboard-card w-full"></DashboardMenuBar>
            <main class="flex flex-col flex-1 gap-2 2xl:gap-[1.25rem]">
                <div class="w-[25.313rem]">
                    <UiButtonTabButtonDashboard class="flex-1" :list="data" v-model="TabIndex"></UiButtonTabButtonDashboard>
                </div>
                
                <!-- <div
                    class="w-[25.313rem] h-[3.875rem] rounded-2xl bg-[#171717] text-base font-bold leading-[29px] flex items-center justify-center py-2 relative mb-[2.063rem]">
                    <div @click="depositToToman" class="flex-1 flex items-center justify-center bg-transparent z-[200]"
                        :class="[{ 'text-[#FF7028]': !depositType }, { 'text-white': depositType }]">واریز تومان</div>
                    <div @click="depositToID" class="flex-1 flex items-center justify-center bg-transparent z-[200]"
                        :class="[{ 'text-[#FF7028]': depositType }, { 'text-white': !depositType }]">واریز با شناسه
                    </div>
                    <input type="radio" name="type" id="depositTypeId" class="absolute top-0 right-0 invisible">
                    <label for="depositTypeId"
                        class="absolute w-1/2 h-full top-0 bg-black rounded-2xl transition-all border-y border-[#FF7028]"
                        :class="[{ 'right-1/2': depositType }, { 'right-0': !depositType }]"></label>
                </div> -->

                <DashboardDepositTomanDesktop v-if="TabIndex==0"></DashboardDepositTomanDesktop>

            </main>
        </div>

    </div>
</template>
<script setup>
const TabIndex = ref(0)

const data = ref([
  {
    id: 0,
    title: "واریز تومان"
  }, {
    id: 1,
    title: "واریز با شناسه"
  }
])
// const depositType = ref(true)
// const depositToToman = () => {
//     console.log(depositType.value)
//     depositType.value = false
// }
// const depositToID = () => {
//     depositType.value = true
//     console.log(depositType.value)
// }
// onMounted(() => {
//     console.log(depositType.value)
// })
</script>
<style scoped>

</style>