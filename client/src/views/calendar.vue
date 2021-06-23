<template>
  <main class="relative flex-1 w-full h-screen pb-4 bg-gray-100 dark:bg-gray-900">
    <BasePageHeading>{{ $t('calendar') }}</BasePageHeading>

    <section class="m-4 space-x-4">
      <OButton variant="primary">Add Appointment</OButton>
      <OButton variant="primary">Service Region</OButton>
      <OButton variant="primary">Service Area</OButton>
      <OButton variant="primary">Service Technicians</OButton>
    </section>

    <section class="m-4">
      <BaseCalendar />
    </section>
  </main>
</template>
