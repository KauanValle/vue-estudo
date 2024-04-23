<template>
    <div class="container-item">
        <span><strong>Nome:</strong> {{ item.nome_pizza }}</span>
        <br>
        <span><strong>Descrição:</strong> {{ item.descricao }}</span>
        <br>
        <span><strong>Status: </strong> {{ item.ativo }}</span>
        <br>
        <button @click="ativarItem">Ativar</button>
    </div>
</template>

<script>
export default {
    name: "ItemEmit",
    components: {},
    props: {
        item: Array
    },
    methods: {
        ativarItem(){
            this.$emit('toggle-ativo', this.foodName);
        }
    }

}
</script>

<style scoped>
.container-item {
    margin: 10px 0;
    height: 130px;
    background-color: rgb(51, 51, 51);
    color: white;
    padding: 10px;
}
button {
    margin-top: 15px;
    padding: 10px;
}
</style>