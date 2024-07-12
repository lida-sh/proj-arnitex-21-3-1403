<script setup lang="ts">
import { computed, onMounted, ref, unref } from "vue";
import { gsap } from "gsap";
import { useDebounceFn, useEventListener } from "@vueuse/core";

const target = ref<any>(null);
const progress = ref(0);
let animation: any;
const setAnimation = () => {
  animation = gsap.to(unref(target), {
    height: "auto",
    overflow: "hidden",
    paused: true,
    duration: 0.5,
    onUpdate() {
      progress.value = animation.progress();
    },
  });
}
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
const debouncedFn = useDebounceFn(() => {
  animation.progress(0).invalidate();
}, 500);
// useEventListener("resize", debouncedFn);
</script>

<template>
  <div
    class="py-[1rem] px-[1.5rem] flex rounded-[0.625rem] relative z-20 justify-between cursor-pointer items-center transition-all collapse-toggle"
    @click="toggle" v-bind="$attrs">
    <slot name="title" :is-open="isOpen"></slot>
    <IconsFooterCollapseArrowDown v-if="!isOpen"></IconsFooterCollapseArrowDown>
    <IconsFooterCollapseArrowUp v-if="isOpen"></IconsFooterCollapseArrowUp>
  </div>
  <div ref="target" class="relative z-10 mt-[-14px] px-10 h-0 overflow-y-hidden rounded-b-lg bg-[#343434]">
    <slot></slot>
  </div>
</template>

<style scoped>
.collapse-toggle {
  border: 1px solid #343434;
  background: #262626;
}
</style>