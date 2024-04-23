<template>
  <div class="container">
    <Title :text="titlePage" />
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  components: {},
  data() {
    return {
      titlePage: 'Tela de início'
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 790px;
  margin: auto;
}
</style>