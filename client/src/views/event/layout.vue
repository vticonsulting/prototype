<template>
  <main class="flex-1">
    <div v-if="event">
      <BasePageHeading>{{ event.title }}</BasePageHeading>

      <nav class="flex items-center p-8 space-x-4">
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{name: 'event'}"
        >
          {{ $t('details') }}
        </RouterLink>
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{name: 'event-register'}"
        >
          {{ $t('register') }}
        </RouterLink>
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{name: 'event-edit'}"
        >
          {{ $t('edit') }}
        </RouterLink>
        <RouterLink
          class="hover:underline text-primary-500"
          :to="{name: 'event-create'}"
        >
          {{ $t('create') }}
        </RouterLink>
      </nav>  

      <section class="p-8">
        <RouterView :event="event" />
      </section>
    </div>
  </main>
</template>

<script>
import EventService from '@/services/EventService'

export default {
  props: ['id'],
  data() {
    return {
      event: null,
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data
      })
      .catch(error => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: '404-resource',
            params: {resource: 'event'},
          })
        } else {
          this.$router.push({name: 'network-error'})
        }
      })
  },
}
</script>
