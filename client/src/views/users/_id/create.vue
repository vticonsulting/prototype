<template>
  <div>
    <main class="flex-1">
      <BasePageHeading>{{ user }}</BasePageHeading>
      <h1>Create</h1>
    </main>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  head() {
    return {
      title: 'Create an Event',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'You can create a new event in your neighborhood',
        },
      ],
    }
  },
})
</script>
