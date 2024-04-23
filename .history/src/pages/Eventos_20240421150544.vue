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
            <p>Resultado do forms</p>
            <div class="code" v-if="show_code">{{ this.pessoa }}</div>
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
            pessoa: {...Pessoa},
            show_code: false
        }
    },
    methods: {
        enviarFormulario(e){
            e.preventDefault();
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

.code {
    background-color: #777;
    padding: 10px;
    border-radius: 5px;
    color: white;
}

.hide {
    display: none;
}

.show {
    display: block;
}

button {
        padding: 5px;
        margin-top: 20px;
    }

</style>