<template>
  <div class="bookDetails">
    <BookCover />
    <BookInfo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.bookDetails {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 1.5rem;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
}
</style>
