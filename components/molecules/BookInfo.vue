<template>
  <div class="bookInfo">
    <h2 class="bookTitle">{{ $book.title }}</h2>
    <div class="bookDescription" v-html="$book.description"></div>

    <BookCategories />
    <div class="bookReleaseDetails">
      <ul>
        <li>
          <p>Lançamento</p>
          <p>{{ $book.releaseDate }}</p>
        </li>
        <li>
          <p>Autor</p>
          <p>{{ $book.author }}</p>
        </li>
      </ul>
    </div>
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
.bookInfo {
  width: 100%;
  .bookTitle {
    margin-bottom: 2rem;
  }
  .bookDescription {
    line-height: 1.625rem;
  }
  .bookCategories {
    margin-top: 2rem;
  }
  .bookReleaseDetails {
    margin-top: 1rem;
    ul {
      display: grid;
      grid-gap: 0.65rem;
      li {
        display: grid;
        grid-template-columns: 160px 1fr;
        font-weight: 700;
        font-size: 13px;
      }
    }
  }
}
</style>
