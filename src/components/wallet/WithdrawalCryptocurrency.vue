<template>
  <div class="flex-1 pb-[100px]">
    <div class="w-full text-[#fff] z-[100] relative">
      <div class="w-full flex gap-12 ">
        <div class="flex-1 px-8">
          <div class=" py-3 relative">
            <p class="text-[16px] leading-[28px] font-normal pb-3">انتخاب ارز دیجیتال</p>
            <input type="text" name="" id="" class="bg-[#000] w-full h-[56px] rounded-2xl border-[#676767] ">
            <IconsDashboardArrowBig class=" left-5 absolute bottom-8"></IconsDashboardArrowBig>
          </div>

          <div class=" pb-8 relative">
            <p class="text-[16px] leading-[28px] font-normal pb-3"> میزان برداشت (BTC)</p>
            <input type="text" name="" id="" class="bg-[#000] w-full h-[56px] rounded-2xl border-[#676767] ">
            <span class=" left-5 absolute bottom-12 text-[16px] font-normal leading-[22px]">BTC</span>
          </div>

          <div class=" pb-8 relative">
            <p class="text-[16px] leading-[28px] font-normal pb-3"> نوع شبکه</p>
            <input type="text" name="" id=""
              class="bg-[#000] w-full h-[56px] rounded-2xl border-[#676767] placeholder-[#676767]"
              placeholder="نوع شبکه را انتخاب کنید.">
            <IconsDashboardArrowBig class=" left-5 absolute bottom-14"></IconsDashboardArrowBig>
          </div>

          <div class=" pb-8">
            <p class="text-[16px] leading-[28px] font-normal pb-3"> آدرس مقصد</p>

            <input type="text" name="" id=""
              class="bg-[#000] w-full h-[56px] rounded-2xl border-[#676767] placeholder-[#676767]"
              placeholder="آدرس کیف پول مقصد را وارد کنید.">
          </div>

          <div class="bg-[#FF7028] h-[56px] rounded-[16px] flex items-center justify-center cursor-pointer">
            <p class="text-[16px] font-medium leading-[24px]">درخواست برداشت </p>
          </div>
          <div class="flex pt-7 items-center gap-3">
            <span class="w-[10px] h-[10px] bg-[#FF7028] rounded-full"></span>
            <p class="text-[14px] font-medium leading-[20px] "> برای انتخاب نوع شبکه بررسی کنید کیف‌ پول مقصد از شبکه
              انتخابی پشتیبانی می‌کند.</p>
          </div>
          <div class="flex pt-7 items-center gap-3">
            <span class="w-[10px] h-[10px] bg-[#FF7028] rounded-full"></span>
            <p class="flex-1 text-[14px] font-medium leading-[20px] "> درصورت بروز هرگونه اشتباه، مسئولیت آن با خود کاربر است.
              بنابراین، آدرس مقصد و نوع شبکه را چک کنید تا از صحت آن مطمئن شوید.
               </p>
          </div>
        </div>


        <div class="flex-1 py-3 px-3 h-[160px]">
          <div class="bg-[#171717] rounded-3xl py-[1.625rem] px-[2.875rem]">
            <h2
              class="text-base text-white font-medium leading-6 mb-[10px] underline decoration-[#FF7028] underline-offset-8">
              راهنما</h2>
            <UiStepper :list="listStep" class-item="text-xs"></UiStepper>
          </div>
          <div class="w-full pt-8">
            <AppCollaps noStyleBg :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
              :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white h-[4.5rem]']"
              :withTitleIcon="false">
              <template #title="{ isOpen }">
                <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                  <h3 class="text-sm font-normal leading-[26px] text-white">درصورت دریافت خطای کارت
                    نامعتبر، چه باید کرد؟</h3>
                  <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                  <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                </div>
              </template>
              <p class="text-sm font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                اطلاعات وارد شده را بررسی کنید تا در صورت وجود اشتباه، آن را تصحیح نمایید. </p>
            </AppCollaps>
          </div>

          <div class="w-full pt-6">
            <AppCollaps noStyleBg :backgroundClassContent="['bg-[#262626] px-[1.563rem] rounded-b-3xl -mt-[16px]']"
              :backgroundClassTitle="['bg-[#171717] px-6 py-3 rounded-3xl border-b-[0.4px]  border-white h-[4.5rem]']"
              :withTitleIcon="false">
              <template #title="{ isOpen }">
                <div class="flex items-center justify-between w-full" :class="{ '': isOpen }">
                  <h3 class="text-sm font-normal leading-[26px] text-white">درصورت دریافت خطای کارت
                    نامعتبر، چه باید کرد؟</h3>
                  <IconsDashboardArrowDown v-if="!isOpen"></IconsDashboardArrowDown>
                  <IconsDashboardArrowUp v-else></IconsDashboardArrowUp>
                </div>
              </template>
              <p class="text-sm font-normal leading-[26px] text-white pt-8 pb-[1.063rem] rounded-b-3xl">
                اطلاعات وارد شده را بررسی کنید تا در صورت وجود اشتباه، آن را تصحیح نمایید. </p>
            </AppCollaps>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
