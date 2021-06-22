<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => { },
    },
  },
  data() {
    return {
      showNewRating: false,
      newRating: null,
    }
  },
  methods: {
    remove(id) {
      console.log(id)
      this.$emit('remove', id)
    },
  },
}
</script>

<template>
  <tr>
    <td class="px-6 py-4 align-top">{{ project.serviceArea }}</td>

    <td class="px-6 py-4 text-center align-top">{{ project.serviceRegion }}</td>

    <td class="px-6 py-4 text-center align-top">{{ project.serviceTech }}</td>

    <td class="px-6 py-4 text-center align-top">{{ project.city }}</td>

    <td class="px-6 py-4 text-center align-top">{{ project.status }}</td>

    <td class="px-6 py-4 align-top">
      <button @click="remove(project.id)" class="flex items-center space-x-2">
        <span>Delete</span>
        <BaseIcon name="trash" class="text-gray-400" />
      </button>
    </td>
  </tr>
</template>
