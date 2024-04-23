<template>
    <div class="container">
        <form @submit="testeFuncion($event)">
            <Input/>
            <button>Clique Aqui</button>
        </form>
        
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "Api",
    components: {},
    data(){
        return {
            teste: ''
        }
    },
    methods: {
        testeFuncion(e){
            e.preventDefault();
            console.log(this.teste)
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
    padding: 10px;
    box-shadow: 0px 2px 2px rgb(207, 207, 207);
}
input:focus {
    border: none;
    outline: 0;
}
</style>