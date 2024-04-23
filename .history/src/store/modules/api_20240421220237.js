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
    async storeUser(context, data){
        return new Promise((resolve) => {
            resolve();
            console.log(data);
            context.commit('storeUser', data);
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