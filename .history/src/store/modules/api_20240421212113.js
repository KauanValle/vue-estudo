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
        console.log('store user actions')
        return new Promise((resolve) => {
            resolve();
            commit('storeUser', data);
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