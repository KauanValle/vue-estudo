<template>
    <div>
        <input type="text">
    </div>
</template>

<script>
export default {
    name: 'Input'
}
</script>

<style scoped>
input {
    border: 0;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 2px 2px rgb(207, 207, 207);
}
input:focus {
    border: none;
    outline: 0;
}
</style>