<template>
  <section class="p-8 bg-primary-700 text-gray-50 dark:bg-black dark:text-gray-50">
    <!-- Breaacrumbs -->
    <div v-if="false">
      <!-- Mobile -->
      <nav class="sm:hidden" aria-label="Back">
        <a
          href="#"
          class="flex items-center text-sm font-medium text-primary-200 hover:text-primary-100"
        >
          <!-- Heroicon name: chevron-left -->
          <svg
            class="flex-shrink-0 w-5 h-5 mr-1 -ml-1 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          {{ $t('back') }}
        </a>
      </nav>

      <!-- Desktop -->
      <nav class="hidden sm:flex" aria-label="Breadcrumb">
        <ol class="flex items-center space-x-4">
          <li>
            <div>
              <RouterLink
                :to="{ name: 'dashboard' }"
                class="text-sm font-medium text-primary-100 hover:text-primary-50"
              >{{ $t('dashboard') }}</RouterLink>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <BaseIconSolid name="chevron-right" class="flex-shrink-0 w-5 h-5 text-gray-400" />
              <RouterLink
                :to="{ name: 'directory' }"
                class="ml-4 text-sm font-medium text-primary-100 hover:text-primary-50"
              >{{ $t('directory') }}</RouterLink>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <BaseIconSolid name="chevron-right" class="flex-shrink-0 w-5 h-5 text-gray-400" />
              <RouterLink
                :to="{ name: 'person' }"
                aria-current="page"
                class="ml-4 text-sm font-medium text-primary-100 hover:text-primary-50"
              >{{ $t('profile') }}</RouterLink>
            </div>
          </li>
        </ol>
      </nav>
    </div>

    <!-- Heading -->
    <header class="md:flex md:items-center md:justify-between">
      <!-- Page Title (default slot) -->
      <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-white dark:text-black sm:text-3xl sm:truncate">
          <span
            class="text-transparent bg-gradient-to-r bg-clip-text from-white dark:from-primary-400 to-white dark:to-primary-50"
          >
            <slot />
          </span>
        </h2>
      </div>

      <div v-if="hasActionsSlot" class="flex flex-shrink-0 mt-4 space-x-2 md:mt-0 md:ml-4">
        <slot name="actions" />
      </div>
    </header>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import {
  usePreferredDark,
  useLocalStorage,
  useBrowserLocation,
} from '@vueuse/core'

export default defineComponent({
  setup() {
    const location = useBrowserLocation()

    // is user prefers dark theme
    const isDark = usePreferredDark()

    // persist state in localStorage
    const store = useLocalStorage('my-storage', {
      name: 'Apple',
      color: 'red',
    })

    // changes will write to localStorage with a throttled 1s
    const storage = useLocalStorage('my-key', { foo: 'bar' })

    return {
      isDark,
      store,
      storage,
      location,
    }
  },
  computed: {
    hasActionsSlot() {
      return !!this.$slots.actions
    },
  },
})
</script>
