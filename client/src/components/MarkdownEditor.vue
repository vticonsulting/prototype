<template>
  <v-row class="editor">
    <v-col cols="12" sm="6">
      <slot></slot>
    </v-col>
    <v-col cols="12" sm="6">
      <MarkdownDisplay :markdown="markdown" />
    </v-col>
    <v-col cols="12" class="footer">
      <slot name="footer">Please input data</slot>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    markdown: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #bbb;
  padding: 5px;
  border-radius: 3px;
}

.editor {
  border: 1px solid black;
  border-radius: 4px;
  margin: 10px 0;
}
</style>
