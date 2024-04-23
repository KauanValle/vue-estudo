import { createApp } from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './pages/HomePage.vue'
import Lifecycle from './pages/LifeCycle.vue'

const routes = [
  { path: '/home', component: HomeView },
  { path: '/lifecycle', component: Lifecycle },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')