<template>
  <div class="presentation">
    <p>
      <b>O</b> iBook é uma plataforma de leitura de livros on-line fictícia.
      Criada por
      <a href="https://github.com/Thiagoow" target="_blank"
        >Thiago Silva Lopes</a
      >
      em 2021, tendo como base as aulas de Escalando Vue com Nuxt, no
      <a href="https://bootcamp.cataline.io/" target="_blank"
        >Bootcamp Full Stack da Cataline.</a
      >
      Desenvolvido utilizando as tecnologias: Nuxt.js, VueX, Typescript, HTML e
      SCSS, e as bibliotecas: Axios (instalada como módulo do Nuxt) e Swiper.js.
      Você pode consultar o código completo desse website, nesse link:
      <a href="https://github.com/Thiagoow/NuxtJs-IbookProject-ScalingVue"
        >repositório do GitHub.</a
      >
    </p>

    <img src="@/assets/img/presentation.svg" alt="Presentation iBook" />
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: Preciosa;
  src: url(@/assets/fonts/Preciosa-VVKw.ttf);
}

.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
  align-items: center;
  margin-bottom: -3rem;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
    text-align: justify;
  }
  a {
    font-weight: bold;
    color: black;
  }
  img {
    max-width: 100%;
    justify-self: center;
  }
  b {
    font-family: Preciosa;
    font-size: 46px;
    font-weight: 200;
  }
}
</style>
