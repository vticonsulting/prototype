<template>
  <form
    id="payment-form"
    class="payment-form"
    :novalidate="!isIE11"
    role="form"
    @keydown.enter.prevent
    @submit.prevent="submit"
  >
    <fieldset class="mb-16 donation-options">
      <h2>{{ $store.state.lang.donation_title }}</h2>

      <div
        :class="[
          'preselect-options',
          preSelectedOptions.length > 4 ? 'max-w-xs' : 'max-w-sm',
        ]"
      >
        <button
          v-for="option in preSelectedOptions"
          :key="option.amount"
          type="button"
          :value="option.amount"
          :class="['amount-button', {'is-selected': option.isSelected}]"
          @click.prevent="preSelect(option)"
        >
          ${{ option.amount }}
        </button>
      </div>

      <div class="custom-donation">
        <label for="custom-donation-input">
          {{ $store.state.lang.custom_donation_title }}
        </label>

        <div class="relative w-32 mx-auto rounded-md shadow-sm">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <span class="text-gray-500 sm:text-2xl sm:leading-5"> $ </span>
          </div>

          <input
            id="custom-donation-input"
            v-model.trim="$v.form.customDonation.$model"
            maxlength="7"
            class="text-right form-input sm:text-2xl"
            :class="[
              'form-input placeholder-gray-400',
              {
                'is-invalid':
                  focused === false &&
                  !$v.form.customDonation.minimumValue &&
                  $v.form.customDonation.$dirty,
              },
            ]"
            @keypress="isNumber"
            @focus="focused = true && $event.target.select()"
            @blur="focused = false"
            @input="moneyChanged"
          />
        </div>
        <p
          v-if="
            focused === false &&
            !$v.form.customDonation.minimumValue &&
            $v.form.customDonation.$dirty
          "
          class="p-2 text-xs text-sm text-center text-red-500 help is-danger"
        >
          {{ $store.state.lang.minimum_amount }} $5
        </p>
      </div>
    </fieldset>

    <fieldset class="mb-4 space-y-4 sponsor-information">
      <h2>{{ $store.state.lang.sponsor_information_title }}</h2>

      <div class="first-name">
        <div class="relative rounded-md shadow-sm">
          <label for="first-name-input" class="sr-only">
            {{ $store.state.lang.first_name_label }}
          </label>

          <input
            id="first-name-input"
            v-model.trim="$v.form.payer.first_name.$model"
            :class="[
              'form-input placeholder-gray-400',
              {
                'is-invalid':
                  !$v.form.payer.first_name.required &&
                  $v.form.payer.first_name.$dirty,
              },
            ]"
            :placeholder="$store.state.lang.first_name_placeholder"
          />
        </div>

        <p
          v-if="
            !$v.form.payer.first_name.required &&
            $v.form.payer.first_name.$dirty
          "
          class="has-error"
        >
          {{ $store.state.lang.first_name_label }}
          {{ $store.state.lang.is_required }}
        </p>
      </div>

      <div class="last-name">
        <div class="relative rounded-md shadow-sm">
          <label for="last-name-input" class="sr-only">
            {{ $store.state.lang.last_name_label }}
          </label>

          <input
            id="last-name-input"
            v-model.trim="$v.form.payer.last_name.$model"
            :class="[
              'form-input placeholder-gray-400',
              {
                'is-invalid':
                  !$v.form.payer.last_name.required &&
                  $v.form.payer.last_name.$dirty,
              },
            ]"
            :placeholder="$store.state.lang.last_name_placeholder"
          />
        </div>

        <p
          v-if="
            !$v.form.payer.last_name.required && $v.form.payer.last_name.$dirty
          "
          class="has-error"
        >
          {{ $store.state.lang.last_name_label }}
          {{ $store.state.lang.is_required }}
        </p>
      </div>

      <div class="email">
        <div class="relative rounded-md shadow-sm">
          <label for="email-input" class="sr-only">
            {{ $store.state.lang.email_label }}
          </label>

          <input
            id="email-input"
            v-model.trim="$v.form.payer.email.$model"
            :class="[
              'form-input placeholder-gray-400',
              {
                'is-invalid':
                  (!$v.form.payer.email.required || !$v.form.payer.email) &&
                  $v.form.payer.email.$dirty,
              },
            ]"
            :placeholder="$store.state.lang.email_placeholder"
          />
        </div>

        <p
          v-if="!$v.form.payer.email.required && $v.form.payer.email.$dirty"
          class="has-error"
        >
          {{ $store.state.lang.email_label }}
          {{ $store.state.lang.is_required }}
        </p>

        <p
          v-if="!$v.form.payer.email && $v.form.payer.email.$dirty"
          class="pl-2 text-xs text-red-500 help is-danger"
        >
          {{ $store.state.lang.email_label }} {{ $store.state.lang.is_invalid }}
        </p>
      </div>

      <div v-if="onBehalfOfIsActive" class="on-behalf-of">
        <div class="relative rounded-md shadow-sm">
          <label for="on-behalf-of-input" class="sr-only">
            {{ $store.state.lang.behalf_of_label }}
          </label>

          <input
            id="on-behalf-of-input"
            v-model.trim="$v.form.onBehalfOf.$model"
            :class="[
              'form-input placeholder-gray-400',
              {
                'is-invalid':
                  !$v.form.onBehalfOf.required && $v.form.onBehalfOf.$dirty,
              },
            ]"
            :placeholder="$store.state.lang.behalf_of_placeholder"
          />
        </div>

        <p
          v-if="!$v.form.onBehalfOf.required && $v.form.onBehalfOf.$dirty"
          class="has-error"
        >
          {{ $store.state.lang.behalf_of_label }}
          {{ $store.state.lang.is_required }}
        </p>
      </div>

      <div class="relationship">
        <label for="relationship-select" class="sr-only">
          {{ $store.state.lang.email_label }}
        </label>

        <div class="rounded-md shadow-sm">
          <select
            id="relationship-select"
            v-model="$v.form.payer.relationshipId.$model"
            :class="[
              'form-select',
              {
                'is-invalid':
                  !$v.form.payer.relationshipId.required &&
                  $v.form.payer.relationshipId.$dirty,
              },
            ]"
            required
          >
            <option :value="null" disabled selected hidden>
              {{ $store.state.lang.relationship_placeholder }}
            </option>

            <option
              v-for="relationship in relationshipsWithoutCorporateMatching"
              :key="relationship.id"
              :value="relationship.id"
            >
              {{ relationship.sponsor_type }}
            </option>
          </select>
        </div>

        <p
          v-if="
            !$v.form.payer.relationshipId.required &&
            $v.form.payer.relationshipId.$dirty
          "
          class="has-error"
        >
          {{ $store.state.lang.relationship_label }}
          {{ $store.state.lang.is_required }}
        </p>
      </div>

      <CreditCardInputs :error="cardError">
        <input
          id="postal-code-input"
          v-model.trim="$v.form.payer.postalCode.$model"
          :class="[
            'h-11 form-input placeholder-gray-400',
            {
              'is-invalid':
                !$v.form.payer.postalCode.required &&
                $v.form.payer.postalCode.$dirty,
            },
          ]"
          :placeholder="$store.state.lang.zip"
        />
      </CreditCardInputs>
    </fieldset>

    <table class="mb-8 donation-summary">
      <tbody>
        <tr>
          <td>{{ $store.state.lang.donation }}</td>

          <td class="text-right donation">
            ${{ formatCurrency(form.amount) }}
          </td>
        </tr>
        <tr>
          <td>
            <div class="flex items-center">
              <span class="mr-1">{{ $store.state.lang.convenience_fee }}</span>
              <FontAwesomeIcon
                v-tippy="{trigger: 'mouseenter', arrow: true}"
                :icon="['fal', 'info-circle']"
                :content="$store.state.lang.convenience_fee_help"
                class="h-3 cursor-pointer text-secondary-500 focus:outline-none"
              />
            </div>
          </td>

          <td class="text-right convenience-fee">
            ${{ formatCurrency($store.state.program.sponsor_convenience_fee) }}
          </td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td class="text-xl font-semibold border-t">
            {{ $store.state.lang.total_due }}
          </td>
          <td
            class="text-xl font-semibold text-right border-t donatation-total"
          >
            ${{ formatCurrency(total) }}
          </td>
        </tr>
      </tfoot>
    </table>
    <p
      v-if="hasBackendError"
      class="px-2 mb-4 text-lg text-center text-red-700 text-danger"
    >
      {{ backendError }}
    </p>
    <button
      id="submit-button"
      :disabled="$v.$invalid || payPending || !creditCardFieldsAreValid"
      type="submit"
      :class="{
        'opacity-50 cursor-not-allowed':
          $v.$invalid || payPending || !creditCardFieldsAreValid,
      }"
      class="flex items-center justify-center mb-8 space-x-1 primary-button"
    >
      <span>{{ $store.state.lang.submit_button }}</span>

      <FontAwesomeIcon v-if="payPending" :icon="['fas', 'circle-notch']" spin />
    </button>

    <footer class="mb-8 card-protection">
      <svg class="inline h-3 mr-1 text-green-900" viewBox="0 0 448 512">
        <path
          d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
          fill="currentColor"
        />
      </svg>

      <span>{{ $store.state.lang.card_protection }}</span>
    </footer>
  </form>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, email, requiredIf} from 'vuelidate/lib/validators'
