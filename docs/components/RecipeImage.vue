<script>
export default {
  name: 'RecipeImage',
  props: {
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
}
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    class="flex-none w-20 h-20 rounded-lg object-cover"
  />
</template>
