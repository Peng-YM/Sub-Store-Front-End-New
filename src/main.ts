import './assets/styles/global.scss';
import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import { router } from './routes';

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');
