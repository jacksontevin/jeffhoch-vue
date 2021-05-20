<template>
  <section class="auth-section">
    <div class="login-section">
      <b-container>
        <b-row>
          <b-col
            ref="confirmMailBoxBg"
            cols="12"
            lg="8"
            md="8"
            class="login-box mx-auto"
          >
            <span
              v-if="!confirmMail"
              class="auth-close-icon"
              @click="authLogin()"
            >
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <circle cx="23" cy="19" r="19" fill="white" />
                  <circle
                    cx="23"
                    cy="19"
                    r="18"
                    stroke="#F36F56"
                    stroke-width="2"
                  />
                </g>
                <path
                  d="M16 12L30 27"
                  stroke="#F36F56"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M30 12L15 27"
                  stroke="#F36F56"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <defs>
                  <filter
                    id="filter0_d"
                    x="0"
                    y="0"
                    width="46"
                    height="46"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.791667 0 0 0 0 0.791667 0 0 0 0 0.791667 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </span>
            <div class="auth-container">
              <Nuxt />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Auth',
  data() {
    return {
      confirmMail: false,
    }
  },
  watch: {
    $nuxt() {
      if (this.$nuxt._route.fullPath === '/auth/confirm-email') {
        this.confirmMail = true
        this.$refs.confirmMailBoxBg.classList.add('confirm-mail-box-bg')
      } else {
        this.$refs.confirmMailBoxBg.classList.remove('confirm-mail-box-bg')
        this.confirmMail = false
      }
    },
  },
  methods: {
    authLogin() {
      if (this.$route.path === '/auth') {
        this.$router.push(`/`)
      } else {
        this.$router.push(`/auth`)
      }
    },
  },
}
</script>
