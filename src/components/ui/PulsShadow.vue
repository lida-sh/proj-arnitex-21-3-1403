<script setup></script>

<template>
    <span class="breathing-animation z-[1] w-full block h-full bg-custom-radial-end"></span>
</template>

<style scoped>
.breathing-animation {translate: none;
  rotate: none;
  scale: none;
  transform: translate3d(0px, 0px, 0px) scale(1.5);
  transition: all ease-in 0.1s;
  animation: breathing 6s ease-in-out infinite;
}

@keyframes breathing {
  0%, 100% {
    transform: translate3d(0px, 0px, 0px) scale(1.5);
  }
  35% {
    transform: translate3d(0px, 0px, 0px) scale(0.8);
  }
  50% {
    transform: translate3d(0px, 0px, 0px) scale(0.8);
  }
  65% {
    transform: translate3d(0px, 0px, 0px) scale(0.8);
  }
}
</style>