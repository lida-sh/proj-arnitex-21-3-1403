<script setup>
const availableFilter = ref(false)
const availableFilterHandler = () => {
  availableFilter.value = !availableFilter.value;
}
const searchText = ref('')

</script>

<template>
  <section>
    <div class="flex justify-between items-center px-2 mx-auto">
      <div class="flex items-center gap-4">
        <div class="relative">
          <input type="text" v-model="searchText" class="search-input rounded-full bg-transparent text-white"
            placeholder="جستجو رمز ارز">
          <IconsDashboardSearchCoin class="input-icon"></IconsDashboardSearchCoin>
        </div>
        <div class="text-white cursor-pointer flex items-center gap-[0.8rem]" @click="availableFilterHandler">
          <span class="radio-input" :class="{ 'radio-input-select': availableFilter }"></span>
          <p class="mt-[3px] select-none">فقط رمز ارزهای موجود را نمایش بده.</p>
        </div>
      </div>

      <NuxtLink to="/#" class="flex items-center text-[#FF7028] py-1 gap-[0.625rem]">
        <span>مشاهده همه ی رمز ارز ها</span>
        <IconsDashboardSeeAllCoinArrow></IconsDashboardSeeAllCoinArrow>
      </NuxtLink>
    </div>

    <div class="bg-[#171717] py-7 rounded-3xl mt-5 flex flex-col gap-[1.5rem]">

      <WalletAssetsCoinListItem v-for="i in 6"></WalletAssetsCoinListItem>

    </div>

  </section>
</template>

<style scoped>
.radio-input {
  width: 24px;
  height: 24px;
  border: 2px solid #FFFFFF;
  border-radius: 50%;
  position: relative;
  display: block;
}

.radio-input::after {
  opacity: 0;
  transition: all 0.05s ease-in;
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #FF7028;
  border-radius: 50%;
  transform: translate(-50%, -50%)
}

.radio-input-select {
  border: 2px solid #FF7028;
}

.radio-input-select::after {
  opacity: 1;
}

.search-input {
  border: 1px solid #676767;
  padding-left: 35px;
}

.search-input:focus {
  border: 1px solid #ffffff;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.search-input::placeholder {
  color: #676767;
}

.input-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}
</style>