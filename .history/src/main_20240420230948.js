import { createApp, Vue } from 'vue'
import App from './App.vue'

const app = createApp(App);
    app.use(router);
    app.mount('#app');