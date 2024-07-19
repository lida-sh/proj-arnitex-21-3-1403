<template>
    <div class="w-full bg-black">
       <DashboardDepositDigitalCurrencyDesktop class="hidden lg:block"></DashboardDepositDigitalCurrencyDesktop>
       <DashboardDepositDigitalCurrencyMob class="block lg:hidden"></DashboardDepositDigitalCurrencyMob>

    </div>
</template>
<script setup>
definePageMeta({
    layout: "dashboard"
})
</script>
<style>

select {
    background-position: left 1.25rem center
}

select>option {
    font-weight: normal;
    display: block;
    color: #676767;
    min-height: 1.2em;
    padding: 0px 2px 1px;
    white-space: nowrap;
    direction: rtl;
}

input {
    font-size: 16px;
}
.ltrDir {
    direction: ltr;
}
</style>