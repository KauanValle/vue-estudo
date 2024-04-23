<template>
    <div class="container">
        <button @click="showEmail">{{ label_button }}</button>
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
            label_button: 'Mostrar Email',
            show_email: false
        }
    },
    methods: {
        showEmail(){
            this.show_email = !this.show_email;
            if(this.show_email){
                this.label_button = 'Esconder Email'
            }else {
                this.label_button = 'Mostrar Email'
            }
        }
    }
}
</script>

<style scoped>
    button {
        padding: 5px;
        margin-bottom: 20px;
    }

</style>