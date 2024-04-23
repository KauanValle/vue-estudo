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

a {
  color: white;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c3e50;
}
ul {
  display: flex;
  list-style: none;
}
</style>
