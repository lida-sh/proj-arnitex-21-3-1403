<template>
	<HeaderSticky></HeaderSticky>
	<div class="pt-[54px] lg:pt-[63px] relative w-full">
		<div v-if="pageLoading"
			class="bg-black bg-opacity-70 fixed inset-0 h-full w-full flex items-center justify-center overflow-hidden z-[5000]">
			<UiLoadingSpinner></UiLoadingSpinner>
		</div>
		<NuxtPage class="z-1 relative"></NuxtPage>
	</div>
	<HomeNavBottomNavigationWithUserProfile></HomeNavBottomNavigationWithUserProfile>

	<FooterMainFooter></FooterMainFooter>
</template>

<script setup>
const pageLoading = ref(true)
onMounted(() => {
	pageLoading.value = false
})
</script>