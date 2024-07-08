<script setup lang="ts">
import type { OnClickOutsideHandler } from '@vueuse/core';
import { onClickOutside } from '@vueuse/core'

const dropDownElement = ref(null);
const dropdown = ref(false);
const dropdownHandler: OnClickOutsideHandler = (event) => {
  console.log(event)
  dropdown.value = false
}

onClickOutside(
  dropDownElement,
  (event) => {
    dropdown.value = false
  },
)


const data = ref([
  'تومان', 'تتر'
])
</script>

<template>
  <div class="items-center ml-2 relative">
    <button class="flex gap-3 px-2 items-center" @click="dropdown = !dropdown">
      <p class="text-[#fff] text-[14px] leading-[26px] font-bold">0 تومان</p>
      <IconsDashboardArrowDownMob></IconsDashboardArrowDownMob>
    </button>
    <ul v-if="dropdown" ref="dropDownElement" class="dropdown-inner">
      <li v-for="item in data" :key="item" class="text-[#fff] text-[14px] leading-[26px] font-bold">{{ item }}</li>
    </ul>
  </div>

</template>

<style scoped>
.dropdown-inner {
  width: 100%;
  border-radius: 0px 0px 16px 16px;
  background: rgba(38, 38, 38, 1);
  padding: 0.5em;
  position: absolute;
  left: 0;
  z-index: 10;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 2px 2px 5px rgba(10, 10, 10, 0.1);
}
</style>