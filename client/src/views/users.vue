<script>
import { watchEffect } from '@vue/composition-api'
import UserService from '@/services/UserService'

export default {
  name: 'PersonList',
  props: {
    page: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      users: [],
      totalUsers: 0,
      perPage: 250,
      currentPage: 1,
      checkedRows: [],
      selected: null,
    }
  },
  computed: {
    hasNextPage() {
      const totalPages = Math.ceil(this.totalUsers / 2)

      return this.page < totalPages
    },
  },
  created() {
    watchEffect(() => {
      this.users = []
      UserService.getUsers(this.perPage, this.page)
        .then(response => {
          this.users = response.data
          this.totalUsers = response.headers['x-total-count']
        })
        .catch(() => {
          this.$router.push({ name: 'network-error' })
        })
    })
  },
}
</script>
<template>
  <PageWrapper>
    <BasePageHeader>{{ $t('users') }}</BasePageHeader>

    <SectionWrapper class="p-8 users">
      <div class>
        <!-- <PersonCard v-for="person in users" :key="person.id" :person="person" /> -->

        <div class="flex items-center justify-between">
          <OButton variant="danger" :disabled="!selected" @click="selected = null">
            <span>Clear selected</span>
          </OButton>

          <OSelect v-model="perPage">
            <option value="5">5 per page</option>
            <option value="10">10 per page</option>
            <option value="15">15 per page</option>
            <option value="20">20 per page</option>
            <option value="250">250 per page</option>
          </OSelect>
        </div>

        <pre>{{ selected }}</pre>
        <OTable
          :checked-rows.sync="checkedRows"
          :per-page="perPage"
          :current-page="currentPage"
          :selected="selected"
          :checkable="true"
          :header-checkable="false"
          :show-header="true"
          hoverable
          paginated
          striped
          narrowed
          :data="users"
        >
          <OTableColumn
            v-slot="props"
            searchable
            sortable
            field="id"
            label="ID"
            numeric
            width="100"
          >{{ props.row.id }}</OTableColumn>
          <OTableColumn
            v-slot="props"
            field="firstName"
            searchable
            sortable
            label="First Name"
          >{{ props.row.firstName }}</OTableColumn>
          <OTableColumn
            v-slot="props"
            field="lastName"
            searchable
            sortable
            label="Last Name"
          >{{ props.row.lastName }}</OTableColumn>
          <OTableColumn
            v-slot="props"
            field="homeChurch"
            searchable
            sortable
            label="Home Church"
          >{{ props.row.homeChurch }}</OTableColumn>
          <OTableColumn
            v-slot="props"
            field="email"
            searchable
            sortable
            label="Email"
          >{{ props.row.email }}</OTableColumn>
        </OTable>
      </div>
    </SectionWrapper>
  </PageWrapper>
</template>
