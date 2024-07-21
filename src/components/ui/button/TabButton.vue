<script setup lang="ts">

const selectedIndex = defineModel()

const prop = defineProps(['list'])

const changeIndex = (index: number) => {
  selectedIndex.value = index;
}

</script>

<template>
  <div dir="ltr" v-if="list && list.length > 0"
    class="tab-container py-[3px] px-[26px] rounded-[30px] flex justify-between text-white">
    <button @click="changeIndex(index)" :class="{ active: selectedIndex === index }" v-for="(item, index) in list"
      :key="item.id" class="text-xs font-normal ">
      <div class="outer p-[1px]">
        <div class="inner px-[40px] py-[12px] ">
          {{ item.title }}
        </div>
      </div>
    </button>
  </div>
</template>

<style scoped>
.tab-container {
  background: rgba(0, 0, 0, 0.67);
}

.active .outer {
  /* transition: background 0.3s ease-in; */
  border-radius: 20px;
  background: rgb(255, 112, 40);
  background: radial-gradient(circle, rgba(255, 112, 40, 0.5) 0%, rgba(29, 18, 12, 0.99) 92%, rgba(8, 9, 9, 1) 100%);
}

.active .inner {
  transition: background-color 0.3s ease-in;
  background-color: #000;
  border-radius: 20px;
  color: rgb(255, 112, 40);
}
</style>