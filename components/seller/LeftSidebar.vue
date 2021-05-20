<template>
  <b-sidebar
    v-model="leftSidebar"
    width="256px"
    class="admin-sidebar-card"
    :class="[toggleLeftSide ? 'show-b-sidebar-outer' : '']"
  >
    <template slot="header">
      <div class="sidebar-header">
        <nuxt-link to="/" class="navbar-brand font-weight-bold"
          ><Logo class="mr-2" /> Long Island</nuxt-link
        >
        <close
          class="colse-b-sidebar d-block d-md-none d-lg-none"
          @click="toggleSidebar"
        />
      </div>
    </template>
    <div class="side-menu mt-5">
      <ul>
        <li
          v-for="(item, index) of sideMenu"
          :key="index"
          :class="
            item.activePath.includes($route.name) ? 'side-bar-active-menu' : ''
          "
        >
          <nuxt-link :to="item.path">
            <i :class="item.icon" /> {{ item.label }}</nuxt-link
          >
        </li>
      </ul>
    </div>
  </b-sidebar>
</template>
<script>
import Close from '@/components/svg/Close'
// import Dashbord from '@/components/svg/Dashbord'
export default {
  name: 'LeftSidebarSeller',
  components: {
    Close,
    // Dashbord,
  },
  props: {
    responsiveValue: {
      type: Boolean,
    },
    toggleLeftSide: {
      type: Boolean,
    },
  },
  data() {
    return {
      leftSidebar: true,
      sideMenu: [
        {
          path: '/seller',
          label: 'Dashboard',
          activePath: ['seller'],
          icon: 'fa fa-th-list',
        },
        {
          path: '/seller/messages',
          label: 'Messages',
          activePath: ['/seller/messages'],
          icon: 'fa fa-envelope-open-o',
        },
        {
          path: '/seller/properties',
          label: 'Properties',
          activePath: [
            'seller-properties',
            'seller-properties-add-property',
            'seller-properties-details-id',
            'seller-properties-edit-property',
          ],
          icon: 'fa fa-building-o',
        },
        {
          path: '/seller/clients',
          label: 'Clients',
          activePath: ['seller-clients'],
          icon: 'fa fa-users',
        },
        {
          path: '/seller/profile',
          label: 'Profile',
          activePath: ['seller-profile'],
          icon: 'fa fa-user',
        },
        {
          path: '/seller/notification',
          label: 'Notification',
          activePath: ['seller-notification'],
          icon: 'fa fa-bell',
        },
      ],
    }
  },
  watch: {
    $route(v) {
      console.log(v)
    },
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle', !this.toggleLeftSide)
    },
  },
}
</script>
<style>
.side-bar-active-menu {
  cursor: not-allowed !important;
  background-color: #f36f56;
}
</style>
