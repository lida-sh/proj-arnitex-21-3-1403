<template>
    <div class="collapse-container-1">
        <div ref="collapseContent" class="collapse-content-1">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import gsap from 'gsap';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:isOpen']);

const collapseContent = ref(null);

const toggleAnimation = (isOpen) => {
    if (isOpen) {
        gsap.to(collapseContent.value, { height: 'auto', duration: 0.5, ease: 'power2.inOut' });
    } else {
        gsap.to(collapseContent.value, { height: 0, duration: 0.5, ease: 'power2.inOut' });
    }
};

watch(() => props.isOpen, (newValue) => {
    toggleAnimation(newValue);
});

onMounted(() => {
    if (props.isOpen) {
        gsap.set(collapseContent.value, { height: 'auto' });
    } else {
        gsap.set(collapseContent.value, { height: 0 });
    }
});
</script>

<style scoped>
.collapse-container-1 {
    overflow: hidden;
    transition: height 0.3s ease;
}

.collapse-content-1 {
    overflow: hidden;
}
</style>