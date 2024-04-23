import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
];

createApp(App)
    .use(VueRouter)
    .mount('#app')
