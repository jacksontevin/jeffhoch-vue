import { serviceMaker, methods } from './index'

export const DASHBOARD_PROPERTIES_COUNTS = () =>
  serviceMaker(`/dashboard/counts`, methods.GET)

export const DASHBOARD_RECENT_USER = () =>
  serviceMaker(`/dashboard/recent-users`, methods.GET)

export const DASHBOARD_PROPERTIES_COUNTS_BASE_ON_PROPERTY_TYPE = () =>
  serviceMaker(`/dashboard/property-counts-base-on-property-type`, methods.GET)
