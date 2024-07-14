<template>
    <transition name="modal-fade" @before-enter="beforeEnter" @after-enter="afterEnter" @before-leave="beforeLeave"
        @after-leave="afterLeave">
        <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
            <div class="modal-content">
                <button class="close-button" @click="closeModal">X</button>
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { onMounted, onBeforeUnmount, watch, ref } from 'vue';
import { useRouter } from 'nuxt/app';

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    },
    name: {
        type: String,
        default: 'modal'
    }
});

const emits = defineEmits(['update:isOpen']);
const router = useRouter();
const route = useRoute()
const isVisible = ref(props.isOpen);

const closeModal = () => {
    emits('update:isOpen', false);

    window.history.back();
    
    document.body.classList.remove('no-scroll'); // Remove the class when modal is closed
};

watch(() => props.isOpen, (newVal) => {
    isVisible.value = newVal;
    if (newVal) {
        window.history.pushState(null, '', `#${props.name}`);
        document.body.classList.add('no-scroll'); // Add the class when modal is opened
    } else {
        document.body.classList.remove('no-scroll'); // Remove the class when modal is closed
    }
});

const handlePopState = () => {
    if (window.location.hash !== `#${props.name}`) {
        closeModal();
    }
};

onMounted(() => {
    window.addEventListener('popstate', handlePopState);
    if (route.hash === `#${props.name}`) {
        emits('update:isOpen', true);
    }
});

onBeforeUnmount(() => {
    window.removeEventListener('popstate', handlePopState);
});

const beforeEnter = (el) => {
    el.style.opacity = 0;
    el.firstElementChild.style.transform = 'scale(0.9)';
};

const afterEnter = (el) => {
    el.style.opacity = 1;
    el.firstElementChild.style.transform = 'scale(1)';
};

const beforeLeave = (el) => {
    el.style.opacity = 1;
    el.firstElementChild.style.transform = 'scale(1)';
};

const afterLeave = (el) => {
    el.style.opacity = 0;
    el.firstElementChild.style.transform = 'scale(0.9)';
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow: hidden;
    transition: opacity 0.15s ease;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    transition: transform 0.15s ease, opacity 0.15s ease;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
}

/* Add the following styles to prevent body scroll when modal is open */
body.no-scroll {
    overflow: hidden;
}
</style>


<!-- <script>
(function () {

    const POPUP_ID = 'popup';
    const ACTIVE_CLASS = 'active';
    const URL_HASH = '#popup';

    if (window?.location?.hash === URL_HASH) {
        openPopup();
    }

    addEventListener('hashchange', (event) => {
        if (window?.location?.hash === URL_HASH) {
            openPopup(1);
        } else if (window?.location?.hash !== URL_HASH) {
            closePopup(1);
        }
    });

    let registerButton = document.getElementById('registerButton');
    registerButton.addEventListener('click', (e) => {
        openPopup();
    });
    let closePopupButton = document.getElementById('closePopupButton');
    closePopupButton.addEventListener('click', (e) => {
        closePopup();
    });

    let popup = document.getElementById(POPUP_ID);
    popup.addEventListener('click', (e) => {
        // e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }
        closePopup();
    });

    function openPopup(flag = 0) {
        let popup = document.getElementById(POPUP_ID);
        if (popup) {
            popup.classList.add(ACTIVE_CLASS);
            document.getElementsByTagName("body")[0].style = "overflow: hidden;"
            if (flag === 0)
                window.history.pushState(null, null, URL_HASH);
        }
    }

    function closePopup(flag = 0) {
        let popup = document.getElementById(POPUP_ID);
        if (popup) {
            popup.classList.remove(ACTIVE_CLASS);
            document.getElementsByTagName("body")[0].style = "overflow: unset;"
            if (flag === 0) {
                window.history.back();
                setTimeout(() => {
                    if (window.location.href.includes(URL_HASH)) {
                        window.location.replace(window.location.href.replace(URL_HASH, ''))
                    }
                })
            }

        }
    }
})();
</script> -->