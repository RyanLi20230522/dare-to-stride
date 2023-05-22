<template>
    <section class="sub-banner relative w-full pb-[133%] lg:pb-[45%]">
        <img class="hidden lg:block absolute top-0 left-0 w-full h-full" :src="BackgroundBanner" alt="">
        <img class="block lg:hidden absolute top-0 left-0 w-full h-full" :src="BackgroundBannerMobile" alt="">

        <div class="hidden lg:block">
            <ul class=" absolute top-0 inset-x-0 sub-header flex justify-end pt-3 pb-3 bg-slate-200/50  pr-40">
                <li v-for="sub in subData" class="flex items-center ml-8">
                    <img class="w-2 h-2 mr-2" :src="Rectangle" alt=""> {{ sub.title }}
                </li>
            </ul>
        </div>
        
        <img class="hidden lg:block absolute top-[12%] right-[10%] w-[30%]" :src="BannerText" alt="">
        <img class="block lg:hidden absolute top-[12%] right-[10%] w-[44%]" :src="BannerTextMobile" alt="">

        <button class="absolute translate-x-[-50%] lg:transform-none left-[50%] lg:left-[unset] top-[85%] lg:top-[52%] lg:right-[24%] tracking-widest border border-solid border-white bg-[#0F306A] p-2 text-white">加入購物車</button>
    </section>
</template>

<script setup>
import BackgroundBanner from '../../../assets/images/home/banner.png';
import Rectangle from '../../../assets/images/rectangle.png';
import BackgroundBannerMobile from '../../../assets/images/home/banner-mobile.png';
import BannerText from '../../../assets/images/home/banner-text.png'
import BannerTextMobile from '../../../assets/images/home/banner-text-mobile.png'

const subData = [
    {
        "id": 0,
        "title": "敢邁「冕禦力」 7AM"
    },
    {
        "id": 1,
        "title": "敢邁「捷行力」 2PM"
    },
    {
        "id": 2,
        "title": "敢邁「健記寧」 9PM"
    }
]
</script>