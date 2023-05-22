<template>
    <section class="confirmed">
        <div class="flex lg:flex-row flex-col-reverse h-full pt-[80px] pb-[100px]">
            <div class="left lg:w-[50%] w-[100%] flex justify-center self-start">
                <img class="w-[60%]" :src="LeftImage" alt="">
            </div>
            <div class="right lg:w-[50%] w-[100%] flex justify-center lg:mb-0 mb-[40px]">
                <img class="w-[60%]" :src="RightImage" alt="">
            </div>
        </div>
    </section>
</template>

<script setup>
// import BackgroundImge from '../../../assets/images/home/proved.png';
import LeftImage from '@/assets/images/home/confirmed-7.png';
import RightImage from '@/assets/images/home/deco-fixed.png';

</script>

<style scoped>
.confirmed {
    background-image: url('../../../assets/images/home/proved-mobile.png');
    background-repeat: no-repeat;
    background-size: 100% 101%;
}

@media screen and (min-width: 1024px) {
    .confirmed {
        background-image: url('../../../assets/images/home/proved.png');
    }
}
</style>