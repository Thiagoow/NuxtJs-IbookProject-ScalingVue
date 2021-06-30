<template>
  <div class="categoryContainer">{{ text }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
.categoryContainer {
  display: inline-block;
  background: #292929;
  font-weight: 700;
  font-size: 13px;
  color: #f7f7f7;
  padding: 6px 19px;
  border-radius: 20px;
}
</style>
