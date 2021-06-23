<template>
  <main class="relative flex-1 w-full h-screen pb-4 bg-gray-100 dark:bg-gray-900">
    <BasePageHeading>{{ $t('customers') }}</BasePageHeading>

    <section class="p-4">
      <OTable :data="customers" :columns="columns" />
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
          label: 'Customer'
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
