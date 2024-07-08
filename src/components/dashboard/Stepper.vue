<template>
    <div class="flex flex-col dashboard-card w-full px-[2.125rem] py-[0.813rem] gap-2 z-[200] relative ">
        <h3 class="text-base font-bold leading-[29px] text-white">به آرنیتکس خوش آمدید، لطفا حساب کاربری خود را
            تکمیل کنید.</h3>
        <div class="flex flex-col items-end justify-end w-full  h-fit">
           <!---- <ul class="relative flex flex-col md:flex-row gap-2 w-full items-end">

                <li
                    class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block flex-col items-center justify-center">
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
                    <div class="grow md:grow-0 md:mt-3 pb-5 relative">
                        <span class="block text-xs font-normal text-white">
                            ثبت نام
                        </span>
                        <p class="text-[11px] text-[#808080] font-normal leading-4 ">
                            ایمیل خود را تایید کنید.
                        </p>
                    </div>
                </li>
                
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
                    <div class="grow md:grow-0 md:mt-3 pb-5 relative">
                        <span class="block text-xs font-normal text-white">
                            احراز هویت
                        </span>
                        <p class="text-[11px] text-[#808080] font-normal leading-4 ">
                            اطلاعات هویتی خود را کامل کنید.
                        </p>
                    </div>
                </li>
             
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
                    <div class="grow md:grow-0 md:mt-3 pb-5 w-full relative">
                        <span class="block text-xs font-normal text-white">
                            شارژحساب
                        </span>
                        <p class="text-[11px] text-[#808080] font-normal leading-4 block ">
                            با واریز تومانی یا رمز ارز حسابتان را شارژ کنید. </p>
                    </div>
                </li>
                
                <li class="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block w-full max-w-[10rem]">
                    <div
                        class="flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle w-full">
                        <span
                            class="flex justify-center items-center w-[2.875rem] h-[2.875rem] bg-transparent rounded-full shrink-0 border-[#676767] border-[0.5px]">
                            <IconsDashboardStepperSecurity></IconsDashboardStepperSecurity>
                        </span>
                        <div
                            class="mt-2 md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 group-last:hidden w-full border-b border-[#676767] border-dashed">
                        </div>
                    </div>
                    <div class="grow md:grow-0 md:mt-3 pb-5 w-full relative">
                        <span class="block text-xs font-normal text-white">
                            امنیت
                        </span>
                        <p class="text-[11px] text-[#808080] font-normal leading-4 block ">
                            شناسه دو عاملی خود را فعال کنید. </p>
                    </div>
                </li>

            </ul>-->
            <div class="w-full px-[6%] py-4 h-full pb-[3.75rem]">
                <div class="relative flex items-center justify-between w-full h-full">
                    
                    <div
                        class="absolute left-0 top-2/4 w-full -translate-y-2/4 border-b border-[#676767] border-dashed transition-all duration-500">
                    </div>
                    <div
                        class="relative z-10 dashboard-card flex justify-center items-center w-[2.875rem] h-[2.875rem] font-bold text-white transition-all duration-300  rounded-full shrink-0 border-[#676767] border-[0.5px]">
                        <iconsDashboardStepperRegister></iconsDashboardStepperRegister>
                        <div class="absolute -bottom-[2.5rem] w-max text-center">
                            <h6
                                class="block text-xs font-normal text-white antialiased  leading-relaxed tracking-normal">
                                ثبت نام
                            </h6>
                            <p class="block text-[11px] text-[#808080] font-normal leading-4 antialiased">
                                ایمیل خود را تایید کنید.
                            </p>
                        </div>
                        
                    </div>
                    <div
                        class="absolute left-0 top-2/4 w-full -translate-y-2/4 border-b border-[#676767] border-dashed transition-all duration-500">
                    </div>
                    <div
                        class="relative dashboard-card z-10 flex justify-center items-center w-[2.875rem] h-[2.875rem] font-bold text-white transition-all duration-300 bg-transparent rounded-full shrink-0 border-[#676767] border-[0.5px]">
                        <IconsDashboardStepperAuthentication></IconsDashboardStepperAuthentication>
                        <div class="absolute -bottom-[2.5rem] w-max text-center">
                            <h6
                                class="block text-xs font-normal text-white antialiased  leading-relaxed tracking-normal">
                                احراز هویت
                            </h6>
                            <p class="block text-[11px] text-[#808080] font-normal leading-4 antialiased">
                                اطلاعات هویتی خود را کامل کنید.                            </p>
                        </div>
                        
                    </div>
                    <div
                        class="absolute left-0 top-2/4 w-full -translate-y-2/4 border-b border-[#676767] border-dashed transition-all duration-500">
                    </div>
                    <div
                        class="relative dashboard-card z-10 flex justify-center items-center w-[2.875rem] h-[2.875rem] font-bold text-white transition-all duration-300 bg-transparent rounded-full shrink-0 border-[#676767] border-[0.5px]">
                        <IconsDashboardStepperChargeAccount></IconsDashboardStepperChargeAccount>
                        <div class="absolute -bottom-[2.5rem] w-max text-center">
                            <h6
                                class="block text-xs font-normal text-white antialiased  leading-relaxed tracking-normal">
                                شارژحساب                             </h6>
                            <p class="block text-[11px] text-[#808080] font-normal leading-4 antialiased">
                                با واریز تومانی یا رمز ارز حسابتان را شارژ کنید.                            </p>
                        </div>
                        
                    </div>
                    <div
                        class="absolute left-0 top-2/4 w-full -translate-y-2/4 border-b border-[#676767] border-dashed transition-all duration-500">
                    </div>
                    <div
                        class="relative dashboard-card z-10 flex justify-center items-center w-[2.875rem] h-[2.875rem] font-bold text-white transition-all duration-300 bg-transparent rounded-full shrink-0 border-[#676767] border-[0.5px]">
                        <IconsDashboardStepperSecurity></IconsDashboardStepperSecurity>
                        <div class="absolute -bottom-[2.5rem] w-max text-center">
                            <h6
                                class="block text-xs font-normal text-white antialiased  leading-relaxed tracking-normal">
                                امنیت                            </h6>
                            <p class="block text-[11px] text-[#808080] font-normal leading-4 antialiased">
                                شناسه دو عاملی خود را فعال کنید.                            </p>
                        </div>
                        
                    </div>
                    
                </div>
               
            </div>
        


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