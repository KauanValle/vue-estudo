<template>
    <div class="container">
        <form @submit="enviarFormulario($event)">
            <div>
                <p>Nome</p>
                <input type="text" v-model="pessoa.nome">
            </div>
            <div>
                <p>Email</p>
                <input type="text" v-model="pessoa.email">
            </div>
            <button>Enviar</button>
        </form>
        <div class="result">
            dsads
        </div>
    </div>
</template>

<script>

import Pessoa from '../entities/Pessoa.js';

export default {
    name: "Eventos",
    components: {},
    data() {
        return {
            pessoa: {...Pessoa}
        }
    },
    methods: {
        enviarFormulario(e){
            e.preventDefault();
            alert(this.pessoa)
        }
    }
}
</script>

<style scoped>
.result {
    margin: 20px 0;
    border: 1px solid black;
}

</style>