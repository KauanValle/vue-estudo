<template>
    <div class="container">
        <h2>Diretivas.vue</h2><br>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Não estou trabalhando no momento.</p>
    </div>
</template>

<script>
export default {
    name: 'Diretivas',
    data() {
        return {
            esta_trabalhando: false
        }
    }
}
</script>