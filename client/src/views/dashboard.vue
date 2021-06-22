<script>
import { categories, products } from '@/__mocks__'

export default {
  metaInfo() {
    return {
      title: this.$t('dashboard'),
    }
  },
  data() {
    return {
      activeTab: 1,
      categories,
      products,
      users: null,
      value: 5,
      isCardModalActive: false,
      isFullwidth: false,
      isImageModalActive: false,
      modalOpen: false,
      showNotifications: false,
      showOverlay: false,
      showSidebar: false,
      events: [
        {
          title: 'event1',
          start: '2010-01-01',
        },
        {
          title: 'event2',
          start: '2010-01-05',
          end: '2010-01-07',
        },
        {
          title: 'event3',
          start: '2010-01-09T12:30:00',
          allDay: false,
        },
      ],
      isOpen: 0,
      selected: new Date(),
      showWeekNumber: false,
      locale: undefined, // Browser locale
    }
  },
  computed: {
    collapses() {
      return [
        {
          title: `${this.$t('question')} 1`,
          text: `${this.$t('answer')} 1`,
        },
        {
          title: `${this.$t('question')} 2`,
          text: `${this.$t('answer')} 2`,
        },
        {
          title: `${this.$t('question')} 3`,
          text: `${this.$t('answer')} 3`,
        },
      ]
    },
  },
}
</script>

