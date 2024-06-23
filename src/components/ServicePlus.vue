<template>
  <div
    class="flex flex-col space-y-4 bg-transparent rounded-box lg:shadow p-4 w-full h-[25rem] items-center justify-center"
  >
    <div class="w-[10.656rem] h-[10.75rem] text-[#E4E4E4] flex items-center justify-center">
      <slot name="icon"></slot>
    </div>
    <div class="text-white text-center flex flex-col gap-1">
      <h6 class="font-normal text-[1.5rem] leading-[2.563rem] block">{{ title }}</h6>
      <p class="text-[0.875rem] leading-[1.813rem] mt-1 font-bold block">{{ description }}</p>
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
    description: {
        type:String,
    },
   }
  
});
</script>

<style scoped></style>
