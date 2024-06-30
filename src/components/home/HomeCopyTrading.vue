<template>
	<div class="bg-[#171717] w-full mt-[8.125rem] pt-9 pb-6">
		<h2 class="text-[36px] font-normal text-white text-center ">کپی تریدینگ: “به اشتراک گذاشتن ایده‌ها، رسیدن به موفقیت"</h2>
		<div class="flex flex-row w-full py-[2.5rem] 2xl:py-[3.75rem] sm:py-20 max-w-[82.5rem] mx-auto features-slider">
			<swiper :slidesPerView="'auto'" :spaceBetween="20" :freeMode="true" :modules="modules" class="mySwiper"
				:slidesOffsetBefore="20" :slidesOffsetAfter="20" :breakpoints="{
					'1536': {
						// spaceBetween: 70,
						slidesOffsetBefore: 0,
						slidesOffsetAfter: 0,
						freeMode: false,
					},
				}">
				<swiper-slide>
					<HomeCopyTradngComponent></HomeCopyTradngComponent>
				</swiper-slide>
				<swiper-slide>
					<HomeCopyTradngComponent></HomeCopyTradngComponent>
				</swiper-slide>
				<swiper-slide>
					<HomeCopyTradngComponent></HomeCopyTradngComponent>
				</swiper-slide>
				<swiper-slide>
					<HomeCopyTradngComponent></HomeCopyTradngComponent>
				</swiper-slide>
				<swiper-slide>
					<HomeCopyTradngComponent></HomeCopyTradngComponent>
				</swiper-slide>
				<swiper-slide>
					<HomeCopyTradngComponent></HomeCopyTradngComponent>
				</swiper-slide>
			</swiper>
		</div>
		<div class="flex justify-center">
			<button class="w-[11.438rem] h-[3.938rem] bg-[#8C8C8C] rounded-full text-black">بیشتر</button>
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
.features-slider .swiper-container {
	width: 100%;
	height: 100%;
}

.swiper-wrapper {
	width: 100%;
	height: 100%;
	justify-content: space-between;
}

.mySwiper {
	width: 100%;
}

.swiper-slide {
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
	transform: scale(.84);
	box-shadow: none;

}

.swiper-slide-active {
	transform: scale(1.2);
}

.swiper-backface-hidden .swiper-slide {
	transform: scale(.84) translateZ(0);
}

.swiper-slide.swiper-slide-active {
	transform: scale(1) !important;
	opacity: 1 !important;
}

.swiper-backface-hidden .swiper-slide.swiper-slide-active {
	transform: scale(1) translateZ(0) !important;
}

</style>