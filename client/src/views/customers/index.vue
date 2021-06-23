<template>
  <main class="relative flex-1 w-full h-screen pb-4 bg-gray-100 dark:bg-gray-900">
    <BasePageHeading>
      {{ $t('customers') }}
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

    <section class="p-4">
      <OTable striped :data="customers" :columns="columns" />
    </section>
  </main>
</template>

<script>
import customers from '@/__mocks__/customers.json'

export default {
  data() {
    return {
      customers,
      columns: [
        // {
        //   field: 'id',
        //   label: 'ID',
        //   width: '40',
        //   numeric: true
        // },
        {
          field: 'fullName',
          label: 'Customer',
          sortable: true
        },
        {
          field: 'shortName',
          label: 'Short Name'
        },
        {
          field: 'streetAddress1',
          label: 'Street Address'
        },
        {
          field: 'city',
          label: 'City'
        },
        {
          field: 'stateId',
          label: 'State'
        },
        {
          field: 'postalCode',
          label: 'Zip'
        },
        {
          field: 'billingContactId',
          label: 'Contact'
        },
        {
          field: 'createdBy',
          label: 'Created By'
        },
        {
          field: 'isActive',
          label: 'Is Active?'
        }
      ]
    }
  }
}
</script>
