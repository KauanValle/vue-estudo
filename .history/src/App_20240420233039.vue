<template>
  <nav id="nav">
    <div>
      <RouterLink class="router-link" to="/">Go to Home</RouterLink>
    </div>
    <div>
      <RouterLink class="router-link" to="/home">Go to About</RouterLink>
    </div>
      
      
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
  margin: 10px;  
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
