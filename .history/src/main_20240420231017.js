import { createApp, Vue } from 'vue'
import App from './App.vue'
import routes from './routes'
import Router from 'vue-router'

const app = createApp(App);
    app.use(Router);
    app.mount('#app');