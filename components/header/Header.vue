<template>
  <div class="navbar-header">
    <b-navbar toggleable="lg" class="container w-100 py-3">
      <nuxt-link to="/" class="navbar-brand"
        ><Logo class="mr-2" /> Long Island</nuxt-link
      >

      <b-navbar-toggle target="nav-collapse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link nav-links">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about" class="nav-link nav-links"
              >About Us</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link to="/properties" class="nav-link nav-links"
              >Properties</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link to="/blogs" class="nav-link nav-links">Blog</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/contact-us" class="nav-link nav-links"
              >Contact Us</nuxt-link
            >
          </li>
          <li v-if="isLoggedin">
            <b-nav-item-dropdown
              right
              class="align-self-center profile-dropdown"
              toggle-class="nav-user mr-0"
            >
              <template #button-content>
                <div class="media user-profile align-items-center">
                  <span class="user-profile-img">
                    <img
                      :src="
                        userInfo.imageUrl ||
                        require('../../assets/images/avatar.png')
                      "
                      alt="user-image"
                      class="rounded-circle align-self-center"
                      @error="imgErrr"
                    />
                  </span>
                  <div class="media-body text-left align-items-center">
                    <h6 class="pro-user-name mx-2 my-0">
                      <span
                        >{{ userInfo.firstName }} {{ userInfo.lastName }}</span
                      >
                    </h6>
                  </div>
                  <Chevron />
                </div>
              </template>
              <li
                v-if="isLoggedin && userType === 'SUPER_ADMIN'"
                class="notify-item p-0"
              >
                <nuxt-link to="/admin-land" class="dropdown-item"
                  ><span>Dashboard</span></nuxt-link
                >
              </li>
              <li
                v-if="isLoggedin && userType === 'SELLER'"
                class="notify-item p-0"
              >
                <nuxt-link to="/seller" class="dropdown-item"
                  ><span>Dashboard</span></nuxt-link
                >
              </li>
              <li class="notify-item p-0">
                <nuxt-link to="/profile" class="dropdown-item"
                  ><span>Profile</span></nuxt-link
                >
              </li>
              <li class="notify-item p-0">
                <nuxt-link to="/chat" class="dropdown-item"
                  ><span>Messages</span></nuxt-link
                >
              </li>
              <li class="notify-item p-0" @click="openSidebar">
                <nuxt-link to="" class="dropdown-item"
                  ><span>Help</span></nuxt-link
                >
              </li>
              <!-- <b-dropdown-divider></b-dropdown-divider> -->
              <b-dropdown-item class="notify-item p-0" @click="logout">
                <span>Logout</span>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </li>
          <li v-if="!isLoggedin" class="nav-item">
            <nuxt-link to="/auth" class="nav-link nav-links">Log In</nuxt-link>
          </li>
          <li v-if="!isLoggedin" class="align-items-center d-flex nav-item">
            <nuxt-link to="/auth/register" class="nav-link btn-link"
              >Get Started</nuxt-link
            >
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-sidebar
      v-model="isSidebarOpen"
      backdrop-variant="light"
      backdrop
      shadow
      right
      class="sidebar-card"
    >
      <template slot="header">
        <button
          type="button"
          aria-label="Close"
          class="close text-dark"
          @click="isSidebarOpen = false"
        >
          <svg
            viewBox="0 0 16 16"
            width="1em"
            height="1em"
            focusable="false"
            role="img"
            aria-label="x"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi-x b-icon bi"
          >
            <g>
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              ></path>
            </g>
          </svg>
        </button>
        <span>Recommended Help</span>
      </template>
      <div class="sidebar-card-body">
        <div class="sidebar-search-box">
          <h5>Search by keyword</h5>
          <b-input-group class="eb-input-group">
            <div class="auth-icon">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.98706 11.9735C7.31543 11.9732 8.60551 11.5285 9.65189 10.7103L12.9418 14L14 12.9418L10.7101 9.65213C11.5288 8.60569 11.9738 7.31538 11.9741 5.98674C11.9741 2.6858 9.28818 0 5.98706 0C2.68595 0 0 2.6858 0 5.98674C0 9.28768 2.68595 11.9735 5.98706 11.9735ZM5.98706 1.49669C8.46346 1.49669 10.4774 3.51048 10.4774 5.98674C10.4774 8.46301 8.46346 10.4768 5.98706 10.4768C3.51066 10.4768 1.49677 8.46301 1.49677 5.98674C1.49677 3.51048 3.51066 1.49669 5.98706 1.49669Z"
                  fill="#D8654F"
                />
              </svg>
            </div>
            <b-form-input
              placeholder="Ex: Corporate office space"
              type="search"
              name="search"
            /><br />
          </b-input-group>
        </div>
        <h5 class="my-4">RECOMMENDED ARTICLES</h5>
        <div class="sidebar-content">
          <div class="mb-3">
            <h6>The Impact of COVID-19 on Businesses</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <span class="read-more">Read More</span>
          </div>
          <div class="mb-3">
            <h6>The Impact of COVID-19 on Businesses</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <span class="read-more">Read More</span>
          </div>
          <div class="mb-3">
            <h6>The Impact of COVID-19 on Businesses</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <span class="read-more">Read More</span>
          </div>
          <div class="mb-3">
            <h6>The Impact of COVID-19 on Businesses</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <span class="read-more">Read More</span>
          </div>
          <div class="mb-3">
            <h6>The Impact of COVID-19 on Businesses</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <span class="read-more">Read More</span>
          </div>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      title: '',
      isSidebarOpen: false,
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'auth/loggedInUser',
      isLoggedin: 'auth/loggedIn',
      userType: 'auth/fetcUserType',
    }),
  },
  methods: {
    imgErrr(e) {
      e.target.src = require('~/assets/images/avatar.png')
    },
    ...mapActions('auth', ['SET_USER_LOGOUT']),
    logout() {
      this.SET_USER_LOGOUT()
      this.$toast.success('See You Soon! Have A Nice Day 😊')
      this.$router.push('/')
    },
    openSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
  },
}
</script>
<style>
.dropdown-toggle::after {
  display: none;
}
</style>
