<template>
  <div class="wrapper">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px;
  grid-auto-flow: column;
  grid-gap: 0.5rem;

  .box {
    background-color: color('dark', 'darkest');
  }

  /*Deixando esse template responsivo com
  o código breakpoints.scss lá em bosons:*/
  @include screen('small') {
    //Em uma tela pequena = 1coluna:
    grid-template-columns: 1fr;
  }
  @include screen('medium') {
    //Em uma tela média = 2colunas:
    grid-template-columns: 1fr 1fr;
  }
  @include screen('large', 'infinity') {
    //Em uma tela grande = 3colunas:
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
