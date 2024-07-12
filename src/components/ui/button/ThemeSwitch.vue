<script setup>
const state = ref('dark');

const changTheme = () => {
	if (state.value === 'light') {
		state.value = 'dark';
	} else {
		state.value = 'light';
	}
}
</script>

<template>
	<button class="switch-button" :class="{ 'dark-switch-button': state === 'dark' }" @click="changTheme">
		<span class="icon-circle">
			<IconsThemeSwitchButtonDark v-if="state === 'dark'"></IconsThemeSwitchButtonDark>
			<IconsThemeSwitchButtonLight v-if="state === 'light'"></IconsThemeSwitchButtonLight>
		</span>
	</button>
</template>

<style scoped>
.switch-button {
	background: #AAAAAA;
	width: 63px;
	height: 31px;
	border-radius: 100px;
	display: inline-block;
	padding-left: 3px;
	padding-right: 3px;
	transition: all 0.2s ease-out;
	position: relative;
}

.dark-switch-button {
	background: #262626;
	justify-content: flex-start;
}

.icon-circle {
	left: 0%;
	transition: all 0.2s ease-out;
	background: #E1E1E1;
	width: 25px;
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	right: 32px;
	position: relative;
}

.dark-switch-button .icon-circle {
	background: #000000;
	right: 0;
}
</style>