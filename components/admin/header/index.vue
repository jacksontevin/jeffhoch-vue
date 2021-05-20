<template>
  <header class="eb-admin-header eb-header-fixed px-md-4 px-lg-4 px-2">
    <div
      v-if="responsiveValue"
      class="d-block d-md-none d-lg-none"
      @click="toggleSidebar"
    >
      <Menu />
    </div>
    <div class="profile-dropdown ml-auto d-flex align-content-center">
      <notification-header />
      <b-nav-item-dropdown
        right
        class="align-self-center profile-dropdown d-block"
        toggle-class="nav-user mr-0"
      >
        <template #button-content>
          <div class="media user-profile align-items-center">
            <span class="user-profile-img">
              <img
                :src="loggedInUser.imageUrl ? loggedInUser.imageUrl : ''"
                alt="user-image"
                class="rounded-circle align-self-center"
                @error="imgErrr"
              />
            </span>
            <div class="media-body text-left align-items-center">
              <h6 class="pro-user-name mx-2 my-0">
                {{ loggedInUser.firstName }} {{ loggedInUser.lastName }}
              </h6>
              <small class="text-muted mx-2">{{ userType }}</small>
            </div>
            <Chevron class="eb-chevron" />
          </div>
        </template>
        <li class="notify-item p-0">
          <nuxt-link to="/admin-land/settings" class="dropdown-item"
            ><span>Profile</span></nuxt-link
          >
        </li>
        <li class="notify-item p-0">
          <nuxt-link to="/chat" class="dropdown-item"
            ><span>Messages</span></nuxt-link
          >
        </li>
        <li class="notify-item p-0">
          <nuxt-link to="" class="dropdown-item"><span>Help</span></nuxt-link>
        </li>
        <!-- <b-dropdown-divider></b-dropdown-divider> -->
        <b-dropdown-item class="notify-item p-0" @click="logout">
          <span>Logout</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </div>
  </header>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Menu from '@/components/svg/Menu'
import NotificationHeader from '~/components/core/notificationHeader.vue'
export default {
  components: {
    Menu,
    NotificationHeader,
  },
  props: {
    responsiveValue: {
      type: Boolean,
    },
    toggleLeftSide: {
      type: Boolean,
    },
  },
  computed: {
    ...mapGetters({
      loggedInUser: 'auth/loggedInUser',
      userType: 'auth/fetcUserType',
    }),
  },
  methods: {
    ...mapActions('auth', ['SET_USER_LOGOUT']),
    imgErrr(e) {
      e.target.src = require('~/assets/images/avatar.png')
    },
    toggleSidebar() {
      this.$emit('toggle', !this.toggleLeftSide)
    },
    logout() {
      this.SET_USER_LOGOUT()
      this.$toast.success('See You Soon! Have A Nice Day 😊')
      this.$router.push('/')
    },
  },
}
</script>
