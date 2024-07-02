import gsap from "gsap"
import { useEventListener, useDebounceFn, onClickOutside } from "@vueuse/core"
import { useRoute } from "vue-router"

export const useMenuNotif = ()=>{
    const targetNotif = ref(null)
    let menuAnimation:any
    const setAnimation = ()=>{
        menuAnimation = gsap.to(unref(targetNotif),{
            autoAlpha:1,
            height:"auto",
            paused:true,
            duration: 0.2
        })
    }
    const removeProps = ()=>{
        gsap.set(unref(targetNotif), {clearProps: "all"})
    }
    onMounted(async ()=>{
        await nextTick()
        setAnimation()
    })
    //@ts-ignore
    useEventListener('resize',useDebounceFn(()=>{
        removeProps()
        setAnimation()
    }),500)
    const toggleMenuNotif = ()=>{
        if(menuAnimation.progress() === 0){
            menuAnimation?.play()
        }else{
            menuAnimation?.reverse() 
        }
    }
    const openMenuNotif = ()=>{
        if(menuAnimation?.progress() === 0){
            menuAnimation?.play()
        }
    }
    const closeMenuNotif = ()=>{
        if(menuAnimation?.progress() >0){
            menuAnimation?.reverse()
        }
    }
    onClickOutside(targetNotif, ()=>{
        menuAnimation?.reverse()
    })
    const route = useRoute()
    watch(()=>route.path, ()=>{
        removeProps()
        setAnimation()
    })
    return {targetNotif, toggleMenuNotif, closeMenuNotif, openMenuNotif}
}