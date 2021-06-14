<template>
  <div class="app" align="center">
    <!---->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  /* Podendo existir também, todas as outras props de Ts,
  como o data, computed, etc: */
  data() {
    return {
      title: 'Dynamic Title',
    }
  },
  /* Definimos aqui dentro, nossas propriedades de Head Tags customizadas,
 (copiadas lá do "nuxt.config.ts" e que irão subscrever os dados definidos lá */
  head(this: any) {
    return {
      title: this.title,
      /* Perceba que quando essa page for carregada,
      o título carregado será o definido acima, da prop data() */
      htmlAttrs: {
        lang: 'pt-br',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },
})
</script>
