import { ref } from 'vue'; // Importa ref do Vue 3

const state = ref({
  users: [],
  usuarios: []
});

const getters = {
    pegarUsuarios(state){
        return state.usuarios;
    },
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
        state.usuarios.push(data);
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