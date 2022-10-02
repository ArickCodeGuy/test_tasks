import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '@/assets/fonts/Montserrat/stylesheet.css';
import '@/assets/style.scss';
import App from './App.vue';
import router from './router';
import VImg from '@/components/VImg.vue';

createApp(App)
  .component('VImg', VImg)
  .use(router)
  .use(createPinia())
  .mount('#app');
