<template>
  <div />
</template>
<script>
import { mapActions } from 'vuex'
import { AUTH_VERIFY_BY_TOKEN } from '@/services/ENDPOINT'
export default {
  name: 'VerifyAccountByToken',
  async mounted() {
    try {
      this.$nextTick(() => this.$nextTick(() => this.$nuxt.$loading.start()))
      const result = await AUTH_VERIFY_BY_TOKEN({
        token: this.$route.query.token,
      })
      if (result.redirectInquery) {
        this.$toast.success(result.message)
        this.$router.push(`/auth/question?id=${result.data._id}`)
      } else {
        this.setUser(result.data)
        this.$toast.success(
          `Howdy ${result.data.userInfo.firstName} ${result.data.userInfo.lastName} , Welcome to Long isLand!`
        )
        this.$nextTick(() => {
          if (result.data.userInfo.role === 'SUPER_ADMIN') {
            this.$router.push('/admin-land')
          } else if (result.data.userInfo.role === 'SELLER') {
            this.$router.push('/seller')
          } else {
            this.$router.push('/funnel')
          }
        })
      }
    } catch ({ data }) {
      this.$toast.error(data.message)
      this.$router.push(`/`)
    } finally {
      this.$nextTick(() => this.$nuxt.$loading.finish())
    }
  },
  methods: {
    ...mapActions('auth', ['setUser']),
  },
}
</script>
