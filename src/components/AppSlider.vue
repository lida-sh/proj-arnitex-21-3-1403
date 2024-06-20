<template>
    <div class="relative lg:px-5">
      <!-- <template v-if="arrows">
        <button
          class="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-5 w-8 h-10"
          @click="clickPrev"
        >
          <chevron-right-icon></chevron-right-icon>
        </button>
        <button
          class="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-5 w-8 h-10"
          @click="clickNext"
        >
          <chevron-left-icon></chevron-left-icon>
        </button>
      </template> -->
      <div class="overflow-x-hidden">
        <div class="flex py-2" ref="sliderWrapperRef">
          <template v-for="(item, index) in items" :key="index">
            <div
              :class="[{ 'py-2': defaultPadding }, itemContainerClass]"
              :ref="(el) => setChildrenRef(el, index)"
            >
              <slot name="item" :item="item" :index="index"></slot>
            </div>
          </template>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/outline";
  import { gsap } from "gsap";
//   import Draggable from "gsap/Draggable";
  import {useEventListener} from "@vueuse/core"
  export default defineComponent({
    components: { ChevronRightIcon, ChevronLeftIcon },
    props: {
      items: {
        type: Array,
        default: () => [],
      },
      arrows: {
        type: Boolean,
        default: () => true,
      },
      defaultPadding: {
        type: Boolean,
        default: () => true,
      },
      itemContainerClass: {
        type: [Array, Object, String],
        default: () => "",
      },
      config: {
        type: Object,
        default: () => ({
          ease: "power1",
          duration: 1,
        }),
      },
      middle: {
        type: Number,
        default: -1,
      },
      start: {
        type: Number,
        default: -1,
      },
      end: {
        type: Number,
        default: -1,
      },
    },
    setup(props) {
      const sliderWrapperRef = ref<Element | null>(null);
      const childrenRef = ref<Element[]>([]);
      const setChildrenRef = (el: any, index: number) => {
        if (el) childrenRef.value[index] = el;
      };
      onBeforeUpdate(()=>{
        childrenRef.value = [];
      });
      const getConfig = () => {
        const el = unref(sliderWrapperRef);
        return { el };
      };
    //   const recalculate = () => {
    //     const { el, maxX } = getConfig();
    //     Draggable.get(unref(el)).applyBounds({ minX: 0, maxX });
    //   };
      onMounted(() => {
        // gsap.registerPlugin(Draggable);
        const { el } = getConfig();
        // Draggable.create(unref(el), {
        //   type: "x",
        //   edgeResistance: 0.9,
        //   bounds: { minX: 0, maxX },
        // });
        const slider = setInterval(()=>{
          setSlider();
        },100)
        // useEventListener("resize", recalculate);
  
      });
    //   onUpdated(() => {
    //     recalculate();
    //   });
    //   const getValidX = (x: number) => {
    //     const { maxX } = getConfig();
    //     if (x < 0) return 0;
    //     if (x > maxX) return maxX;
    //     return x;
    //   };
    //   const getPrevItemsWidth = (activeIndex: number): number => {
    //     let xDistance = 0;
    //     for (let i = 0; i < activeIndex; i++) {
    //       xDistance += childrenRef.value[i].clientWidth;
    //     }
    //     return xDistance;
    //   };
    //   const setActiveIndexStart = (activeIndex: number) => {
    //     if (childrenRef.value[activeIndex]) {
    //       const xDistance = getPrevItemsWidth(activeIndex);
    //       const { el } = getConfig();
    //       gsap.to(unref(el), {
    //         x: getValidX(xDistance),
    //         ...props.config,
    //       });
    //     }
    //   };
    //   const setActiveIndexEnd = (activeIndex: number) => {
    //     if (childrenRef.value[activeIndex]) {
    //       const { el } = getConfig();
    //       const xDistance = getPrevItemsWidth(activeIndex);
    //       const visibleBack =
    //         (unref(el)?.clientWidth || 0) -
    //         childrenRef.value[activeIndex].clientWidth;
    //       gsap.to(unref(el), {
    //         x: getValidX(xDistance - visibleBack),
    //         ...props.config,
    //       });
    //     }
    //   };
    //   const setActiveIndexMiddle = (activeIndex: number) => {
    //     if (childrenRef.value[activeIndex]) {
    //       const { el } = getConfig();
    //       const xDistance = getPrevItemsWidth(activeIndex);
    //       const visibleBack =
    //         (unref(el)?.clientWidth || 0) -
    //         childrenRef.value[activeIndex].clientWidth;
    //       gsap.to(unref(el), {
    //         x: getValidX(xDistance - visibleBack / 2),
    //         ...props.config,
    //       });
    //     }
    //   };
    //   watch(
    //     () => props.start,
    //     (value) => {
    //       setActiveIndexStart(value);
    //     }
    //   );
    //   watch(
    //     () => props.end,
    //     (value) => {
    //       setActiveIndexEnd(value);
    //     }
    //   );
    //   watch(
    //     () => props.middle,
    //     (value) => {
    //       setActiveIndexMiddle(value);
    //     }
    //   );
    //   const clickNext = () => {
    //     const { el } = getConfig();
    //     const currentX = gsap.getProperty(unref(el), "x");
    //     const plusX = unref(el)!.clientWidth;
    //     gsap.to(unref(el), {
    //       x: getValidX(+currentX + plusX),
    //       ...props.config,
    //     });
    //   };
    //   const clickPrev = () => {
    //     const { el } = getConfig();
    //     const currentX = gsap.getProperty(unref(el), "x");
    //     const plusX = unref(el)!.clientWidth;
    //     gsap.to(unref(el), {
    //       x: getValidX(+currentX - plusX),
    //       ...props.config,
    //     });
    //   };
      const getX = (x:number)=>{
        const { el } = getConfig();
         if(x>el!.clientWidth){
          return 0
         }
      };
      const setSlider = () => {
        const { el } = getConfig();
        const currentX = gsap.getProperty(unref(el), "x");
        let validX = (+currentX + 10);
        if (+currentX >= el!.clientWidth){
           validX = 0
           }
      
        gsap.to(unref(el), {
          x: validX,
          ...props.config,
        });
      };
      return { sliderWrapperRef, setChildrenRef };
    },
  });
  </script>
  
  <style scoped></style>
  