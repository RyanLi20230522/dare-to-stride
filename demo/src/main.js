import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import router from './router/index.js';

import './assets/css/index.css';

createApp(App).use(router).mount('#app');