<script>
import {defineComponent} from '@nuxtjs/composition-api'
import useMovies from '~/composables/useMovies'

const tabs = [
  {name: 'All Movies', href: '#', count: '52', current: true},
  {name: 'Favorite Movies', href: '#', count: '6', current: false},
]

export default defineComponent({
  props: {
    movies: {
      type: Array,
      required: true,
    },
    totalResults: {
      type: Number,
      default: 0,
    },
  },
  setup() {},
  data() {
    return {
      tabs,
      pageNumber: 0,
      filter: '',
      sortableHeaders: ['vote_count', 'vote_average', 'popularity', 'overview'],
      currentSortDir: 'asc',
      currentSortCol: 'id',
    }
  },
  methods: {
    removeMovie($event, id) {
      this.filteredMovies = [
        ...this.filteredMovies.filter(movie => movie.id !== id),
      ]
    },
    viewMovieDetails(movie) {
      this.$router.push(`/movies/${movie.id}`)
    },
    resetPage() {
      this.pageNumber = 0
    },
    nextPage() {
      this.pageNumber++
    },
    prevPage() {
      this.pageNumber--
    },
    sort(col) {
      this.pageNumber = 0

      if (this.currentSortCol === col) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      } else {
        this.currentSortCol = col
      }
      this.movies.sort(this.sortBy(col, this.currentSortDir))
    },
    sortBy(property, order) {
      this.currentSortDir = order
      return function (a, b) {
        const varA =
          typeof a[property] === 'string'
            ? a[property].toUpperCase()
            : a[property]
        const varB =
          typeof b[property] === 'string'
            ? b[property].toUpperCase()
            : b[property]

        let comparison = 0
        if (varA > varB) comparison = 1
        else if (varA < varB) comparison = -1
        return order === 'desc' ? comparison * -1 : comparison
      }
    },
  },
  computed: {
    pageCount() {
      return Math.ceil(this.filteredMovies.length / 10)
    },
    paginatedMovies() {
      const start = this.pageNumber * 10
      const end = start + 10
      return this.filteredMovies.slice(start, end)
    },
    filteredMovies() {
      return this.movies.filter(movie => {
        if (
          movie['title'].toLowerCase().indexOf(this.filter.toLowerCase()) >
            -1 ||
          movie['overview'].toLowerCase().indexOf(this.filter.toLowerCase()) >
            -1
        )
          return movie
      })
    },
  },
})
</script>


<template>
  <article>
    <section class="flex flex-col mt-4">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div
            class="
              overflow-hidden
              border-b border-gray-200
              shadow
              sm:rounded-lg
            "
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-gray-500
                      hover:text-gray-600
                      whitespace-nowrap
                    "
                  >
                    <button
                      @click="sort('title')"
                      type="button"
                      class="
                        flex
                        items-center
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        tracking-wider
                        uppercase
                        space-
                        rounded-lgx-1
                        hover:bg-gray-200
                      "
                    >
                      <span>Title</span>
                      <span
                        :class="
                          'title' === currentSortCol ? 'visible' : 'invisible'
                        "
                      >
                        <BaseIcon
                          :name="
                            currentSortDir === 'asc'
                              ? 'sort-ascending'
                              : 'sort-descending'
                          "
                        />
                      </span>
                    </button>
                  </th>

                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-gray-500
                      uppercase
                      whitespace-nowrap
                    "
                  >
                    <button
                      @click="sort('overview')"
                      class="
                        flex
                        items-center
                        w-full
                        px-3
                        py-1
                        space-x-1
                        text-xs
                        font-semibold
                        tracking-wider
                        uppercase
                        rounded-lg
                        hover:bg-gray-200
                        whitespace-nowrap
                      "
                    >
                      <span>Overview</span>
                      <span
                        :class="
                          'overview' === currentSortCol
                            ? 'visible'
                            : 'invisible'
                        "
                      >
                        <BaseIcon
                          :name="
                            currentSortDir === 'asc'
                              ? 'sort-ascending'
                              : 'sort-descending'
                          "
                        />
                      </span>
                    </button>
                  </th>

                  <th scope="col" class="px-6 py-3 text-center text-gray-500">
                    <button
                      @click="sort('vote_count')"
                      type="button"
                      class="
                        flex
                        items-center
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        tracking-wider
                        uppercase
                        space-
                        rounded-lgx-1
                        hover:bg-gray-200
                        whitespace-nowrap
                      "
                    >
                      <span>Vote Count</span>
                      <span
                        :class="
                          'vote_count' === currentSortCol
                            ? 'visible'
                            : 'invisible'
                        "
                      >
                        <BaseIcon
                          :name="
                            currentSortDir === 'asc'
                              ? 'sort-ascending'
                              : 'sort-descending'
                          "
                        />
                      </span>
                    </button>
                  </th>

                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-center text-gray-500
                      whitespace-nowrap
                    "
                  >
                    <button
                      @click="sort('vote_average')"
                      class="
                        flex
                        items-center
                        w-full
                        px-3
                        py-1
                        space-x-1
                        text-xs
                        font-semibold
                        tracking-wider
                        uppercase
                        rounded-lg
                        hover:bg-gray-200
                        whitespace-nowrap
                      "
                    >
                      <span>Vote Average</span>
                      <span
                        :class="
                          'vote_average' === currentSortCol
                            ? 'visible'
                            : 'invisible'
                        "
                      >
                        <BaseIcon
                          :name="
                            currentSortDir === 'asc'
                              ? 'sort-ascending'
                              : 'sort-descending'
                          "
                        />
                      </span>
                    </button>
                  </th>

                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-gray-500
                      uppercase
                      whitespace-nowrap
                    "
                  >
                    <button
                      @click="sort('popularity')"
                      class="
                        flex
                        items-center
                        w-full
                        px-3
                        py-1
                        space-x-1
                        text-xs
                        font-semibold
                        tracking-wider
                        uppercase
                        whitespace-nowrap
                      "
                    >
                      <span>Popularity</span>
                      <span
                        :class="
                          'popularity' === currentSortCol
                            ? 'visible'
                            : 'invisible'
                        "
                      >
                        <BaseIcon
                          :name="
                            currentSortDir === 'asc'
                              ? 'sort-ascending'
                              : 'sort-descending'
                          "
                        />
                      </span>
                    </button>
                  </th>

                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-gray-500 whitespace-nowrap"
                  ></th>
                </tr>
              </thead>

              <tbody>
                <MovieTableRow
                  :movie="movie"
                  v-for="movie in paginatedMovies"
                  :key="movie.id"
                  @remove="removeMovie"
                />

                <tr v-if="paginatedMovies.length === 0">
                  <td colspan="4">
                    <div class="p-8">
                      <strong>Add some favorites to the list</strong>
                    </div>
                  </td>
                </tr>
              </tbody>

              <tfoot v-if="false">
                <div>
                  <button
                    :disabled="pageNumber === 0"
                    :style="pageNumber === 0 ? {opacity: 0.5} : ''"
                    @click="prevPage"
                  >
                    Prev
                  </button>

                  <span class="font-bold"
                    >{{ pageNumber + 1 }} / {{ pageCount }}</span
                  >

                  <button
                    :disabled="pageNumber + 1 === pageCount"
                    :style="pageNumber + 1 === pageCount ? {opacity: 0.5} : ''"
                    @click="nextPage"
                  >
                    Next
                  </button>
                </div>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>
