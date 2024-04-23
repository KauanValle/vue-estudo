import { Vue } from 'vue'
import App from './App.vue'
import routes from './routes'
import Router from 'vue-router'

createApp(App)
  .use(router)
  .mount('#app')