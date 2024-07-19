<script setup>
const tabIndex = ref(0)
const tabData = ref([
  {
    id: 1,
    title: "نمودار روند دارایی"
  },
  {
    id: 2,
    title: "نمودار پراکندگی دارایی"
  },
])


const dropDownIndex = ref(0)
const dropDownData = ref([
  {
    id: 1,
    title: "۷ روزه"
  }, {
    id: 2,
    title: "۳۰ روزه"
  }, {
    id: 3,
    title: "۹۰ روزه"
  }
])

const assetsDay = computed(() => {
  switch (dropDownIndex.value) {
    case 0:
      return 7
      break;
    case 1:
      return 30
      break;
    case 2:
      return 90
      break;
  }
})

</script>

<template>
  <div class="bg-[#0E0E0E] rounded-3xl pt-3">
    <div class="flex justify-between px-6">
      <UiButtonTabButtonSmall :list="tabData" v-model="tabIndex"></UiButtonTabButtonSmall>
      <UiDropDownSimple v-if="tabIndex === 0" class="!min-w-28" :list="dropDownData" v-model="dropDownIndex">
      </UiDropDownSimple>
    </div>
    <div>
      <UiChartAssets v-if="tabIndex === 0" :day="assetsDay"></UiChartAssets>
      <div class="flex gap-10 px-6" v-if="tabIndex === 1">
        <div class="mt-[2.125rem] mx-auto w-full">

          <div class="dispersion-grid font-bold text-xs text-white">
            <span>نام رمز ارز</span>
            <span>حجم دارایی</span>
          </div>

          <ul>

            <li class="dispersion-grid text-white mt-6">
              <div class="">
                <div class="w-full max-w-full flex  gap-[9px]">
                  <span class="item-circle block" :style="{ background: `#1DDD8D` }"></span>
                  <span class="font-normal flex-1 coin-name text-xs">تتر</span>
                </div>
              </div>

              <span dir="ltr" class="font-normal text-xs">
                ۵۵٪
              </span>
            </li>

            <li class="dispersion-grid text-white mt-6">
              <div class="">
                <div class="w-full max-w-full flex  gap-[9px]">
                  <span class="item-circle block" :style="{ background: `#FF9F32` }"></span>
                  <span class="font-normal flex-1 coin-name text-xs">اتریوم</span>
                </div>
              </div>
              <span dir="ltr" class="font-normal text-xs">
                ۲۵٪
              </span>
            </li>

            <li class="dispersion-grid text-white mt-6">
              <div class="">
                <div class="w-full max-w-full flex  gap-[9px]">
                  <span class="item-circle block" :style="{ background: `#16BFD6` }"></span>
                  <span class="font-normal flex-1 coin-name text-xs">بیت کوین</span>
                </div>
              </div>
              <span dir="ltr" class="font-normal text-xs">
                ۱۵٪
              </span>
            </li>

            <li class="dispersion-grid text-white mt-6">
              <div class="">
                <div class="w-full max-w-full flex  gap-[9px]">
                  <span class="item-circle block" :style="{ background: `#9FCDE6` }"></span>
                  <span class="font-normal flex-1 coin-name text-xs">تومان</span>
                </div>
              </div>
              <span dir="ltr" class="font-normal text-xs">
                ۵٪
              </span>
            </li>

          </ul>
        </div>
        <UiChartPieChart></UiChartPieChart>

      </div>
    </div>
  </div>

</template>

<style scoped>
.dispersion-grid {
  display: grid;
  grid-template-columns: 48% 48%;
  grid-column-gap: 4px;
  grid-row-gap: 24px;
}

.dispersion-grid>* {
  text-align: center;

}

.item-circle {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ffffff69;
}

.coin-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>