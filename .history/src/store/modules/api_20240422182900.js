import { ref } from 'vue'; // Importa ref do Vue 3

const state = ref({
  users: []
});

const getters = {
    getUsers(state){
        return state.users
    }
}

const actions = {
    async salvarUsuario(context, data){
        return new Promise((resolve) => {
            context.commit('salvarUsuario', data)
            resolve()
        })
    }
}

const mutations = {
    salvarUsuario(state, data){
        state.usuario.push(data);
    }
    storeUser(state, data){
        state.users.push(data)
    },
    findUser(state){
        return state.getters
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}