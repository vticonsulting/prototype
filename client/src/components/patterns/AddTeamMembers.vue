<template>
  <div class="space-y-2">
    <div class="space-y-1">
      <label
        for="add_team_members"
        class="block text-sm font-medium text-gray-700"
      >
        Add Team Members
      </label>
      <p id="add_team_members_helper" class="sr-only">
        Search by email address
      </p>
      <div class="flex">
        <div class="flex-grow">
          <input
            type="text"
            name="add_team_members"
            id="add_team_members"
            class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
            placeholder="Email address"
            aria-describedby="add_team_members_helper"
          />
        </div>
        <span class="ml-3">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
          >
            <svg
              class="w-5 h-5 mr-1 -ml-2 text-gray-400"
              x-description="Heroicon name: plus"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Add</span>
          </button>
        </span>
      </div>
    </div>

    <div class="border-b border-gray-200">
      <ul class="divide-y divide-gray-200">
        <li class="flex py-4">
          <img
            class="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            alt=""
          />
          <div class="flex flex-col ml-3">
            <span class="text-sm font-medium text-gray-900"
              >Calvin Hawkins</span
            >
            <span class="text-sm text-gray-500"
              >calvin.hawkins@example.com</span
            >
          </div>
        </li>

        <li class="flex py-4">
          <img
            class="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            alt=""
          />
          <div class="flex flex-col ml-3">
            <span class="text-sm font-medium text-gray-900"
              >Bessie Richards</span
            >
            <span class="text-sm text-gray-500"
              >bessie.richards@example.com</span
            >
          </div>
        </li>

        <li class="flex py-4">
          <img
            class="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            alt=""
          />
          <div class="flex flex-col ml-3">
            <span class="text-sm font-medium text-gray-900">Floyd Black</span>
            <span class="text-sm text-gray-500">floyd.black@example.com</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
