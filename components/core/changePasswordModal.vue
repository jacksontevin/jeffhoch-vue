<template>
  <b-modal
    v-model="showModal"
    centered
    title="Change Password"
    @ok="actionChangePassword"
    @change="changeModal"
  >
    <b-form-group>
      <div class="auth-form">
        <div class="auth-form-group text-left mt-3">
          <label class="eb-input-label">Old Password</label>
          <b-input-group class="eb-input-group">
            <b-form-input
              v-model="passwordInfo.oldPassword"
              v-validate="'required'"
              :class="{ Invalid: errors.first('Old Password') }"
              placeholder="********"
              type="password"
              name="Old Password"
            /><br />
          </b-input-group>
          <b-form-text class="error-msg">{{
            errors.first('Old Password')
          }}</b-form-text>
        </div>
        <div class="auth-form-group text-left mt-3">
          <label class="eb-input-label">Password</label>
          <b-input-group class="eb-input-group">
            <b-form-input
              ref="password"
              v-model="passwordInfo.newPassword"
              v-validate="'required|strong_password'"
              :class="{ Invalid: errors.first('password') }"
              placeholder="********"
              type="password"
              name="password"
            /><br />
          </b-input-group>
          <b-form-text class="error-msg">{{
            errors.first('password')
          }}</b-form-text>
        </div>
        <div class="auth-form-group text-left mt-3">
          <label class="eb-input-label">Confirm Password</label>
          <b-input-group class="eb-input-group">
            <b-form-input
              v-model="passwordInfo.confirmPassword"
              v-validate="'required|confirmed:password'"
              :class="{ Invalid: errors.first('Confirm Password') }"
              placeholder="********"
              type="password"
              name="Confirm Password"
            /><br />
          </b-input-group>
          <b-form-text class="error-msg">{{
            errors.first('Confirm Password')
          }}</b-form-text>
        </div>
      </div>
    </b-form-group>
    <template #modal-footer="{ ok, cancel }">
      <b-button size="sm" variant="danger" @click="cancel()"> Cancel </b-button>
      <b-button size="sm" variant="success" @click="ok()">
        Change Password
      </b-button>
    </template>
  </b-modal>
</template>
<script>
import { ACCOUNT_CHANGE_PASSWORD } from '~/services/ENDPOINT'
export default {
  name: 'ChangePasswordModal',
  $_veeValidate: {
    validator: 'new',
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showModal: false,
      passwordInfo: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      },
    }
  },
  mounted() {
    this.showModal = this.isShow
    this.passwordInfo = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    }
  },
  methods: {
    actionChangePassword(e) {
      e.preventDefault()
      // eslint-disable-next-line require-await
      this.$validator.validate().then(async (isValid) => {
        if (isValid) {
          try {
            this.$nextTick(() => this.$nuxt.$loading.start())
            const result = await ACCOUNT_CHANGE_PASSWORD(this.passwordInfo)
            this.changeModal()
            this.$toast.success(result.message)
          } catch ({ data }) {
            this.$toast.error(data.message)
          } finally {
            this.$nextTick(() => this.$nuxt.$loading.finish())
          }
        }
      })
    },
    changeModal() {
      this.$emit('close')
    },
  },
}
</script>
