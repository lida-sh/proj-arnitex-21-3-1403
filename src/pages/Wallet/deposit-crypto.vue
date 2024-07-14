<template>
    <div class="w-full bg-black">
        <WalletDigitalCurrencyMob class="block lg:hidden"></WalletDigitalCurrencyMob>
        <WalletDigitalCurrencyDesktop class="hidden lg:block"></WalletDigitalCurrencyDesktop>

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