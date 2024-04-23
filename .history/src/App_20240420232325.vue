<template>
  <h1>PASTAS</h1>
  <nav>
    <ul>
      <li><RouterLink to="/">Go to Home</RouterLink></li>
    </ul>
    
    <RouterLink to="/home">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
