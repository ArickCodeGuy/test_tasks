import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '@/assets/fonts/Montserrat/stylesheet.css';
import '@/assets/style.scss';
import App from './App.vue';
import router from './router';

createApp(App).use(router).use(createPinia()).mount('#app');
