<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data() {
    return {
      messages: [],
    }
  },
  async fetch() {
    const { data } = await this.$axios.get('messages')
    this.messages = data.map(message => {
      return {
        ...message,
        isRead: false,
      }
    })
  },
})
</script>
<template>
  <div>
    <FileUploadForm />
  </div>
</template>
