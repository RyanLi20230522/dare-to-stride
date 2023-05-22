<template>
    <sub-banner />
    <confirmed />
    <nutricia />
    <mixed />
    <SuitableFormIndividuals />
    <Nutrition>
        <h2 class="h2title bg-[#17498F] relative">營養資料</h2>
        <div class="flex justify-between">
            <div class="w-[50%]">1</div>
            <div class="w-[50%]">2</div>
        </div>
    </Nutrition>
</template>

<script setup>
import SubBanner from './components/sub-banner.vue';
import Confirmed from './components/confirmed.vue';
import Nutricia from './components/nutricia.vue';
import Mixed from './components/mixed.vue';
import SuitableFormIndividuals from './components/suitable-for-individuals.vue';
import Nutrition from './components/expand-and-collapse-template.vue';
import Line from '../../assets/images/line.png'

</script>

<style scoped></style>