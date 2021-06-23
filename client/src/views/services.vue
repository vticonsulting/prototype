<script>
import serviceTypes from '@/__mocks__/service_types.json'

export default {
  data() {
    return {
      serviceTypes,
      name: '',
      selected: null,
    }
  },
  computed: {
    filteredServiceTypes() {
      return this.serviceTypes.filter(serviceType => {
        return (
          serviceType.Name
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        )
      })
    }
  }
}
</script>
<template>
  <main class="flex-1">
    <BasePageHeading>Services Territories and Areas</BasePageHeading>

    <section class="p-4">
      <OField label="Select Service Type">
        <OAutocomplete
          :data="filteredServiceTypes"
          v-model="name"
          @select="option => selected = option"
          keep-first
          open-on-focus
          placeholder="e.g. Ladder Assist"
          field="Name"
        />
      </OField>

      <!-- <pre>
        {{ selected }}
      Service Types
      Service Territories
      Service Areas in that Territory
      Service Directors
      Territory Managers
      Territory Managers Assigned to this Territory
      Service Lead
      </pre>
      <button>Edit Territory</button>
      <button>Add Service Area</button>
      <button>Edit Service Area</button>
      <h2>Add Service Area</h2>
      <pre>
      Select Region
      Service Area Name
      Time Zone
      Street
      City
      State
      Zip
      Logitude
      Longitude
      Radius in miles
      Service Technicians
      Service Technicians Assigned to the Area
      Map
      This is a catastrophe area
      This service area is active
      This service area is deleted
      <button>Save</button>
      <button>Cancel</button>
      </pre>-->
    </section>
  </main>
</template>