<template>
  <main class="relative flex-1 w-full h-screen pb-4 bg-gray-100 dark:bg-gray-900">
    <section class="m-4">
      <BaseInput label="Search by Project or Claim Number" type="text" />
    </section>

    <section class="m-4">
      <StatsDisplay />
    </section>

    <section class="m-4">
      <svg
        class="w-full h-64 text-gray-200 bg-white border-2 border-gray-300 rounded shadow"
        preserveAspectRatio="none"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path vector-effect="non-scaling-stroke" stroke-width="2" d="M0 0l200 200M0 200L200 0" />
      </svg>
    </section>

    <div
      class="grid-cols-1 gap-4 mt-1 space-y-1 lg:mt-4 lg:space-y-0 lg:mx-4 lg:grid lg:grid-cols-12"
    >
      <!-- Comments -->
      <section v-if="false" class="col-span-8 p-4 bg-white dark:bg-black lg:rounded-lg">
        <header>
          <h2>{{ $t('comments') }}</h2>

          <span
            class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
          >NEW</span>
        </header>

        <article class="mt-4">
          <div class="flow-root">
            <ul class="-mb-8">
              <li>
                <div class="relative pb-8">
                  <span
                    class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <div class="relative flex items-start space-x-3">
                    <div class="relative">
                      <img
                        class="flex items-center justify-center w-10 h-10 bg-gray-400 rounded-full ring-8 ring-white dark:ring-gray-800"
                        src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=256&amp;h=256&amp;q=80"
                        alt
                      />

                      <span
                        class="absolute -bottom-0.5 -right-1 bg-white dark:bg-black rounded-tl px-0.5 py-px"
                      >
                        <!-- Heroicon name: chat-alt -->
                        <BaseIconSolid class="text-gray-400 dark:text-gray-200" name="chat-alt" />
                      </span>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div>
                        <div class="text-sm">
                          <a
                            href="#"
                            class="font-medium text-gray-900 dark:text-gray-50"
                          >Eduardo Benz</a>
                        </div>
                        <p class="mt-0.5 text-sm text-gray-500">Commented 6d ago</p>
                      </div>
                      <div class="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tincidunt nunc ipsum tempor purus vitae id.
                          Morbi in vestibulum nec varius. Et diam cursus quis
                          sed purus nam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative pb-8">
                  <span
                    class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <div class="relative flex items-start space-x-3">
                    <div>
                      <div class="relative px-1">
                        <div
                          class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full ring-8 ring-white"
                        >
                          <!-- Heroicon name: user-circle -->
                          <svg
                            class="w-5 h-5 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="min-w-0 flex-1 py-1.5">
                      <div class="text-sm text-gray-500">
                        <a href="#" class="font-medium text-gray-900 dark:text-gray-50">Hilary Mahy</a>
                        assigned
                        <a
                          href="#"
                          class="font-medium text-gray-900 dark:text-gray-50"
                        >Kristin Watson</a>
                        <span class="whitespace-nowrap">2d ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative pb-8">
                  <span
                    class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <div class="relative flex items-start space-x-3">
                    <div>
                      <div class="relative px-1">
                        <div
                          class="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full ring-8 ring-white"
                        >
                          <!-- Heroicon name: tag -->
                          <svg
                            class="w-5 h-5 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="flex-1 min-w-0 py-0">
                      <div class="text-sm leading-8 text-gray-500">
                        <span class="mr-0.5">
                          <a
                            href="#"
                            class="font-medium text-gray-900 dark:text-gray-50"
                          >Hilary Mahy</a>
                          added tags
                        </span>
                        <span class="mr-0.5">
                          <a
                            href="#"
                            class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                          >
                            <span class="absolute flex items-center justify-center flex-shrink-0">
                              <span class="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true"></span>
                            </span>
                            <span class="ml-3.5 font-medium text-gray-900 dark:text-gray-50">Bug</span>
                          </a>

                          <a
                            href="#"
                            class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                          >
                            <span class="absolute flex items-center justify-center flex-shrink-0">
                              <span
                                class="h-1.5 w-1.5 rounded-full bg-primary-500"
                                aria-hidden="true"
                              ></span>
                            </span>
                            <span
                              class="ml-3.5 font-medium text-gray-900 dark:text-gray-50"
                            >Accessibility</span>
                          </a>
                        </span>
                        <span class="whitespace-nowrap">6h ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative pb-8">
                  <div class="relative flex items-start space-x-3">
                    <div class="relative">
                      <img
                        class="flex items-center justify-center w-10 h-10 bg-gray-400 rounded-full ring-8 ring-white"
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=256&amp;h=256&amp;q=80"
                        alt
                      />

                      <span class="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
                        <!-- Heroicon name: chat-alt -->
                        <svg
                          class="w-5 h-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div>
                        <div class="text-sm">
                          <a
                            href="#"
                            class="font-medium text-gray-900 dark:text-gray-50"
                          >Jason Meyers</a>
                        </div>
                        <p class="mt-0.5 text-sm text-gray-500">Commented 2h ago</p>
                      </div>
                      <div class="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tincidunt nunc ipsum tempor purus vitae id.
                          Morbi in vestibulum nec varius. Et diam cursus quis
                          sed purus nam. Scelerisque amet elit non sit ut
                          tincidunt condimentum. Nisl ultrices eu venenatis
                          diam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </div>

    <OModal :active.sync="isImageModalActive">
      <img src="/assets/img/book_art/a-baptist-preachers-buddhist-teacher.jpg" />
    </OModal>

    <OModal :active.sync="isCardModalActive" :width="640" scroll="clip">
      <p class="font-proto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales
        leo nec convallis rutrum. Vivamus pharetra molestie arcu at dictum.
        Nulla faucibus leo eget enim egestas, in tempus justo venenatis. Duis
        dictum suscipit erat, a dapibus eros lobortis ac. Praesent tempor
        rhoncus convallis. Nullam in ipsum convallis, rutrum elit eget, dictum
        ipsum. Nunc sagittis aliquet massa. Etiam lacus sapien, eleifend non
        eros quis, finibus ornare nisl. Ut laoreet sit amet lacus non dignissim.
        Sed convallis mattis enim, sed interdum risus molestie ut. Praesent vel
        ex hendrerit, cursus lectus a, blandit felis. Nam luctus orci nec varius
        commodo.
      </p>
      <p>
        Sed vulputate metus purus, ut egestas erat congue et. Donec tellus orci,
        malesuada eget dolor sed, pellentesque bibendum nunc. In eu egestas
        diam. Integer sed congue massa. Sed a urna quam. Morbi vulputate dolor
        eleifend ligula lobortis venenatis. Aenean pellentesque risus sit amet
        faucibus molestie. Aliquam eu lorem aliquet, aliquam nulla in,
        vestibulum lorem. Donec mollis mi at sollicitudin tristique. Nullam id
        nibh pulvinar, dignissim nisl id, gravida risus. Nulla arcu elit,
        scelerisque in sollicitudin et, laoreet et metus. Aenean placerat turpis
        nec tincidunt tempus.
      </p>
    </OModal>

    <OSidebar
      :fullwidth="isFullwidth"
      fullheight
      right
      position="fixed"
      :overlay="showOverlay"
      background-class
      content-class
      mobile="fullwidth"
      :open.sync="showSidebar"
    >
      <section class="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl">
        <div class="flex flex-col flex-1 min-h-0 overflow-y-scroll">
          <header class="px-4 mt-4 sm:px-6">
            <div class="flex items-start justify-between">
              <h2
                id="slide-over-heading"
                class="text-lg font-medium text-gray-900"
              >{{ $t('notifications') }}</h2>
              <div class="flex items-center ml-3 h-7">
                <button
                  @click="showNotifications = false"
                  class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <span class="sr-only">{{ $t('close_panel') }}</span>
                  <BaseIcon is-medium name="x" />
                </button>
              </div>
            </div>
          </header>

          <article class="relative flex-1 px-4 mt-4 sm:px-6">
            <!-- Replace with your content -->
            <div class="h-full border-2 border-gray-200 border-dashed" aria-hidden="true" />
            <!-- /End replace -->
          </article>
        </div>

        <footer class="flex justify-end flex-shrink-0 px-4 py-4">
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >{{ $t('cancel') }}</button>
          <button
            type="submit"
            class="inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >{{ $t('save') }}</button>
        </footer>
      </section>
    </OSidebar>
  </main>
</template>
