<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useProjects from '~/composables/useProjects'

export default defineComponent({
  setup(props, context) {
    const { projects, formatDate, filteredProjects } = useProjects()
    return { projects, formatDate, filteredProjects }
  },
})
</script>

<template>
  <div>
    <template v-if="$fetchState.pending">
      <PendingPlaceholder />
    </template>

    <template v-else-if="$fetchState.error">
      <p>Error while fetching projects: {{ $fetchState.error.project }}</p>
    </template>

    <template v-else>
      <ProjectTable :projects="projects" />
    </template>
  </div>
</template>
