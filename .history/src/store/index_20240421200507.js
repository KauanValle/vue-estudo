// import Vue from 'vue';
// import Vuex from 'vuex';
// import Modules from './modules'

// Vue.use(Vuex);

// export default new Vuex.Store({
//     Modules,
//     strict: true
// })

import { createStore } from 'vuex';

export default createStore({
    state: {
        user: {
            first_name: "Carlos",
            last_name: "Snow",
            email: "dsadsa@gmail.com"
        }
    },
    mutations: {
        storeUser(state) {

        }
    },
    actions: {

    },
    getters: {

    }
})