<template>
  <div class="position-relative">
    <div class="auth-box">
      <form-wizard
        color="#F36F56"
        :title="null"
        :subtitle="null"
        finish-button-text="Submit"
        back-button-text="Previous"
        class="mb-3"
        @on-complete="formSubmitted"
      >
        <tab-content title="">
          <userType :role="fieldsData.role" @input="fieldsData.role = $event" />
        </tab-content>
        <!-- accoint details tab -->
        <tab-content title="" :before-change="validationForm">
          <h1>You Are Minutes To Start</h1>
          <p>Complete This few steps to understand about your requirements</p>
          <div class="auth-form-group text-left mt-3">
            <label class="eb-input-label">First Name</label>
            <b-input-group class="eb-input-group">
              <b-form-input
                v-model="fieldsData.firstName"
                v-validate="'required'"
                :class="{ Invalid: errors.first('First Name') }"
                placeholder="John"
                name="First Name"
              />
            </b-input-group>
            <b-form-text class="error-msg">{{
              errors.first('First Name')
            }}</b-form-text>
          </div>
          <div class="auth-form-group text-left mt-3">
            <label class="eb-input-label">Last Name</label>
            <b-input-group class="eb-input-group">
              <b-form-input
                v-model="fieldsData.lastName"
                v-validate="'required'"
                :class="{ Invalid: errors.first('Last Name') }"
                placeholder="Smith"
                name="Last Name"
              />
            </b-input-group>
            <b-form-text class="error-msg">{{
              errors.first('Last Name')
            }}</b-form-text>
          </div>
          <div class="auth-form-group text-left mt-3 mb-3">
            <label class="eb-input-label">Mobile Number</label>
            <b-input-group class="eb-input-group">
              <b-form-input
                v-model="fieldsData.mobile"
                v-validate="'required|numeric|min:5|max:15'"
                :class="{ Invalid: errors.first('Mobile Number') }"
                name="Mobile Number"
                placeholder="(671) 555-0110"
              />
            </b-input-group>
            <b-form-text class="error-msg">{{
              errors.first('Mobile Number')
            }}</b-form-text>
          </div>
        </tab-content>

        <tab-content title="">
          <gender
            :gender="fieldsData.gender"
            @input="fieldsData.gender = $event"
          />
        </tab-content>
        <!-- address  -->
        <tab-content title="">
          <validation-observer ref="addressRules" tag="form">
            <b-row class="flex-column">
              <b-col class="input-box-card text-left mt-3">
                <label class="eb-label"
                  >What type of property do you need?</label
                >
                <CustomRadioGroup
                  id="typeOfSpace"
                  v-model="fieldsData.propertyType"
                  :value="fieldsData.propertyType"
                  :options="typeSpaceOptions"
                  class="my-3"
                >
                </CustomRadioGroup>
              </b-col>
            </b-row>
          </validation-observer>
        </tab-content>
        <tab-content title="">
          <validation-observer ref="socialRules" tag="form">
            <b-row class="flex-column">
              <b-col class="input-box-card text-left mt-3">
                <label class="eb-label"
                  >Are you looking to buy, lease or sell?</label
                >
                <CustomRadioGroup
                  id="whatType"
                  v-model="fieldsData.saleType"
                  :options="leaseBuyOptions"
                  class="my-3"
                >
                </CustomRadioGroup>
              </b-col>
            </b-row>
          </validation-observer>
        </tab-content>
        <tab-content
          v-if="selectedCategoryName === 'Industrial Space'"
          title=""
        >
          <validation-observer ref="socialRules" tag="form">
            <b-row>
              <b-col class="input-box-card text-left mt-3">
                <label class="eb-label">Do you need drive-in-doors?</label>
                <CustomRadioGroup
                  id="yesNoQuestion"
                  v-model="fieldsData.driveInDoors"
                  :options="yesNoQuestionOptions"
                >
                </CustomRadioGroup>
              </b-col>
            </b-row>
          </validation-observer>
        </tab-content>
        <tab-content title="" :before-change="validationBudgetForm">
          <b-row>
            <b-col class="auth-form-group input-box-card text-left mt-3 mb-3">
              <label class="eb-label">What is your budget?</label>
              <b-input-group class="eb-input-group mx-auto mt-3">
                <b-form-input
                  v-model="fieldsData.budgets.max"
                  v-validate="'required'"
                  placeholder="$1500"
                  type="number"
                  name="Price"
                  :class="{ Invalid: errors.first('Price') }"
                />
              </b-input-group>
              <b-form-text class="error-msg">{{
                errors.first('Price')
              }}</b-form-text>
            </b-col>
          </b-row>
        </tab-content>
        <tab-content
          v-if="selectedCategoryName === 'Industrial Space'"
          title=""
        >
          <validation-observer ref="socialRules" tag="form">
            <b-row>
              <b-col class="input-box-card text-left mt-3">
                <label class="eb-label">Do you need loading docks?</label>
                <CustomRadioGroup
                  id="driveInDoors"
                  v-model="fieldsData.driveInDoors"
                  :options="yesNoQuestionOptions"
                >
                </CustomRadioGroup>
              </b-col>
            </b-row>
          </validation-observer>
        </tab-content>
        <tab-content
          v-if="selectedCategoryName === 'Industrial Space'"
          title=""
        >
          <validation-observer ref="socialRules" tag="form">
            <b-row>
              <b-col class="input-box-card text-left mt-3">
                <label class="eb-label">Do you need heavy power?</label>
                <CustomRadioGroup
                  id="heavyPoer"
                  v-model="fieldsData.heavyPower"
                  :options="yesNoQuestionOptions"
                >
                </CustomRadioGroup>
              </b-col>
            </b-row>
          </validation-observer>
        </tab-content>
        <tab-content
          v-if="selectedCategoryName === 'Industrial Space'"
          title=""
        >
          <validation-observer ref="socialRules" tag="form">
            <b-row>
              <b-col class="input-box-card text-left mt-3">
                <label class="eb-label">Do you need high ceilings?</label>
                <CustomRadioGroup
                  id="highCeilings"
                  v-model="fieldsData.highCeilings"
                  :options="yesNoQuestionOptions"
                >
                </CustomRadioGroup>
              </b-col>
            </b-row>
          </validation-observer>
        </tab-content>
        <tab-content v-if="selectedCategoryName === 'Office Space'" title="">
          <validation-observer ref="socialRules" tag="form">
            <b-row>
              <b-col class="input-box-card text-left mt-3">
                <label class="eb-label"
                  >What is the office going to be used for?</label
                >
                <CustomRadioGroup
                  id="whyOfficeUse"
                  v-model="fieldsData.whyOfficeUse"
                  :options="whyOfficeUseOptions"
                >
                </CustomRadioGroup>
              </b-col>
            </b-row>
          </validation-observer>
        </tab-content>
        <tab-content v-if="selectedCategoryName === 'Office Space'" title="">
          <validation-observer ref="socialRules" tag="form">
            <b-row class="flex-column">
              <b-col class="input-box-card text-left mt-3">
                <label class="eb-label"
                  >Do you need a free standing building?</label
                >
                <CustomRadioGroup
                  id="standingBuilding"
                  v-model="fieldsData.standingBuilding"
                  :options="yesNoQuestionOptions"
                >
                </CustomRadioGroup>
              </b-col>
            </b-row>
          </validation-observer>
        </tab-content>
        <tab-content v-if="selectedCategoryName === 'Office Space'" title="">
          <validation-observer ref="socialRules" tag="form">
            <b-row class="flex-column">
              <b-col class="input-box-card text-left mt-3">
                <label class="eb-label"
                  >Please mark your size requirements -</label
                >
                <CustomRadioGroup
                  id="officeSize"
                  v-model="fieldsData.officeSize"
                  :options="officeSizeOptions"
                >
                </CustomRadioGroup>
              </b-col>
            </b-row>
          </validation-observer>
        </tab-content>
        <tab-content title="">
          <validation-observer ref="socialRules" tag="form">
            <b-row>
              <b-col class="input-box-card text-left mt-3">
                <label class="eb-label">What is your time frame?</label>
                <CustomRadioGroup
                  id="timeframe"
                  v-model="fieldsData.timeFrame"
                  :options="timeFrameOptions"
                  class="my-3"
                >
                </CustomRadioGroup>
              </b-col>
            </b-row>
          </validation-observer>
        </tab-content>
        <tab-content title="" :before-change="validationSquareFeetForm">
          <b-row class="flex-column">
            <b-col class="auth-form-group input-box-card text-left mt-3 mb-5">
              <label class="eb-label"
                >What square footage are you looking for?</label
              >
              <b-input-group class="eb-input-group mx-auto mt-3">
                <b-form-input
                  v-model="fieldsData.squareFeet.max"
                  v-validate="'required'"
                  placeholder="1500 - 2000 sqft"
                  name="Square Footage"
                  :class="{ Invalid: errors.first('Square Footage') }"
                />
              </b-input-group>
              <b-form-text class="error-msg">{{
                errors.first('Square Footage')
              }}</b-form-text>
            </b-col>
          </b-row>
        </tab-content>

        <tab-content title="" :before-change="validationParkingSpotsForm">
          <b-row>
            <b-col class="auth-form-group input-box-card text-left mt-3 mb-5">
              <label class="eb-label w-100 text-center"
                >How many parking spots do you need?</label
              >
              <b-input-group class="eb-input-group mx-auto mt-3">
                <b-form-input
                  v-model="fieldsData.parkingSpots"
                  v-validate="'required'"
                  type="number"
                  placeholder="3"
                  name="Parking Spots"
                  :class="{ Invalid: errors.first('Parking Spots') }"
                />
              </b-input-group>
              <b-form-text class="error-msg">{{
                errors.first('Parking Spots')
              }}</b-form-text>
            </b-col>
          </b-row>
        </tab-content>

        <tab-content title="">
          <validation-observer ref="addressRules" tag="form">
            <b-row class="flex-column">
              <b-col class="input-box-card text-left mt-3">
                <label class="eb-label"
                  >Are you working with another broker?</label
                >
                <CustomRadioGroup
                  id="yesNoQuestion"
                  v-model="fieldsData.workingWithAnotherBroker"
                  :options="yesNoQuestionOptions"
                >
                </CustomRadioGroup>
              </b-col>
            </b-row>
          </validation-observer>
        </tab-content>
      </form-wizard>
    </div>
  </div>
