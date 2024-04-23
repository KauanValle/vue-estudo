<template>
    <div class="container">
        <form @submit="">
            <div>
                <p>Nome</p>
                <input type="text" v-model="pessoa.nome">
            </div>
            <div>
                <p>Email</p>
                <input type="text" v-model="pessoa.email">
            </div>
            
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