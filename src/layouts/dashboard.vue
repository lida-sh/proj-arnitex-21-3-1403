<template>
	<HeaderSticky></HeaderSticky>
	<div class="mt-[54px] lg:mt-[63px] relative inline-block w-full">
		<div v-if="pageLoading"
			class="bg-black bg-opacity-70 fixed inset-0 h-full w-full flex items-center justify-center overflow-hidden z-[201]">
			<UiLoadingSpinner></UiLoadingSpinner>
		</div>
		<NuxtPage class="z-1 relative"></NuxtPage>
	</div>
	<FooterMainFooter></FooterMainFooter>
</template>

<script setup>
const pageLoading = ref(true)
onMounted(() => {
	pageLoading.value = false
})
</script>