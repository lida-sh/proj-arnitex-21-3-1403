<template>
  <div
    class="flex flex-col shrink-0 space-y-4 bg-[#262626] rounded-box w-full min-w-[16.563rem] 2xl:max-w-[unset] p-4 h-[10.625rem] items-center justify-center">
    <div class="w-[4.375rem] h-[4.375rem] text-[#E4E4E4]">
      <slot name="icon"></slot>
    </div>
    <div class="text-[#E4E4E4]">
      <h6 class="font-medium text-lg block">{{ title }}</h6>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
