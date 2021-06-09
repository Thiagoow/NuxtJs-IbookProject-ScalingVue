<template>
  <div class="app" align="center">
    <h1>Você está na Home :D</h1>
    <ul>
      <!--O componente NuxtLink, é usado para substituir a
      tag "a" e o "href=" quando queremos que um link abra
      sem o recarregamento da página, e com o mantimento do
      SSR (server side rendering), da página anterior.-->
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/ExplorandoNuxt/components/1Sobre">Sobre</NuxtLink>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  /*  Herdando um layout manualmente: 
  layout: 'ExplorandoNuxt/HowThisFolderWorks', */
})
</script>

<style scoped>
/*A classe:*/
.nuxt-link-exact-active {
  /*Referencia o link em que estamos,
  nesse exato momento. OU SEJA, a página a qual
  é referenciada no link, e a qual o usuário está
  visitando atualmente.*/
  background-color: greenyellow;
}

.nuxt-link-active {
  /*Já essa classe, referencia o link que
  não é o qual o usuário está visitando atualmente,
  MAS o link que já foi aberto alguma vez pelo usuário.
  OU SEJA, se esse link já foi aberto, ele recebe, e mantém
  essa estilização:*/
  background-color: rgb(55, 0, 255);
  color: white;
  /*Mesmo que não seja a exata página que o usuário está
  visitando atualmente.*/
}
</style>
