<script>
import BillingStatusType from '@/__mocks__/BillingStatusType.json'

export default {
  metaInfo() {
    return {
      title: this.$t('dashboard'),
    }
  },
  data() {
    return {
      BillingStatusType,
    }
  },
}
</script>


<template>
  <main class="relative flex-1 w-full h-screen pb-4 bg-gray-100 dark:bg-gray-900">
    <BasePageHeading>
      {{ $t('billing') }}
      <template #actions>
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500"
        >
          <BaseIconSolid name="plus-circle" />
          <span>Add Customer</span>
        </button>
      </template>
    </BasePageHeading>

    <section v-if="false" class="p-4 m-4">
      <OTable striped :data="BillingStatusType">
        <OTableColumn
          sortable
          label="Component"
          field="Component"
          v-slot="props"
        >{{ props.row.Component }}</OTableColumn>
        <OTableColumn
          sortable
          label="Description"
          field="Comments"
          v-slot="props"
        >{{ props.row.Comments }}</OTableColumn>
        <OTableColumn
          sortable
          label="Status"
          field="Description"
          v-slot="props"
        >{{ props.row.Description }}</OTableColumn>
      </OTable>
    </section>
  </main>
</template>
