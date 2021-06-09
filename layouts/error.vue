<template>
  <!--Para que possamos criar uma página de erro
personalizada no Nuxt.js, precisamos apenas criar 
um componente "error.vue" dentro da pasta layouts.-->
  <div class="error">
    <img class="errorImg" src="/assets/images/error.svg" alt="Apresentação" />
    <h1>Error 404 😕</h1>

    <h5>The page that you trying to find doesn't exist!</h5>
  </div>
</template>

<style scoped>
body {
  background: black;
  color: white;
}

.error {
  height: 100vh;
  display: grid;
  place-items: center;
  place-content: center;
}

.errorImg {
  width: 500px;
  height: 250px;
}
</style>
