import Modules from './modules/modules.js'
import { createStore } from 'vuex';

const store = createStore({
    modules: Modules,
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