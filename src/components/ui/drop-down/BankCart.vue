<template>
    <div class="dropdown-container select-none" ref="dropDownElement">
        <div @click="toggleDropdown"
            class="input-box cursor-pointer h-[44px] lg:h-[66px] bg-[#171717] rounded-[16px] p-5 flex justify-between">
            <div class="px-6 hidden lg:flex items-center gap-5">
                <div class="w-5 flex justify-center" v-if="selectedItem" @click.stop="toggleCartMenu">
                    <IconsDashboardOptions></IconsDashboardOptions>
                </div>

                <transition name="fade">
                    <div ref="targetCartMenu" v-if="targetCartMenu"
                        class="h-auto visible absolute -right-3 top-16 bg-[#171717] rounded-2xl  flex flex-col py-1">
                        <div @click="deletCart"
                            class="flex items-center hover:bg-[#5f5f5f] gap-[0.625rem]  px-[1.125rem] text-xs font-bold leading-[23px] text-white py-2 border-b border-[#262626]">
                            <IconsWalletTrash></IconsWalletTrash>
                            <span class="">حذف کارت</span>
                        </div>
                        <div
                            class="flex items-center gap-[0.625rem] text-xs font-bold leading-[23px] px-[1.125rem] hover:bg-[#5f5f5f] text-white py-2">
                            <IconsWalletAccountManagment></IconsWalletAccountManagment>
                            <span @click="manageAccounts" class="">مدیریت حساب‌ها</span>
                        </div>
                    </div>
                </transition>

                <div v-if="selectedItem"
                    class="bg-[#868686] w-[43px] h-[43px] flex justify-center items-center rounded-2xl">
                    <img :src="selectedItem.bankLogo" alt="Bank Logo" />
                </div>
                <p v-if="selectedItem" class="text-[12px] leading-[23px] font-bold pl-9">{{ selectedItem.bankName }}</p>
                <p v-if="selectedItem" class="text-[16px] leading-[23px] font-normal">
                    {{ selectedItem.cardNumber }}
                </p>
                <p v-else class="text-[12px] lg:text-[16px] leading-[23px] font-bold pl-9 text-[#676767]">
                    شماره کارت مورد نظر را انتخاب کنید.
                </p>
            </div>
            <div class="w-[50px] items-center justify-center flex">
                <IconsDashboardArrowBig />
            </div>
        </div>
        <transition name="slide-fade">
            <div v-if="dropdownOpen" class="dropdown-menu absolute top-[90%] w-full bg-[#171717]">
                <div v-for="item in options" :key="item.id" @click="selectItem(item)"
                    class=" flex items-center cursor-pointer p-2 px-1 border-t border-[#3A3A3A] hover:bg-[#5f5f5f]">
                    <div class="px-6 flex items-center gap-5">
                        <div
                            class="bg-[#868686] w-[34px] h-[34px] lg:h-[43px] lg:w-[43px] flex justify-center items-center rounded lg:rounded-2xl">
                            <img :src="item.bankLogo" alt="Bank Logo" />
                        </div>
                        <p class="text-[12px] leading-[23px] font-bold "> {{ item.bankName }}</p>
                        <p class="text-[12px] leading-[23px] font-normal"> {{ item.cardNumber }}</p>
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
const targetCartMenu = ref(false);

// Functions
const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value
}

const selectItem = (item) => {
    selectedItem.value = item
    dropdownOpen.value = false
}

const toggleCartMenu = () => {
    targetCartMenu.value = !targetCartMenu.value;
};

const deletCart = () => {

};

const manageAccounts = () => {

};

// Lifecycle hooks
onClickOutside(dropDownElement, () => {
    dropdownOpen.value = false
    targetCartMenu.value = false
})
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.dropdown-menu {
    max-height: 200px;
    overflow-y: auto;
    z-index: 1000;
    border-radius: 0 0 16px 16px;
}
</style>
