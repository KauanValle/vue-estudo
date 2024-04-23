<template>
    <div class="container projetos">
      <h1>Lista dos PROJETOS!</h1><br>
      <div class="lista-projetos" >
        <RouterLink class="text-black router-link" v-for="projeto in projetos" v-bind:key="projeto.id" v-bind:to="projeto.router">{{ projeto.nome_projeto }}</RouterLink>
      </div>
    </div>
</template>

<script>

import Projetos from '../data/Projetos.json';
export default {
    name: "ListaProjetos",
    components: {},
    data(){
        return {
            projetos: Projetos
        }
    }
}
</script>

<style scoped>
.router-link {
  margin-left: 10px;
  margin-right: 10px;
}

.projetos {
  text-align: center;
}
</style>