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
        return new Promise((resolve) => {
            commit.storeUser(state, data);
            resolve();
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