<script setup>
const state = ref('night')

</script>

<template>
  <div @click="state === 'night' ? state = 'light' : state = 'night'"
    class="p-3 cursor-pointer relative theme-button-wrapper">
    <div class="btn-container">
      <Transition name="slide-up">
        <IconsThemeNight class="absolute" v-if="state === 'night'"></IconsThemeNight>
        <IconsThemeLight class="absolute" v-else-if="state === 'light'"></IconsThemeLight>
      </Transition>

    </div>

  </div>
</template>


<style>
.theme-button-wrapper .btn-container {
  display: block;
  position: relative;
  height: 1.25rem;
}

.btn-container>* {
  /* position: absolute; */
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
}

.theme-button-wrapper .slide-up-enter-active,
.theme-button-wrapper .slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.theme-button-wrapper .slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.theme-button-wrapper .slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>