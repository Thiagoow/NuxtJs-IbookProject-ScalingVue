<template>
  <div class="iBookLayout">
    <Header />
    <Container>
      <!--Aqui ficará o conteúdo nosso layout,
      por tanto inserimos o componente Nuxt:-->
      <Nuxt />
    </Container>
    <Footer />
    <style>
      /*Browser ScrollBar Style:*/
      /* width */
      ::-webkit-scrollbar {
        width: 8px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #7e7a7a;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #292929;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: ##131212;
      }
    </style>
  </div>
</template>

<style lang="scss" scoped>
.iBookLayout {
  margin-top: 1.313rem;
  display: grid;
  grid-gap: 3.75rem;
  .container {
    //Espaçamento entre o header e o conteúdo:
    padding-top: 1.5rem;
    //Espaçamento entre o conteúdo e o footer:
    padding-bottom: 1rem;
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
