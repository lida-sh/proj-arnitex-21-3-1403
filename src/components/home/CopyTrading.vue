<template>
	<div class="bg-transparent xl:bg-[#171717]  w-full mt-[8.125rem] pt-9 pb-6 ">
		<h2 class="hidden xl:block text-[36px] font-normal text-white text-center ">کپی تریدینگ: “به اشتراک گذاشتن
			ایده‌ها، رسیدن به موفقیت"</h2>
		<div class="flex flex-row w-full py-[1.5rem] 2xl:py-[3.75rem]  mx-auto">
			<swiper :slidesPerView="'auto'" :spaceBetween="8" :freeMode="true" :modules="modules" :centeredSlides="true"
				class="trading_swipper" :slidesOffsetBefore="20" :slidesOffsetAfter="20" :breakpoints="{
					'1536': {
						spaceBetween: 20,
						slidesOffsetBefore: 0,
						slidesOffsetAfter: 0,
						freeMode: false,
					},
				}">
				<swiper-slide>
					<HomeCopyTradingItem></HomeCopyTradingItem>
				</swiper-slide>
				<swiper-slide>
					<HomeCopyTradingItem></HomeCopyTradingItem>
				</swiper-slide>
				<swiper-slide>
					<HomeCopyTradingItem></HomeCopyTradingItem>
				</swiper-slide>
				<swiper-slide>
					<HomeCopyTradingItem></HomeCopyTradingItem>
				</swiper-slide>
				<swiper-slide>
					<HomeCopyTradingItem></HomeCopyTradingItem>
				</swiper-slide>
				<swiper-slide>
					<HomeCopyTradingItem></HomeCopyTradingItem>
				</swiper-slide>
			</swiper>
		</div>
		<div class="flex justify-center items-center flex-col px-9 gap-3">
			<h2 class="text-base font-normal text-white text-center xl:hidden">کپی تریدینگ: “به اشتراک گذاشتن ایده‌ها،
				رسیدن به موفقیت"</h2>
			<button
				class="w-20 xl:w-[11.438rem] h-8 xl:h-[3.938rem] bg-[#8C8C8C] rounded-full text-black text-[11px] xl:text-[22px]">بیشتر</button>
		</div>
	</div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default {
	components: {
		Swiper,
		SwiperSlide,
	},

	setup() {
		return {
			modules: [FreeMode, Pagination],
		};
	},
};
</script>

<style>
.trading_swipper .swiper-container {
	width: 100%;
	height: 100%;
}
.trading_swipper .swiper-wrapper {
	width: 100%;
	height: 100%;
	justify-content: space-between;
}
.trading_swipper {
	width: 100%;
	justify-content: center;
}
.trading_swipper .swiper-slide {
	text-align: center;
	/* font-size: 18px; */
	background: unset;
	/* Center slide text vertically */
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
	width: auto;
	opacity: .5;
	box-shadow: none;
	transition: all 200ms linear;
}

@media only screen and (max-width: 1280px) {

	.trading_swipper .swiper-slide-active {
		opacity: 1 !important;
	}
	.trading_swipper.swiper-slide.swiper-slide-active {
		opacity: 1 !important;
	}
}

@media only screen and (min-width: 1280px) {
	.trading_swipper .swiper-slide {
		transform: scale(.84);
	}
	.trading_swipper .swiper-slide-active {
		transform: scale(1.2);
		opacity: 1 !important;
	}
	.trading_swipper .swiper-backface-hidden .swiper-slide {
		transform: scale(.84) translateZ(0);
	}
	.trading_swipper.swiper-slide.swiper-slide-active {
		transform: scale(1) !important;
		opacity: 1 !important;
	}
	.trading_swipper.swiper-backface-hidden .swiper-slide.swiper-slide-active {
		transform: scale(1) translateZ(0) !important;
	}
}
</style>