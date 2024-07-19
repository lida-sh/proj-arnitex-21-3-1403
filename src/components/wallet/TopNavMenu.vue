<script setup>

</script>

<template>
  <nav class="text-white bg-[#171717] px-4 pt-2 pb-4 rounded-2xl">
    <h2 class="text-base leading-7 font-normal select-none">کیف پول</h2>

    <ul class="mt-[0.375rem] flex items-start gap-5 no-select">
      <li class="nav-selected rounded-xl basis-1/4 select-none">
        <NuxtLink class="flex py-2 items-center flex-col">
          <IconsWalletNavAssets></IconsWalletNavAssets>
          <span class="text-xs pt-3 leading-6 font-normal">دارایی‌ها</span>
        </NuxtLink>
      </li>
      <li class="rounded-xl basis-1/4">
        <NuxtLink to="#" class="flex py-2 items-center flex-col">
          <IconsWalletNavPortfolio></IconsWalletNavPortfolio>
          <span class="text-xs pt-3 leading-6 font-normal">پورتفولیو</span>
        </NuxtLink>
      </li>
      <li class="rounded-xl basis-1/4">
        <NuxtLink to="#" class="flex py-2 items-center flex-col">
          <IconsWalletNavHistory></IconsWalletNavHistory>
          <span class="text-xs pt-3 leading-6 font-normal">تاریخچه</span>
        </NuxtLink>
      </li>
      <li class="rounded-xl basis-1/4">
        <NuxtLink to="#" class="flex py-2 items-center flex-col">
          <IconsWalletNavBankAccounts></IconsWalletNavBankAccounts>
          <span class="text-xs pt-3 leading-6 font-normal whitespace-nowrap">حساب‌های بانکی</span>
        </NuxtLink>
      </li>
    </ul>

  </nav>
</template>

<style scoped>
.nav-selected {
  background: #000;
}

</style>