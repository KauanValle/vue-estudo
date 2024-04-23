<template>
  <nav id="nav">
    <ul>
      <li><RouterLink to="/">Go to Home</RouterLink></li>
      <li><RouterLink to="/home">Go to About</RouterLink></li>
    </ul>
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
* {
  padding: 0;
  margin: 0;
}
#nav {
  display: flex;
  background-color: #2c3e50;
}
ul {
  list-style: none;
}
</style>
