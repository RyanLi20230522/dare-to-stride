<template>
    <section class="nutricia">
        <div class="flex h-full pb-[10vw]">
            <div class="left w-[0px] lg:w-[50%] flex justify-center self-start">
                <img class="w-[60%] hidden lg:block" :src="ImageLeft" alt="">
            </div>
            <!--  lg:pr-[10%] -->
            <div class="right w-[100%] lg:w-[50%] pr-[0px]">
                <h2 class="text-center lg:text-start text-[32px] lg:text-[56px] ml-[auto] lg:ml-[0px] mr-[auto] max-w-[50%] lg:max-w-[500px] text-white pt-[4vw]">對的時間 對的營養 <br> 中西養生智慧薈萃</h2>
                <img class="w-[60%] block lg:hidden ml-[auto] mr-[auto]" :src="ImageLeft" alt="" />
                <p class="text-white mt-4 mb-4 max-w-[500px] ml-[auto] lg:ml-[0px] mr-[auto]">
                    敢邁從生理時鐘養生智慧取經，配合NUTRICIA 125年的領先科研實力，以西方臨牀實證營養成分，加上天然中華草本精粹，固本內在調理改善體質，留住健康日常。
                </p>
                <p class="text-white max-w-[500px] pb-[40px] ml-[auto] lg:ml-[0px] mr-[auto]">
                    根據十二時辰的人體所需，晚上9點到11點，經氣入三焦經，宜保持心平氣和，安神養腦，準備入眠。飲用一杯敢邁「健記寧」，可有助放鬆，加快入睡。
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import ImageLeft from '@/assets/images/home/nutricia-left.png';

</script>

<style scoped>
.nutricia {
    background-image: url('../../../assets/images/home/nutricia-mobile.png');
    background-repeat: no-repeat;
    background-size: 100% 101%;
}

@media screen and (min-width: 1024px) {
    .nutricia {
        background-image: url('../../../assets/images/home/nutricia.png');
    }
}
</style>