import client from 'braintree-web/client'
import hostedFields from 'braintree-web/hosted-fields'
import CreditCardInputs from '@/components/CreditCardInputs'

const isIE =
  '-ms-scroll-limit' in document.documentElement.style &&
  '-ms-ime-align' in document.documentElement.style
const isEdge =
  '-ms-scroll-limit' in document.documentElement.style &&
  '-ms-ime-align' in document.documentElement.style &&
  !window.navigator.msPointerEnabled
const minimumValue = value => value === null || value >= 5
const defaultCardError = {
  code: '',
  message: '',
  details: {
    invalidFieldKeys: [],
  },
}

export default {
  name: 'PaymentForm',
  components: {CreditCardInputs},
  mixins: [validationMixin],
  data() {
    return {
      testFlat: 'flat_a',
      form: {
        payer: {
          first_name: null,
          last_name: null,
          email: null,
          relationshipId: null,
          postalCode: null,
        },
        amount: null,
        customDonation: null,
        utmSource: null,
        utmContent: null,
        utmMedium: null,
        utmCampaign: null,
        onBehalfOf: null,
      },
      payPending: false,
      cardError: defaultCardError,
      formInstance: null,
      amountDirty: false,
      focused: false,
      isIE11: isIE && !isEdge,
      creditCardFieldsAreValid: null,
      backendError: null,
    }
  },

  validations: {
    form: {
      payer: {
        first_name: {
          required,
        },
        last_name: {
          required,
        },
        email: {
          required,
          email,
        },
        relationshipId: {
          required,
        },
        postalCode: {
          required,
        },
      },
      customDonation: {
        minimumValue,
      },
      onBehalfOf: {
        required: requiredIf(function () {
          return this.$store.state.program.enable_on_behalf_of_payments
        }),
      },
    },
  },
  computed: {
    hasBackendError() {
      return !!this.backendError
    },
    relationshipsWithoutCorporateMatching() {
      return this.$store.state.relationships.filter(
        relationship => relationship.id !== 8,
      )
    },
    fullName() {
      return this.form.payer.first_name + ' ' + this.form.payer.last_name
    },
    total() {
      return (
        parseFloat(this.form.amount) +
        parseFloat(this.$store.state.program.sponsor_convenience_fee)
      )
    },
    preSelectedOptionIndex() {
      const preSelected = this.$store.state.preSelectAmountOptions[
        this.testFlat
      ].findIndex(
        option =>
          option === this.$store.state.preSelectAmountOptions.flat_default_a,
      )
      return preSelected > 0 ? preSelected : 0
    },
    preSelectedOptions() {
      const length = this.$store.state.preSelectAmountOptions[this.testFlat]
        .length
      return this.$store.state.preSelectAmountOptions[this.testFlat]
        .map((option, index) => {
          return {
            isSelected: index === this.preSelectedOptionIndex,
            amount: parseInt(option),
          }
        })
        .slice(0, length)
    },
    programOverviewText() {
      return this.$store.state.program.microsite.clean_overview_text_override
    },
    hasProgramOverviewText() {
      return (
        typeof this.programOverviewText === 'string' &&
        this.programOverviewText.trim() !== ''
      )
    },
    programDescription() {
      if (this.hasProgramOverviewText) {
        return this.programOverviewText
      }

      return this.defaultTextOverride
    },
    defaultTextOverride() {
      return this.parseLanguage(this.$store.state.lang.overview_text_override, {
        event_name: this.$store.state.program.event_name,
        unit_plural: this.$store.state.program.unit.name_plural,
      })
    },
    onBehalfOfIsActive() {
      return this.$store.state.program.enable_on_behalf_of_payments
    },
  },
  mounted() {
    this.isIE11 && setTimeout(() => this.$refs.button0.click(), 200)
    this.preSelect(this.preSelectedOptions[this.preSelectedOptionIndex])
    this.setUtmData()
    this.mountCreditCard()
  },
  methods: {
    setUtmData() {
      const urlString = window.location.href
      const url = new URL(urlString)
      const utmSource = url.searchParams.get('utm_source')
      const utmMedium = url.searchParams.get('utm_medium')
      const utmContent = url.searchParams.get('utm_content')
      const utmCampaign = url.searchParams.get('utm_campaign')

      this.form.utmSource = utmSource || null
      this.form.utmMedium = utmMedium || null
      this.form.utmContent = utmContent || null
      this.form.utmCampaign = utmCampaign || null
    },
    submit() {
      this.amountDirty = true
      this.$v.$touch()
      this.$forceUpdate()

      if (this.$v.$invalid) {
        document.body.scrollTop = 0
      } else {
        this.cardError = defaultCardError
        this.validateCreditCard()
      }
    },

    mountCreditCard() {
      client
        .create({
          authorization: this.$store.state.braintreeMerchantId,
        })
        .then(clientInstance => {
          const options = {
            client: clientInstance,
            styles: {
              input: {
                'font-family': this.$store.state.theme.fontFamily.sans,
                'font-size': this.$store.state.theme.fontSize.base,
                'font-weight': this.$store.state.theme.fontWeight.semibold,
                color: this.$store.state.theme.colors.gray[800],
                padding: `${this.$store.state.theme.padding[2]} ${this.$store.state.theme.padding[3]}`,
              },
              '::placeholder': {
                color: this.$store.state.theme.placeholderColor.gray[400],
                opacity: 1,
              },
            },
            fields: {
              number: {
                selector: '#card-number',
                placeholder: this.$store.state.lang.card_number,
                label: this.$store.state.lang.card_number,
              },
              cvv: {
                selector: '#cvv',
                placeholder: this.$store.state.lang.cvv,
                label: this.$store.state.lang.cvv,
              },
              expirationDate: {
                selector: '#expiration-date',
                placeholder: this.$store.state.lang.expiration_date_placeholder,
                label: this.$store.state.lang.expiration_date_label,
              },
            },
          }

          hostedFields
            .create(options)
            .then(fieldInstance => {
              this.formInstance = fieldInstance

              this.formInstance.on('empty', event => {
                this.cardError = {
                  code: '-1',
                  message:
                    options.fields[event.emittedBy].label + ' is required',
                  details: {
                    invalidFieldKeys: [event.emittedBy],
                  },
                }
              })

              this.formInstance.on('validityChange', event => {
                const state = this.formInstance.getState()

                this.creditCardFieldsAreValid = Object.keys(state.fields).every(
                  key => {
                    return state.fields[key].isValid
                  },
                )

                if (state.fields[event.emittedBy].isValid) {
                  this.cardError = defaultCardError
                }
              })
            })
            .catch(error => {
              console.error(error)
            })
        })
    },
    validateCreditCard() {
      if (this.payPending === false) {
        this.payPending = true
        this.formInstance
          .tokenize({
            cardholderName: this.fullName,
            billingAddress: {
              postalCode: this.form.payer.postalCode,
            },
          })
          .then(response => {
            this.submitPayment(response.nonce)
          })
          .catch(this.handleCardError)
      }
    },
    handleCardError(error) {
      this.cardError = {
        code: error.code || '',
        message: this.$store.state.lang.errors[error.code] || '',
        details: error.details || {},
      }
      this.payPending = false
    },
    submitPayment(nonce) {
      this.payPending = true

      this.$http
        .post(this.$store.state.paymentUrl, {
          form: this.form,
          nonce,
          program_id: this.$store.state.program.id,
        })
        .then(response => {
          const pledge = response.data
          this.cardError = defaultCardError

          this.$store.dispatch('setPledge', pledge)
          this.gaEvent('Direct Give', 'Program Donation', 'Submit Payment')
          this.$router.push({name: 'thanks'})
        })
        .catch(error => {
          console.log(error)
          this.backendError = this.$store.state.lang.payment_error

          this.cardError = {
            code: error.code || '',
            message:
              this.$store.state.lang.errors[error.response.data.error] ||
              this.$store.state.lang.errors.payment_error,
            details:
              error.response.data.error.message === 'Gateway Rejected: cvv'
                ? {invalidFieldKeys: ['cvv']}
                : {
                    invalidFieldKeys: ['number', 'expirationDate', 'cvv'],
                  },
          }
        })
        .finally(() => {
          this.payPending = false
        })
    },
    formatCurrency(value) {
      const val = (value / 1).toFixed(2).replace(',', '.')
      return val
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        .replace('.00', '')
    },
    isNumber(event) {
      event = event || window.event
      const charCode = event.which ? event.which : event.keyCode
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        event.preventDefault()
      } else {
        return true
      }
    },
    deselectpreSelectedOptions() {
      this.preSelectedOptions.forEach(option => {
        option.isSelected = false
      })
    },
    preSelect(option) {
      this.deselectpreSelectedOptions()
      this.form.customDonation = null
      this.form.amount = option.amount
      option.isSelected = true
      return option.amount
    },
    moneyChanged(event) {
      this.deselectpreSelectedOptions()
      this.form.customDonation = event.target.value
      this.form.amount =
        event.target.value > 0
          ? event.target.value
          : this.preSelect(this.preSelectedOptions[this.preSelectedOptionIndex])

      if (event >= 1) {
        this.amountDirty = true
      }
    },
  },
}
</script>

