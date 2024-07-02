<script setup>
defineOptions({
	inheritAttrs: false
})
const model = defineModel()
const props = defineProps(['error', 'focus'])
const input = ref(null)
defineExpose({
	input
})
onMounted(async () => {
	if (props.focus) {
		await nextTick()
		input.value.focus()
	}
})
watch(() => props.focus, async (newVal) => {
	if (newVal) {
		await nextTick()
		input.value.focus()
	} else {
		await nextTick()
		input.value.blur()
	}
});
</script>

<template>
	<div class="w-full">
		<input v-bind="$attrs" v-model="model" ref="input"
			class="w-full bg-[#262626] h-[58px] p-3 focus:ring-0 focus:border-white border-solid border-[2px] border-[#676767] rounded-[8px] placeholder-[#676767] text-[14px]" />
		<span class="text-[#EA3C53] text-[14px] mt-3" v-if="error">{{ error }}</span>
	</div>
</template>

<style scoped></style>