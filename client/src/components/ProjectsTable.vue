<template>
  <section>
    <!-- Projects list (only on smallest breakpoint) -->
    <div class="mt-10 sm:hidden">
      <div class="px-4 sm:px-6">
        <h2
          class="text-xs font-medium tracking-wide text-gray-500 uppercase"
        >Projects (Recent Activity)</h2>
      </div>
      <ul class="mt-3 border-t border-gray-200 divide-y divide-gray-100">
        <li v-for="project in projects" :key="project.id">
          <a
            href
            class="flex items-center justify-between px-4 py-4 group hover:bg-gray-50 sm:px-6"
          >
            <span class="flex items-center space-x-3 truncate">
              <span
                :class="[project.bgColorClass, 'w-2.5 h-2.5 flex-shrink-0 rounded-full']"
                aria-hidden="true"
              />
              <span class="text-sm font-medium leading-6 truncate">
                {{ project.title }}
                {{ ' ' }}
                <span
                  class="font-normal text-gray-500 truncate"
                >in {{ project.team }}</span>
              </span>
            </span>
            <BaseIconSolid
              name="chevron-right"
              class="w-5 h-5 ml-4 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </a>
        </li>
      </ul>
    </div>

    <!-- Projects table (small breakpoint and up) -->
    <div class="hidden sm:block">
      <div class="inline-block min-w-full align-middle border-b border-gray-200">
        <v-table
          selectionMode="multiple"
          selectedClass="table-info"
          @selectionChanged="selectedRows = $event"
          :currentPage.sync="currentPage"
          :pageSize="20"
          @totalPagesChanged="totalPages = $event"
          :data="projects"
          class="min-w-full table-fixed"
        >
          <thead slot="head">
            <tr class="border-t border-gray-200">
              <th
                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 select-none w-28 bg-gray-50 whitespace-nowrap"
              >
                <span>Status</span>
              </th>
              <th
                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 select-none w-28 bg-gray-50 whitespace-nowrap"
              >Project #</th>
              <th
                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 select-none w-28 bg-gray-50 whitespace-nowrap"
              >Claim #</th>
              <v-th
                sortKey="InsuredLastName"
                class="w-full px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 cursor-pointer select-none bg-gray-50 whitespace-nowrap"
              >
                <span>Insured</span>
              </v-th>
              <v-th
                sortKey="ServiceArea"
                class="hidden w-32 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 cursor-pointer select-none whitespace-nowrap md:table-cell bg-gray-50"
              >
                <span>Service Area</span>
              </v-th>
              <th
                class="hidden px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 select-none w-28 md:table-cell bg-gray-50 whitespace-nowrap"
              >Service Tech</th>
              <th
                class="hidden px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 select-none w-28 lg:table-cell bg-gray-50 whitespace-nowrap"
              >Adjuster</th>

              <th
                class="text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 select-none w-28 bg-gray-50"
              />
            </tr>
          </thead>
          <tbody slot="body" slot-scope="{displayData}" class="bg-white divide-y divide-gray-100">
            <tr v-for="project in displayData" :key="project.id" :row="project">
              <td class="px-6 py-1 text-xs text-gray-900 whitespace-nowrap">{{ project.Status }}</td>
              <td class="px-6 py-1 text-xs text-gray-900 whitespace-nowrap">
                <a
                  class="border-b border-dotted text-primary-500 hover:border-solid hover:text-primary-600 hover:border-primary-600"
                >{{ project.ProjectNumber }}</a>
              </td>
              <td class="px-6 py-1 text-xs text-gray-900 whitespace-nowrap">
                <a
                  class="border-b border-dotted text-primary-500 hover:border-solid hover:text-primary-600 hover:border-primary-600"
                >{{ project.ClaimNumber }}</a>
              </td>
              <td class="py-1 pl-10 pr-6 text-xs text-gray-900 whitespace-nowrap">
                <a
                  class="border-b border-dotted text-primary-500 hover:border-solid hover:text-primary-600 hover:border-primary-600"
                >{{ project.InsuredLastName }}</a>
              </td>
              <td
                class="hidden py-1 pl-10 pr-6 text-xs text-gray-900 md:table-cell whitespace-nowrap"
              >
                <a
                  class="border-b border-dotted text-primary-500 hover:border-solid hover:text-primary-600 hover:border-primary-600"
                >{{ project.ServiceArea }}</a>
              </td>
              <td
                class="hidden px-6 py-1 text-xs text-center text-gray-900 md:table-cell whitespace-nowrap"
              >
                <a
                  class="border-b border-dotted text-primary-500 hover:border-solid hover:text-primary-600 hover:border-primary-600"
                >{{ project.ServiceTech }}</a>
              </td>
              <td class="hidden px-6 py-1 text-xs text-gray-900 lg:table-cell whitespace-nowrap">
                <a
                  class="border-b border-dotted text-primary-500 hover:border-solid hover:text-primary-600 hover:border-primary-600"
                >{{ project.InsuranceAdjuster }}</a>
              </td>
            </tr>
          </tbody>
        </v-table>

        <!-- <smart-pagination :currentPage.sync="currentPage" :totalPages="totalPages" /> -->
      </div>
    </div>
  </section>
</template>

<script>
import projects from '@/__mocks__/projects'

export default {
  data() {
    return {
      projects,
      selectedRows: [],
      filters: {
        name: { value: '', keys: ['Name'] }
      },
      currentPage: 1,
      totalPages: 0
    }
  },

}
</script>

<style>
th svg {
  float: left;
}
</style>
