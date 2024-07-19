<template>
    <div class="py-[1.875rem] gap-3 flex  relative z-20 justify-between cursor-pointer items-center transition-all"
        :class="[{ 'card-bg px-[1.5rem] md:px-[4.5rem] rounded-2xl': !noStyleBg }, { 'pr-3 pl-[1.688rem] xl:px-[1.5rem]': noStyleBg }, backgroundClassTitle]"
        @click="toggle" v-bind="$attrs">
        <slot name="title" :is-open="isOpen"></slot>
        <IconsCollapseArrowDown v-if="withTitleIcon && !isOpen"></IconsCollapseArrowDown>
        <IconsCollapseArrowUp v-if="withTitleIcon && isOpen"></IconsCollapseArrowUp>

    </div>
    <div ref="target" class="px-[2rem] z-10 h-0 overflow-y-hidden   "
        :class="[{ 'bg-[#262626] mt-[-14px] rounded-b-lg ': !noStyleBg }, backgroundClassContent]">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, unref } from "vue";
import { gsap } from "gsap";
import { useDebounceFn, useEventListener } from "@vueuse/core";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
import { ChevronUpIcon } from "@heroicons/vue/24/solid";
import { BeakerIcon } from "@heroicons/vue/24/solid";
export default defineComponent({
    props: {
        backgroundClassTitle: {
            type: [String, Object, Array],
            default: "",
        },
        backgroundClassContent: {
            type: [String, Object, Array],
            default: "false",
        },
        noStyleBg: {
            type: Boolean,
            default: false,
        },
        withTitleIcon: {
            type: Boolean,
            default: true,
        },
    },
    setup() {
        const target = ref<any>(null);
        const progress = ref(0);
        let animation: any;
        const setAnimation = () => {
            animation = gsap.to(unref(target), {
                height: "auto",
                overflow: "hidden",
                paused: true,
                duration: 0.3,
                onUpdate() {
                    progress.value = animation.progress();
                },
            });
        };
        onMounted(() => {
            setAnimation();
        });

        const toggle = () => {
            if (animation.progress() === 0) {
                animation?.play();
            } else {
                animation?.reverse();
            }
        };
        const isOpen = computed(() => unref(progress) !== 0);
        //  const removeProps = () => {
        //   gsap.set(unref(target), { clearProps: "all" });
        // };
        const debouncedFn = useDebounceFn(() => {
            animation.progress(0).invalidate();
        }, 500);
        // useEventListener("resize", debouncedFn);
        return { target, toggle, isOpen };
    },
});
</script>

<style scoped></style>
