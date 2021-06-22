<template>
  <PageWrapper>
    <PageHeader>{{ this.slug }}</PageHeader>

    <!-- <h2>{{ page.subtitle }}</h2> -->
    <!-- <h1>{{ page.title }}</h1> -->
    <NuxtContent class="mt-4" :document="page" />
    <SectionWrapper class="prose">
      <BaseLogo name="hancock" class="w-8 h-8" />

      <OTable :data="rows">
        <OTableColumn field="name" sortable label="Name" v-slot="props">{{ props.row.name }}</OTableColumn>
      </OTable>
    </SectionWrapper>
  </PageWrapper>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content(params.slug || 'index')
      .fetch()
      .catch(err => {
        console.log(err)
        // eslint-disable-next-line no-undef
        error({ statusCode: 404, message: 'Page not found' })
      })

    return { page }
  },
}
</script>

<script>
export default {
  async asyncData({ $content, params }) {
    const slug = params.slug
    const rows = [{ id: 1, name: 'Victor' }, { id: 2, name: 'Reginald' }]

    const page = await $content(params.slug || 'index')
      .fetch()
      .catch(err => {
        console.log(err)
        // eslint-disable-next-line no-undef
        error({statusCode: 404, message: 'Page not found'})
      })

    return { slug, rows, page}
  },
}
</script>
