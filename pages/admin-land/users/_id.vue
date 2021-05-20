<template>
  <section class="Profile-section-page">
    <div class="Profile-section-top">
      <b-container>
        <b-row>
          <b-col cols="12" lg="6" md="6">
            <div class="header-title text-left">
              <h4>USER DETAIL INFORMATION</h4>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="Profile-section-details">
      <b-container>
        <b-row>
          <b-col cols="12" lg="8" md="8">
            <b-row>
              <b-col cols="12" lg="10" md="10">
                <div class="eb-form">
                  <label class="eb-input-label">First Name</label>
                  <div v-if="editdMode" class="auth-form-group text-left mb-3">
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
                  <div v-else class="view-data">{{ fieldsData.firstName }}</div>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" lg="10" md="10">
                <div class="eb-form">
                  <label class="eb-input-label">Last Name</label>
                  <div v-if="editdMode" class="auth-form-group text-left mb-3">
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
                  <div v-else class="view-data">{{ fieldsData.lastName }}</div>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" lg="10" md="10">
                <div class="eb-form">
                  <label class="eb-input-label">Phone Number</label>
                  <div v-if="editdMode" class="auth-form-group text-left mb-3">
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
                  <div v-else class="view-data">{{ fieldsData.mobile }}</div>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" lg="10" md="10">
                <div class="eb-form">
                  <label class="eb-input-label">Address</label>
                  <div v-if="editdMode" class="auth-form-group text-left mb-3">
                    <b-input-group class="eb-input-group">
                      <b-form-input
                        v-model="fieldsData.address"
                        v-validate="'required'"
                        :class="{ Invalid: errors.first('Address') }"
                        name="Address"
                        placeholder="4140 Parker Rd. Allentown, New Mexico 31134"
                      />
                    </b-input-group>
                    <b-form-text class="error-msg">{{
                      errors.first('Address')
                    }}</b-form-text>
                  </div>
                  <div v-else class="view-data">
                    {{ fieldsData.address }}
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" lg="10" md="10">
                <div class="eb-form">
                  <label class="eb-input-label">Emergency Contact</label>
                  <div v-if="editdMode" class="auth-form-group text-left mb-3">
                    <b-input-group class="eb-input-group">
                      <b-form-input
                        v-model="fieldsData.emergencyContact"
                        v-validate="'required|numeric|min:6|max:16'"
                        :class="{ Invalid: errors.first('Emergency Contact') }"
                        name="Emergency Contact"
                        placeholder="Not Provided"
                      />
                    </b-input-group>
                    <b-form-text class="error-msg">{{
                      errors.first('Emergency Contact')
                    }}</b-form-text>
                  </div>
                  <div v-else class="view-data">
                    {{ fieldsData.emergencyContact }}
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" lg="10" md="10">
                <div class="eb-form">
                  <label class="eb-input-label">Bio</label>
                  <div v-if="editdMode" class="auth-form-group text-left mb-3">
                    <b-input-group class="eb-input-group">
                      <b-form-textarea
                        v-model="fieldsData.bio"
                        v-validate="'required|min:30|max:1500'"
                        :class="{ Invalid: errors.first('Bio') }"
                        name="Bio"
                        rows="4"
                        placeholder=""
                      />
                    </b-input-group>
                    <b-form-text class="error-msg">{{
                      errors.first('Bio')
                    }}</b-form-text>
                  </div>
                  <div v-else class="view-data">
                    {{ fieldsData.bio }}
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" lg="10" md="10">
                <b-form-group v-slot="{ ariaDescribedby }" label="Gender">
                  <b-form-radio-group
                    id="admin-profile"
                    v-model="fieldsData.gender"
                    :aria-describedby="ariaDescribedby"
                    name="admin-profile"
                  >
                    <b-form-radio value="Male">Male</b-form-radio>
                    <b-form-radio value="Female">Female</b-form-radio>
                    <b-form-radio value="Others">Others</b-form-radio>
                  </b-form-radio-group>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" lg="10" md="10">
                <div class="eb-form">
                  <label class="eb-input-label">Status</label>
                  <div v-if="editdMode" class="auth-form-group text-left mb-3">
                    <b-input-group class="eb-input-group">
                      <multiselect
                        v-model="fieldsData.status"
                        v-validate="'required'"
                        :options="statusOptions.map((i) => i.value)"
                        name="Status"
                        placeholder="Pick a value"
                      ></multiselect>
                    </b-input-group>
                    <b-form-text class="error-msg">{{
                      errors.first('Status')
                    }}</b-form-text>
                  </div>
                  <div v-else class="view-data">
                    {{ fieldsData.status }}
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" lg="10" md="10">
                <div class="eb-form">
                  <div class="auth-form-group text-left mt-5">
                    <b-input-group class="eb-input-group">
                      <button
                        v-if="!editdMode"
                        class="btn btn-link"
                        @click="editdMode = true"
                      >
                        {{ 'Edit Details' }}
                      </button>
                      <button
                        v-if="editdMode"
                        class="btn btn-link"
                        @click="editData"
                      >
                        {{ 'Save Changes' }}
                      </button>
                    </b-input-group>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>
<script>
import { mapActions } from 'vuex'
import { statusOptions } from './config'
import {
  ADMIN_USER_UPDATE_BY_ID,
  ADMIN_FETCH_USER_BY_ID,
} from '~/services/ENDPOINT'
export default {
  $_veeValidate: {
    validator: 'new',
  },
  name: 'UserView',
  layout: 'admin',
  data() {
    return {
      fieldsData: {},
      password: '',
      editdMode: false,
      paramsId: null,
      statusOptions,
      imageData: null,
    }
  },
  mounted() {
    this.paramsId = this.$route.params.id
    if (this.paramsId) {
      this.getProfile()
    } else {
      this.$router.push('/')
      this.$toast.error('Something Went Wrong')
    }
  },
  methods: {
    ...mapActions('auth', ['setUserInfo']),
    async getProfile() {
      try {
        // this.$nextTick(() => this.$nuxt.$loading.start())
        const result = await ADMIN_FETCH_USER_BY_ID(this.paramsId)
        const {
          firstName,
          lastName,
          mobile,
          address,
          emergencyContact,
          email,
          bio,
          gender,
          _id,
          status,
        } = result.data
        this.fieldsData = {
          firstName,
          lastName,
          mobile,
          address,
          emergencyContact,
          email,
          bio,
          gender,
          _id,
          status,
        }
        this.$validator.reset()
      } catch ({ data }) {
        this.$toast.error(data.message)
      } finally {
        // this.$nextTick(() => this.$nuxt.$loading.finish())
      }
    },
    editData() {
      this.$validator.validate().then(async (isValid) => {
        if (isValid) {
          try {
            this.$nextTick(() => this.$nuxt.$loading.start())
            await ADMIN_USER_UPDATE_BY_ID(this.fieldsData)
            this.$toast.success('Profile Update Successfully')
          } catch ({ data }) {
            this.$toast.error(data.message)
          } finally {
            this.$nextTick(() => this.$nuxt.$loading.finish())
          }
        }
      })
    },
  },
}
</script>
