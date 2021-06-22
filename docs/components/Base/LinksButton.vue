<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<template>
  <div class="relative ml-3">
    <div>
      <OButton
        @click="isOpen = !isOpen"
        class="ml-2 -mr-1"
        id="user-menu"
        aria-haspopup="true"
        inverted
        rounded
        variant="primary"
      >
        <div class="flex items-center">
          <span>{{ $t('quick_links') }}</span>
          <OIcon pack="fal" icon="chevron-down" class="ml-2" />
        </div>
      </OButton>
    </div>

    <Transition
      enter-class="scale-95 opacity-0"
      enter-active-class="transition duration-200 ease-out transform scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-class="scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in transform scale-95 opacity-0"
      leave-to-class="scale-95 opacity-0"
    >
      <div
        v-show="isOpen"
        class="absolute right-0 z-20 w-56 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg z-1 ring-1 ring-black ring-opacity-5"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <NuxtLink
          to="/profile"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >{{ $t('my_profile') }}</NuxtLink>

        <form v-if="false" method="POST" action="#">
          <button
            type="submit"
            class="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
          >{{ $t('logout') }}</button>
        </form>
      </div>
    </Transition>
  </div>
</template>
