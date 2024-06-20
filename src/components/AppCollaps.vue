<template>
  <div
    class="py-3 px-3.5 flex justify-between cursor-pointer rounded transition-all bg-[#171717]"
    @click="toggle"
    v-bind="$attrs"
  >
    <slot name="title" :is-open="isOpen" />
    <svg
      v-if="withTitleIcon&&!isOpen"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-4 mr-3 text-white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
    <svg
      v-if="withTitleIcon&&isOpen"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-4 mr-3 text-white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>

    <!-- <div class="mr-3 text-white" v-if="withTitleIcon">
        </div> -->
  </div>
  <div ref="target" class="px-[4.5rem] h-0 overflow-y-hidden bg-[#262626]">
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
    noStyle: {
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
        duration: 0.5,
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
    useEventListener("resize", debouncedFn);
    return { target, toggle, isOpen };
  },
});
</script>

<style scoped></style>
