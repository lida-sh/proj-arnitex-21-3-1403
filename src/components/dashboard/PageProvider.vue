<script setup>
import { useResizeToMobile } from "~/composables/useResizeToMobile"
const { isMobile } = useResizeToMobile(1023);
</script>

<template>
    <DashboardIndexMobile v-if="isMobile"></DashboardIndexMobile>
    <DashboardIndexDesktop v-else></DashboardIndexDesktop>
</template>

<style scoped></style>