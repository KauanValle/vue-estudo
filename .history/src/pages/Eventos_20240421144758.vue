<template>
    <div class="container">
        <form @submit="">
            <div>
                <input type="text" v-model="pessoa.nome">
            </div>
            <div>
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