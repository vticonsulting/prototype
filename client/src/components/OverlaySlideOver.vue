<script lang="ts">
import {defineComponent, ref} from '@vue/composition-api'

export default defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const panelTitle = ref('Panel Title')

    return {
      panelTitle,
    }
  },
})
</script>

<template>
  <div class="fixed inset-0 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <!--
      Background overlay, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div
        class="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"
        aria-hidden="true"
      />

      <section
        class="absolute inset-y-0 right-0 flex max-w-full pl-10"
        aria-labelledby="slide-over-heading"
      >
        <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
        <div class="relative w-screen max-w-md">
          <!--
          Close button, show/hide based on slide-over state.

          Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0"
        -->
          <div
            class="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4"
          >
            <button
              class="text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span class="sr-only">Close panel</span>
              <!-- Heroicon name: x -->
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl"
          >
            <div class="px-4 sm:px-6">
              <h2
                id="slide-over-heading"
                class="text-lg font-medium text-gray-900"
              >
                {{ panelTitle }}
              </h2>
            </div>
            <div class="relative flex-1 px-4 mt-6 sm:px-6">
              <!-- Replace with your content -->
              <div class="absolute inset-0 px-4 sm:px-6">
                <div
                  class="h-full border-2 border-gray-200 border-dashed"
                  aria-hidden="true"
                ></div>
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
