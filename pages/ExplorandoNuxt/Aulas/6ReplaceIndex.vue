// PARA USAR ESSE EXEMPLO, SUBSTITUA O CÓDIGO DO "@/pages/index.vue" por esse
abaixo:

<template>
  <div class="count">
    <h1>{{ $count }}</h1>
    <!--☝🏻 Var computed desse componente, com o mesmo nome do GETTER do método importado-->
    <button @click="increment">Increment</button>
    <!--☝🏻 Método desse componente, com o mesmo nome da ACTION do método importado-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// -----------Fazendo o SSR (SEMPRE NAS PAGES):
// 1º Importamos o modulo definido na pasta store:
import { books } from '@/store'

export default Vue.extend({
  layout: 'iBook',
  // 2º Testando o módulo books:
  computed: {
    // Var computed local, com o mesmo nome do getter retornado:
    $count() {
      // Retorna o getter do módulo importado:
      return books.$count
    },
  },
  methods: {
    increment() {
      // Incrementa +1 com a ACTION do módulo importado:
      books.increment(1)
    },
  },
})
</script>
