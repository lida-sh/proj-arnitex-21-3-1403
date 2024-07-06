<script setup>
const props = defineProps(['loading', 'enableStyle'])
const buttonClass = computed(() => {
  if (
    props.enableStyle
  ) {
    return "bg-[#FF7028] text-white transition ease-in-out";
  } else {
    return "bg-[#262626] text-[#676767] transition ease-in-out";
  }
});
</script>

<template>
  <button @click="$emit('submit')" v-if="!loading" :class="buttonClass"
    class="w-full py-[0.438rem] font-semibold leading-[2.313rem] bg-[#262626] rounded-[8px] text-[#676767] text-[20px]">
    <slot> ارسال </slot>
  </button>
  <button v-else
    class="dash w-full py-[0.688rem] text-[#ff7028] bg-[#262626] text-base font-bold leading-[1.813rem] rounded-[8px] ">
    <slot name="loading">
      در حال پردازش ...
    </slot>
  </button>
</template>

<style scoped></style>