<template>
  <nav id="nav">
    <div class="router-link">
      <RouterLink to="/">Go to Home</RouterLink>
    </div>
    <div class="router-link">
      <RouterLink to="/home">Go to About</RouterLink>
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
  margin: 0px 5px 0px 5px 0px !important;  
}

* {
  padding: 0;
  margin: 0;
}

a {
  color: white;
}

#nav {

  background-color: #2c3e50;
}

</style>
