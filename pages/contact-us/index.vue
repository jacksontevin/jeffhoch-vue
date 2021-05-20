<template>
  <section class="contact-section-page">
    <div class="contact-section-header">
      <b-container>
        <h1 class="title">Contact Us</h1>
      </b-container>
    </div>
    <div class="contact-section-top">
      <b-container>
        <b-row>
          <b-col cols="12" md="9" lg="9">
            <div class="contact-us-card mb-3">
              <b-row>
                <b-col>
                  <h4>CONTACT FORM</h4>
                  <h3>Mail Us Whenever You Need</h3>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" lg="6" md="6">
                  <div class="eb-form">
                    <div class="auth-form-group text-left mt-3">
                      <label class="eb-input-label">First Name</label>
                      <b-input-group class="eb-input-group">
                        <b-form-input
                          v-model="contactInfo.firstName"
                          v-validate="'required|min:2|max:30'"
                          :class="{ Invalid: errors.first('First Name') }"
                          placeholder="John"
                          name="First Name"
                        />
                      </b-input-group>
                      <b-form-text class="error-msg">{{
                        errors.first('First Name')
                      }}</b-form-text>
                    </div>
                  </div>
                </b-col>
                <b-col cols="12" lg="6" md="6">
                  <div class="eb-form">
                    <div class="auth-form-group text-left mt-3">
                      <label class="eb-input-label">Last Name</label>
                      <b-input-group class="eb-input-group">
                        <b-form-input
                          v-model="contactInfo.lastName"
                          v-validate="'required|max:30'"
                          :class="{ Invalid: errors.first('Last Name') }"
                          placeholder="Smith"
                          name="Last Name"
                        />
                      </b-input-group>
                      <b-form-text class="error-msg">{{
                        errors.first('Last Name')
                      }}</b-form-text>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" lg="12" md="12">
                  <div class="eb-form">
                    <div class="auth-form-group text-left mt-3">
                      <label class="eb-input-label">Email</label>
                      <b-input-group class="eb-input-group">
                        <b-form-input
                          v-model="contactInfo.email"
                          v-validate="'required|email'"
                          :class="{ Invalid: errors.first('Email') }"
                          placeholder="johnsmith@gamil.com"
                          type="email"
                          name="Email"
                        />
                      </b-input-group>
                      <b-form-text class="error-msg">{{
                        errors.first('Email')
                      }}</b-form-text>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" lg="12" md="12">
                  <div class="eb-form">
                    <div class="auth-form-group text-left mt-3">
                      <label class="eb-input-label">Your Query</label>
                      <b-input-group class="eb-input-group">
                        <b-form-textarea
                          v-model="contactInfo.userQuery"
                          v-validate="'required|min:2|max:1500'"
                          placeholder="Enter Your Query"
                          rows="5"
                          max-rows="5"
                          :class="{ Invalid: errors.first('Your Query') }"
                          no-resize
                          name="Your Query"
                        ></b-form-textarea>
                      </b-input-group>
                      <b-form-text class="error-msg">{{
                        errors.first('Your Query')
                      }}</b-form-text>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" lg="12" md="12" class="mt-2">
                  <div class="eb-form my-4">
                    <div class="auth-form-group text-left mt-1">
                      <b-input-group class="eb-input-group">
                        <button class="btn btn-link" @click="saveContact">
                          Submit
                        </button>
                      </b-input-group>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col cols="12" md="3" lg="3">
            <div class="contact-us-info mb-3">
              <div>
                <h5 class="contact-us-add-title">For Contact</h5>
                <h6 class="contact-us-add-1">Marvin McKinney</h6>
                <span class="contact-us-add-2 d-block"
                  >2464 Royal Ln. Mesa, New Jersey 45463</span
                >
                <span class="contact-us-add-2 d-block">(219) 555-0114</span>
                <span class="contact-us-add-mail d-block"
                  >mmkinney@gmail.com</span
                >
              </div>
              <div class="mt-3">
                <h6 class="contact-us-add-1">Marvin McKinney</h6>
                <span class="contact-us-add-2 d-block"
                  >2464 Royal Ln. Mesa, New Jersey 45463</span
                >
                <span class="contact-us-add-2 d-block">(219) 555-0114</span>
                <span class="contact-us-add-mail d-block"
                  >mmkinney@gmail.com</span
                >
              </div>
            </div>
            <div class="contact-us-info">
              <div>
                <h5 class="contact-us-add-title">Corporate Location</h5>
                <h6 class="contact-us-add-1">Empire State Building</h6>
                <span class="contact-us-add-2 d-block"
                  >20 W 34th St, New York, NY 10001, United States</span
                >
                <span class="contact-us-add-2 d-block">(219) 555-0114</span>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="contact-section-map">
      <b-container>
        <b-row>
          <b-col cols="12" md="12" lg="12">
            <b-row>
              <b-col>
                <div class="header-title text-left">
                  <h4>LOCATION MAP</h4>
                  <h1>Find Us On Google Map</h1>
                </div>
              </b-col>
            </b-row>
            <b-row class="my-5">
              <b-col>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29370.76964081188!2d72.65329872029496!3d23.047765786163193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86d53c2ed683%3A0x161958a4f45e809a!2sNikol%2C%20Ahmedabad%2C%20Gujarat%20380038!5e0!3m2!1sen!2sin!4v1615816202509!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>
<script>
import _ from 'lodash'
import { SAVE_CONTACT } from '~/services/ENDPOINT'
const insitialContactInfo = {
  firstName: '',
  lastName: '',
  email: '',
  userQuery: '',
}
export default {
  $_veeValidate: {
    validator: 'new',
  },
  data() {
    return {
      contactInfo: _.cloneDeep(insitialContactInfo),
    }
  },
  methods: {
    saveContact() {
      this.$validator.validate().then(async (isValid) => {
        if (isValid) {
          try {
            this.$nextTick(() => this.$nuxt.$loading.start())
            await SAVE_CONTACT(this.contactInfo)
            this.$toast.success('Your Feedback Added Successfully')
            this.contactInfo = _.cloneDeep(insitialContactInfo)
            this.$validator.reset()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          } catch ({ data }) {
            console.log(data)
          } finally {
            this.loader = false
            this.$nextTick(() => this.$nuxt.$loading.finish())
          }
        }
      })
    },
  },
}
</script>
