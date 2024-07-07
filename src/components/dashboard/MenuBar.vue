<script setup>

</script>

<template>
	<aside>
		<ul class="text-white dashboard-menu py-[1.5rem] text-sm font-bold z-50 flex flex-col gap-4">
			<!-- Sidebar content here -->
			<li class="dashboard-item selected-dashboard-item cursor-pointer pl-[1.375rem] gap-4 flex">
				<a class="flex flex-1 items-center justify-start gap-[0.625rem] rounded-lg h-12">
					<div class="flex items-center gap-[0.625rem] ">
						<IconsDashboardMenuDrawer></IconsDashboardMenuDrawer>
						<span class="font-bold text-sm leading-[1.625rem]">داشبورد</span>
					</div>
				</a>
			</li>

			<li class="dashboard-item cursor-pointer pl-[1.375rem] gap-4 flex">
				<a class="flex flex-1 items-center justify-between gap-[0.625rem] rounded-lg h-12">
					<div class="flex items-center gap-[0.625rem] ">
						<IconsDashboardMenuWallet></IconsDashboardMenuWallet>
						<span class="font-bold text-sm leading-[1.625rem]">کیف پول</span>
					</div>
					<IconsDashboardArrowDown>
					</IconsDashboardArrowDown>
				</a>
			</li>

			<li class="dashboard-item cursor-pointer pl-[1.375rem] gap-4 flex">
				<a class="flex flex-1 items-center justify-start gap-[0.625rem] rounded-lg h-12">
					<div class="flex items-center gap-[0.625rem] ">
						<IconsDashboardMenuUserAdd></IconsDashboardMenuUserAdd>
						<span class="font-bold text-sm leading-[1.625rem]">دعوت از دوستان</span>
					</div>
				</a>
			</li>

			<li class="dashboard-item cursor-pointer pl-[1.375rem] gap-4 flex">
				<a class="flex flex-1 items-center justify-start gap-[0.625rem] rounded-lg h-12">
					<div class="flex items-center gap-[0.625rem] ">
						<IconsDashboardMenuUserAdd></IconsDashboardMenuUserAdd>
						<span class="font-bold text-sm leading-[1.625rem]">پاداش‌ها</span>
					</div>
				</a>
			</li>

			<li class="dashboard-item cursor-pointer pl-[1.375rem] gap-4 flex">
				<a class="flex flex-1 items-center justify-between gap-[0.625rem] rounded-lg h-12">
					<div class="flex items-center gap-[0.625rem] ">
						<IconsDashboardMenuProfile></IconsDashboardMenuProfile>
						<span class="font-bold text-sm leading-[1.625rem]">پروفایل</span>
					</div>
					<IconsDashboardArrowDown>
					</IconsDashboardArrowDown>
				</a>
			</li>

			<li class="dashboard-item cursor-pointer pl-[1.375rem] gap-4 flex">
				<a class="flex flex-1 items-center justify-between gap-[0.625rem] rounded-lg h-12">
					<div class="flex items-center gap-[0.625rem] ">
						<IconsDashboardMenuSetting></IconsDashboardMenuSetting>
						<span class="font-bold text-sm leading-[1.625rem]">تنظیمات</span>
					</div>
				</a>
			</li>

		</ul>
	</aside>
</template>

<style>
.dashboard-item::before {
	content: "";
	width: 4px;
	display: inline-block;
	border-radius: 2px 0px 0px 2px;
	background: linear-gradient(180deg, #00000000 0%, #00000000 100%);
}

.dashboard-item:hover {
	background: #252525;
}

/* .dashboard-item:hover::before {
	background: linear-gradient(180deg, #686868 0%, #686868 100%);
} */

.selected-dashboard-item::before {
	background: linear-gradient(180deg, #FF7028 0%, #994318 100%) !important;
}

.selected-dashboard-item {
	color: #FF7028;
}
</style>