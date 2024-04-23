<template>
    <div>Meu nome é {{ nome }}</div>
</template>

<script>
// Eventos acontecendo por cada etapa da minha aplicação
export default {
    name: 'LifeCycle',
    data() {
        return {
            nome: "Ainda não sei"
        }
    },
    created() {
        this.nome = "Kauan Valle"
    },
    mounted() {
        this.nome = 'Pedro'
    }
}
</script>