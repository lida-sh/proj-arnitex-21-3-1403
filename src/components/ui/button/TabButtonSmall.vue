<script setup lang="ts">

const selectedIndex = defineModel()

const prop = defineProps(['list'])

const changeIndex = (index: number) => {
	selectedIndex.value = index;
}

</script>

<template>
	<div class="inline-block">
		<div v-if="list && list.length > 0"
			class="bg-[#171717] py-[3px] px-[3px] rounded-[10px] flex justify-between text-white">
			<button @click="changeIndex(index)" :class="{ active: selectedIndex === index }"
				v-for="(item, index) in list" :key="item.id" class="text-xs font-normal ">
				<div class="outer p-[1px]">
					<div
						class="inner px-[14px] py-[7px] flex items-center justify-center leading-4 whitespace-nowrap">
						{{ item.title }}
					</div>
				</div>
			</button>
		</div>
	</div>
</template>

<style scoped>
.tab-container {
	background: rgba(0, 0, 0, 0.67);
}

.active .outer {
	/* transition: background 0.3s ease-in; */
	border-radius: 10px;
	background: rgb(255, 112, 40);
	background: radial-gradient(circle, rgba(255, 112, 40, 0.5) 0%, rgba(29, 18, 12, 0.99) 92%, rgba(8, 9, 9, 1) 100%);
}

.active .inner {
	transition: background-color 0.3s ease-in;
	background-color: #000;
	border-radius: 10px;
}
</style>