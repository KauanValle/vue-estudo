<template>
    <div class="container projetos">
      <h1>Lista dos PROJETOS!</h1><br>
      <div class="lista-projetos" >
        <RouterLink class="text-black router-link" v-for="projeto in projetos" v-bind:key="projeto.id" v-bind:to="projeto.router">{{ projeto.nome_projeto }}</RouterLink>
      </div>
    </div>
</template>

<script>
export default {
    name: "ListaProjetos",
    components: {}
}
</script>
