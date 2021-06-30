<template>
  <h1 class="pageTitle">
    {{ text }} <b>{{ strong }}</b>
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
    strong: {
      type: String,
      // Não é obrigatório, então valor default:
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.pageTitle {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  margin-top: -1.5rem;

  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
    font-size: 1.8rem;
  }
  b {
    color: color('dark', 'darkest');
  }
}
</style>
