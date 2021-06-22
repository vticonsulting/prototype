<template>
  <main class="flex-1">
    <BasePageHeading>{{ $t('projects') }}</BasePageHeading>

    <article class="p-4 lg:p-8">
      <ProjectsList class="mt-4 lg:hidden" />
      <ProjectsTable class="hidden mt-4 lg:block" />
    </article>
  </main>
</template>
