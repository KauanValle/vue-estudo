<template>
    <div>
        <RouterLink to="/">Home</RouterLink>
        <RouterView></RouterView>
    </div>
</template>

<script>
export default {
    name: 'MenuPasta',

}
</script>

<style scoped>
    ul {
        list-style: none;
    }

    li {
        font-size: 20px;
    }
</style>