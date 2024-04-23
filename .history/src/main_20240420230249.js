import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Inicio from './views/Inicio.vue';

const routes = [
    { path: '/', component: App },
    { path: '/teste', component: Inicio },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
    app.use(router);
    app.mount('#app');