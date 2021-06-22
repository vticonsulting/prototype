<script>
import { defineComponent } from '@nuxtjs/composition-api'

const tabs = [
  { name: 'All Projects', href: '#', count: '52', current: true },
  { name: 'Favorite Projects', href: '#', count: '6', current: false },
]

export default defineComponent({
  props: {
    projects: {
      type: Array,
      required: true,
    },
    totalResults: {
      type: Number,
      default: 0,
    },
  },
  setup() { },
  data() {
    return {
      tabs,
      pageNumber: 0,
      filter: '',
      sortableHeaders: ['serviceArea', 'serviceRegion', 'city', 'status'],
      currentSortDir: 'asc',
      currentSortCol: 'id',
    }
  },
  methods: {
    removeProject($event, id) {
      this.filteredProjects = [
        ...this.filteredProjects.filter(project => project.id !== id),
      ]
    },
    viewProjectDetails(project) {
      this.$router.push(`/projects/${project.id}`)
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
      this.projects.sort(this.sortBy(col, this.currentSortDir))
    },
    sortBy(property, order) {
      this.currentSortDir = order
      return function(a, b) {
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
      return Math.ceil(this.filteredProjects.length / 10)
    },
    paginatedProjects() {
      const start = this.pageNumber * 10
      const end = start + 10
      return this.filteredProjects.slice(start, end)
    },
    filteredProjects() {
      return this.projects.filter(project => {
        if (
          project['status'].toLowerCase().indexOf(this.filter.toLowerCase()) >
          -1 ||
          project['city'].toLowerCase().indexOf(this.filter.toLowerCase()) >
          -1
        )
          return project
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
          <div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-gray-500 hover:text-gray-600 whitespace-nowrap"
                  >
                    <button
                      @click="sort('serviceArea')"
                      type="button"
                      class="flex items-center px-3 py-1 text-xs font-semibold tracking-wider uppercase space- rounded-lgx-1 hover:bg-gray-200"
                    >
                      <span>Service Area</span>
                      <span
                        :class="
                          'serviceArea' === currentSortCol ? 'visible' : 'invisible'
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
                    class="px-6 py-3 text-left text-gray-500 uppercase whitespace-nowrap"
                  >
                    <button
                      @click="sort('serviceRegion')"
                      class="flex items-center w-full px-3 py-1 space-x-1 text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-gray-200 whitespace-nowrap"
                    >
                      <span>Service Region</span>
                      <span
                        :class="
                          'serviceRegion' === currentSortCol
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
                      @click="sort('serviceTech')"
                      type="button"
                      class="flex items-center px-3 py-1 text-xs font-semibold tracking-wider uppercase space- rounded-lgx-1 hover:bg-gray-200 whitespace-nowrap"
                    >
                      <span>Service Tech</span>
                      <span
                        :class="
                          'serviceTech' === currentSortCol
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

                  <th scope="col" class="px-6 py-3 text-center text-gray-500 whitespace-nowrap">
                    <button
                      @click="sort('city')"
                      class="flex items-center w-full px-3 py-1 space-x-1 text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-gray-200 whitespace-nowrap"
                    >
                      <span>City</span>
                      <span
                        :class="
                          'city' === currentSortCol
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
                    class="px-6 py-3 text-left text-gray-500 uppercase whitespace-nowrap"
                  >
                    <button
                      @click="sort('status')"
                      class="flex items-center w-full px-3 py-1 space-x-1 text-xs font-semibold tracking-wider uppercase whitespace-nowrap"
                    >
                      <span>Status</span>
                      <span
                        :class="
                          'status' === currentSortCol
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

                  <th scope="col" class="px-6 py-3 text-left text-gray-500 whitespace-nowrap"></th>
                </tr>
              </thead>

              <tbody>
                <ProjectTableRow
                  :project="project"
                  v-for="project in paginatedProjects"
                  :key="project.id"
                  @remove="removeProject"
                />

                <tr v-if="paginatedProjects.length === 0">
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
                    :style="pageNumber === 0 ? { opacity: 0.5 } : ''"
                    @click="prevPage"
                  >Prev</button>

                  <span class="font-bold">{{ pageNumber + 1 }} / {{ pageCount }}</span>

                  <button
                    :disabled="pageNumber + 1 === pageCount"
                    :style="pageNumber + 1 === pageCount ? { opacity: 0.5 } : ''"
                    @click="nextPage"
                  >Next</button>
                </div>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>
