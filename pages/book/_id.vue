<template>
  <div>
    <BookDetailsTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  layout: 'iBook',
  async asyncData({ params }) {
    await books.show({ id: params.id as any })
    console.log(books.$single)
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
