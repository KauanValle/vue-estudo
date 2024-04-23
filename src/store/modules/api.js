import { ref } from 'vue'; // Importa ref do Vue 3

const state = ref({
  usuarios: []
});

const getters = {
    pegarUsuarios(state){
        return state.usuarios;
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}