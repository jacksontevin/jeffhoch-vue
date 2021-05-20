<template>
  <section class="Profile-section-page">
    <div class="Profile-section-top">
      <b-container>
        <b-row>
          <b-col cols="12" lg="6" md="6">
            <div class="header-title text-left">
              <h4>PERSONAL INFORMATION</h4>
              <h1>Add, Change And Edit Your Personal Details</h1>
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
                  <div v-if="editdMode" class="auth-form-group text-left mt-3">
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
                  <label class="eb-input-label">Password</label>
                  <div v-if="editdMode" class="auth-form-group text-left mt-3">
                    <b-input-group class="eb-input-group">
                      <b-form-input
                        :class="{ Invalid: errors.first('password') }"
                        placeholder="********"
                        type="password"
                        name="password"
                      />
                      <label
                        class="eb-input-label cursor-pointer"
                        @click="changePassowrdModalShow = true"
                        >Change Passowrd</label
                      >
                    </b-input-group>
                    <b-form-text>{{ errors.first('password') }}</b-form-text>
                  </div>
                  <div v-else class="view-data">**************</div>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" lg="10" md="10">
                <div class="eb-form">
                  <label class="eb-input-label">Last Name</label>
                  <div v-if="editdMode" class="auth-form-group text-left mt-3">
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
                  <div v-if="editdMode" class="auth-form-group text-left mt-3">
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
                  <div v-if="editdMode" class="auth-form-group text-left mt-3">
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
                  <div v-if="editdMode" class="auth-form-group text-left mt-3">
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
                  <div v-if="editdMode" class="auth-form-group text-left mt-3">
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
          <b-col cols="12" lg="4" md="4">
            <div class="profile-upload-box">
              <div class="profile-upload">
                <div
                  v-if="!fieldsData.imageUrl"
                  class="d-flex justify-content-center align-items-center h-100"
                  @click="$refs.getProfile.click()"
                >
                  <input
                    ref="getProfile"
                    type="file"
                    accept="image/*"
                    style="display: none"
                    @change="changeImage"
                  />
                  <span
                    ><svg
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M43.8325 19.0004C44.3847 19.0004 44.8325 19.4481 44.8325 20.0004V24.832C44.8325 25.3843 44.3847 25.832 43.8325 25.832H26.832C26.2798 25.832 25.832 26.2798 25.832 26.832V43.8325C25.832 44.3847 25.3843 44.8325 24.832 44.8325H20.0004C19.4481 44.8325 19.0004 44.3847 19.0004 43.8325V26.832C19.0004 26.2798 18.5527 25.832 18.0004 25.832H1C0.447716 25.832 0 25.3843 0 24.832V20.0004C0 19.4481 0.447715 19.0004 1 19.0004H18.0004C18.5527 19.0004 19.0004 18.5527 19.0004 18.0004V1C19.0004 0.447716 19.4481 0 20.0004 0H24.832C25.3843 0 25.832 0.447715 25.832 1V18.0004C25.832 18.5527 26.2798 19.0004 26.832 19.0004H43.8325Z"
                        fill="#F36F56"
                      />
                    </svg>
                  </span>
                </div>
                <div v-else class="position-relative">
                  <img
                    :ref="'image'"
                    class="profile-picture w-100"
                    :src="fieldsData.imageUrl"
                    accept="image/*"
                    name="images"
                  />
                  <span class="profile-close-img" @click="deleteProfile()"
                    >X</span
                  >
                </div>
              </div>
              <h5>Upload your Profile Picture</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button class="btn btn-link mt-4" @click="uploadImage">
                Upload Now
              </button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <change-password-modal
      v-if="changePassowrdModalShow"
      :is-show="changePassowrdModalShow"
      @close="changePassowrdModalShow = false"
    />
  </section>
</template>
<script>
import { mapActions } from 'vuex'
import Axios from 'axios'
import {
  GET_S3_PROFILE_UPLOAD_URL,
  UPDATE_ACCOUNT_PIC,
  UPDATE_PROFILE,
  WHO_AM_I,
} from '~/services/accounts'
import changePasswordModal from '~/components/core/changePasswordModal'

export default {
  $_veeValidate: {
    validator: 'new',
  },
  components: {
    changePasswordModal,
  },
  data() {
    return {
      fieldsData: {},
      password: '',
      editdMode: false,
      cfmPassword: '',
      imageData: null,
      changePassowrdModalShow: false,
    }
  },
  mounted() {
    this.getProfile()
  },
  methods: {
    ...mapActions('auth', ['setUserInfo']),
    async getProfile() {
      try {
        this.$nextTick(() => this.$nuxt.$loading.start())
        const result = await WHO_AM_I()
        const {
          firstName,
          lastName,
          mobile,
          address,
          emergencyContact,
          email,
          imageUrl,
          bio,
          gender,
        } = result.data
        this.fieldsData = {
          firstName,
          lastName,
          mobile,
          address,
          emergencyContact,
          email,
          imageUrl,
          bio,
          gender,
        }
        this.$validator.reset()
      } catch ({ data }) {
        this.$toast.error(data.message)
      } finally {
        this.$nextTick(() => this.$nuxt.$loading.finish())
      }
    },
    editData() {
      this.$validator.validate().then(async (isValid) => {
        if (isValid) {
          try {
            if (this.password) this.fieldsData.password = this.password
            this.$nextTick(() => this.$nuxt.$loading.start())
            const result = await UPDATE_PROFILE(this.fieldsData)
            this.editdMode = false
            this.setUserInfo(result.data)
            this.$toast.success('Profile Update Successfully')
          } catch ({ data }) {
            this.$toast.error(data.message)
          } finally {
            this.$nextTick(() => this.$nuxt.$loading.finish())
          }
        }
      })
    },
    async uploadImage() {
      if (this.imageData) {
        try {
          const extension = this.getExtension(this.imageData.name)
          const urls = await GET_S3_PROFILE_UPLOAD_URL({
            floder: 'profile-picture',
            extension,
          })
          this.$nextTick(() => this.$nuxt.$loading.start())
          Axios.put(urls.url, this.imageData)
            .then((res) => {
              this.imageData = null
              this.changeDP(urls.imageUrl)
            })
            .catch(() => {
              this.$toast.error('Something Went Worng')
            })
            .finally(() => {
              this.$nextTick(() => this.$nuxt.$loading.finish())
            })
        } catch ({ data }) {
          this.$toast.error(data.message)
        }
      } else {
        this.$toast.error('Please Select Images')
      }
    },
    changeImage(e) {
      if (e.target.files[0]) {
        this.imageData = e.target.files[0]
        const input = e.target
        const reader = new FileReader()
        reader.onload = (r) => {
          this.fieldsData.imageUrl = r.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    async changeDP(url) {
      try {
        const userInfo = await UPDATE_ACCOUNT_PIC({
          imageUrl: url,
        })
        this.$toast.success('Profile Picture Update Successfully')
        this.setUserInfo(userInfo.data)
        this.fieldsData.imageUrl = userInfo.data.imageUrl
      } catch ({ data }) {
        this.$toast.error(data.message)
      } finally {
        this.$nextTick(() => this.$nuxt.$loading.finish())
      }
    },
    deleteProfile(e) {
      if (!this.imageData && confirm('Are You Sure This Picture Remove')) {
        this.fieldsData.imageUrl = ''
        this.imageData = null
        this.changeDP('')
      } else if (this.imageData) {
        this.fieldsData.imageUrl = ''
        this.imageData = null
      }
    },
  },
}
</script>
