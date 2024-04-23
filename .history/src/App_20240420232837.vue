<template>
  <nav id="nav">
      <RouterLink class="router-link" to="/">Go to Home</RouterLink>
      <RouterLink class="router-link" to="/home">Go to About</RouterLink>
  </nav>
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
  padding: 0px 5px 0px 5px 0px;  
}

* {
  padding: 0;
  margin: 0;
}

a {
  color: white;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
}

</style>
