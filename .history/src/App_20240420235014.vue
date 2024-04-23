<template>
  <nav id="nav">
      <RouterLink class="router-link" to="/">Projetos</RouterLink>
      <RouterLink class="router-link" to="/home"></RouterLink>
  </nav>
  <section>
    <div class="container">
      Projeto criado utilizando o VueJS para estudo do mesmo! Aqui terá um organizador de arquivos onde irá ter todos os estudos e testes que fiz utilizando Vue. 
    </div>
    <div class="container projetos">
        <h1>Lista dos PROJETOS!</h1>
        <div class="lista-projetos">oi</div>
    </div>
  </section>
  <main>
    <RouterView />
  </main>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
.router-link {
  margin-left: 10px;  
  margin-right: 10px;  
}

* {
  padding: 0;
  margin: 0;
  font-family:  'Courier New', Courier, monospace;
}

a {
  color: white;
  text-decoration: none;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1A7D51;
  height: 7vh;
}

.container {
  width: 100%;
  max-width: 1090px;
  margin: auto;
  background-color: #E0FFF1;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.projetos {
  text-align: center;
}

</style>
