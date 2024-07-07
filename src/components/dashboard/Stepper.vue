<template>
  <div
    class="flex flex-col dashboard-card w-full h-[10.5rem] px-[2.125rem] py-[0.813rem] gap-2 z-[200] relative">
    <h3 class="text-base font-bold leading-[29px] text-white">به آرنیتکس خوش آمدید، لطفا حساب کاربری خود را
      تکمیل کنید.</h3>
    <div class="flex flex-col items-end justify-center w-full">
      <ul class="relative flex flex-col md:flex-row gap-2 w-full mx-auto items-end mr-[5rem]">
        <!-- Item -->
        <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
          <div
            class="flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
            <span
              class="flex justify-center items-center w-[2.875rem] h-[2.875rem] bg-transparent rounded-full shrink-0 border-[#676767] border-[0.5px]">
              <iconsDashboardStepperRegister></iconsDashboardStepperRegister>
            </span>
            <div
              class="mt-2 md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 group-last:hidden w-full border-b border-[#676767] border-dashed">
            </div>
          </div>
          <div class="grow md:grow-0 md:mt-3 pb-5">
            <span class="block text-xs font-normal text-white">
              ثبت نام
            </span>
            <p class="text-[11px] text-[#808080] font-normal leading-4">
              ایمیل خود را تایید کنید.
            </p>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
          <div
            class="flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
            <span
              class="flex justify-center items-center w-[2.875rem] h-[2.875rem] bg-transparent rounded-full shrink-0 border-[#676767] border-[0.5px]">
              <IconsDashboardStepperAuthentication></IconsDashboardStepperAuthentication>
            </span>
            <div
              class="mt-2 md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 group-last:hidden w-full border-b border-[#676767] border-dashed">
            </div>
          </div>
          <div class="grow md:grow-0 md:mt-3 pb-5">
            <span class="block text-xs font-normal text-white">
              احراز هویت
            </span>
            <p class="text-[11px] text-[#808080] font-normal leading-4">
              اطلاعات هویتی خود را کامل کنید.
            </p>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block w-full">
          <div
            class="flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle w-full">
            <span
              class="flex justify-center items-center w-[2.875rem] h-[2.875rem] bg-transparent rounded-full shrink-0 border-[#676767] border-[0.5px]">
              <IconsDashboardStepperChargeAccount></IconsDashboardStepperChargeAccount>
            </span>
            <div
              class="mt-2 md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 group-last:hidden w-full border-b border-[#676767] border-dashed">
            </div>
          </div>
          <div class="grow md:grow-0 md:mt-3 pb-5 w-full">
            <span class="block text-xs font-normal text-white">
              شارژحساب
            </span>
            <p class="text-[11px] text-[#808080] font-normal leading-4 block ">
              با واریز تومانی یا رمز ارز حسابتان را شارژ کنید. </p>
          </div>
        </li>
        <!-- Item -->
        <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
          <div
            class="flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
            <span
              class=" min-w-9 flex justify-center items-center w-[2.875rem] h-[2.875rem] bg-transparent rounded-full shrink-0 border-[#676767] border-[0.5px] ">
              <IconsDashboardStepperSecurity></IconsDashboardStepperSecurity>
            </span>
            <div
              class="mt-2 md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 group-last:hidden w-full border-b border-[#676767] border-dashed">
            </div>
          </div>
          <div class="grow md:grow-0 md:mt-3 pb-5">
            <span class="block text-xs font-normal text-white">
              امنیت
            </span>
            <p class="text-[11px] text-[#808080] font-normal leading-4">
              شناسه دو عاملی خود را فعال کنید. </p>
          </div>
        </li>
      </ul>

      <!-- <ol class="flex items-center w-full">
                        <li
                            class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-[#676767] after:border-dotted after:inline-block">
                            <span
                                class="flex items-center justify-center w-[2.875rem] h-[2.875rem] bg-transparent rounded-full shrink-0 border-[#676767] border-[0.5px]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_544_4121)">
                                        <path
                                            d="M24 12C24 12.552 23.552 13 23 13H8.964L12.207 16.243C12.598 16.634 12.598 17.266 12.207 17.657C12.012 17.852 11.756 17.95 11.5 17.95C11.244 17.95 10.988 17.852 10.793 17.657L6.55 13.414C5.77 12.634 5.77 11.366 6.55 10.586L10.793 6.343C11.184 5.952 11.816 5.952 12.207 6.343C12.598 6.734 12.598 7.366 12.207 7.757L8.964 11H23C23.552 11 24 11.448 24 12ZM22.614 15.068C22.098 14.867 21.519 15.122 21.319 15.636C19.809 19.502 16.152 22 12.001 22C6.487 22 2.001 17.514 2.001 12C2.001 6.486 6.486 2 12 2C16.151 2 19.809 4.498 21.318 8.364C21.519 8.878 22.096 9.132 22.613 8.932C23.128 8.731 23.382 8.151 23.181 7.637C21.37 2.998 16.981 0 12 0C5.383 0 0 5.383 0 12C0 18.617 5.383 24 12 24C16.981 24 21.37 21.002 23.182 16.364C23.383 15.849 23.129 15.27 22.614 15.069V15.068Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_544_4121">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>


                            </span>
                            <div class=""></div>


                        </li>
                        <li
                            class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                            <span
                                class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                <svg class="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path
                                        d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                                </svg>
                            </span>
                        </li>
                        <li class="flex items-center w-full">
                            <span
                                class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                <svg class="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path
                                        d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                                </svg>
                            </span>
                        </li>
                    </ol> -->


    </div>
  </div>
</template>
<script>
</script>

<style scoped>
.steps {
	color: white;
	background-color: transparent;
	color: #676767;
}
</style>