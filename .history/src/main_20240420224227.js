import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

const router = new VueRouter(){
    routes: [
        { path: '/', component: MenuPasta}
    ]
}

createApp(App)
    .use(VueRouter)
    .mount('#app')
