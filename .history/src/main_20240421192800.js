import { createApp } from 'vue'
import App from './App.vue'
import config from './router/config.js';
import Vuex from 'vuex';

createApp(App)
  .use(config)
  .use(Vuex)
  .mount('#app')