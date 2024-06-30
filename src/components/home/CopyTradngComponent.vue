<template>
    <div
        class="w-[17.875rem] xl:w-[32.5rem] h-[10.063rem] xl:h-[18.313rem] bg-[#343434] rounded-[13.19px] xl:rounded-3xl flex flex-col py-[0.8rem] xl:py-[1.875rem] pl-[1.123rem] pr-[0.969rem] xl:pr-[1.769rem]">
        <div class="flex justify-end items-center gap-[1.402rem] mb-[0.1rem] xl:mb-[0.8rem]">
            <h6 class="text-[10px] xl:text-base font-bold text-black">Ali_trader</h6>
            <div
                class="flex items-center justify-center rounded-full w-[1.766rem] xl:w-[3.213rem] h-[1.766rem] xl:h-[3.213rem] bg-[#808080]">
            </div>
        </div>
        <div class="flex items-center gap-[0.8rem] xl:gap-[3.454rem]">
            <svg width="154 xl:283" height="46 xl:84" viewBox="0 0 283 84" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect x="0.71875" y="0.253906" width="281.434" height="83.5307" fill="url(#pattern0_149_30358)" />
                <defs>
                    <pattern id="pattern0_149_30358" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_149_30358"
                            transform="matrix(0.00540541 0 0 0.0182121 0 -0.000831596)" />
                    </pattern>
                    <image id="image0_149_30358" width="185" height="55"
                        xlink:href="data:image/png;base64,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" />
                </defs>
            </svg>
            <div class="flex flex-col gap-1 xl:gap-8">
                <h4 class="text-xs xl:text-[28px] text-[#0DB277] font-normal">33.30%+</h4>
                <h6 class="text-xs xl:text-[22px] text-[#A8A8A8] font-normal xl:font-semibold">30D Rol</h6>
            </div>

        </div>
        <div class="flex justify-between items-center mt-[1rem] xl:mt-[2.25rem]">
            <button class="flex items-center justify-center w-[5rem] xl:w-[7.5rem] h-8 xl:h-[2.563rem] bg-white rounded-full text-sm font-bold">کپی معامله</button>
            <h3 class="text-[#A8A8A8] text-xs xl:text-[22px] font-normal xl:font-semibold leading-4 xl:leading-9">Copiers 10199</h3>
        </div>
    </div>
</template>
<script>
</script>