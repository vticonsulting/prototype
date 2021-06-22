import {useFetch, useContext, ref, computed} from '@nuxtjs/composition-api'

export default function useMovies() {
  const {$axios, route} = useContext()

  const movies = ref([])
  const checked = ref([])
  const isCheckAll = ref(false)

  useFetch(async () => {
    movies.value = await $axios.$get('movies')
  })

  const filteredMovies = computed(() => {
    if (route.value.params.tag) {
      return movies.value.filter(movie =>
        movie.tags.includes(route.value.params.tag),
      )
    }
    return movies.value
  })

  function removeMovie(index) {
    movies.value.splice(index, 1)
  }

  function formatDate(date) {
    const options = {year: 'numeric', month: 'short', day: 'numeric'}
    return new Date(date).toLocaleDateString('en', options)
  }

  return {
    movies,
    checked,
    formatDate,
    removeMovie,
    filteredMovies,
  }
}
