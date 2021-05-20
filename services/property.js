import { serviceMaker, methods } from './index'

export const FETCH_PROPERTY_TYPE_SPECIFIC = (params) =>
  serviceMaker(
    `/propertyType/fetch-all?currentPage=${params.currentPage}&perRowPage=${params.perRowPage}&filed=${params.filed}&search=${params.search}`,
    methods.GET
  )

export const FETCH_PROPERTY_BY_PROPERTY_TYPE = (payload) =>
  serviceMaker(`/property/fetch-property-filter`, methods.POST, payload)

export const FETCH_ALL_SUB_PROPRTY_TYPE = () =>
  serviceMaker(`/sub-property-type/fetch-all`, methods.GET)

export const FETCH_ALL_TRENDING_PROPERTIES = () =>
  serviceMaker(`/property/fetch-trending-properties`, methods.GET)

export const FETCH_CATEGORY_WISH_PROPERTYY = (search) =>
  serviceMaker(
    `/property/fetch-categoties-wise-properties?search=${search}`,
    methods.GET
  )

export const FETCH_FUNNEL_PROPERTYY = () =>
  serviceMaker(`/property/fetch-funnel-property`, methods.GET)

export const FETCH_ALL_RECENT_UPLOADED_PROPERTIES = () =>
  serviceMaker(`/property/fetch-recent-uploaded-property`, methods.GET)
