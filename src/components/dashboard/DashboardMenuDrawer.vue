<template>
    <div class="h-screen bg-black px-[6.25rem] pt-[10.25rem]">
        <div class="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                <!-- Page content here -->
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
                <ul class="menu bg-[#171717] text-white  w-[16.5rem] p-4 rounded-lg text-sm font-bold z-50">
                    <!-- Sidebar content here -->
                    <li><a class="flex items-center justify-start gap-[0.625rem] hover:bg-[#FF7028]">
                            <IconsDashboardMenuDashboard></IconsDashboardMenuDashboard><span>داشبورد</span>
                        </a></li>
                    <li><a class="flex items-center justify-start gap-[0.625rem] hover:bg-[#FF7028]">
                            <IconsHeaderWallet></IconsHeaderWallet>
                            <div class="flex justify-between items-center w-full"><span>کیف پول</span>
                                <IconsDashboardArrowDown>
                                </IconsDashboardArrowDown>
                            </div>
                        </a></li>
                    <li><a class="flex items-center justify-start gap-[0.625rem] hover:bg-[#FF7028]">
                            <IconsDashboardMenuTransaction></IconsDashboardMenuTransaction>
                            <div class="flex justify-between items-center w-full"><span>معامله</span>
                                <IconsDashboardArrowDown>
                                </IconsDashboardArrowDown>
                            </div>
                        </a></li>
                    <li><a class="flex items-center justify-start gap-[0.625rem] hover:bg-[#FF7028]">
                            <IconsDashboardMenuUserAdd></IconsDashboardMenuUserAdd><span>دعوت از دوستان</span>
                        </a></li>
                    <li><a class="flex items-center justify-start gap-[0.625rem] hover:bg-[#FF7028]">
                            <IconsDashboardMenuRewards></IconsDashboardMenuRewards><span>پاداش ها</span>
                        </a></li>
                    <li><a class="flex items-center justify-start gap-[0.625rem] hover:bg-[#FF7028]">
                            <IconsDashboardMenuProfile></IconsDashboardMenuProfile>
                            <div class="flex justify-between items-center w-full"><span>پروفایل</span>
                                <IconsDashboardArrowDown>
                                </IconsDashboardArrowDown>
                            </div>
                        </a></li>
                    <li><a class="flex items-center justify-start gap-[0.625rem] hover:bg-[#FF7028]">
                            <IconsDashboardMenuSetting></IconsDashboardMenuSetting><span>تنظیمات</span>
                        </a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
</script>