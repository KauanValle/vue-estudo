<template>
    <div>
        <nav id="nav">
            <RouterLink class="router-link" to="/">Projetos</RouterLink>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    components: {}
}
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a7d51;
  height: 7vh;
}
</style>