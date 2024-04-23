import Vuex from 'vuex';
import Modules from './modules/modules.js'
import { createStore } from 'vuex';

const store = createStore({
    // Passar seu módulo (ou módulos) para a opção 'modules'
    modules: Modules,
    // Definir strict como true, se necessário (opcional)
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