import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Inicio from './views/HelloWorld.vue';

const routes = [
    { path: '/teste', component: HelloWorld },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
    app.use(router);
    app.mount('#app');