<template>
  <button @click="launchConfetti">Launch</button>
</template>

<script>
import { launchConfetti } from '~/helpers/confetti'

export default {
  setup() {
    return {
      launchConfetti,
    }
  },
}
</script>
