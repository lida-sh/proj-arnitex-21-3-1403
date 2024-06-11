<template>
  <div class="min-w-24 relative transition duration-1000 flex gap-12">
    <div class="w-[22.5rem] h-[2.625rem] relative">
      <input
        type="text"
        class="h-full w-full rounded-md bg-[#262626] px-4 focus:border-gray-600 focus:ring-0 text-gray-100 border-[#676767]"
        placeholder="جستجو"
      />
      <img src="~/assets/images/zoom.png" class="absolute top-3 left-4" />
    </div>
    <div
      class="flex items-center justify-center w-36 h-[2.625rem] bg-[#FF7028] rounded-md p-3.5"
    >
      <div class="flex items-center justify-center pl-3">ثبت نام</div>
      <div class="border-r border-white flex items-center justify-center pr-3">
        ورود
      </div>
    </div>
    <div class="flex items-center justify-center border-r border-gray-100 pr-6">
      <a href="/" class="w-[7.5rem] h-4">
        <img src="~assets/images/arnitex.png" class="" />
      </a>
      <div class="w-[4.5rem] h-full flex items-center justify-center">
        <img src="~/assets/images/logo.png" class="w-8 h-7" />
      </div>
    </div>

    <!-- <chevron-down-icon class="w-4 h-4 mr-1"></chevron-down-icon> -->

    <!-- <div class="absolute bg-white rounded-box border inset-x-5 top-10 z-30 invisible h-0 flex justify-center" ref="target">
          <button @click="logout" class="text-error p-4 lg:ml-4">خروج</button>
       </div> -->
  </div>
</template>
<script></script>
