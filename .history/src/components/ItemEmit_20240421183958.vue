<template>
    <div class="container-item">
        <span><strong>Nome:</strong> {{ item.nome_pizza }}</span>
        <br>
        <span><strong>Descrição:</strong> {{ item.descricao }}</span>
    </div>
</template>

<script>
export default {
    name: "ItemEmit",
    components: {},
    props: {
        item: Array
    }

}
</script>

<style scoped>
.container-item {
    margin: 10px 0;
    height: 100px;
    background-color: rgb(51, 51, 51);
    color: white;
    padding: 10px;
}
</style>