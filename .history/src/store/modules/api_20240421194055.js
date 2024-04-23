const state = () => ({
    teste: 0
});

const getters = {
    getTeste(state){
        return state.teste
    }
}

const actions = {

}

const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}