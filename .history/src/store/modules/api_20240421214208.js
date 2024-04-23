import { ref } from 'vue'; // Importa ref do Vue 3

const state = ref({
  users: [
    {
      first_name: 'Kauan'
    }
  ]
});

const getters = {
    getUsers(state) {
        return state.users
    }
}

const actions = {
    async storeUser(){
        return new Promise((resolve) => {
            resolve();
            // commit('storeUser', data);
        })
    }
}

const mutations = {
    storeUser(state, data){
        state.users.push(data)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}