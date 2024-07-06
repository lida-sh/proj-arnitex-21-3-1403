<template>
<div class="relative">
        <NavBottomNavigation class="block lg:hidden" @toggleToProfileMenu="toggleMenu"></NavBottomNavigation>
        <div v-if="divModal"
          class="fixed h-screen w-screen inset-0 flex justify-center bg-black opacity-30 backdrop-blur-md">
        </div>
        <div ref="target" class="h-auto fixed flex flex-col z-[100] w-screen inset-x-0 -bottom-[150rem] bg-[#171717]">
          <div class="flex flex-col items-start justify-center p-4 ">
            <div class="flex items-center justify-start" @click="closeMenu">
              <IconsProfileMenuClose></IconsProfileMenuClose>
            </div>
              <UiUserProfileMenu></UiUserProfileMenu>
          </div>

        </div>
      </div>

</template>
<script setup>

const { target, toggleMenu, closeMenu, openMenu, divModal } = useMenuProfile();
</script>