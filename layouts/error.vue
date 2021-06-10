<template>
  <!--Para que possamos criar uma página de erro
personalizada no Nuxt.js, precisamos apenas criar 
um componente "error.vue" dentro da pasta layouts.-->
  <div class="error">
    <!--Não consegui carregar a imagem não sei pq :c
    <img class="errorImg" src="/assets/images/e404.png" alt="error" />-->
    <h1>Error 404 😕</h1>

    <h5>The page that you trying to find doesn't exist!</h5>
  </div>
</template>

<style scoped>
* {
  background: rgb(9, 32, 97);
  color: white;
}

.error {
  height: 100vh;
  display: grid;
  place-items: center;
  place-content: center;
}

.errorImg {
  z-index: 1000;
  width: 500px;
  height: 250px;
}
</style>
