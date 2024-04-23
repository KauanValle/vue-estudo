<template>
    <div class="container">
        <form @submit="salvarUsuario($event)">
            
            <div>
                <label for="inputPrimeiroNome">Primeiro Nome: </label>
                <input name="inputPrimeiroNome" class="inputPrimeiroNome" id="inputPrimeiroNome" type="text" v-model="usuario.nome">
            </div>
            <div>
                <label for="inputSobrenome">Sobrenome: </label>
                <input name="inputSobrenome" class="inputSobrenome" id="inputSobrenome" type="text" v-model="usuario.sobrenome">
            </div>
            <div>
                <label for="inputEmail">Email: </label>
                <input name="inputEmail" class="inputEmail" id="inputEmail" type="text" v-model="usuario.email">
            </div>
            <button>Salvar Usuario</button>
        </form>
        <hr class="solid">
        <div>
            Usuarios cadastrados:
        </div>
    </div>
</template>

<script>
import UsuarioApi from '@/entities/UsuarioApi';
import { mapGetters } from 'vuex';

export default {
    name: "Api",
    components: {},
    data(){
        return {
            usuario: {...UsuarioApi}
        }
    },
    methods: {
        salvarUsuario(e){
            e.preventDefault();
            this.$store.dispatch('api/salvarUsuario', this.usuario).then(() => {
                alert('Usuario Salvo Com Sucesso!')
            })
        }
    },
    created(){
        // const newUser = {
        //     first_name: "Alfredo",
        //     last_name: "Josefo",
        //     email: "alfredo@gmail.com"
        // }
        // console.log(this.$store.state.user) - State

        // Mutation
        // this.$store.commit('storeUser', { 
        //     first_name: 'Kauan'
        // })
         
        // Actions
        // this.$store.dispatch('api/storeUser', newUser)
        // this.$store.dispatch('storeUser', newUser).then(() => {
            // console.log(this.usuariosGetters)
        // })
    },
    computed: {
        ...mapGetters({
            usuariosGetters: "api/pegarUsuarios"
        })
    }
}
</script>

<style scoped>
hr {
    margin-top: 20px;
}

button {
    margin-top: 15px;
    padding: 10px;
}
form div {
    margin: 10px 0;
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
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