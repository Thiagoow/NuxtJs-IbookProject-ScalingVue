<template>
  <!--Para que possamos criar uma página de erro
personalizada no Nuxt.js, precisamos apenas criar 
um componente "error.vue" dentro da pasta layouts.-->
  <div class="error">
    <ErrorLogo />
    <h1>Error 404 😕</h1>

    <h5>The page that you trying to find doesn't exist!</h5>
  </div>
</template>

<style scoped>
* {
  background: rgb(3, 16, 51);
  color: white;
}

h1 {
  text-transform: uppercase;
}

.error {
  height: 100vh;
  display: grid;
  place-items: center;
  place-content: center;
}
</style>
