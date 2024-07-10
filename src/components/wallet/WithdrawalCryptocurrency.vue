<template>
  <div class="flex-1 pb-[100px]">
    <div class="w-full text-[#fff] z-[100] relative">
      <!-- <div class=" pb-7 border-b border-[#343434]">
        <div class=" px-4">
          <UiButtonTabButtonDashboard class="flex-1" :list="data" v-model="TabIndex">
          </UiButtonTabButtonDashboard>
        </div>
      </div> -->
      <div class="w-full flex gap-12 ">
        <div class="flex-1 px-8">
          <div class=" py-3">
            <p class="text-[16px] leading-[28px] font-normal pb-3">انتخاب ارز دیجیتال</p>
            <div @click="toggleDropdown" class="dropdown-toggle">
              <span v-if="selectedCrypto" class="flex gap-3">
                <img :src="selectedCrypto.icon" class="crypto-icon" /> {{ selectedCrypto.name }}
              </span>
              <span v-else>انتخاب ارز دیجیتال</span>
            </div>
            <div v-if="dropdownOpen" class="dropdown-menu">
              <div v-for="crypto in options" :key="crypto.symbol" @click="selectCrypto(crypto)" class="dropdown-item">
                <img :src="crypto.icon" class="crypto-icon" /> {{ crypto.name }}
              </div>
            </div>
          </div>
          <div class=" pb-8">
            <p class="text-[16px] leading-[28px] font-normal pb-3"> میزان برداشت (BTC)</p>
            <div @click="toggleDropdown" class="dropdown-toggle">
              <span v-if="selectedCrypto" class="flex gap-3">
                <img :src="selectedCrypto.icon" class="crypto-icon" /> {{ selectedCrypto.name }}
              </span>
              <span v-else>انتخاب ارز دیجیتال</span>
            </div>
            <div v-if="dropdownOpen" class="dropdown-menu">
              <div v-for="crypto in options" :key="crypto.symbol" @click="selectCrypto(crypto)" class="dropdown-item">
                <img :src="crypto.icon" class="crypto-icon" /> {{ crypto.name }}
              </div>
            </div>
          </div>
          <div class=" pb-8">
            <p class="text-[16px] leading-[28px] font-normal pb-3"> نوع شبکه</p>
            <div @click="toggleDropdown" class="dropdown-toggle">
              <span v-if="selectedCrypto" class="flex gap-3">
                <img :src="selectedCrypto.icon" class="crypto-icon" /> {{ selectedCrypto.name }}
              </span>
              <span v-else>انتخاب ارز دیجیتال</span>
            </div>
            <div v-if="dropdownOpen" class="dropdown-menu">
              <div v-for="crypto in options" :key="crypto.symbol" @click="selectCrypto(crypto)" class="dropdown-item">
                <img :src="crypto.icon" class="crypto-icon" /> {{ crypto.name }}
              </div>
            </div>
          </div>
          <div class=" pb-8">
            <p class="text-[16px] leading-[28px] font-normal pb-3"> آدرس مقصد</p>
            <div @click="toggleDropdown" class="dropdown-toggle">
              <span v-if="selectedCrypto" class="flex gap-3">
                <img :src="selectedCrypto.icon" class="crypto-icon" /> {{ selectedCrypto.name }}
              </span>
              <span v-else>انتخاب ارز دیجیتال</span>
            </div>
            <div v-if="dropdownOpen" class="dropdown-menu">
              <div v-for="crypto in options" :key="crypto.symbol" @click="selectCrypto(crypto)" class="dropdown-item">
                <img :src="crypto.icon" class="crypto-icon" /> {{ crypto.name }}
              </div>
            </div>
          </div>
        </div>


        <div class="flex-1 bg-slate-400 h-[160px]">

        </div>


      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: false,
      selectedCrypto: null,
      options: [
        { name: 'Bitcoin', symbol: 'BTC', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
        { name: 'Ethereum', symbol: 'ETH', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
        { name: 'Ripple', symbol: 'XRP', icon: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' },
      ],
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    selectCrypto(crypto) {
      this.selectedCrypto = crypto;
      this.dropdownOpen = false;
    },
  },
}
</script>


<style scoped>
.dropdown-toggle {
  padding: 10px;
  height: 56px;
  border: 1px solid #676767;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.dropdown-menu {
  border: 1px solid #ccc;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  background-color: rgb(24, 23, 23);

}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.dropdown-item:hover {
  background-color: #3b3b3b;
}

.crypto-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>