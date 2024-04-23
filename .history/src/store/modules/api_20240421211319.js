const state = () => ({
    users: []
});

const getters = {
    getUsers(state) {
        state.users
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