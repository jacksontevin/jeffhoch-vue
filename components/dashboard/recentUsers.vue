<template>
  <div>
    <ul v-for="(user, index) of usersList" :key="index">
      <li>
        <img :src="user.imageUrl" height="50" width="50" @error="imgErrr" />
        {{ `${user.firstName} ${user.lastName}` }} {{ user.email }}
      </li>
    </ul>
  </div>
</template>
<script>
import { DASHBOARD_RECENT_USER } from '~/services/ENDPOINT'
export default {
  name: 'RecentUsers',
  data() {
    return {
      usersList: [],
    }
  },
  created() {
    this.getRecentUsers()
  },
  methods: {
    imgErrr(e) {
      e.target.src = require('~/assets/images/avatar.svg')
    },
    async getRecentUsers() {
      try {
        const result = await DASHBOARD_RECENT_USER()
        this.usersList = result.data
      } catch (e) {}
    },
  },
}
</script>
