import gsap from "gsap"
import { useEventListener, useDebounceFn, onClickOutside } from "@vueuse/core"
import { useRoute } from "vue-router"

export const useMenuById = (index:number)=>{
    console.log(index)
    // const target = ref(null)
    let menuAnimation:any
    const setAnimation = ()=>{
        menuAnimation = gsap.to("#sub-menu-"+index,{
            autoAlpha: 1,
            height: "auto",
            overflow: "hidden",
            duration: 0.5
        })
    }
    const removeProps = ()=>{
        gsap.set("#sub-menu-"+index, {clearProps: "all"})
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
    const toggleMenu = ()=>{
        if(menuAnimation.progress() === 0){
            menuAnimation?.play()
        }else{
            menuAnimation?.reverse() 
        }
    }
    const openMenu = ()=>{
        if(menuAnimation?.progress() === 0){
            menuAnimation?.play()
        }
    }
    const closeMenu = ()=>{
        if(menuAnimation?.progress() >0){
            menuAnimation?.reverse()
        }
    }
     const el = document.getElementById("#sub-menu-"+index)
    onClickOutside(el, ()=>{
        menuAnimation?.reverse()
    })
    const route = useRoute()
    watch(()=>route.path, ()=>{
        removeProps()
        setAnimation()
    })
    return {toggleMenu, closeMenu, openMenu}
}