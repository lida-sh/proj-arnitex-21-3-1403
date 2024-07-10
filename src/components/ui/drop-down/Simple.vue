<script setup lang="ts">
import type { OnClickOutsideHandler } from '@vueuse/core';
import { onClickOutside } from '@vueuse/core'

const prop = defineProps(['list'])
const model = defineModel<number>();

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

// const selectedIndex = ref(0);

const setIndex = (index: number) => {
  model.value = index;
  dropdown.value = false;
}
</script>

<template>
  <div class="items-center ml-2 relative min-w-[5rem]" ref="dropDownElement">
    <!-- {{list}} -->
    <button class="flex gap-3 px-2 items-center justify-between w-full" @click="dropdown = !dropdown">
      <p class="text-[#fff] text-[14px] leading-[26px] font-bold">{{ list[model].title }}</p>
      <IconsDashboardArrowDownMob></IconsDashboardArrowDownMob>
    </button>
    <ul v-if="dropdown" class="dropdown-inner">
      <li v-for="(item, index) in list" :key="item.title" @click="setIndex(index)"
        :class="{ 'dropdown-item-select': model === index }"
        class="dropdown-item cursor-pointer text-[#fff] text-[14px] leading-[26px] font-bold flex items-center justify-center px-[1.25rem] rounded-xl pt-[5px] pb-[8px]">
        {{ item.title }}</li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown-inner {
  width: 100%;
  border-radius: 0px 0px 16px 16px;
  background: rgba(38, 38, 38, 1);
  padding: 0.75rem 0.5em;
  position: absolute;
  right: 0;
  z-index: 10;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 2px 2px 5px rgba(10, 10, 10, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dropdown-item:hover {
  background: #383838;
}

.dropdown-item-select {
  background: #000 !important;
  color: #FF7028;
}
</style>