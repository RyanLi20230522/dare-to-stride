<template>
    <header class="header">
        <div class="flex pl-[6vw] pr-[6vw] justify-between">
            <div class="left">
                <img :src="Logo" alt="" class="pt-4 pb-4 max-w-[100px] lg:max-w-[160px]">
            </div>
            <div class="right flex">
                <div class="hidden lg:block">
                    <ul class="flex h-full">
                        <li class="self-center ml-3 mr-3" v-for="nav in NavData" :key="nav.id">
                            <template v-if="!nav.isImage">
                                <router-link :to="nav.url">
                                    {{ nav.title }}
                                </router-link>
                            </template>
                        </li>
                    </ul>
                    
                </div>
                <ul class="flex h-full">
                    <template v-for="nav in NavData">
                        <li class="self-center ml-4 mr-4"  v-if="nav.isImage" :key="nav.id">
                            <img :src="getImageUrl(nav.title)" alt="" class="w-8" />
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup>
import Logo from '../../assets/images/logo.png';

import { getImageUrl } from '../../utils/getImageUrl.js';


const NavData = [
    {
        "id": 0,
        "title": "產品介紹",
        "url": "/",
        "isImage": false
    },
    {
        "id": 1,
        "title": "敢邁科研營養",
        "url": "/",
        "isImage": false
    },
    {
        "id": 2,
        "title": "品牌理念",
        "url": "/",
        "isImage": false
    },
    {
        "id": 3,
        "title": "關於NUTRICIA",
        "url": "/",
        "isImage": false
    },
    {
        "id": 4,
        "title": "敢邁營養顧問",
        "url": "/",
        "isImage": false
    },
    {
        "id": 5,
        "title": '/src/assets/images/shopping-cart.png',
        "url": "/",
        "isImage": true
    },
    {
        "id": 6,
        "title": '/src/assets/images/hamburger.png',
        "url": "/",
        "isImage": true
    }
]

</script>

<style scoped>
.header {
    background-color: var(--blue1-color);
    color: var(--white1-color);
}

.header .right ul li:nth-last-child(1) {
    display: block;
}

@media screen and (min-width: 1024px) {
    .header .right ul li:nth-last-child(1) {
        display: none;
    }
}
</style>

<!-- ryanli20230522 -->