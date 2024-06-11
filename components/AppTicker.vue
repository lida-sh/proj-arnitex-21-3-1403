<template>
  <div class="h-[2.75rem] w-full flex bg-[#303030] py-2 overflow-hidden">
    <NuxtMarquee direction="left" :pauseOnHover="pauseOnHover" :autoFill="autoFill">
      <template v-for="(item, index) in items" :key="index">
        <coin-component :item="item"></coin-component>
      </template>
    </NuxtMarquee>
  </div>
</template>
<script setup lang="ts">
interface Prop {
  items: { icon: string; name: string; price: number; change: number }[];
};
const props = defineProps<Prop>();
const pauseOnHover:boolean = true;
let autoFill:boolean = true;
</script>
