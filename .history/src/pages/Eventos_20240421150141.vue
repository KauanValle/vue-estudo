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
            Resultado do forms:
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
    padding: 10px;
    border: 2px solid rgb(74, 138, 79);
    border-radius: 5px;
}

</style>