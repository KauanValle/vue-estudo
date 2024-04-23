<template>
    <div class="container">
        <form @submit="">
            <input type="text" v-model="pessoa.nome">
        </form>
    </div>
</template>

<script>

import pessoa from '../entities/pessoa.json';

export default {
    name: "Eventos",
    components: {},
    data() {
        return {
            pessoa: pessoa
        }
    }
}
</script>