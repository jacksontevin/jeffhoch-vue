<template>
  <div style="display: flex; flex-direction: row">
    <v-otp-input
      ref="otpInput"
      input-classes="otp-input"
      separator="-"
      :num-inputs="6"
      @on-complete="handleOnComplete"
    />
  </div>
</template>
<script>
import { AUTH_VERIFY_OTP } from '@/services/ENDPOINT'

export default {
  name: 'VerifyOtp',
  layout: 'auth',
  data() {
    return {
      otp: null,
    }
  },
  mounted() {
    console.log(this.$route.query)
  },
  methods: {
    async handleOnComplete(otp) {
      this.otp = otp
      const payload = {
        otp: otp || '2511',
        id: this.$route.query.id || '',
      }
      try {
        this.$nextTick(() => this.$nuxt.$loading.start())
        const result = await AUTH_VERIFY_OTP(payload)
        alert(result.message)
        this.$router.push(`/auth/question?id=${result.data._id}`)
      } catch ({ data }) {
        alert(data.message)
      } finally {
        this.$nextTick(() => this.$nuxt.$loading.finish())
      }
    },
  },
}
</script>
<style>
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.otp-input .error {
  border: 1px solid red !important;
}
</style>
