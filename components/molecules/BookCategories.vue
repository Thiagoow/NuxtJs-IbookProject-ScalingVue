<template>
  <div class="bookCategories">
    <CategoryContainer
      v-for="category in $book.categories"
      :key="category.id"
      :text="category.name"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  computed: {
    $book() {
      /* Retorna os dados do singleBook lá do Vuex (@/store)
       a partir do getter single (por isso o $, ele é um getter): */
      return books.$single
    },
  },
})
</script>

<style lang="scss" scoped>
.bookCategories {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: 0.5rem;

  @include screen('tiny') {
    grid-auto-flow: row;
    justify-content: center;
    text-align: center;
  }

  @include screen('small') {
    //Estiliza a partir do 3º elemento:
    &:nth-child(n + 3) {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
    }
  }
}
</style>
