<template>
    <div class="w-full h-full">
        <div class="w-full mx-6 flex flex-col rounded-lg bg-[#171717] pr-[2rem] pt-[0.625rem] pb-[0.875rem]">
            <span class="text-white text-[16px] w-[118px] ">نمودار روند دارایی</span>
            <div class="w-full h-auto flex justify-center items-center">

                <!-- <UiChartPieChart></UiChartPieChart>  -->

            </div>

        </div>
        <!-- <DashboardChartJs></DashboardChartJs> -->
        <div class=" xl:hidden w-full px-4">
            <DashboardUserInfo></DashboardUserInfo>
            <DashboardInviteFriends></DashboardInviteFriends>

        </div>

        <div class="hidden xl:flex flex-col pr-[1.313rem] pl-[6.25rem] w-full">
            <DashboardUserInfoDashboard></DashboardUserInfoDashboard>
            <DashboardStepper></DashboardStepper>
        </div>
    </div>
</template>
<script>
definePageMeta({
    layout: "dashboard",
});
</script>
<style>
.steps {
    color: white;
    background-color: transparent;
    text-color: #676767;
}
</style>
