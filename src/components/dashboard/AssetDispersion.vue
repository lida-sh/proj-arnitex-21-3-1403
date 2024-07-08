
<template>
  <section class="dashboard-card px-4 py-4 pb-9 ps-8">

    <h2 class="text-white font-bold text-[1rem] leading-6">نمودار پراکندگی دارایی</h2>
    <div class="flex">
      <div class="flex-[3]">
        <div class="mt-[2.125rem] mx-auto max-w-[36rem]">

          <div class="dispersion-grid font-bold text-xs text-white">
            <span>نام رمز ارز</span>
            <span>موجودی</span>
            <span>تغییرات 24h</span>
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
                ۲۵.۰۰۰.۰۰۰
              </span>
              <span dir="ltr" class="font-normal text-xs" :style="{ color: `#5CBC76` }">
                +0.2
              </span>
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
                ۱۲.۵۰۰.۰۰۰
              </span>
              <span dir="ltr" class="font-normal text-xs" :style="{ color: `#EA3C53` }">
                -0.3
              </span>
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
                ۸.۵۰۰.۰۰۰
              </span>
              <span dir="ltr" class="font-normal text-xs" :style="{ color: `#EA3C53` }">
                -0.03
              </span>
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
                ۳.۰۰۰.۰۰۰
              </span>
              <span dir="ltr" class="font-normal text-xs" :style="{ color: `#5CBC76` }">
                +0.2
              </span>
              <span dir="ltr" class="font-normal text-xs">
                ۵٪
              </span>
            </li>

          </ul>
        </div>

      </div>
      <div class="flex-[2] flex justify-center">
        <div class="mx-a max-w-[24rem]">
          <UiChartPieChart></UiChartPieChart>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.dispersion-grid {
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
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