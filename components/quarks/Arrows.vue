<template>
  <div class="buttons">
    <div class="swiper-button-unique-prev">
      <img src="@/assets/img/arrow.svg" />
    </div>
    <div class="swiper-button-unique-next">
      <img id="right-arrow" src="@/assets/img/arrow.svg" />
    </div>
  </div>
</template>

<style lang="scss">
.buttons {
  display: grid;
  grid-template-columns: repeat(2, 2.738rem);
  grid-template-rows: 2rem;
  grid-gap: 0.22rem;
  justify-content: end;
  margin-top: 0.6rem;
  .swiper-button-unique {
    &-prev,
    &-next {
      background: color(dark, darkest);
      display: grid;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    &-next #right-arrow {
      transform: rotate(180deg);
    }
  }
}
.swiper-button-disabled {
  opacity: 0.38;
}
</style>
