<template>
  <div v-if="loading" class="loading-page">
    <b-spinner class="loader-component" label="Spinning"></b-spinner>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    loading: false,
  }),
  mounted() {
    this.$nextTick(() => {
      const token = localStorage.getItem('eb-island:access_token')
      if (token) {
        const loggedInUser = JSON.parse(
          localStorage.getItem('eb-island:loggedInUser')
        )
        const paylaod = {
          token,
          userInfo: loggedInUser,
        }
        this.setUser(paylaod)
      }
    })
  },
  methods: {
    ...mapActions('auth', ['setUser']),
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 999999;
}
.loader-component {
  color: #eb594c;
  height: 100px;
  width: 100px;
}
</style>
