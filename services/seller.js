import { serviceMaker, methods } from './index'

export const SELLER_FETCH_PROPERTIES = (pagination) =>
  serviceMaker(
    `/seller/fetch-all-properties?status=${pagination.status}&currentPage=${pagination.currentPage}&perRowPage=${pagination.perRowPage}&propertyType=${pagination.propertyType}&search=${pagination.search}`,
    methods.GET
  )
