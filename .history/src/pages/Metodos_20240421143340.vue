<template>
    <div class="container">
        <button @click="showEmail">Mostrar Email</button>
        <p v-if="show_email">{{ email }}</p>
    </div>
</template>

<script>
export default {
    name: 'Metodos',
    components: {},
    data() {
        return {
            email: 'kauanvalle3@gmail.com',
            show_email: false
        }
    },
    methods: {
        showEmail(){
            this.show_email = true;
        }
    }
}
</script>

<style scoped>
    button {
        padding: 5px;
    }

</style>