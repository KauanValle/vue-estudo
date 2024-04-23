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