<template>
  <main class="relative flex-1 w-full h-screen pb-4 bg-gray-100 dark:bg-gray-900">
    <BasePageHeading>{{ $t('reports') }}</BasePageHeading>

    <section class="p-4">
      <BaseDatepicker v-model="date" format="D MMM YYYY" :options="{ firstDay: 1 }" />
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      date: "2018-04-12"
    }
  }
}
</script>
