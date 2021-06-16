<template>
  <div class="iBookLayout">
    <Header />
    <Container>
      <!--Aqui ficará o conteúdo nosso layout,
      por tanto inserimos o componente Nuxt:-->
      <Nuxt />
    </Container>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.iBookLayout {
  margin-top: 2.313rem;
  display: grid;
  grid-gap: 6.75rem;
  .container {
    padding-bottom: 6.75rem;
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
