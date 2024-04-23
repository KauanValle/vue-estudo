<template>
    <div class="container">
        <button @click="showEmail">Mostrar Email</button>
    </div>
</template>

<script>
export default {
    name: 'Metodos',
    components: {},
    data() {
        return {
            show_email: false
        }
    },
    methods: {
        showEmail(){
            console.log('oi')
        }
    }
}
</script>