import { createApp, Vue } from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

const app = createApp(App);
    app.use(router);
    app.mount('#app');