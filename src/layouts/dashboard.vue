<template>
    <section class="flex flex-col min-h-screen">
        <HeaderSticky></HeaderSticky>
        <div class="h-full bg-black px-[6.25rem] pt-[10.25rem]">
            <div class="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    <NuxtPage></NuxtPage>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div class="hidden lg:block drawer-side">
                    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
                    <ul class="menu bg-[#171717] text-white  w-[16.5rem] p-4 rounded-lg text-sm font-bold z-50 gap-4">
                        <!-- Sidebar content here -->
                        <li><a
                                class="flex items-center justify-start gap-[0.625rem] rounded-lg hover:bg-[#FF7028] h-12">
                                <IconsDashboardMenuDashboard></IconsDashboardMenuDashboard><span>داشبورد</span>
                            </a></li>
                        <li><a
                                class="flex items-center justify-start gap-[0.625rem] rounded-lg hover:bg-[#FF7028] h-12">
                                <IconsDashboardMenuWallet></IconsDashboardMenuWallet>
                                <div class="flex justify-between items-center w-full h-12"><span>کیف پول</span>
                                    <IconsDashboardArrowDown>
                                    </IconsDashboardArrowDown>
                                </div>
                            </a></li>
                        <li><a
                                class="flex items-center justify-start gap-[0.625rem] rounded-lg hover:bg-[#FF7028] h-12">
                                <IconsDashboardMenuTransaction></IconsDashboardMenuTransaction>
                                <div class="flex justify-between items-center w-full"><span>معامله</span>
                                    <IconsDashboardArrowDown>
                                    </IconsDashboardArrowDown>
                                </div>
                            </a></li>
                        <li><a
                                class="flex items-center justify-start gap-[0.625rem] rounded-lg hover:bg-[#FF7028] h-12">
                                <IconsDashboardMenuUserAdd></IconsDashboardMenuUserAdd><span>دعوت از دوستان</span>
                            </a></li>
                        <li><a
                                class="flex items-center justify-start gap-[0.625rem] rounded-lg hover:bg-[#FF7028] h-12">
                                <IconsDashboardMenuRewards></IconsDashboardMenuRewards><span>پاداش ها</span>
                            </a></li>
                        <li><a
                                class="flex items-center justify-start gap-[0.625rem] rounded-lg hover:bg-[#FF7028] h-12">
                                <IconsDashboardMenuProfile></IconsDashboardMenuProfile>
                                <div class="flex justify-between items-center w-full"><span>پروفایل</span>
                                    <IconsDashboardArrowDown>
                                    </IconsDashboardArrowDown>
                                </div>
                            </a></li>
                        <li><a class="flex items-center justify-start gap-[0.625rem] rounded-lg hover:bg-[#FF7028]">
                                <IconsDashboardMenuSetting></IconsDashboardMenuSetting><span>تنظیمات</span>
                            </a></li>
                    </ul>
                </div>
            </div>
        </div>

        <FooterMainFooter></FooterMainFooter>
    </section>



</template>