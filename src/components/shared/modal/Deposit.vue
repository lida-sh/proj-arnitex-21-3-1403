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
  } else {
    showModal.value = false;
  }
};

const handleResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    console.log('Resize ended');
    document.body.classList.remove('no-scroll'); 
    router.replace({ hash: '' });
  }, 300); 
}
let resizeTimeout;

onMounted(() => {
  if (window.location.hash === `#${props.name}`) {
    showModal.value = true;
  }
  window.addEventListener('popstate', handlePopState);
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('popstate', handlePopState);
  window.removeEventListener('resize', handleResize);
});

watch(showModal, (newVal) => {
  if (showModal.value) {
    document.body.classList.add('no-scroll'); // Add the class when modal is opened
    if (window.location.hash !== `#${props.name}`) {
      window.history.pushState(null, '', `#${props.name}`)
    }
  } else {
    // 'closing modal'
    if (window.location.hash === `#${props.name}`) {
      if (window.history.length > 1) {
        // 'going back'
        window.history.back();
      } else {
        // 'You are at the top of the history stack. You can not go back anymore.'
        router.replace({ hash: '' });
      }
    }
    document.body.classList.remove('no-scroll'); // Remove the class when modal is closed
  }
});

const toDeposit = () => {
  router.push("/wallet/deposit")
  document.body.classList.remove('no-scroll'); 
}
</script>

<template>
  <Transition :duration="650" name="nested">
    <div class="outer fixed bg-black backdrop-blur-[1px] bg-opacity-70 inset-0 z-[3000] select-none modal-overlay"
      v-if="showModal" @click.self="showModal = false">
      <div class="inner modal-content bg-[#171717] ">
        <button class="close-button block ms-auto" @click="showModal = false">
          <IconsButtonCloseDepositModal></IconsButtonCloseDepositModal>
        </button>
        <span class="font-normal text-[1rem] leading-7 text-white">
          انتخاب روش واریز
        </span>
        <div class="flex gap-[2rem] mt-[1.5rem]">
          <button @click="toDeposit" class="bg-[#262626] flex items-center gap-4 py-6 px-4 rounded-2xl w-[25rem]">
            <IconsTomanDepositModal></IconsTomanDepositModal>
            <div class="flex flex-col items-start flex-1 text-start">
              <span class="text-white">واریز تومان</span>
              <span class="text-[#676767] self-start whitespace-nowrap">شارژ کیف پول از طریق کارت بانکی</span>
            </div>
            <IconsDepositModalLeftArrow></IconsDepositModalLeftArrow>
          </button>

          <button @click="$emit('depositCrypto')"
            class="bg-[#262626] flex items-center gap-4 py-6 px-4 rounded-2xl w-[25rem]">
            <IconsCryptoDepositModal></IconsCryptoDepositModal>
            <div class="flex flex-col items-start flex-1 text-start">
              <span class="text-white">واریز ارز دیجیتال</span>
              <span class="text-[#676767] self-start whitespace-nowrap">شارژ کیف پول از طریق شبکه بلاکچینی</span>
            </div>
            <IconsDepositModalLeftArrow></IconsDepositModalLeftArrow>
          </button>
        </div>
      </div>
    </div>
  </transition>
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
  transition-delay: 0.2s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateY(10%);
  opacity: 0.001;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
  transition: opacity 0.15s ease;
  backdrop-filter: blur(4px);
}

.modal-content {
  padding: 30px;
  border-radius: 16px;
  transition: transform 0.15s ease, opacity 0.15s ease;
}
</style>
