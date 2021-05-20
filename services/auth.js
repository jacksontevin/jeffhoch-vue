import { serviceMaker, methods } from './index'

export const AUTH_LOGIN = (payload) =>
  serviceMaker(`/auth/login`, methods.POST, payload)
export const AUTH_BUYER_REGISER = (payload) =>
  serviceMaker(`/auth/register`, methods.POST, payload)
export const AUTH_VERIFY_OTP = (payload) =>
  serviceMaker(`/auth/verify-otp`, methods.POST, payload)
export const AUTH_VERIFY_BY_TOKEN = (payload) =>
  serviceMaker(`/auth/verify-account-token`, methods.POST, payload)
export const AUTH_SAVE_INQUERY = (payload) =>
  serviceMaker(`/inquiries/save`, methods.POST, payload)
export const AUTH_FATCH_ALL_SPESIFIC_PROPERTY = (payload) =>
  serviceMaker(`/property/specific-property`, methods.GET)
export const AUTH_FATCH_PROPERTY_BY_ID = (id) =>
  serviceMaker(`/property/fetch-by-id/${id}`, methods.GET)

export const FETCH_SIMILAR_PROPERTY = (id) =>
  serviceMaker(`/property/fetch-similar/${id}`, methods.GET)

export const RECOVER_PASSWORD_REQUEST = (payload) =>
  serviceMaker(`/auth/recover-password-request`, methods.POST, payload)

export const AUTH_CHANGE_PASSWORD = (payload) =>
  serviceMaker(`/auth/recover-password`, methods.POST, payload)
