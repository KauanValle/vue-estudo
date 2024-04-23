const state = () => ({
    users: []
});

const getters = {
    getUsers(state) {
        state.users
    }
}

const actions = {
    storeUser({commit}, data){

    }
}

const mutations = {
    storeUser(state, data){

    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}