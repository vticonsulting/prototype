import {useFetch, useContext, ref, computed} from '@nuxtjs/composition-api'

export default function useProjects() {
  const {$axios, route} = useContext()

  const projects = ref([])
  const checked = ref([])
  const isCheckAll = ref(false)

  useFetch(async () => {
    projects.value = await $axios.$get('projects')
  })

  const filteredProjects = computed(() => {
    if (route.value.params.tag) {
      return projects.value.filter(project =>
        project.tags.includes(route.value.params.tag),
      )
    }
    return projects.value
  })

  function removeProject(index) {
    projects.value.splice(index, 1)
  }

  function formatDate(date) {
    const options = {year: 'numeric', month: 'short', day: 'numeric'}
    return new Date(date).toLocaleDateString('en', options)
  }

  return {
    projects,
    checked,
    formatDate,
    removeProject,
    filteredProjects,
  }
}
