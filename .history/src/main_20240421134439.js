import { createApp } from 'vue'
import App from './App.vue'
import config from './router/config.js';

const router = config;

createApp(App)
  .use(router)
  .mount('#app')