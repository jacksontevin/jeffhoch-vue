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
  name: 'LeftSidebarAdmin',
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
          path: '/admin-land',
          label: 'Dashboard',
          activePath: ['admin-land'],
          icon: 'fa fa-th-list',
        },
        {
          path: '/admin-land/property-types',
          label: 'Property Types',
          activePath: ['admin-land-property-types'],
          icon: 'fa fa-database',
        },
        {
          path: '/admin-land/properties',
          label: 'Properties',
          activePath: [
            'admin-land-properties-add-property',
            'admin-land-properties',
            'admin-land-properties-details-id',
            'admin-land-properties-edit-property',
          ],
          icon: 'fa fa-building-o',
        },
        {
          path: '/admin-land/broker',
          label: 'Broker',
          activePath: ['admin-land-broker', 'admin-land-broker-id'],
          icon: 'fa fa-user-secret',
        },
        {
          path: '/admin-land/contacts',
          label: 'Contacts',
          activePath: ['admin-land-contacts'],
          icon: 'fa fa-feed',
        },
        {
          path: '/admin-land/users',
          label: 'Users',
          activePath: ['admin-land-users', 'admin-land-users-id'],
          icon: 'fa fa-users',
        },
        {
          path: '/admin-land/errors',
          label: 'Error Logs',
          activePath: ['admin-land-errors', 'admin-land-errors-id'],
          icon: 'fa fa-info',
        },
        {
          path: '/admin-land/notification',
          label: 'Notification',
          activePath: ['admin-land-notification'],
          icon: 'fa fa-bell',
        },
        {
          path: '/admin-land/settings',
          label: 'Settings',
          activePath: ['admin-land-settings'],
          icon: 'fa fa-repeat',
        },
      ],
    }
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
