<template>
  <div>
    <h3>Patient Data</h3>
    <form @submit.prevent="submit">
      <div class="field">
        <div v-if="!validatedForm.name.valid" class="error">
          {{ validatedForm.name.message }}
        </div>
        <label for="name">Name</label>
        <input id="name" type="text" name="name" v-model="form.name" />
      </div>

      <div class="field">
        <div v-if="!validatedForm.weight.valid" class="error">
          {{ validatedForm.weight.message }}
        </div>
        <label for="weight">Weight</label>
        <input
          id="weight"
          type="text"
          name="weight"
          v-model.number="form.weight.value"
        />
        <select id="weight-units" v-model="form.weight.units">
          <option value="kg">kg</option>
          <option value="lb">lb</option>
        </select>
      </div>

      <div class="field">
        <OButton :disabled="!valid">Submit</OButton>
      </div>
    </form>
    <pre>
  Patient Data
  {{ form }}
  </pre
    >
    <br />

    <pre>
  Form State
  {{ validatedForm }}
  </pre
    >
  </div>
</template>

<script>
import {reactive, computed} from '@vue/composition-api'
import {patientForm, isFormValid} from '@/helpers/form'

export default {
  setup(props, {emit}) {
    const form = reactive({
      name: '',
      weight: {
        value: '',
        units: 'kg',
      },
    })

    const validatedForm = computed(() => {
      return patientForm(form)
    })

    const submit = () => {
      emit('submit', {patient: form})
    }

    const valid = computed(() => isFormValid(validatedForm.value))

    return {
      form,
      validatedForm,
      submit,
      valid,
    }
  },
}
</script>

<style>
.field > label {
  display: inline-block;
  width: 50px;
  margin: 0 0 20px 0;
}

.field > input {
  display: inline-block;
  margin: 2px;
}

.error {
  color: red;
}
</style>
