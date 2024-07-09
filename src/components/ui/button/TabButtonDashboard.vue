<script setup lang="ts">

const selectedIndex = defineModel()

const prop = defineProps(['list'])

const changeIndex = (index: number) => {
    selectedIndex.value = index;
}

</script>

<template>
    <div dir="ltr" v-if="list && list.length > 0"
        class=" py-[3px] px-[26px] rounded-[16px] flex justify-center lg:justify-end text-white">
        <button @click="changeIndex(index)" :class="{ active: selectedIndex === index }" v-for="(item, index) in list"
            :key="item.id" class="text-xs font-normal ">
            <div class="outer p-[1px]">
                <div class="inner px-[40px] py-[12px] h-[51px] w-[180px]  flex items-center justify-center">
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
    border-radius: 16px;
    background: rgb(255, 112, 40);
    background: radial-gradient(circle, rgba(255, 112, 40, 0.5) 0%, rgba(29, 18, 12, 0.99) 92%, rgba(8, 9, 9, 1) 100%);
}

.active .inner {
    transition: background-color 0.3s ease-in;
    background-color: #000;
    border-radius: 20px;
}
</style>