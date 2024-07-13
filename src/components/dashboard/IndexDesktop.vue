<script setup>
const isOpen = ref(false);

const toggleCollapse = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
	<div class="w-full bg-black">
		<div class="w-full max-w-[100rem] pt-[5rem] mx-auto gap-2 2xl:gap-[1.25rem] px-2 flex items-start pb-20">
			<DashboardMenuBar class="sticky top-20 max-w-[16.5rem] min-w-[13rem] dashboard-card w-full">
			</DashboardMenuBar>
			<main class="flex flex-col flex-1 gap-2 2xl:gap-[1.25rem]">


				<div>
					<h1>مثال استفاده از کامپوننت Collapse با دکمه خارجی</h1>
					<button class="text-white" @click="toggleCollapse">
						{{ isOpen ? 'نمایش کمتر' : 'نمایش بیشتر' }}
					</button>
					<UiCollapse :isOpen="isOpen">
						<p class="text-white">
							این متن درون کامپوننت collapse قرار دارد. با کلیک بر روی دکمه، می‌توانید این متن را نمایش یا
							پنهان
							کنید.
						</p>
					</UiCollapse>
				</div>



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