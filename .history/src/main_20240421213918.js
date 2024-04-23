import { createApp } from 'vue'
import App from './App.vue'
import config from './router/config.js';
import store from './store/index.js'
import Vuex from 'vuex';

console.log(store);

createApp(App)
  .use(Vuex)
  .use(store)
  .use(config)
  .mount('#app')