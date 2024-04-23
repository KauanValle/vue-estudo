import { createApp } from 'vue'
import App from './App.vue'
import config from './router/config.js';
import store from './store/index.js'

createApp(App)
  .use(store)
  .use(config)
  .mount('#app')