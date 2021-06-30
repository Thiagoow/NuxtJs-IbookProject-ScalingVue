<template>
  <!--Para que possamos criar uma página de erro
personalizada no Nuxt.js, precisamos apenas criar 
um componente "error.vue" dentro da pasta layouts.-->
  <div class="error">
    <img src="@/assets/img/404.svg" alt="Erro 404" />
    <p>
      A página que você tentou encontrar<br />
      não existe ou foi removida! 😕
    </p>

    <NuxtLink to="/">Voltar à Home</NuxtLink>
  </div>
</template>

<style scoped>
* {
  background: rgb(1, 9, 32);
  color: white;
}

p {
  font-size: 16px;
  width: 90%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
}

.error {
  width: 100%;
  height: 100%;
  background-color: color('dark', 'darkest');
  color: color('light');
  display: grid;
  justify-content: center;
  align-content: center;
  justify-items: center;
  position: absolute;
}

a {
  padding: 0.5rem 1rem;
  color: black;
  text-align: center;
  font-weight: bold;
  border-radius: 0.5rem;
  border: none;
  background: #e2e2e2;
  outline: none;
  border-radius: 0.9rem;
  cursor: pointer;
  box-shadow: 0px 0 13px 2px rgba(238, 238, 238, 0.3);
  transition: all 0.2s linear;
}

img {
  width: 90%;
}
</style>
