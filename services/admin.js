import { serviceMaker, methods } from './index'

export const ADMIN_FETCH_PROPERTIES = (pagination) =>
  serviceMaker(
    `/admin/fetch-all-properties?status=${pagination.status}&currentPage=${pagination.currentPage}&perRowPage=${pagination.perRowPage}&propertyType=${pagination.propertyType}&search=${pagination.search}&seller=${pagination.seller}`,
    methods.GET
  )

export const ADMIN_FETCH_ALL_ERRORS = (pagination) =>
  serviceMaker(
    `/error/fetch-all?currentPage=${pagination.currentPage}&perRowPage=${pagination.perRowPage}&search=${pagination.search}`,
    methods.GET
  )

export const ADMIN_FETCH_ALL_USERS = (pagination) =>
  serviceMaker(
    `/admin/fetch-all-users?currentPage=${pagination.currentPage}&perRowPage=${pagination.perRowPage}&status=${pagination.status}&role=${pagination.role}&search=${pagination.search}&sortBy=${pagination.sortBy}&orderBy=${pagination.orderBy}`,
    methods.GET
  )

export const ADMIN_FETCH_ALL_BROKER_LIST = (pagination) =>
  serviceMaker(
    `/admin/fetch-all-broker-list?currentPage=${pagination.currentPage}&perRowPage=${pagination.perRowPage}&status=${pagination.status}&search=${pagination.search}`,
    methods.GET
  )

export const ADMIN_FETCH_ERRORS_BY_ID = (id) =>
  serviceMaker(`/error/fetch-by-id/${id}`, methods.GET)

export const ADMIN_FETCH_PROPERTIES_BY_ID = (id) =>
  serviceMaker(`/admin/fetch-property-by-id/${id}`, methods.GET)

export const ADMIN_FETCH_PROPERTIES_CHANGE_STATUS = (payload) =>
  serviceMaker(`/admin/property-change-status`, methods.POST, payload)

export const ADMIN_FETCH_ALL_CATEGORIES = (id) =>
  serviceMaker(`/propertyType/fetch-all`, methods.GET)

export const ADMIN_FETCH_CATEGORY_BY_ID = (id) =>
  serviceMaker(`/propertyType/property-type/${id}`, methods.GET)

export const ADMIN_UPDATE_CATEGORY = (payload) =>
  serviceMaker(`/propertyType/update`, methods.POST, payload)

export const ADMIN_SAVE_CATEGORY = (payload) =>
  serviceMaker(`/propertyType/add`, methods.POST, payload)

export const ADMIN_FETCH_ALL_SELLER_SECIFIC_DATA = (payload) =>
  serviceMaker(`/admin/fetch-all-seller-specific`, methods.GET)

export const PROPERTY_SAVE = (payload) =>
  serviceMaker(`/property/save`, methods.POST, payload)

export const PROPERTY_EDIT = (payload) =>
  serviceMaker(`/property/update`, methods.POST, payload)

export const FETCH_USER_BY_ID = (id) =>
  serviceMaker(
    `/admin/fetch-seller-details-with-property-counts?_id=${id}`,
    methods.GET
  )

export const ADMIN_FETCH_USER_BY_ID = (id) =>
  serviceMaker(`/admin/fetch-user-details?_id=${id}`, methods.GET)

export const ADMIN_USER_UPDATE_BY_ID = (payload) =>
  serviceMaker(`/admin/fetch-users-update`, methods.POST, payload)
