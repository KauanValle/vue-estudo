const state = () => ({
    users: [
        {
            first_name: 'Kauan'
        }
    ]
});

// const getters = {
//     getUsers(state) {
//         state.users
//     }
// }

const actions = {
    async storeUser(){
        return new Promise((resolve) => {
            resolve();
            console.log('oi')
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
    actions,
    mutations
}