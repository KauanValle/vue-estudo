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
        storeUser(state, payload) {
            state.user.first_name = payload.first_name;
            // console.log(state);
        }
    },
    actions: {
        storeUser(){
            return new Promise((resolve) => {
                setTimeout(() => {}, 3000)
                resolve()
                console.log('here')
            })
        }
    },
    getters: {
        total(state) {
            return state.user
        }
    }
})