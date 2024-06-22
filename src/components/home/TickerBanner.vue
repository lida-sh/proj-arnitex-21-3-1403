<script setup>
const items = [
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1.png",
    name: "1بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1.png",
    name: "2بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1",
    name: "3بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1.png",
    name: "4بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1.png",
    name: "5بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1.png",
    name: "6بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
  {
    icon: "http://localhost:3000/assets/images/bitcoin-btc-logo-1",
    name: "7 بیت کوین",
    price: 3709047400,
    change: 0.5,
  },
];
</script>

<template>
  <NuxtMarquee
    class="justify-end h-[2.75rem] flex w-screen bg-[#303030] py-2"
    direction="right"
    :speed="30"
    :autoFill="true"
    :pauseOnHover="true"
  >
    <div
      v-for="item in items"
      :key="item.name"
      dir="rtl"
      class="h-full w-[18.5625rem] flex items-center justify-center border-r border-gray-300 px-2 gap-2"
    >
      <div class="h-7 w-7 flex items-center justify-center">
        <img
          src="/assets/images/bitcoin-btc-logo-1.png"
          alt="coin"
          class="w-full h-full"
        />
      </div>
      <span class="text-base text-white font-normal" dir="rtl">
        {{ item.name }}
      </span>
      <span class="text-sm text-white font-normal">3709047400</span>
      <span class="text-sm text-[#5CBC76] font-normal">(0.5 +)</span>
    </div>
  </NuxtMarquee>
</template>

<style>
swiper-container {
  width: 100%;
  height: 100%;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 200%;
    height: 1px;
    background: linear-gradient(90deg, black 50%, transparent 50%);
    background-size: 10% 1px;
    background-position: -50px;
    background-repeat: repeat-x;
    position: absolute;
    left: -10%;
    top: 40%;
    animation: line-slide 60s forwards infinite linear;
    z-index: 1;
  }

  &.swiper--bottom {
    &:after {
      animation-direction: reverse;
    }
  }
}

.swiper-wrapper {
  -webkit-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
  position: relative;
}

@keyframes line-slide {
  0% {
    background-position: -5% 0;
  }

  100% {
    background-position: 100% 0;
  }
}

.swiper-slide {
  width: auto;
}
</style>
