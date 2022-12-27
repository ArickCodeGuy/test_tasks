import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '@/assets/fonts/Montserrat/stylesheet.css';
import '@/assets/style.scss';
import App from './App.vue';
import router from './router';

import Cards from '@/components/Cards/index.vue';
import Card from '@/components/Cards/card.vue';

createApp(App)
  .use(router)
  .use(createPinia())
  .component('Card', Card)
  .component('Cards', Cards)
  .mount('#app');
