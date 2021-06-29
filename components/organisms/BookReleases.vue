<template>
  <div class="releases">
    <h2>✨Lançamentos</h2>

    <BookList />
  </div>
</template>

<style lang="scss" scoped>
.releases {
  display: grid;
  //Espaçamento entre o título h2 e a BookList:
  grid-gap: 1.5rem;
  h2 {
    font-size: 1.375rem;
    font-weight: 500;
    color: color(dark, darkest);
  }
}
</style>
