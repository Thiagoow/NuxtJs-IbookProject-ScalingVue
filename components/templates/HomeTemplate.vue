<template>
  <div class="homeTemplate">
    <PageTitle text="Bem vindo ao " strong="iBook! 📚" />
    <BookReleases />
  </div>
</template>

<style lang="scss" scoped>
.homeTemplate {
  display: grid;
  //Espaçamento entre o PageTitle e a BookList:
  grid-gap: 1.5rem;
}
</style>
