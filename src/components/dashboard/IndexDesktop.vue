<script setup>
const isOpen = ref(false);

const toggleCollapse = () => {
	isOpen.value = !isOpen.value;
};
</script>

<template>
	<div class="w-full bg-black">
		<main class="w-full bg-black flex flex-col flex-1 gap-2 2xl:gap-[1.25rem]">
			<DashboardUserInfo></DashboardUserInfo>
			<DashboardStepper></DashboardStepper>
			<DashboardTotalAssets></DashboardTotalAssets>
			<DashboardAssetDispersion></DashboardAssetDispersion>
			<DashboardAssetChart></DashboardAssetChart>
			<DashboardArticles></DashboardArticles>
			<DashboardReferral></DashboardReferral>
			<DashboardCoinList class="relative mt-[3rem] z-10"></DashboardCoinList>
		</main>
	</div>
</template>
