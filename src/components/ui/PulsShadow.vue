<script setup></script>

<template>
  <span class="breathing-animation z-[1] w-full block h-full bg-custom-radial-end"></span>
</template>

<style scoped>
.breathing-animation {
  translate: none;
  transform: scale(1.5);
  transition: all ease-in 0.1s;
  animation: breathing 6s ease-in-out infinite;
}

@keyframes breathing {

  0%,
  100% {
    transform: scale(1.5);
  }

  35% {
    transform: scale(0.8);
  }

  50% {
    transform: scale(0.8);
  }

  65% {
    transform: scale(0.8);
  }
}
</style>