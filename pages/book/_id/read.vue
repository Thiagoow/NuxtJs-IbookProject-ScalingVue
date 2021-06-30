<template>
  <BookReadTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  layout: 'iBook',

  async asyncData({ route }) {
    await books.show({ id: route.params.id as any })
  },
  // HeadTags:
  head() {
    return {
      title: books.$single.title,
      meta: [
        {
          // Id da metaTag:
          hid: 'description',
          name: 'description',
          content: books.$single.description,
        },
      ],
    }
  },
})
</script>
