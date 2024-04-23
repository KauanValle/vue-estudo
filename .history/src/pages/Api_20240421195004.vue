<template>
    <div></div>
</template>

<script>
export default {
    name: "Api",
    components: {},
    data(){
        return {}
    },
    created(){
        this.$store.commit('api/setTeste', null);
    }
}
</script></script>