<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => {},
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
    <td class="px-6 py-4 align-top w-80">
      <div class="flex items-start space-x-3">
        <div class="relative flex-shrink-0 ml-2">
          <img
            class="flex-shrink-0 h-24"
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          />
          <button
            class="absolute top-0 left-0 -ml-6"
            @click="movie.isFavorite = !movie.isFavorite"
          >
            <BaseIcon
              name="heart"
              :class="movie.isFavorite ? 'text-red-500' : 'text-gray-500'"
            />
          </button>
        </div>
        <span>{{ movie.title }}</span>
      </div>
    </td>

    <td class="px-6 py-4 align-top">{{ movie.overview }}</td>

    <td class="px-6 py-4 text-center align-top">{{ movie.vote_count }}</td>

    <td class="px-6 py-4 text-center align-top">
      <input
        v-if="showNewRating"
        @blur="showNewRating = false"
        type="number"
        step="0.1"
        min="0"
        max="10"
        class="text-center"
        placeholder="Enter new rating"
        v-model="newRating"
      />
      <button
        class="px-4 py-2 rounded-md hover:bg-gray-100"
        v-else
        @click="showNewRating = !showNewRating"
      >
        {{ movie.vote_average }}
      </button>
    </td>

    <td class="px-6 py-4 text-center align-top">{{ movie.popularity }}</td>

    <td class="px-6 py-4 align-top">
      <button @click="remove(movie.id)" class="flex items-center space-x-2">
        <span>Delete</span>
        <BaseIcon name="trash" class="text-gray-400" />
      </button>
    </td>
  </tr>
</template>
