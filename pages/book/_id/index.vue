<template>
  <BookDetailsTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  layout: 'iBook',

  async asyncData({ route, error }) {
    try {
      // Mostra a página de detalhes do livro se ele existir na dB:
      await books.show({ id: route.params.id as any })
    } catch {
      // Retorna o status 404 caso o livro não exista na dB 😎:
      return error({ statusCode: 404 })
    }
  },
  // HeadTags:
  head() {
    return {
      title: books.$single.title,
      meta: [
        {
          // Id da metaTag:
          hid: 'description',
          name: 'description',
          content: books.$single.description,
        },
      ],
    }
  },
})
</script>
