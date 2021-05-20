import { serviceMaker, methods } from './index'

export const SAVE_CONTACT = (payload) =>
  serviceMaker(`/contact/save`, methods.POST, payload)

export const FETCH_ALL_CONTACT = (pagination) =>
  serviceMaker(
    `/contact/fetch-all?currentPage=${pagination.currentPage}&perRowPage=${pagination.perRowPage}&status=${pagination.status}&search=${pagination.search}`,
    methods.GET
  )

export const RESOLVED_CONTACT = (payload) =>
  serviceMaker(`/contact/resolve`, methods.POST, payload)

export const CONCTACTS_RESOLVED_RESEND_MAIL = (payload) =>
  serviceMaker(`/contact/resolve-resend-mail`, methods.POST, payload)
