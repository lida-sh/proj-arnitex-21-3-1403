<template>
    <div class="dropdown-container" ref="dropDownElement">
        <div @click="toggleDropdown" class="input-box h-[88px] bg-[#171717] rounded-[16px] p-5 flex justify-between">
            <div class="px-6 flex items-center gap-5">
                <IconsDashboardOptions v-if="selectedItem" />
                <div v-if="selectedItem"
                    class="bg-[#868686] w-[43px] h-[43px] flex justify-center items-center rounded-2xl">
                    <img :src="selectedItem.bankLogo" alt="Bank Logo" />
                </div>
                <p v-if="selectedItem" class="text-[12px] leading-[23px] font-bold pl-9">{{ selectedItem.bankName }}</p>
                <p v-if="selectedItem" class="text-[16px] leading-[23px] font-normal border-l border-gray-600 pl-12">
                    {{ selectedItem.cardNumber }}
                </p>
                <p v-else class="text-[16px] leading-[23px] font-bold pl-9 text-[#676767]">
                    شماره کارت مورد نظر را انتخاب کنید.
                </p>
            </div>
            <div class="w-[50px] items-center justify-center flex">
                <IconsDashboardArrowBig />
            </div>
        </div>
        <transition name="fade">
            <div v-if="dropdownOpen" class="dropdown-menu bg-[#171717]">
                <div v-for="item in options" :key="item.id" @click="selectItem(item)"
                    class="bg-[#171717] flex items-center cursor-pointer p-4 px-6 border-t border-[#3A3A3A]">
                    <div class="px-6 flex items-center gap-5">
                        <div class="bg-[#868686] w-[43px] h-[43px] flex justify-center items-center rounded-2xl">
                            <img :src="item.bankLogo" alt="Bank Logo" />
                        </div>
                        <p class="text-[12px] leading-[23px] font-bold pl-9"> {{ item.bankName }}</p>
                        <p class="text-[16px] leading-[23px] font-normal"> {{ item.cardNumber }}</p>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'


// Props
const props = defineProps({
    options: {
        type: Array,
        required: true
    }
})

// Reactive state
const dropdownOpen = ref(false)
const dropDownElement = ref(null)
const selectedItem = ref(null)

// Functions
const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value
}

const selectItem = (item) => {
    selectedItem.value = item
    dropdownOpen.value = false
}

// Lifecycle hooks
onClickOutside(dropDownElement, () => {
    dropdownOpen.value = false
})
</script>
