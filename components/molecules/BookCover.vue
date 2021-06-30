<template>
  <div class="bookCover">
    <img :src="$book.cover" :alt="`Capa do livro ${$book.title}`" />
    <NuxtLink class="readBook" :to="`/book/${$book.id}/read`">
      Ler livro
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  computed: {
    /* Retorna os dados do singleBook lá do Vuex (@/store)
       a partir do getter single (por isso o $, ele é um getter): */
    $book() {
      return books.$single
    },
  },
})
</script>

<style lang="scss" scoped>
.bookCover {
  img {
    width: 100%;
    border: 0.5px solid rgba(0, 0, 0, 0.445);
    border-radius: 5px;
    margin-top: -1rem;
  }
  .readBook {
    background: #292929;
    border-radius: 5px;
    color: #f7f7f7;
    text-transform: uppercase;
    font-weight: 700;
    width: 100%;
    height: 42px;
    font-size: 1.1rem;
    display: grid;
    justify-content: center;
    align-items: center;
    transition: all 300ms ease;
    &:hover {
      opacity: 0.89;
    }
  }
}
</style>
