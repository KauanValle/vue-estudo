const state = () => ({
    users: []
});

const getters = {
    getUsers(state) {
        state.users
    }
}

const actions = {
    storeUser(){
        return new Promise((resolve) => {
            resolve();
            // commit('storeUser', data);
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