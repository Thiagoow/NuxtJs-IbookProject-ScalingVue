<template>
  <div class="presentation">
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem
      tempora iusto laboriosam est eligendi quidem, corporis velit mollitia
      fugit blanditiis animi inventore repellat enim nemo natus obcaecati eum
      quas veniam.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Exercitationem tempora iusto laboriosam est eligendi quidem, corporis
      velit mollitia fugit blanditiis animi inventore repellat enim nemo natus
      obcaecati eum quas veniam.
    </p>

    <img src="@/assets/img/presentation.svg" alt="Presentation iBook" />
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  margin-bottom: -3rem;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>
