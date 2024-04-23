import { Vue } from 'vue'
import App from './App.vue'
import routes from './routes'
import Router from 'vue-router'

const router = new Router({
    routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount("#app")