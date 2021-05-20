export default {
  loading: `~/components/LoadingBar.vue`,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Long Island',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Discover A Commercial Property',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/svg', href: '/logo.svg' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://unpkg.com/esri-leaflet-geocoder@2.3.2/dist/esri-leaflet-geocoder.css',
      },
    ],
    script: [
      { src: 'https://unpkg.com/leaflet@1.5.1/dist/leaflet.js' },
      { src: 'https://unpkg.com/esri-leaflet@2.3.2/dist/esri-leaflet.js' },
      {
        src:
          'https://unpkg.com/esri-leaflet-geocoder@2.3.2/dist/esri-leaflet-geocoder.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/app.scss',
    'bootstrap-vue/dist/bootstrap-vue.css',
    'vue-multiselect/dist/vue-multiselect.min.css',
  ],

  // routers
  router: {
    base: '/',
  },

  // Global SCSS:
  styleResources: {
    scss: [],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/owl.js', ssr: false },
    { src: '@/plugins/vue-multiselect.js' },
    { src: '@/plugins/vue-form-wizard.js' },
    { src: '@/plugins/validator.js' },
    { src: '@/plugins/v-infinite-scroll.js' },
    { src: '@/plugins/mixins.js' },
    { src: '@/plugins/vue-lazyload' },
    { src: '@/plugins/vue-otp-2.js' },
    { src: '@/plugins/vue-apexcharts.js', ssr: false },
    // { src: '@/plugins/vue-socket.io.js' },
    // { src: '@/plugins/vue-notification.js' },
    { src: '@/plugins/vue-simple-scrollbar.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    ['bootstrap-vue/nuxt'],
    '@nuxtjs/moment',
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    'nuxt-socket-io',
    // nuxt-i18n internationalization
    // 'nuxt-i18n',
    // Dark and Light mode
    // '@nuxtjs/color-mode'
  ],
  io: {
    // module options
    sockets: [
      {
        name: 'chat',
        url: 'http://localhost:4003',
      },
    ],
  },
  toast: {
    position: 'top-right',
    duration: 4000,
    register: [
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
        },
      },
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // nuxt-i18n internationalization
  // i18n: {
  //   locales: [
  //   {
  //     code: 'en',
  //     iso: 'en-US',
  //     name: 'English',
  //   },
  //   {
  //     code: 'nl',
  //     iso: 'nl-NL',
  //     name: 'Dutch',
  //   }
  //   ],
  //   defaultLocale: 'en',
  //   vueI18n: {
  //     fallbackLocale: 'en',
  //     messages: {
  //       en: require('./locales/en.json'),
  //       nl: require('./locales/nl.json')
  //     }
  // }
  // },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  bootstrapVue: {
    icons: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
    vendor: ['vue-apexchart'],
  },
}
