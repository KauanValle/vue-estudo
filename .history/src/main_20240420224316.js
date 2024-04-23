import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

const router = new VueRouter(){
    routes: [
        { path: '/', component: Home },
    ]
}

createApp(App)
    .use(VueRouter)
    .mount('#app')
