import * as types from './types'
import {
  FETCH_ADMIN_NOTIFICATION,
  NOTIFICATION_SEEN,
} from '~/services/ENDPOINT'
export default {
  [types.SET_NOTIFICATION_COUNT](context, payload) {
    context.commit(types.SET_NOTIFICATION_COUNT, payload)
  },
  async [types.SET_NOTIFICATION](context, payload) {
    if (payload.pagination.currentPage === 1) {
      context.commit(types.SET_NOTIFICATION_NEXT_ALLOW, true)
    }
    if (payload.isAllowNextPage) {
      try {
        context.commit(types.SET_NOTIFICATION_LOADER, true)
        const data = await FETCH_ADMIN_NOTIFICATION(payload.pagination)

        if (data.notifications.length > 0) {
          context.commit(types.SET_NOTIFICATION_NEXT_ALLOW, true)
        } else {
          context.commit(types.SET_NOTIFICATION_NEXT_ALLOW, false)
        }

        if (payload.isExit) {
          console.log('true if')
          context.commit(types.SET_NOTIFICATION, data)
        } else {
          console.log('true else', payload.notifications)
          const newData = data
          newData.notifications = [
            ...payload.notifications,
            ...data.notifications,
          ]
          context.commit(types.SET_NOTIFICATION, newData)
        }
      } catch (e) {
        // this.getNotificationCount()
      } finally {
        context.commit(types.SET_NOTIFICATION_LOADER, false)
      }
    }
  },
  async [types.UPDATE_NOTIFICATION](context, payload) {
    await NOTIFICATION_SEEN({ ids: payload.ids })
    // eslint-disable-next-line array-callback-return
    const notifications = payload.notifications.filter((i) => {
      if (payload.ids.includes(i._id)) {
        i.isSeen = true
      }
      return true
    })
    context.commit(types.SET_NOTIFICATION, notifications)
  },
}
