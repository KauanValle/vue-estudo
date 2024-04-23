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
        this.$store.commit('api/setTeste', 1);
    }
}
</script></script>