import { serviceMaker, methods } from './index'

export const UPDATE_PROFILE = (payload) =>
  serviceMaker(`/accounts/update`, methods.POST, payload)

export const WHO_AM_I = (payload) =>
  serviceMaker(`/accounts/who-am-i`, methods.GET)

export const GET_S3_PROFILE_UPLOAD_URL = (payload) =>
  serviceMaker(
    `/get-url?type=${payload.floder}&extension=${payload.extension}`,
    methods.GET
  )

export const UPDATE_ACCOUNT_PIC = (payload) =>
  serviceMaker(`/accounts/change-pic`, methods.POST, payload)

export const ACCOUNT_CHANGE_PASSWORD = (payload) =>
  serviceMaker(`/accounts/change-password`, methods.POST, payload)
