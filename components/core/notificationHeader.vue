<template>
  <div class="notification-bell">
    <div class="icon bc-transparent">
      <b-dropdown
        v-if="notifications && notifications.notifications.length > 0"
        size="lg"
        variant="link"
        toggle-class="text-decoration-none"
      >
        <template #button-content> <Bell /></template>
        <v-infinite-scroll
          :loading="notificationLoading"
          :offset="100"
          style="max-height: 50vh; overflow-y: scroll; overflow-x: hidden"
          @bottom="nextPage"
        >
          <b-dropdown-item
            v-for="(item, index) of notifications.notifications"
            :key="index"
            ><span
              :class="{ 'is-seen cursor-pointer': !item.isSeen }"
              @click="clickNotification(item)"
              >{{ item.title }} ({{ $moment(item.createdAt).fromNow() }})</span
            ></b-dropdown-item
          >
        </v-infinite-scroll>
      </b-dropdown>
      <span
        v-if="notificationCount && notificationCount > 0"
        class="notification-counts"
        >{{ notificationCount }}</span
      >
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Bell from '@/components/svg/Bell'
import { FETCH_NOTIFICATION_COUNT } from '~/services/ENDPOINT'
export default {
  name: 'NotificationHeader',
  components: {
    Bell,
  },
  data() {
    return {
      notificationPagination: {
        currentPage: 1,
        perRowPage: 15,
      },
      setIntervalRemove: null,
    }
  },
  computed: {
    ...mapGetters({
      notificationCount: 'notification/fetchNotificationCount',
      notifications: 'notification/fetchNotification',
      userType: 'auth/fetcUserType',
      isLoggedin: 'auth/loggedIn',
      notificationLoading: 'notification/notificationLoading',
      isAllowNextPage: 'notification/isAllowNextPage',
    }),
  },
  mounted() {
    this.$nextTick(() => {
      if (
        this.isLoggedin &&
        this.userType &&
        (this.userType === 'SUPER_ADMIN' || this.userType === 'SELLER')
      ) {
        this.getNotificationCount()
        this.getNotifications(true)
        this.notificationSedular()
      } else {
        this.$router.push('/')
        this.$toast.error('You Are Not Authorized To Access This Page')
      }
    })
  },
  destroyed() {
    clearInterval(this.setIntervalRemove)
  },
  methods: {
    ...mapActions('notification', [
      'SET_NOTIFICATION_COUNT',
      'SET_NOTIFICATION',
      'FETCH_NOTIFICATIONS',
      'UPDATE_NOTIFICATION',
    ]),
    notificationSedular() {
      this.setIntervalRemove = setInterval(() => {
        this.notificationPagination = {
          currentPage: 1,
          perRowPage: 15,
        }
        this.getNotificationCount()
        this.getNotifications(true)
      }, 120000)
    },
    nextPage() {
      this.notificationPagination.currentPage++
      this.getNotifications(false)
    },
    async getNotificationCount() {
      try {
        const data = await FETCH_NOTIFICATION_COUNT()
        this.SET_NOTIFICATION_COUNT(data.counts)
      } catch (e) {
        // this.getNotificationCount()
      }
    },
    getNotifications(isExit) {
      this.SET_NOTIFICATION({
        isExit,
        pagination: this.notificationPagination,
        isAllowNextPage: this.isAllowNextPage,
        notifications: this.notifications.notifications,
      })
    },
    clickNotification(item) {
      this.seenNotification([item._id])
      if (!item.isSeen) {
        const count = this.notificationCount + -1
        if (count === 0 || count > 0) {
          this.SET_NOTIFICATION_COUNT(count)
        }
      }
      // if (item.adminPath) this.$router.push(item.adminPath)
    },
    seenNotification(ids) {
      this.UPDATE_NOTIFICATION({
        ids,
        notifications: this.notifications.notifications,
      })
    },
  },
}
</script>
