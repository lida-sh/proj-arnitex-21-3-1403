<template>
    <div class="w-full h-full">
        <div class="w-full mx-6 flex flex-col rounded-lg bg-[#171717] pr-[2rem] pt-[0.625rem] pb-[0.875rem]" >
            <span class="text-white text-[16px] w-[118px] ">نمودار روند دارایی</span>
            <div class="w-full h-auto flex justify-center items-center">
                 
                <!-- <UiChartPieChart></UiChartPieChart>  -->
                 
            </div>
            
        </div>
        <!-- <DashboardChartJs></DashboardChartJs> -->


        <div class="w-full px-4">
            <!-- <DashboardUserInfo></DashboardUserInfo> -->
            <!-- <DashboardInviteFriends></DashboardInviteFriends> -->
            <DashboardTotalAssets></DashboardTotalAssets>

        </div>
        
        
    </div>
</template>
<script>
definePageMeta({
  layout: "dashboard",
});
</script>
