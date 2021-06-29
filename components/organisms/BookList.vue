<template>
  <div class="bookList">
    <!--Exibe 1 BookCard, pra cada livro, na array de books
    (presente na API, requisitada a partir do books.ts importado em *¹)-->
    <BookCard v-for="book in $books" :key="book.id" :book="book" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// *¹:
import { books } from '@/store'

export default Vue.extend({
  computed: {
    $books() {
      // Retorna todos os livros:
      return books.$all
    },
  },
})
</script>

<style lang="scss" scoped>
.bookList {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: 1.5rem;
  margin-bottom: -1.5rem;
  @include screen('small') {
    grid-template-columns: repeat(2, 1fr);
  }
  @include screen('medium') {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
