import gsap from "gsap";
import { useEventListener, useDebounceFn, onClickOutside } from "@vueuse/core";
import { useRoute } from "vue-router";

export const useMenuByRef = () => {
  // const target = ref(null);
//   const refMenu_0 = ref(null);
//   const refMenu_1 = ref(null);
//   const refMenu_2 = ref(null);
//   const refMenu_3 = ref(null);

  // let menuAnimation:any
//   let menuAnimationArray: any[];
//   const setAnimation = () => {
    // menuAnimation = gsap.to(unref(target),{
    //     autoAlpha: 1,
    //     height: "auto",
    //     overflow: "hidden",
    //     paused:true,
    //     duration: 0.5
    // })
//     for (let i = 0; i < 4; i++) {
//       menuAnimationArray[i] = gsap.to(unref(`refMenu_${i}`), {
//         autoAlpha: 1,
//         height: "auto",
//         overflow: "hidden",
//         paused: true,
//         duration: 0.5,
//       });
//     }
//   };
//   const removeProps = () => {
//     // gsap.set(unref(target), {clearProps: "all"})
//     for (let i = 0; i < 4; i++) {
//       gsap.set(unref(`refMenu_${i}`), { clearProps: "all" });
//     }
//   };
//   onMounted(async () => {
//     await nextTick();
//     setAnimation();
//   });
  //@ts-ignore
  //@ts-ignore
//   useEventListener(
//     "resize",
//     useDebounceFn(() => {
//       removeProps();
//       setAnimation();
//     }),
//     500
//   );
//   const toggleMenu = (i: number) => {
//     console.log(i);
    // if(el == target){
    //     if(menuAnimation.progress() === 0){
    //         menuAnimation?.play()
    //     }else{
    //         menuAnimation?.reverse()
    //     }
    // }else{
    // if (menuAnimationArray[i].progress() === 0) {
    //   menuAnimationArray[i]?.play();
    // } else {
    //   menuAnimationArray[i]?.reverse();
    // }
    // }
//   };
//   const openMenu = () => {
//     if (menuAnimation?.progress() === 0) {
//       menuAnimation?.play();
//     }
//   };
//   const closeMenu = () => {
//     if (menuAnimation?.progress() > 0) {
//       menuAnimation?.reverse();
//     }
//   };
//   onClickOutside(target, () => {
//     menuAnimation?.reverse();
//   });
//   const route = useRoute();
//   watch(
//     () => route.path,
//     () => {
//       removeProps();
//       setAnimation();
//     }
//   );
//   return {
    
//     refMenu_0,
//     refMenu_1,
//     refMenu_2,
//     refMenu_3,
//     toggleMenu,
   
//   };
};
