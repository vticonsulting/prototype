<template>
  <div>
    <input data-test-year :value="date.year" @input="update($event, 'year')" />
    <input
      data-test-month
      :value="date.month"
      @input="update($event, 'month')"
    />
    <input data-test-day :value="date.day" @input="update($event, 'day')" />
    date is:
    <pre>
      {{ date }}
  </pre
    >
  </div>
</template>

<script>
import {computed} from '@vue/composition-api'
// import {DateTime} from 'luxon'

export default {
  props: {
    modelValue: {
      type: Object,
    },
    serialize: {
      type: Function,
    },
    deserialize: {
      type: Function,
    },
  },
  setup(props, {emit}) {
    const date = computed(() => {
      return props.deserialize(props.modelValue)
    })
    const update = ($event, field) => {
      const {year, month, day} = props.deserialize(props.modelValue)
      let newValue
      if (field === 'year') {
        newValue = {year: $event.target.value, month, day}
      }
      if (field === 'month') {
        newValue = {year, month: $event.target.value, day}
      }
      if (field === 'day') {
        newValue = {year, month, day: $event.target.value}
      }
      const asObject = props.serialize(newValue)
      if (!asObject) {
        return
      }
      emit('update:modelValue', asObject)
    }
    return {
      update,
      date,
    }
  },
}
</script>
