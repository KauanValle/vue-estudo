import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from './pages/HomePage.vue'
import Lifecycle from './pages/LifeCycle.vue'
import Diretivas from './pages/Diretivas.vue'

const routes = [
    { 
        path: '/home', 
        component: HomeView 
    },
    { 
        path: '/lifecycle', 
        component: Lifecycle 
    },
    { 
        path: '/diretivas', 
        component: Diretivas 
    },
]

export default routes;