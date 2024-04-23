import { ref } from 'vue'; // Importa ref do Vue 3

const state = ref({
  users: [
    {
      first_name: 'Kauan'
    }
  ]
});

const getters = {
    getUsers: (state) => state.value.users
}

const actions = {
    async storeUser(){
        return new Promise((resolve) => {
            console.log('chegou aqui!')
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