</template>
<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import { ValidationObserver } from 'vee-validate'
import CustomRadioGroup from '../../components/core/Radio'
import userType from './user-type'
import gender from './gender'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import {
  typeOfficeOptions,
  whyOfficeUseOptions,
  yesNoQuestionOptions,
  officeSizeOptions,
  yesNoOtherQuestionOptions,
  leaseBuyOptions,
  timeFrameOptions,
} from './config'
import {
  AUTH_SAVE_INQUERY,
  FETCH_PROPERTY_TYPE_SPECIFIC,
} from '~/services/ENDPOINT'
export default {
  $_veeValidate: {
    validator: 'new',
  },
  name: 'Funnel',
  components: {
    ValidationObserver,
    FormWizard,
    TabContent,
    CustomRadioGroup,
    userType,
    gender,
  },
  layout: 'auth',
  data() {
    return {
      fieldsData: {
        userId: '',
        firstName: '',
        lastName: '',
        mobile: '',
        squareFeet: { min: 0, max: '' },
        propertyType: '',
        saleType: 'Buy',
        standingBuilding: true,
        officeSize: 'Medium (less than 3000 sqft)',
        whyOfficeUse:
          'Size Requirements - small, mid-size & Large-office complex',
        driveInDoors: true,
        heavyPower: false,
        highCeilings: true,
        budgets: { min: 0, max: '' },
        timeFrame: '0-3',
        parkingSpots: '',
        role: 'BUYER',
        gender: 'Male',
        workingWithAnotherBroker: false,
      },
      typeOfficeOptions,
      whyOfficeUseOptions,
      typeSpaceOptions: [],
      yesNoQuestionOptions,
      officeSizeOptions,
      yesNoOtherQuestionOptions,
      leaseBuyOptions,
      timeFrameOptions,
    }
  },
  computed: {
    selectedCategoryName() {
      if (this.fieldsData.propertyType) {
        const data = this.typeSpaceOptions.find(
          (i) => i.value === this.fieldsData.propertyType
        )
        if (data) return data.text
        else return ''
      } else {
        return ''
      }
    },
  },
  mounted() {
    this.fieldsData.userId = this.$route.query.id || ''
    this.fetchProertyType()
  },
  methods: {
    validationForm() {
      return new Promise((resolve, reject) => {
        this.$validator
          .validateAll(['First Name', 'Last Name', 'Mobile Number'])
          .then((isValid) => {
            if (isValid) resolve(true)
            else reject(new Error(false))
          })
      })
    },
    validationBudgetForm() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll(['Price']).then((isValid) => {
          if (isValid) resolve(true)
          else reject(new Error(false))
        })
      })
    },
    validationSquareFeetForm() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll(['Square Footage']).then((isValid) => {
          if (isValid) resolve(true)
          else reject(new Error(false))
        })
      })
    },
    validationParkingSpotsForm() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll(['Parking Spots']).then((isValid) => {
          if (isValid) resolve(true)
          else reject(new Error(false))
        })
      })
    },
    async fetchProertyType() {
      try {
        const payload = {
          currentPage: 1,
          perRowPage: 200,
          filed: 'name _id',
          search: '',
        }
        const result = await FETCH_PROPERTY_TYPE_SPECIFIC(payload)
        this.typeSpaceOptions = []
        for (const i of result.data.data)
          this.typeSpaceOptions.push({ text: i.name, value: i._id })

        this.fieldsData.propertyType = this.typeSpaceOptions[0]
          ? this.typeSpaceOptions[0].value
          : ''
      } catch ({ data }) {
        this.$toast.error(data.message)
      }
    },
    async formSubmitted() {
      console.log(this.fieldsData)
      try {
        this.$nextTick(() => this.$nextTick(() => this.$nuxt.$loading.start()))
        const res = await AUTH_SAVE_INQUERY(this.fieldsData)
        this.$toast.success(res.message)
        this.$router.push('/auth/confirm-email')
      } catch ({ data }) {
        this.$toast.error(data.message)
      } finally {
        this.$nextTick(() => this.$nuxt.$loading.finish())
      }
    },
  },
}
</script>
<style>
.error-msg {
  color: rgb(228 19 19) !important;
}
</style>
