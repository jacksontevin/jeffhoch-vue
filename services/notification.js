import { serviceMaker, methods } from './index'

export const FETCH_NOTIFICATION_COUNT = () =>
  serviceMaker(`/notification/count`, methods.GET)

export const FETCH_ADMIN_NOTIFICATION = (pagination) =>
  serviceMaker(
    `/notification?currentPage=${pagination.currentPage}&perRowPage=${pagination.perRowPage}`,
    methods.GET
  )

export const NOTIFICATION_SEEN = (payload) =>
  serviceMaker(`/notification/seen`, methods.POST, payload)
