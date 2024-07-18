import gsap from "gsap"
import { useEventListener, useDebounceFn, onClickOutside } from "@vueuse/core"
import { useRoute } from "vue-router"

export const useSelectCart = ()=>{
    const targetCarts = ref(null)
    let menuAnimation:any
    const setAnimation = ()=>{
        menuAnimation = gsap.to(unref(targetCarts),{
            autoAlpha:1,
            height:"auto",
            paused:true,
            duration: 0.5
        })
    }
    const removeProps = ()=>{
        gsap.set(unref(targetCarts), {clearProps: "all"})
    }
    onMounted(async ()=>{
        await nextTick()
        setAnimation()
    })
    //@ts-ignore
    // useEventListener('resize',useDebounceFn(()=>{
    //     removeProps()
    //     setAnimation()
    // }),500)
    const toggleMenuCarts = ()=>{
        if(menuAnimation.progress() === 0){
            menuAnimation?.play()
        }else{
            menuAnimation?.reverse() 
        }
    }
    const openMenuCarts = ()=>{
        if(menuAnimation?.progress() === 0){
            menuAnimation?.play()
        }
    }
    const closeMenuCarts = ()=>{
        if(menuAnimation?.progress() >0){
            menuAnimation?.reverse()
        }
    }
    onClickOutside(targetCarts, ()=>{
        menuAnimation?.reverse()
    })
    const route = useRoute()
    watch(()=>route.path, ()=>{
        removeProps()
        setAnimation()
    })
    return {targetCarts, toggleMenuCarts, closeMenuCarts, openMenuCarts}
}