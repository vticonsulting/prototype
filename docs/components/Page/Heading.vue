<script>
import {
  useMouse,
  usePreferredDark,
  useLocalStorage,
  throttleFilter,
  debounceFilter,
  useBrowserLocation,
} from '@vueuse/core'

export default {
  setup() {
    const location = useBrowserLocation()
    // tracks mouse position
    const { x, y } = useMouse({ eventFilter: debounceFilter(100) })

    // is user prefers dark theme
    const isDark = usePreferredDark()

    // persist state in localStorage
    const store = useLocalStorage('my-storage', {
      name: 'Apple',
      color: 'red',
    })

    // changes will write to localStorage with a throttled 1s
    const storage = useLocalStorage(
      'my-key',
      { foo: 'bar' },
      { eventFilter: throttleFilter(1000) },
    )

    return {
      x,
      y,
      isDark,
      store,
      storage,
      location
    }
  },
  computed: {
    hasActionsSlo$t() {
      return !!this.$slots.actions
    },
  },
}
</script>

<template>
  <SectionWrapper>
    <!-- Breadcrumbs -->
    <div class="hidden">
      <!-- Mobile -->
      <nav class="sm:hidden" aria-label="Back">
        <a href="#" class="flex items-center text-sm font-medium">
          <BaseIconSolid name="chevron-left" class="flex-shrink-0 text-gray-400" />
          <span>Back</span>
        </a>
      </nav>

      <!-- Desktop -->
      <nav class="hidden sm:flex" aria-label="Breadcrumb">
        <ol class="flex items-center space-x-4">
          <li>
            <div>
              <a href="#" class="text-sm font-medium">{{ $t('dashboard') }}</a>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <BaseIconSolid name="chevron-right" class="flex-shrink-0 text-gray-400" />
              <a href="#" class="ml-4 text-sm font-medium">{{ $t('engineering') }}</a>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <BaseIconSolid name="chevron-right" class="flex-shrink-0 text-gray-400" />
              <a href="#" aria-current="page" class="ml-4 text-sm font-medium">Back End Developer</a>
            </div>
          </li>
        </ol>
      </nav>
    </div>

    <!-- Heading -->
    <header class="w-full mx-auto max-w-7xl md:flex md:items-center md:justify-between">
      <!-- Page Title (default slot) -->
      <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          <slot />
        </h2>
      </div>

      <!-- Action Buttons -->
      <div v-if="hasActionsSlot" class="flex flex-shrink-0 mt-4 space-x-2 md:mt-0 md:ml-4">
        <slot name="actions" />
      </div>
    </header>
  </SectionWrapper>
</template>
