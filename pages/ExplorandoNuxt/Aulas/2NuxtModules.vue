<template>
  <div class="app" align="center">
    <Logo />
    <h1 class="title">Você está na Home :D</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    this.$axios.$get('/posts')
    /* Quando colocamos o $ antes do axios, ele já pega o "data" da
    requisição, nos poupando de desestruturar assim:
      const { data } = this.$axios.$get('/posts') */
  },
})
</script>

<style scoped>
.title {
  margin-top: 0.5rem;
}

.app {
  height: 100vh;
  display: grid;
  place-items: center;
  place-content: center;
}
</style>
