<template>


    <!-- <ol class="relative text-white text-xs font-medium leading-5 border-s border-[#FF9A67] ">
        <li v-for="(item, index) in list" class="mb-10 ms-6">
            <span
                class="absolute flex items-center justify-center w-[1.188rem] h-[1.188rem] bg-[#FF9A67] rounded-full -start-[10px] lsdt:border-s-0 ">
                <template v-if="$slots.icon">
                    <slot name="icon"></slot>
                </template> -->
    <!-- <template v-if="numberStep">
                    {{index+1}}
                </template>
            </span>
            {{ item.title }}
        </li>
    </ol> -->
    <ul class="steps steps-vertical">
        <li v-for="(item, index) in list"
            class="step step-primary text-white text-justify font-medium leading-5 justify-start"
            :class="[{ 'counter': !numberStep }, classItem]">{{ item.title }}</li>

    </ul>

</template>
<script lang="ts">
interface ListItem {
    title: string;
}
export default defineComponent({
    props: {
        classItem: {
            type: [String, Object, Array],
            default: "false",
        },
        list: {
            type:Array,
            required:true
        },
        numberStep:{
            type: Boolean,
            default:false
        }
    }
})


// const props = withDefaults(defineProps<{ list: ListItem[], numberStep: boolean, classItem:[String, Object, Array] }>(),
// {classItem:false})
</script>
<style scoped>
.step {
    text-align: start;

}

.step::after {
    background-color: #FF9A67;
    height: 1.188rem;
    width: 1.188rem;
    color: #FF9A67;



}

.steps .step-primary::before {
    background-color: #FF9A67;
}

.steps-vertical .step:before {
    width: 1px;
    margin-inline-start: 47%
}
</style>