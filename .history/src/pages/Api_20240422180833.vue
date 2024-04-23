<template>
    <div class="container">
        <!-- <Input v-model="teste"/> -->
        <input type="text" v-model="teste">
        <button @click="testeFuncion">Clique Aqui</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Input from '@/components/Input.vue';

export default {
    name: "Api",
    components: {
        Input
    },
    data(){
        return {
            teste: ''
        }
    },
    methods: {
        testeFuncion(){
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