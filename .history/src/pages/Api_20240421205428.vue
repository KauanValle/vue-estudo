<template>
    <div class="container">
        {{ $store.getters.total }}
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
        // console.log(this.$store.state.user)
        // this.$store.commit('storeUser', {
        //     first_name: 'Kauan'
        // })
    }
}
</script>