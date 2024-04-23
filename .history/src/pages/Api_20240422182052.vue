<template>
    <div class="container">
        <form @submit="testeFuncion($event)">
            <!-- <button>Clique Aqui</button> -->
            <div>
                <label for="inputPrimeiroNome">Primeiro Nome: </label>
                <input name="inputPrimeiroNome" class="inputPrimeiroNome" id="inputPrimeiroNome" type="text">
            </div>
            <div>
                <label for="inputSobrenome">Sobrenome: </label>
                <input name="inputSobrenome" class="inputSobrenome" id="inputSobrenome" type="text">
            </div>
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
        }
    },
    methods: {
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
form div {
    margin: 10px 0;
}

form div {
    display: flex;
    align-items: center;
}
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