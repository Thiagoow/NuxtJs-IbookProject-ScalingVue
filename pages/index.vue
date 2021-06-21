<template>
  <HomeTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
// -----------Fazendo o SSR (SEMPRE NAS PAGES):
// 1º Importamos o modulo definido na pasta store:
import { books } from '@/store'

export default Vue.extend({
  layout: 'iBook',
  /* Testando o módulo:
  (sendo esse módulo assíncrono para a página
  só ser exibida depois que os livros carregarem): */
  async asyncData() {
    await books.index()
  },
})
</script>
