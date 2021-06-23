<script>
import billingStatusType from '@/__mocks__/BillingStatusType.json'

export default {
  metaInfo() {
    return {
      title: this.$t('dashboard'),
    }
  },
  data() {
    return {
      billingStatusType,
    }
  },
}
</script>


<template>
  <main class="relative flex-1 w-full h-screen pb-4 bg-gray-100 dark:bg-gray-900">
    <section class="p-4 m-4 bg-white rounded shadow">
      <table>
        <thead>
          <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Component</th>
            <th class="text-left">Description</th>
            <th class="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="status.Id" v-for="status in billingStatusType">
            <td>{{ status.Id }}</td>
            <td>{{ status.Component }}</td>
            <td>{{ status.Comments }}</td>
            <td>{{ status.Description }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>
