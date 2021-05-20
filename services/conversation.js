import { serviceMaker, methods } from './index'

export const FETCH_CONVERSATON_LIST = (payload) =>
  serviceMaker(`/conversation/list`, methods.GET)
