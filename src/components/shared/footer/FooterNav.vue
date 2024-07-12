<script setup>
const props = defineProps(['data'])
</script>

<template>
  <div>
    <div class="grid grid-cols-12">
      <div class="col-span-3">
        <div class="flex flex-col gap-10 items-start">
          <h3 class="text-base text-[#676767] font-bold">{{ data.quickAccess.title }}</h3>
          <NuxtLink :to="item.path" class="text-sm hover:text-[#FF7028] text-white font-normal"
            v-for="item in data.quickAccess.list" :key="item.title">{{ item.title }}</NuxtLink>
          <!-- <h6 class="text-base text-white font-thin">صفحه ی اصلی</h6> -->
        </div>
      </div>
      <div class="col-span-3">
        <div class="flex flex-col gap-10 items-start">
          <h3 class="text-base text-[#676767] font-bold">{{ data.info.title }}</h3>
          <NuxtLink :to="item.path" class="text-sm hover:text-[#FF7028] text-white font-normal"
            v-for="item in data.info.list" :key="item.title">{{ item.title }}</NuxtLink>
        </div>
      </div>
      <div class="col-span-3">
        <div class="flex flex-col gap-10 items-start">
          <h3 class="text-base text-[#676767] font-bold">{{ data.academy.title }}</h3>
          <NuxtLink :to="item.path" class="text-sm hover:text-[#FF7028] text-white font-normal"
            v-for="item in data.academy.list" :key="item.title">{{ item.title }}</NuxtLink>
        </div>
      </div>
      <div class="col-span-3">
        <div class="flex flex-col gap-10 items-start">
          <h3 class="text-base text-[#676767] font-bold">{{ data.contact.title }}</h3>
          <NuxtLink :to="item.path" class="text-sm hover:text-[#FF7028] text-white font-normal"
            v-for="item in data.contact.list" :key="item.title">{{ item.title }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>