<script>
export default {
  data() {
    return {
      projects: [],
      showFavorites: false,
    }
  },
  computed: {
    favoriteProjects() {
      return this.projects.filter((project) => project.isFavorite)
    }
  },
  async fetch() {
    const { data } = await this.$axios.get('projects')
    this.projects = data.map(project => {
      return {
        ...project,
        isFavorite: false
      }
    })
  }
}
</script>

<template>
  <section class="w-full p-8 mx-auto bg-white shadow-lg rounded-m">
    <p v-if="$fetchState.pending">Fetching the the rated projects...</p>

    <div v-else-if="$fetchState.error" class="space-y-4">
      <p>I'm having an issue fetching the projects</p>
    </div>

    <div v-else>
      <header class="pb-5 border-b border-gray-200">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Projects List</h3>
      </header>

      <section>
        <div class="sm:hidden">
          <label for="tabs" class="sr-only">Select a tab</label>
          <select
            id="tabs"
            name="tabs"
            class="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          >
            <option selected="projects">All Projects</option>
            <option selected="projects-favorites">Favorite Projects</option>
          </select>
        </div>

        <div class="hidden sm:block">
          <div class="border-b border-gray-200">
            <div class="flex items-center space-x-4">
              <nav class="flex -mb-px space-x-8" aria-label="Tabs">
                <button
                  @click="showFavorites = false"
                  :class="[showFavorites === false ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200']"
                  class="flex px-1 py-4 text-sm font-medium border-b-2 whitespace-nowrap"
                >All Projects</button>
                <button
                  @click="showFavorites = true"
                  :class="[showFavorites === true ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200']"
                  class="flex px-1 py-4 text-sm font-medium border-b-2 whitespace-nowrap"
                >Favorite Projects</button>
              </nav>

              <!-- <input
                @keydown="resetPage"
                type="search"
                class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Filter by title or overview text..."
                v-model="filter"
              />-->
            </div>
          </div>
        </div>
      </section>

      <ProjectTable v-if="showFavorites" :projects="favoriteProjects" />
      <ProjectTable v-else :projects="projects" />
    </div>
  </section>
</template>