const listStep = [
  // {title: "برای دریافت شناسه واریز برای مبالغ بیشتر از ۲۵ میلیون تومان ابتدا گزینه ساختن شناسه‌ی جدید را کلیک کنید."},
  { title: " رمز ارز مورد نظر را انتخاب کرده و مبلغ را وارد کنید." },
  { title: " آدرس مقصد (آدرس کیف‌ پول گیرنده) را وارد کنید." },
  { title: "کد یکبار مصرف برداشت به شماره تلفن یا آدرس ایمیل شما ارسال می‌شود؛ آن را وارد نمایید." },
  { title: "سفارش شما، در صف بررسی قرار می‌گیرد." },
]


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















<!-- 
<template>
  <div class="container">
    <div class="input-container">
      <img v-if="selectedCryptoIcon" :src="selectedCryptoIcon" alt="crypto icon" class="crypto-input-icon" />
      <input
        type="text"
        v-model="selectedCryptoText"
        @focus="showDropdown = true"
        placeholder="یک ارز دیجیتال انتخاب کنید"
        readonly
      />
       <IconsDashboardArrowBig class="arrow-icon"></IconsDashboardArrowBig>
      
    </div>
    <div v-if="showDropdown" class="dropdown">
      <input
        type="text"
        v-model="searchText"
        placeholder="جستجوی ارز دیجیتال"
        @input="filterCryptos"
      />
      <ul>
        <li
          v-for="crypto in filteredCryptos"
          :key="crypto.id"
          @click="selectCrypto(crypto)"
        >
          <img :src="crypto.icon" alt="crypto icon" class="crypto-icon" />
          {{ crypto.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { IconsDashboardArrowBig } from '#build/components';

export default {
  data() {
    return {
      selectedCryptoText: '',
      selectedCryptoIcon: '',
      showDropdown: false,
      searchText: '',
      cryptos: [
        { id: 'btc', text: 'بیت کوین', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
        { id: 'eth', text: 'اتریوم', icon: 'path/to/ethereum-icon.png' },
        { id: 'usdt', text: 'تتر', icon: 'path/to/tether-icon.png' },
        { id: 'bch', text: 'بیت کوین کش', icon: 'path/to/bitcoincash-icon.png' },
        { id: 'shiba', text: 'شیبا', icon: 'path/to/shiba-icon.png' },
        // ارزهای دیگر را اضافه کنید
      ],
      filteredCryptos: [],
    };
  },
  mounted() {
    this.filteredCryptos = this.cryptos;
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    filterCryptos() {
      const filter = this.searchText.toLowerCase();
      this.filteredCryptos = this.cryptos.filter((crypto) =>
        crypto.text.toLowerCase().includes(filter)
      );
    },
    selectCrypto(crypto) {
      this.selectedCryptoText = crypto.text;
      this.selectedCryptoIcon = crypto.icon;
      this.showDropdown = false;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.showDropdown = false;
      }
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #2c2c2c;
  color: white;
}

.container {
  position: relative;
  width: 300px;
}

.input-container {
  display: flex;
  align-items: center;
  position: relative;
}

input[type='text'] {
  width: 100%;
  padding: 10px;
  padding-left: 40px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #2c2c2c;
  color: white;
}

.arrow-icon {
  position: absolute;
  right: 250px;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.crypto-input-icon {
  position: absolute;
  left: 10px;
  width: 24px;
  height: 24px;
}

.dropdown {
  position: absolute;
  top: 50px;
  width: 100%;
  background-color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  z-index: 1000;
  animation: fadeIn 0.3s;
}

.dropdown input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: #333;
  color: white;
}

.dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown li {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}

.dropdown li:hover {
  background-color: #444;
}

.crypto-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style> -->
