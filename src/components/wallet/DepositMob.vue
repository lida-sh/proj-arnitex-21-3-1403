<template>
	<div class="w-full bg-black">
		<div class="flex flex-col pt-[0.938rem] w-full items-center justify-center h-full">
			<div class="flex items-center justify-center w-full">
				<div class="w-full px-[1rem]">
					<UiButtonTabButtonDashboard class="w-full" :list="data" v-model="TabIndex">
					</UiButtonTabButtonDashboard>
				</div>
			</div>
			<WalletTomanMob v-if="TabIndex == 1"></WalletTomanMob>
			<WalletIdMob v-if="TabIndex == 0"></WalletIdMob>
		</div>
	</div>

</template>
<script setup lang="ts">



const TabIndex = ref(1)

const data = ref([
	{
		id: 0,
		title: "واریز با شناسه"
	}, {
		id: 1,
		title: "واریز با تومان"
	}
])
const depositAmount = ref(null)
const openPlusCart = ref(false);
const openConfirmCart = ref(false)
const setDepositAmount = (value) => {
	depositAmount.value = value
}
const plusCart = () => {
	openPlusCart.value = true
};
const confirmCart = () => {
	openPlusCart.value = false
	openConfirmCart.value = true
}
const confirm = () => {
	openConfirmCart.value = false
}
const detailsRowDeposits = ref<boolean[]>([]);
const openDetailsOfDeposits = (index: number) => {
	if (detailsRowDeposits.value[index] === false) {
		for (let i = 0; i <= 6; i++) {
			detailsRowDeposits.value[i] = false;
		}
		detailsRowDeposits.value[index] = true;
	} else {
		for (let i = 0; i <= 6; i++) {
			detailsRowDeposits.value[i] = false;
		}
	}

}
onMounted(() => {
	console.log(TabIndex.value)
})

</script>
<style scoped>
select {
	background-position: left 1.5rem center
}

select>option {
	font-size: 11px;
	font-weight: normal;
	display: block;
	color: #676767;
	/* min-height: 1.2em; */
	padding: 0px 0px 1px;
	white-space: nowrap;
	direction: rtl;
}

input {
	font-size: 16px;
}

.numDir {
	direction: ltr;
}

.ltrDir {
	direction: ltr;
}
</style>