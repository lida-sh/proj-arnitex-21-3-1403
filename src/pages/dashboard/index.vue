<template>
    <div class="w-full h-full">
        <div class="w-full mx-6 flex flex-col rounded-lg bg-[#171717] pr-[2rem] pt-[0.625rem] pb-[0.875rem]">
            <span class="text-white text-[16px] w-[118px] ">نمودار روند دارایی</span>
            <div class="w-full h-auto flex justify-center items-center">

                <!-- <UiChartPieChart></UiChartPieChart>  -->

            </div>

        </div>
        <!-- <DashboardChartJs></DashboardChartJs> -->
        <div class=" xl:hidden w-full px-4 ">
            <DashboardUserInfo></DashboardUserInfo>
            <DashboardInviteFriends></DashboardInviteFriends>

        </div>

        <div class="hidden xl:flex flex-col pr-[1.313rem] pl-[6.25rem] w-full ">
            <DashboardUserInfoDashboard></DashboardUserInfoDashboard>
            <DashboardStepper></DashboardStepper>
            <div class="grid grid-cols-2">
                <div class="flex flex-col pt-[8.688rem] pr-8 pb-[4.438rem]">
                    <div class="text-[22px] text-white font-normal leading-[29px] mb-[2.375rem]">
                    <span class="">با هر معامله دوستان
                        معرفی شده ی شما
                        به آرنیتکس حداقل</span><span class="text-[#FF7028]"> ۲۵٪ پاداش </span><span>از کارمزدشان به شما داده خواهد شد.</span></div>
                    <div class="flex flex-col gap-[0.563rem]">
                        <div class="flex items-center justify-between">
                            <span class="text-[#676767] text-base font-medium lead-6">کد دعوت:</span>
                            <div class="flex items-center gap-2"><span
                                    class="text-base font-medium lead-6 text-white">5252538</span>
                                <IconsDashboardDocs></IconsDashboardDocs>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-[#676767] text-base font-medium lead-6">لینک دعوت:</span>
                            <div class="flex items-center gap-2"><span
                                    class="text-base font-medium lead-6 text-white">https://Arnitex.com/Invitation</span>
                                <IconsDashboardDocs></IconsDashboardDocs>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-[#676767] text-base font-medium lead-6">تعداد دعوت شدگان:</span>
                            <div class="flex items-center gap-2"><span class="ext-base font-medium lead-6 text-white">۱۵
                                    نفر</span></div>
                        </div>
                        <button
                            class="w-[11.063rem] h-[3.5rem] bg-[#FF7028] text-white text-[22px] font-semibold leading-[37px] rounded-lg mt-6">دعوت
                            از دوستان</button>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full aspect-video relative ">
                    <img src="~/assets/images/invite-friend-dashboard.png" alt="invite friends"
                        class="w-[20.756rem] h-auto relative z-[100]">
                    <div
                        class="absolute w-[34.375rem] h-[34.375rem] top-1/2 -left-2 -translate-y-1/2 z-[1]">
                        <UiPulsShadow></UiPulsShadow>
                    </div>
                </div>

            </div>
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
