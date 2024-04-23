<template>
    <div class="container">
        <h2>Diretivas.vue</h2><br>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Não estou trabalhando no momento.</p>

        <!-- v-show mesmo comportamento do v-if só que não tem opção de utilizar um "else" -->
        <p v-show="mostrar_email">Meu email é: {{ email }}</p>
    </div>
</template>

<script>
export default {
    name: 'Diretivas',
    data() {
        return {
            email: 'kauanvalle3@gmail.com',
            esta_trabalhando: false,
            mostrar_email: false
        }
    }
}
</script>