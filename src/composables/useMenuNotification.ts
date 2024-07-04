import gsap from "gsap"
import { useEventListener, useDebounceFn, onClickOutside } from "@vueuse/core"
import { useRoute } from "vue-router"

export const useMenuNotif = ()=>{
    const closeMenuNotification = ref(false)
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
            closeMenuNotification.value = true
        }else{
            menuAnimation?.reverse()
            closeMenuNotification.value = false 
        }
    }
    const openMenuNotif = ()=>{
        if(menuAnimation?.progress() === 0){
            menuAnimation?.play()
            closeMenuNotification.value = false
        }
    }
    const closeMenuNotif = ()=>{
        if(menuAnimation?.progress() >0){
            menuAnimation?.reverse()
            closeMenuNotification.value = false
        }
    }
    onClickOutside(targetNotif, ()=>{
        menuAnimation?.reverse()
        closeMenuNotification.value = false
    })
    const route = useRoute()
    watch(()=>route.path, ()=>{
        removeProps()
        setAnimation()
    })
    return {targetNotif, toggleMenuNotif, closeMenuNotif, openMenuNotif, closeMenuNotification}
}