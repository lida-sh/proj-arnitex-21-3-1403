import gsap from "gsap"
import { useEventListener, useDebounceFn, onClickOutside } from "@vueuse/core"
import { useRoute } from "vue-router"

export const useCartMenu = ()=>{
    const targetCartMenu = ref(null)
    let menuAnimation:any
    const setAnimation = ()=>{
        menuAnimation = gsap.to(unref(targetCartMenu),{
            autoAlpha:1,
            height:"auto",
            paused:true,
            duration: 0.5
        })
    }
    const removeProps = ()=>{
        gsap.set(unref(targetCartMenu), {clearProps: "all"})
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
    const toggleCartMenu = ()=>{
        if(menuAnimation.progress() === 0){
            menuAnimation?.play()
        }else{
            menuAnimation?.reverse() 
        }
    }
    const openCartMenu = ()=>{
        if(menuAnimation?.progress() === 0){
            menuAnimation?.play()
        }
    }
    const closeCartMenu = ()=>{
        if(menuAnimation?.progress() >0){
            menuAnimation?.reverse()
        }
    }
    onClickOutside(targetCartMenu, ()=>{
        menuAnimation?.reverse()
    })
    const route = useRoute()
    watch(()=>route.path, ()=>{
        removeProps()
        setAnimation()
    })
    return {targetCartMenu, toggleCartMenu, closeCartMenu, openCartMenu}
}