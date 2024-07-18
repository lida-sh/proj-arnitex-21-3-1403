<script setup>
const showModal = defineModel('showModal', { required: true, default: false });
const props = defineProps({
  name: {
    type: String,
    default: 'modal'
  }
});
const router = useRouter();
const route = useRoute();


const handlePopState = () => {
	if (window.location.hash === `#${props.name}`) {
    showModal.value = true;
  }else{
		showModal.value = false;
  }
};

onMounted(() => {
  if (window.location.hash === `#${props.name}`) {
    showModal.value = true;
  }
  window.addEventListener('popstate', handlePopState);
});
onBeforeUnmount(() => {
	window.removeEventListener('popstate', handlePopState);
});


watch(showModal, (newVal) => {
  if (showModal.value) {
    document.body.classList.add('no-scroll'); // Add the class when modal is opened
    if (window.location.hash !== `#${props.name}`) {
      window.history.pushState(null, '', `#${props.name}`)
    }
  } else {
    // 'closing modal'
    document.body.classList.remove('no-scroll'); // Remove the class when modal is closed
    if (window.location.hash === `#${props.name}`) {
      if (window.history.length > 1) {
        window.history.back();
        // 'going back'
      } else {
        router.replace({ hash: '' });
        // 'You are at the top of the history stack. You can not go back anymore.'
      }
    }
  }
});



</script>

<template>

  <Transition :duration="650" name="nested">

    <div class="outer fixed bg-black backdrop-blur-[1px] bg-opacity-70 inset-0 z-[3000] select-none" v-if="showModal"
      @click.self="showModal = false">

      <div class="inner bg-[#171717] fixed bottom-0 left-0 right-0 pb-20 rounded-t-2xl px-4 pt-7">
        <div class="flex justify-between items-center">
          <h4 class="font-bold text-base leading-7 flex-1 text-white">انتخاب روش واریز</h4>
          <button class="p-1" @click="showModal = false">
            <IconsSharedCloseMob></IconsSharedCloseMob>
          </button>
        </div>

        <div class="flex flex-col mt-7 gap-4">
          <button class="bg-[#262626] rounded-xl py-6 px-5 flex items-center gap-4">
            <IconsSharedTomanMob></IconsSharedTomanMob>
            <div class="flex flex-col items-start gap-2 flex-1">
              <span class="text-white text-xs leading-4 font-normal">واریز تومان</span>
              <p class="text-[#676767] text-[11px] leading-4">شارژ کیف پول از طریق کارت بانکی</p>
            </div>
            <IconsSharedLeftArrowMob></IconsSharedLeftArrowMob>
          </button>

          <button @click="$emit('depositCrypto')" class="bg-[#262626] rounded-xl py-6 px-5 flex items-center gap-4">
            <IconsSharedCryptoMob></IconsSharedCryptoMob>
            <div class="flex flex-col items-start gap-2 flex-1">
              <span class="text-white text-xs leading-4 font-normal">واریز ارز دیجیتال</span>
              <p class="text-[#676767] text-[11px] leading-4">شارژ کیف پول از طریق شبکه بلاکچینی</p>
            </div>
            <IconsSharedLeftArrowMob></IconsSharedLeftArrowMob>
          </button>
        </div>
      </div>

    </div>
  </Transition>

</template>

<style scoped>
.nested-enter-active,
.nested-leave-active {
  transition: all 0.4s ease-in-out;
}

/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.15s ease-in;
}

/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateY(100%);
  opacity: 0.001;
}
</style>