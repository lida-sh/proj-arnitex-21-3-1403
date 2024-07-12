<script setup>

</script>

<template>
	<div class="w-full bg-black">
		<div class="w-full max-w-[100rem] pt-[5rem] mx-auto gap-2 2xl:gap-[1.25rem] px-2 flex items-start pb-20">
			<DashboardMenuBar class="sticky top-20 max-w-[16.5rem] min-w-[13rem] dashboard-card w-full">
			</DashboardMenuBar>
			<main class="flex flex-col flex-1 gap-2 2xl:gap-[1.25rem]">
				<DashboardUserInfo></DashboardUserInfo>
				<DashboardStepper></DashboardStepper>
				<DashboardTotalAssets></DashboardTotalAssets>
				<DashboardAssetDispersion></DashboardAssetDispersion>
				<DashboardAssetChart></DashboardAssetChart>
				<DashboardArticles></DashboardArticles>
				<DashboardReferral></DashboardReferral>
				<DashboardCoinList class="relative mt-[3rem] z-10"></DashboardCoinList>
				<!-- <WalletWithdrawlIndex></WalletWithdrawlIndex> -->

			</main>
		</div>
	</div>
</template>

<style></style>