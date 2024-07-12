<script setup>
import { useUserStore } from "~/stores/user"
useHead({
  title: 'آرنیتکس | معامله ساده',
})

const user = useUserStore();
await user.fetchUser()
</script>
<template>
  <main class="bg-black pt-[64px]">
    <iframe class="w-full" src="https://old.arnitex.ir/trade/simple/TOMAN/BITCOIN"
      onload="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';"></iframe>
  </main>
</template>

<style scoped>
iframe {
  height: calc(100vh - 50px);
}
</style>