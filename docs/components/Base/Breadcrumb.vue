<template>
  <header class="flex items-center justify-between mx-auto">
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="flex items-center space-x-4">
        <li>
          <div>
            <NuxtLink to="/">
              <BaseIconSolid name="home" class="text-gray-400 hover:text-gray-500" />
              <span class="sr-only">{{ $t('home') }}</span>
            </NuxtLink>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <BaseIconSolid name="chevron-right" class="flex-shrink-0 text-gray-400" />
            <NuxtLink
              to="/"
              class="ml-4 text-sm font-medium text-gray-400 hover:text-gray-500"
            >{{ $t('dashboard') }}</NuxtLink>
          </div>
        </li>
      </ol>
    </nav>

    <BaseLinksButton />
  </header>
</template>
