<template>
  <main class="flex-1">
    <BasePageHeading> {{ $t('training') }} </BasePageHeading>

    <section class="tabs">
      <div>
        <div class="sm:hidden">
          <label for="tabs" class="sr-only">Select a tab</label>
          <select
            id="tabs"
            name="tabs"
            class="block w-full border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          >
            <option selected>My Account</option>
            <option>Company</option>
            <option>Team Members</option>
            <option>Billing</option>
          </select>
        </div>
        <div class="hidden sm:block">
          <nav
            class="relative z-0 flex divide-x divide-gray-200 rounded-lg shadow"
            aria-label="Tabs"
          >
            <a
              href="#"
              aria-current="page"
              class="relative flex-1 min-w-0 px-4 py-4 overflow-hidden text-sm font-medium text-center text-gray-900 bg-white rounded-l-lg group hover:bg-gray-50 focus:z-10"
            >
              <span>My Account</span>
              <span
                aria-hidden="true"
                class="bg-primary-500 absolute inset-x-0 bottom-0 h-0.5"
              />
            </a>
            <a
              href="#"
              aria-current="false"
              class="relative flex-1 min-w-0 px-4 py-4 overflow-hidden text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700 group hover:bg-gray-50 focus:z-10"
            >
              <span>Company</span>
              <span
                aria-hidden="true"
                class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
              />
            </a>
            <a
              href="#"
              aria-current="false"
              class="relative flex-1 min-w-0 px-4 py-4 overflow-hidden text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700 group hover:bg-gray-50 focus:z-10"
            >
              <span>Team Members</span>
              <span
                aria-hidden="true"
                class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
              />
            </a>
            <a
              href="#"
              aria-current="false"
              class="relative flex-1 min-w-0 px-4 py-4 overflow-hidden text-sm font-medium text-center text-gray-500 bg-white rounded-r-lg hover:text-gray-700 group hover:bg-gray-50 focus:z-10"
            >
              <span>Billing</span>
              <span
                aria-hidden="true"
                class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
              />
            </a>
          </nav>
        </div>
      </div>
    </section>

    <section class="p-8 prose"></section>
  </main>
</template>
