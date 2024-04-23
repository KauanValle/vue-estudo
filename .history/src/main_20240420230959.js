import { createApp, Vue } from 'vue'
import App from './App.vue'
import routes from './routes'

const app = createApp(App);
    app.use(router);
    app.mount('#app');