<style>
.payment-form {
  @apply w-full;
  @apply max-w-lg;
  @apply mx-auto;
}

.payment-form .sponsor-information {
  @apply max-w-sm;
  @apply mx-auto;
}

.payment-form .donation-summary {
  @apply w-full;
  @apply max-w-sm;
  @apply mx-auto;
}

.payment-form h2 {
  @apply mb-4;
  @apply text-xl;
  @apply text-center;
  @apply font-semibold;
}

.payment-form label {
  @apply block;
  @apply mx-auto;
  @apply mb-4;
  @apply text-lg;
  @apply text-center;
}

.payment-form select:required:invalid {
  color: theme('placeholderColor.gray.400');
}

.payment-form option[value='null'][disabled] {
  display: none;
}

.payment-form option {
  color: theme('colors.gray.800');
}
.payment-form .is-invalid {
  @apply border-red-200;
  @apply text-red-200;
}

.payment-form .has-error {
  @apply mt-2;
}

.payment-form .card-protection {
  @apply text-center;
  @apply text-xs;
}

.amount-button {
  @apply overflow-hidden;
  @apply flex;
  @apply items-center;
  @apply justify-center;
  @apply w-20;
  @apply h-20;
  @apply m-2;
  @apply text-xl;
  @apply text-gray-400;
  @apply font-bold;
  @apply border;
  @apply rounded-full;
  @apply shadow-lg;
  @apply transform;
  @apply ease-in-out;
  @apply duration-300;
}

.amount-button.is-selected {
  @apply text-white;
  @apply bg-primary-500;
}

.amount-button.is-selected:hover {
  @apply text-white;
  @apply bg-primary-500;
}

.amount-button:focus {
  @apply outline-none;
  @apply ring;
}

.amount-button:hover {
  @apply text-gray-600;
  @apply scale-105;
}

.preselect-options {
  @apply flex;
  @apply flex-wrap;
  @apply justify-center;
  @apply items-center;
  @apply w-full;
  @apply mx-auto;
  @apply mb-8;
}

@screen lg {
  .preselect-options {
    @apply max-w-xl;
  }
}
</style>
