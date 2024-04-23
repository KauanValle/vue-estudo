<template>
    <div class="container-item">
        {{ Item.id }}
    </div>
</template>

<script>
export default {
    name: "ItemEmit",
    components: {},
    props: {
        Item: Array
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