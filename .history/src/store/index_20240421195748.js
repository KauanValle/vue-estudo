import Vue from 'vue';
import Vuex from 'vuex';
import Modules from './modules/api'

Vue.use(Vuex);

export default new Vuex.Store({
    Modules,
    strict: true
})