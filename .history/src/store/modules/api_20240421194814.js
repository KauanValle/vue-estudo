import api from '@/api/teste';

const state = () => ({
    teste: 0
});

const getters = {
    getTeste(state){
        return state.teste
    }
}

const actions = {
    async alterarValorTeste({commit}, payload){
        return api.salvar(payload).then((result) => {
            commit('setTeste', result.data)
        });
    }
}

const mutations = {
    setTeste(state, value){
        state.teste = value;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}