<template>
  <Navbar/>
  <section>
    <div class="container">
      Projeto criado utilizando o VueJS para estudo do mesmo! Aqui terá um
      organizador de arquivos onde irá ter todos os estudos e testes que fiz
      utilizando Vue.
    </div>
    <ListaProjetos/>
  </section>
  <main>
    <RouterView />
  </main>
</template>

<script>


import ListaProjetos from './components/ListaProjetos.vue'

export default {
  name: "App",
  components: {
    ListaProjetos
  }
};
</script>

<style>
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
</style>
