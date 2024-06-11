<template>
  <div
    class="flex flex-col space-y-4 bg-transparent rounded-box lg:shadow p-4 w-full h-[25rem] items-center justify-center"
  >
    <div class="w-[10.656rem] h-[10.75rem] text-[#E4E4E4] flex items-center justify-center">
      <slot name="icon"></slot>
    </div>
    <div class="text-white text-center flex flex-col gap-1">
      <h6 class="font-medium text-base block">{{ title }}</h6>
      <P class="text-xs font-medium block">{{ description }}</P>
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
