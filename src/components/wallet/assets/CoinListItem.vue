<script setup>
const availableFilter = ref(false)
const availableFilterHandler = () => {
  availableFilter.value = !availableFilter.value;
}
const searchText = ref('')



</script>

<template>
  <div class="bg-[#1E1E1E] px-[2.25rem] py-[1rem] flex gap-[16rem]">

    <div class="flex items-center flex-1 justify-between">
      <div class="flex items-center gap-[1.5rem]">
        <div>
          <img class="w-[3.125rem] h-[3.125rem]" src="~/assets/images/btc2.png" alt="">
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-[0.875rem] leading-[1.625rem] text-white">
            بیت کوین
          </span>
          <span class="font-bold text-[0.75rem] leading-[1.438rem] text-[#676767]">
            ( BTC )
          </span>
        </div>
      </div>

      <div class="gap-[0.875rem] flex items-center">
        <span class="text-white font-normal text-[1rem] leading-[1.813rem]">۷.۲۲۹۲۴۶</span>
        <span class="text-[#676767] font-bold text-[1rem] leading-[1.813rem]">BTC</span>
      </div>
    </div>
    <div class="flex-1 flex items-center gap-[1.5rem]">
      <button class="item-button transaction-button">معامله</button>
      <button class="item-button deposit-button">واریز</button>
      <button class="item-button withdraw-button">برداشت</button>
    </div>
  </div>
</template>

<style scoped>
.item-button {
  color: #FFFFFF;
  flex: 1;
  background-color: #262626;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 12px;
  border: 1px solid #00000000;
  transition: all 0.1s ease-in;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.transaction-button:hover {
  border: 1px solid #ff7028a6;
  box-shadow: 0px 4px 18px 0px #ff70284b;
  color: #FDA173;
}

.deposit-button:hover {
  border: 1px solid #5CBC76a6;
  box-shadow: 0px 4px 18px 0px #5cbc764b;
  color: #5CBC76;
}

.withdraw-button:hover {
  border: 1px solid #EA3C53a6;
  box-shadow: 0px 4px 18px 0px #EA3C534b;
  color: #EA3C53;
}
</style>