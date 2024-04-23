<template>
  <nav id="nav">
      <RouterLink class="router-link" to="/">Home</RouterLink>
      <RouterLink class="router-link" to="/home">Primeiro Projeto</RouterLink>
  </nav>
  <section>
    
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
}

a {
  color: white;
  text-decoration: none;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
  height: 5vh;
}

</style>
