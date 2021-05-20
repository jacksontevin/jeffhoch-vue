<template>
  <div>
    <ul>
      <v-infinite-scroll
        :loading="notificationLoading"
        :offset="100"
        style="max-height: 680px; overflow-y: scroll; overflow-x: hidden"
        @bottom="nextPage"
      >
        <li
          v-for="(item, index) of notifications.notifications"
          :key="index"
          class="py-2"
        >
          <span
            :class="{ 'is-seen cursor-pointer': !item.isSeen }"
            @click="clickNotification(item)"
            >{{ item.title }} ({{ $moment(item.createdAt).fromNow() }})</span
          >
        </li>
      </v-infinite-scroll>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { FETCH_NOTIFICATION_COUNT } from '~/services/ENDPOINT'
export default {
  name: 'Notifications',
  layout: 'admin',
  data() {
    return {
      notificationPagination: {
        currentPage: 1,
        perRowPage: 20,
      },
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
      if (this.isLoggedin) {
        this.getNotificationCount()
        this.notificationPagination.currentPage = 1
        this.getNotifications(true)
      } else {
        this.$router.push('/')
        this.$toast.error('You Are Not Authorized To Access This Page')
      }
    })
  },
  methods: {
    ...mapActions('notification', [
      'SET_NOTIFICATION_COUNT',
      'SET_NOTIFICATION',
      'FETCH_NOTIFICATIONS',
      'UPDATE_NOTIFICATION',
    ]),
    async getNotificationCount() {
      try {
        const data = await FETCH_NOTIFICATION_COUNT()
        this.SET_NOTIFICATION_COUNT(data.counts)
      } catch (e) {
        // this.getNotificationCount()
      }
    },
    nextPage() {
      this.notificationPagination.currentPage++
      this.getNotifications(false)
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
