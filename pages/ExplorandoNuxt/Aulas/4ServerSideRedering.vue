<template>
  <div class="post" align="center">
    <h1>Postagem</h1>
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const sleep = () => {
  /* Dá um atraso de 1,5seg pra carregar o conteúdo da "postagem":
  (simulando uma chamada na API 😉) */
  return new Promise((resolve) => setTimeout(resolve, 1500))
}

export default Vue.extend({
  /* Ao invés de usar o lifecycle hook created(), usamos
  esse objeto de asyncData, para que assim seja renderizado 
  apenas e diretamente no server, as informações inseridas nesse objeto: */
  async asyncData() {
    // Injeta o conteúdo depois de executar a função sleep():
    await sleep()

    const title = 'My Post Title'
    const content = 'Lorem ipsum dolor sit...'

    /* E isso faz, com que as informações inseridas aqui,
    funcionem como se realmente estivessem no hook created(),
    OU SEJA, as informações chegam no servidor, antes mesmo da
    página ser carregada para o usuário 😎😎🤟🏼 */
    return { title, content }

    /* PORÉM, NÃO conseguimos utilizar o this. para utilizar
    dados e informações existentes fora desse objeto.
    Fazendo com que, as informações desse asyncData, MESCLEM
    com as informações de mesmo nome, definidas no data() por exemplo.
    */

    /* ALÉM disso, o asyncData faz com que a página só seja exibida para
    o usuário, DEPOIS que todo o conteúdo dentro dele for carregado. Então
    se alguma requisição ou operação feita aqui dentro for demorar pra ser concluída,
    é MELHOR, utilizar o hook created(), para otimizar a performance de carregamento 😁 */
  },
  data() {
    return {
      title: '',
      content: '',
    }
  },
})
</script>
