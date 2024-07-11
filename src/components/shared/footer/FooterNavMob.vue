<script setup>
const props = defineProps(['data'])
</script>

<template>
  <nav>
    <SharedFooterNavCollapse v-for="_item in data" class="mt-[1.875rem]">
      <template #title>
        <h6 class="text-xl leading-[1.813rem] text-[1rem] font-bold text-white">
          {{ _item.title }}
        </h6>
      </template>

      <div class="text-base leading-7 text-white font-light pb-7 pt-1">
        <ul>
          <template v-for="item in _item.list" :key="item.title">
            <li class="mt-7">
              <NuxtLink class="text-sm hover:text-[#FF7028] text-white leading-[1.625rem] font-normal" :to="item.path">{{item.title}}</NuxtLink>
            </li>
          </template>
        </ul>
      </div>
    </SharedFooterNavCollapse>
  </nav>
</template>

<style scoped></style>