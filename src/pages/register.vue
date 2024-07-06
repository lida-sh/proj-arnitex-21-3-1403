<template>
  <main class="flex bg-[#171717] w-full min-h-[100vh] pt-[64px] overflow-hidden">
    <RegisterMainSection class="w-full lg:max-w-[35rem] mx-auto"></RegisterMainSection>
    <div class="flex-1 hidden lg:flex relative justify-center items-center z-10 bg-black">
      <AuthFrameImg></AuthFrameImg>
    </div>
  </main>
  <HomeTickerBanner class="hidden lg:flex"></HomeTickerBanner>

</template>

<style>
.error-border {
  border-color: #EA3C53;
}

@media (min-width: 640px) {
  .sm\:bglogin {
    background: linear-gradient(0deg, #0b0b0b 0%, #242424 100%);
  }
}

.bgh {
  background: linear-gradient(0deg, #181818 0%, #242424 100%);
}

.otp-input {
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  background-color: #262626;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}

.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.indicator-loader {
  height: 45px;
  width: 100%;
  color: #FF7028;
  background: linear-gradient(90deg, #FF7028 50%, transparent 50%), linear-gradient(90deg, #FF7028 50%, transparent 50%), linear-gradient(0deg, #FF7028 50%, transparent 50%), linear-gradient(0deg, #FF7028 50%, transparent 50%);
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 25px 3px, 25px 3px, 3px 25px, 3px 0;
  background-position: 0px 0px, 97px 42px, 0px 42px, 97px 10px;

  animation: border-dance 4s infinite linear;
}

@keyframes border-dance {
  0% {
    background-position: 0px 0px, 197px 42px, 0px 197px, 42px 0px;
  }

  100% {
    background-position: 197px 0px, 0px 42px, 0px 0px, 42px 197px;
  }
}
</style>
