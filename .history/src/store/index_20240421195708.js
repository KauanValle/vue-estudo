import Vue from 'vue';
import Vuex from 'vuex';
import Modules from './modules'

Vue.use(Vuex);
const vuexLocalStorage = new VuexPersist({
    key: "teste",
    storage: window.localStorage,
    supportCircular: true
})

export default new Vuex.Store({
    Modules,
    strict: true,
    plugins: [vuexLocalStorage.plugin]
})