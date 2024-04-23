const state = () => ({
    users: [
        {
            first_name: 'Kauan'
        }
    ]
});

const getters = {
    getUsers(state) {
        return state.users
    }
}

const actions = {
    async storeUser(){
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
    state,
    getters,
    actions,
    mutations
}