<template>
    <div class="container">
        <input type="text">
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "Api",
    components: {},
    data(){
        return {
        }
    },
    created(){
        const newUser = {
            first_name: "Alfredo",
            last_name: "Josefo",
            email: "alfredo@gmail.com"
        }
        // console.log(this.$store.state.user) - State

        // Mutation
        // this.$store.commit('storeUser', { 
        //     first_name: 'Kauan'
        // })
         
        // Actions
        this.$store.dispatch('api/storeUser', newUser)
        // this.$store.dispatch('storeUser', newUser).then(() => {
            console.log(this.users)
        // })
    },
    computed: {
        ...mapGetters({
            users: "api/getUsers"
        })
    }
}
</script>

<style scoped>
input {
    border: 0;
    border-radius: 10px;
}
</style>