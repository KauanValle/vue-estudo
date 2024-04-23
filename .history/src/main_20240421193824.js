import { createApp } from 'vue'
import App from './App.vue'
import config from './router/config.js';

createApp(App)
  .use(config)
  .mount('#app')