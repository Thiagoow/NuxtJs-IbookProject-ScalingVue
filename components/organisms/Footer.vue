<template>
  <footer class="footer">
    <Container>
      <Logo />
      <p>
        <a href="https://github.com/Thiagoow" target="_blank"
          >© Thiago Silva Lopes</a
        >
        {{ anoAtual }}
      </p>
    </Container>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    anoAtual() {
      return new Date().getFullYear()
    },
  },
})
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 5.5rem;
  background: color(dark, darkest);
  .container {
    display: grid;
    height: 100%;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    vertical-align: middle;
    p {
      color: color('light', 'darkest');
      text-align: right;
      font-size: 16px;
      margin-left: 30px;
      a {
        color: color('dark', 'base');
      }
    }
  }
}
</style>
