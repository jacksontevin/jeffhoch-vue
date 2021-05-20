<template>
  <div class="eb-app">
    <div
      v-if="!toggleLeftSideDrawer && responsive"
      class="sidebar-overlay"
    ></div>
    <LeftMenu
      :toggle-left-side="toggleLeftSideDrawer"
      @toggle="toggleLeftSideDrawer = $event"
    />
    <div class="eb-body" :class="[responsive ? 'ml-0px' : 'ml-256px']">
      <Header
        :responsive-value="responsive"
        :toggle-left-side="toggleLeftSideDrawer"
        @toggle="toggleLeftSideDrawer = $event"
      />
      <main class="eb-main px-lg-4 px-2">
        <b-container fluid>
          <transition name="fade" mode="out-in">
            <Nuxt />
          </transition>
        </b-container>
      </main>
    </div>
    <!-- </CWrapper> -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import LeftMenu from '@/components/admin/LeftSidebar'
import Header from '@/components/admin/header/index'
export default {
  name: 'Admin',
  components: {
    LeftMenu,
    Header,
  },
  data() {
    return {
      responsive: false,
      toggleLeftSideDrawer: false,
      socket: null,
    }
  },
  computed: {
    ...mapGetters({
      userType: 'auth/fetcUserType',
      isLoggedin: 'auth/loggedIn',
    }),
  },
  mounted() {
    this.$nextTick(() => {
      if (this.isLoggedin && this.userType && this.userType === 'SUPER_ADMIN') {
        this.onResponsiveInverted()
        window.addEventListener('resize', this.onResponsiveInverted)
        this.initSocket()
      } else {
        this.$router.push('/')
        this.$toast.error('You Are Not Authorized To Access This Page')
      }
    })
  },
  methods: {
    onResponsiveInverted() {
      if (window.innerWidth < 767) {
        this.responsive = true
        this.toggleLeftSideDrawer = true
      } else {
        this.responsive = false
        this.toggleLeftSideDrawer = false
      }
    },
    initSocket() {
      this.socket = this.$nuxtSocket({
        name: 'notification',
        reconnection: true,
      })
      this.socket.on('adminNotification', (msg, cb) => {
        console.log(msg)
      })
    },
  },
}
</script>
<style lang="scss"></style>
