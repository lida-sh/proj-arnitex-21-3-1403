<script setup>
const showModal = defineModel('showModal', { required: true, default: false });
const props = defineProps({
  name: {
    type: String,
    default: 'select-coin'
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



const coinList = ref([
{
    name: 'بیت کوین',
    symbol: 'BTC',
    image: '/bitcoin-logo.png',
  },
  {
    name: 'بیت کوین',
    symbol: 'BTC',
    image: '/bitcoin-logo.png',
  },
  {
    name: 'بیت کوین',
    symbol: 'BTC',
    image: '/bitcoin-logo.png',
  },  {
    name: 'بیت کوین',
    symbol: 'BTC',
    image: '/bitcoin-logo.png',
  },
  {
    name: 'بیت کوین',
    symbol: 'BTC',
    image: '/bitcoin-logo.png',
  },
  {
    name: 'بیت کوین',
    symbol: 'BTC',
    image: '/bitcoin-logo.png',
  },  {
    name: 'بیت کوین',
    symbol: 'BTC',
    image: '/bitcoin-logo.png',
  },
  {
    name: 'بیت کوین',
    symbol: 'BTC',
    image: '/bitcoin-logo.png',
  },
  {
    name: 'بیت کوین',
    symbol: 'BTC',
    image: '/bitcoin-logo.png',
  },
])

const toDepositCrypto = () => {
  document.body.classList.remove('no-scroll'); 
  router.push("/wallet/deposit-crypto")
}
</script>

<template>

  <Transition :duration="650" name="nested">

    <div class="outer fixed bg-black flex items-center justify-center backdrop-blur-[1px] bg-opacity-70 inset-0 z-[3000] select-none" v-if="showModal"
      @click.self="showModal = false">

      <div class="inner bg-[#171717] w-5/6 max-w-[822px] pb-5 rounded-2xl px-4 pt-7">
        <div class="flex justify-between items-center">
          <h4 class="font-bold text-base leading-7 flex-1 text-white">انتخاب رمز ارز</h4>
          <button class="p-1" @click="showModal = false">
            <IconsSharedCloseMob></IconsSharedCloseMob>
          </button>
        </div>

        <div class="flex flex-col mt-7 gap-4">
          <div class="relative">
            <input type="text" placeholder="جستجو رمز ارز"
              class="search-input pl-12 w-full bg-transparent rounded-lg border-1 border-[#A8A8A8] ps-3 text-white text-xs leading-6 font-medium placeholder:text-[#A8A8A8] focus:border-white py-2 px-1">
            <IconsSharedSelectCoinSearchMob class="absolute top-1/2 left-3 transform -translate-y-1/2">
            </IconsSharedSelectCoinSearchMob>
          </div>
          <ul class="max-h-64 overflow-auto">
            <li @click="toDepositCrypto" v-for="item in coinList" :key="item" class="flex items-center cursor-pointer hover:bg-[#000000] px-2 gap-4 border-solid border-b-[1px] border-[#BBBBBB]">
              <img class="w-10 h-10 object-contain" :src="item.image" alt="">
              <div class="flex flex-col items-start flex-1">
                <span class="text-white font-normal text-base leading-7">{{ item.name }}</span>
                <span class="text-[#808080] font-normal text-base leading-7">{{ item.symbol }}</span>
              </div>
            </li>
          </ul>
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

.search-input:focus {
  border: 1px solid #ffffff;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
</style>