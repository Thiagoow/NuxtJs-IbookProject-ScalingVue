<template>
  <NuxtLink class="bookCard" :to="`/book/${book.id}`">
    <img :src="book.cover" :alt="`Capa do livro ${book.title}`" />

    <div class="text">
      <h4>{{ book.title }}</h4>
      <p>{{ book.author }}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
// Importando as opções de prop da interface Book lá em models:
import Vue, { PropOptions } from 'vue'
import { Book } from '@/models'

export default Vue.extend({
  props: {
    book: {
      type: Object,
      required: true,
      // Tipagem da prop de book:
    } as PropOptions<Book>,
  },
})
</script>

<style lang="scss" scoped>
.bookCard {
  color: inherit;
  display: grid;
  //Espaçamento entre o texto e a capa:
  grid-gap: 1rem;
  img {
    display: grid;
    width: 100%;
    border: 0.5px solid rgba(0, 0, 0, 0.445);
    border-radius: 5px;
    box-shadow: 0px 4px 11px 4px rgba(0, 0, 0, 0.13);
    transition: all 300ms ease;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 4px 17px 4px rgba(0, 0, 0, 0.11);
    }
  }
  h4 {
    font-size: 0.875rem;
    font-weight: bold;
    text-align: center;
  }
  p {
    font-size: 13px;
    color: color('dark');
    text-align: center;
  }
}
</style>
