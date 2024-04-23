// import api from './modules/api.js';
import Modules from './modules/index.js'
import { createStore } from 'vuex';

const store = createStore({
    Modules
    strict: true
  });

export default store;
// import { createStore } from 'vuex';

// export default createStore({
//     state: {
//         user: []
//     },
//     mutations: {
//         storeUser(state, payload) {
//             state.user.first_name = payload.first_name;
//             // console.log(state);
//         }
//     },
//     actions: {
//         storeUser(){
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     resolve()
//                     console.log('here')
//                 }, 3000)
                
//             })
//         }
//     },
//     getters: {
//         total(state) {
//             return state.user
//         }
//     }
// })