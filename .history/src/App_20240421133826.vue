<template>
  <nav id="nav">
    <RouterLink class="router-link" to="/">Projetos</RouterLink>
    <RouterLink class="router-link" to="/home"></RouterLink>
  </nav>
  <section>
    <div class="container">
      Projeto criado utilizando o VueJS para estudo do mesmo! Aqui terá um
      organizador de arquivos onde irá ter todos os estudos e testes que fiz
      utilizando Vue.
    </div>
    <div class="container projetos">
      <h1>Lista dos PROJETOS!</h1>
      <div class="lista-projetos" >
        <RouterLink class="text-black" v-for="projeto in projetos" v-bind:key="projeto.id" class="router-link" v-bind:to="projeto.router">{{ projeto.nome_projeto }}</RouterLink>
      </div>
    </div>
  </section>
  <main>
    <RouterView />
  </main>
</template>

<script>

import Projetos from './data/Projetos.json';

export default {
  name: "App",
  components: {},
  data() {
    return {
      projetos: Projetos
    }
  }
};
</script>

<style>
.router-link {
  margin-left: 10px;
  margin-right: 10px;
}

.text-black {
  color: #222;
}

* {
  padding: 0;
  margin: 0;
  font-family: "Courier New", Courier, monospace;
}

a {
  color: white;
  text-decoration: none;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a7d51;
  height: 7vh;
}

.container {
  width: 100%;
  max-width: 1090px;
  margin: auto;
  background-color: #e0fff1;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.projetos {
  text-align: center;
}
</style>
