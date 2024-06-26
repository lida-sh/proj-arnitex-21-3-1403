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

<template>
	<div class="w-full flex items-center justify-center">
		<h4 class="text-white text-4xl font-normal">چرا آرنیتکس</h4>
	</div>
	<div class="flex flex-row xl:hidden w-full py-[3.75rem] sm:py-20  max-w-[82.5rem]  mx-auto features-slider">
		<swiper :slidesPerView="'auto'" :spaceBetween="20" :freeMode="true" :modules="modules" class="mySwiper"
			:slidesOffsetBefore="20" :slidesOffsetAfter="20" :breakpoints="{
				'1536': {
					slidesPerView: 4,
					spaceBetween: 70,
					slidesOffsetBefore: 0,
					slidesOffsetAfter: 0,
					freeMode: false,
				},
			}">
			<swiper-slide>
				<div
					class="flex items-center w-full h-full justify-center px-[1.875rem] py-[3.063rem] min-w-[20rem] card-bg rounded-box gap-[1.875rem]">
					<div class="w-20 h-[4.375rem] flex items-center justify-center rounded-box">
						<img src="~/assets/images/advanced-trading.svg" alt="" class="w-full h-auto" />
					</div>
					<h6 class="text-base font-bold text-white">
						انجام معاملات پیشرفته
					</h6>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div
					class="flex items-center w-full h-full justify-center px-[1.875rem] py-[3.063rem] min-w-[20rem] card-bg rounded-box gap-[1.875rem]">
					<div class="w-20 h-auto flex items-center justify-center rounded-box">
						<img src="~/assets/images/easy-authentication.svg" alt="" class="w-full h-auto" />
					</div>
					<h6 class="text-base font-bold text-white">احراز هویت آسان</h6>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div
					class="flex items-center w-full h-full justify-center px-[1.875rem] py-[3.063rem] min-w-[20rem] card-bg rounded-box gap-[1.875rem]">
					<div class="w-20 h-[4.375rem] flex items-center justify-center rounded-box">
						<img src="~/assets/images/security-of-withdrawal-system.png" alt="" class="w-full h-auto" />
					</div>
					<h6 class="text-base font-bold text-white">
						امنیت سیستم برداشت وجه
					</h6>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div
					class="flex items-center w-full h-full justify-center px-[1.875rem] py-[3.063rem] min-w-[20rem] card-bg rounded-box gap-[1.875rem]">
					<div class="w-20 h-[4.375rem] flex items-center justify-center rounded-box">
						<img src="~/assets/images/quick-settlement.png" alt="" class="w-full h-auto" />
					</div>
					<h6 class="text-base font-bold text-white">تسویه سریع</h6>
				</div>
			</swiper-slide>
		</swiper>
	</div>
	<div class="hidden xl:grid xl:grid-cols-12 xl:px-[6.25rem] xl:gap-8 xl:pt-24 max-w-[95rem] mx-auto">
		<div class="col-span-6">
			<div class="flex items-center w-full h-full justify-between p-20 card-bg rounded-box">
				<div class="w-24 h-[7.188rem] flex items-center justify-center rounded-box">
					<img src="~/assets/images/advanced-trading.svg" alt="" class="w-full h-auto" />
				</div>
				<h6 class="text-[1.75rem] font-normal text-white">
					انجام معاملات پیشرفته
				</h6>
			</div>
		</div>

		<div class="col-span-6">
			<div class="flex items-center justify-center w-full h-full gap-20 p-20 card-bg rounded-box">
				<div class="w-28 h-[6.25rem] flex items-center justify-center rounded-box">
					<img src="~/assets/images/easy-authentication.svg" alt="" class="w-full h-auto" />
				</div>
				<h6 class="text-[1.75rem] font-normal text-white">احراز هویت آسان</h6>
			</div>
		</div>
		<div class="col-span-6">
			<div class="flex items-center justify-center w-full h-full gap-20 p-20 card-bg rounded-box">
				<div class="w-28 h-[6.25rem] flex items-center justify-center rounded-box">
					<img src="~/assets/images/security-of-withdrawal-system.png" alt="" class="w-full h-auto" />
				</div>
				<h6 class="text-[1.75rem] font-normal text-white">
					امنیت سیستم برداشت وجه
				</h6>
			</div>
		</div>
		<div class="col-span-6">
			<div class="flex items-center justify-center w-full h-full gap-20 p-20 card-bg rounded-box">
				<div class="w-28 h-[6.25rem] flex items-center justify-center rounded-box">
					<img src="~/assets/images/quick-settlement.png" alt="" class="w-full h-auto" />

				</div>
				<h6 class="text-[1.75rem] font-normal text-white">تسویه سریع</h6>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-2 c-container pb-24 gap-8">
		<div class="mt-0 lg:mt-32">
			<div class="flex flex-col items-center justify-center w-full h-[30.375rem] gap-8 rounded-box">
				<div class="w-[13.375rem] h-52 flex items-center justify-center rounded-box">
					<img src="~/assets/images/book.png" alt="" class="w-full h-auto" />
				</div>
				<h6 class="text-white font-normal text-2xl">
					مقالات 3 دقیقه ای برای شروع
				</h6>
				<div class="relative">
					<button class="bg-[#FF7028] w-[10.625rem] h-[3.75rem] text-white rounded-md relative z-20">
						بیشتر
					</button>
				</div>
			</div>
		</div>
		<div class="mt-10 lg:mt-32">
			<div class="flex flex-col gap-[1.875rem] lg:gap-[3.75rem]">
				<div class="w-full h-[7.625rem] flex items-center rounded-box card-bg px-4 lg:p-10 gap-10">
					<img src="~/assets/images/arrow-top-right.png" alt="" class="w-10 h-10" />
					<h6 class="text-base lg:text-lg text-white font-normal">
						مفاهیم ابتدایی درباره ارز های دیجیتال
					</h6>
				</div>
				<div class="w-full h-[7.625rem] flex items-center rounded-box card-bg px-4 lg:p-10 gap-10">
					<img src="~/assets/images/arrow-top-right.png" alt="" class="w-10 h-10" />
					<h6 class="text-base lg:text-lg text-white font-normal">
						آشنایی با انواع معاملات ارز دیجیتال
					</h6>
				</div>
				<div class="w-full h-[7.625rem] flex items-center rounded-box card-bg px-4 lg:p-10 gap-10">
					<img src="~/assets/images/arrow-top-right.png" alt="" class="w-10 h-10" />
					<h6 class="text-base lg:text-lg text-white font-normal">
						مدیریت سرمایه چیست ؟
					</h6>
				</div>
			</div>
		</div>

	</div>
</template>

<style scoped></style>
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
	font-size: 18px;
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
}

</style>