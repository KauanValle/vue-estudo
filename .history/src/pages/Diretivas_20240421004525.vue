<template>
    <div class="container">
        <h2>Diretivas.vue</h2>
        <br>
        <!-- v-if funciona igual o IF normal, verifica se uma condição é true e o v-else é o se não. -->
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Não estou trabalhando no momento.</p>

        <!-- v-show mesmo comportamento do v-if só que não tem opção de utilizar um "else" -->
        <p v-show="mostrar_email">Meu email é: {{ email }}</p>
        <br>

        <!-- v-for é utilizado para verificar um array de itens e trabalhar item por item. -->
        <div v-for="item in items" v-bind:key="item.id">
            Nome: <strong>{{ item.nome }}</strong> | Email: <strong>{{ item.email }}</strong>
        </div>
        <br>
        
        <p>Para acessar meu link, basta clicar aqui: <a v-bind:href="meu_link" target="__blank">MEU LINK</a></p>
    </div>
</template>

<script>
export default {
    name: 'Diretivas',
    data() {
        return {
            email: 'kauanvalle3@gmail.com',
            esta_trabalhando: false,
            mostrar_email: true,
            meu_link: 'httt://www.google.com',
            items: [
                {id: 1, nome: 'Kauan Valle', email: 'kauan@gmail.com'},
                {id: 2, nome: 'Kimberli Paluski', email: 'kimberli@gmail.com'}
            ]
        }
    }
}
</script>

<style scoped>

a {
    color: rgb(93, 0, 255);
}
</style>