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
    <div class="outer fixed bg-black backdrop-blur-[1px] bg-opacity-70 inset-0 z-[3000] select-none modal-overlay" v-if="showModal" @click.self="showModal = false">
      <div class="inner modal-content bg-[#171717] ">
        <button class="close-button block ms-auto" @click="showModal = false"><svg width="18" height="18" viewBox="0 0 18 18"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L17 17" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            <path d="M17 1L1 17" stroke="white" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>
        <span class="font-normal text-[1rem] leading-7 text-white">
          انتخاب روش واریز
        </span>
        <div class="flex gap-[2rem] mt-[1.5rem]">
          <NuxtLink to="/wallet/deposit" class="bg-[#262626] flex items-center gap-4 py-6 px-4 rounded-2xl w-[25rem]">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM29.5156 22.3086L32.8555 29.3398H20.3164C19.0273 29.1966 17.9727 28.8125 17.1523 28.1875C16.332 27.5495 15.6615 26.6706 15.1406 25.5508L10.7266 30.1211C11.1432 31.0716 11.6185 31.8919 12.1523 32.582C12.6992 33.2721 13.3503 33.8581 14.1055 34.3398C14.8607 34.8086 15.7461 35.1797 16.7617 35.4531C17.7773 35.7266 18.9818 35.9089 20.375 36H35.3359C36.1042 35.9479 36.7617 35.7786 37.3086 35.4922C37.8555 35.1927 38.3047 34.8216 38.6562 34.3789C39.0208 33.9232 39.2878 33.4089 39.457 32.8359C39.6263 32.263 39.7109 31.6641 39.7109 31.0391C39.724 30.4141 39.6589 29.7826 39.5156 29.1445C39.3854 28.5065 39.1836 27.901 38.9102 27.3281L35.0625 19.2227L29.5156 22.3086ZM21.3125 17.3672L17.6602 13.7148L13.4023 17.9727L17.6602 22.2109L21.3125 18.5586L25.0039 22.2109L29.2617 17.9727L25.0039 13.7148L21.3125 17.3672Z"
                fill="#3B8950" />
            </svg>

            <div class="flex flex-col items-start flex-1 text-start">
              <span class="text-white">واریز تومان</span>
              <span class="text-[#676767] self-start whitespace-nowrap">شارژ کیف پول از طریق کارت بانکی</span>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="18" viewBox="0 0 8 18" fill="none">
              <path d="M7 1.5L1 9L7 16.5" stroke="white" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </NuxtLink>
          <button  @click="$emit('depositCrypto')" class="bg-[#262626] flex items-center gap-4 py-6 px-4 rounded-2xl w-[25rem]">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path
                d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z"
                fill="#F7931A" />
              <path
                d="M36.3954 21.9361C36.895 18.6533 34.3606 16.888 30.8873 15.7102L32.0125 11.2625L29.2656 10.5889L28.1688 14.9193C27.4475 14.7409 26.7068 14.5745 25.9672 14.4091L27.0721 10.0496L24.3251 9.375L23.1999 13.8217C22.6017 13.6873 22.0136 13.555 21.4449 13.4147V13.4007L17.6551 12.4684L16.9236 15.3594C16.9236 15.3594 18.9584 15.8195 18.9207 15.8485C19.3011 15.8936 19.6483 16.084 19.8876 16.3787C20.127 16.6733 20.2394 17.0488 20.2006 17.4243L18.9228 22.4905C19.0198 22.5144 19.1153 22.5442 19.2087 22.5797L18.9177 22.5095L17.122 29.6076C17.0822 29.7314 17.018 29.8463 16.9331 29.9457C16.8482 30.045 16.7442 30.1269 16.6271 30.1866C16.51 30.2463 16.3821 30.2826 16.2507 30.2935C16.1193 30.3044 15.987 30.2897 15.8615 30.2501C15.8899 30.2892 13.8653 29.7599 13.8653 29.7599L12.5 32.8584L16.0771 33.7375C16.7415 33.9019 17.3936 34.0743 18.0336 34.2387L16.8972 38.7365L19.6441 39.4101L20.7693 34.9624C21.5192 35.1629 22.2476 35.3463 22.9598 35.5218L21.8407 39.9514L24.5876 40.625L25.724 36.1362C30.4101 37.0103 33.9333 36.6575 35.4167 32.4825C36.6121 29.1214 35.3577 27.1807 32.8926 25.9167C33.8407 25.7287 34.6991 25.2367 35.3337 24.5175C35.9682 23.7983 36.3434 22.8924 36.4005 21.9412L36.3954 21.9361ZM30.1161 30.61C29.2686 33.973 23.5224 32.1547 21.6596 31.6986L23.1694 25.7393C25.0332 26.1984 31.0043 27.1056 30.1161 30.61ZM30.9666 21.889C30.1924 24.9484 25.4107 23.3926 23.8612 23.0117L25.2286 17.6078C26.778 17.9887 31.7744 18.6974 30.9677 21.888L30.9666 21.889Z"
                fill="white" />
            </svg>

            <div class="flex flex-col items-start flex-1 text-start">
              <span class="text-white">واریز ارز دیجیتال</span>
              <span class="text-[#676767] self-start whitespace-nowrap">شارژ کیف پول از طریق شبکه بلاکچینی</span>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="18" viewBox="0 0 8 18" fill="none">
              <path d="M7 1.5L1 9L7 16.5" stroke="white" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
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
