<template>
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
            type: Array,
            required: true
        },
        numberStep: {
            type: Boolean,
            default: false
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
    height: 0.75rem;
    width:  0.75rem;
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