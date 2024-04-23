<template>
    <div class="container">
        oi
    </div>
</template>

<script>
export default {
    name: "Api",
    components: {},
    data(){
        return {}
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
        // this.$store.dispatch('api/storeUser', newUser)

        // this.$store.dispatch('storeUser', newUser).then(() => {
        //     console.log('terminouuuu')
        // })
    }
}
</script>