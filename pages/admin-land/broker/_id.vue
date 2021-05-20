<template>
  <section class="admin-broker-section admin-properties-detail">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12">
        <div class="tbl-card mt-3 px-3">
          <div class="row">
            <div class="col-md-4 col-lg-4 col-12 right-border-section">
              <div class="broker-profile property-broker-profile">
                <div class="media user-profile align-items-center">
                  <span class="user-profile-img">
                    <img
                      :src="userInfo.image"
                      alt="user-image"
                      class="rounded-circle align-self-center"
                      height="50"
                      width="50"
                      @error="imgErrr"
                    />
                  </span>
                  <div class="media-body text-left align-items-center">
                    <h6 class="pro-user-name mx-2 my-0">{{ userInfo.name }}</h6>
                    <small class="text-muted mx-2">For better Living</small>
                  </div>
                </div>
                <p v-if="userInfo.address">
                  <span class="mr-2"
                    ><svg
                      width="8"
                      height="12"
                      viewBox="0 0 12 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 0.599426C2.68286 0.599426 0 3.4135 0 6.89289C0 11.613 6 18.5807 6 18.5807C6 18.5807 12 11.613 12 6.89289C12 3.4135 9.31714 0.599426 6 0.599426ZM6 9.14055C5.43168 9.14055 4.88663 8.90375 4.48477 8.48223C4.08291 8.06071 3.85714 7.48901 3.85714 6.89289C3.85714 6.29677 4.08291 5.72507 4.48477 5.30355C4.88663 4.88203 5.43168 4.64522 6 4.64522C6.56832 4.64522 7.11337 4.88203 7.51523 5.30355C7.91709 5.72507 8.14286 6.29677 8.14286 6.89289C8.14286 7.48901 7.91709 8.06071 7.51523 8.48223C7.11337 8.90375 6.56832 9.14055 6 9.14055Z"
                        fill="#203858"
                      />
                    </svg> </span
                  >{{ userInfo.address }}
                </p>
                <p v-if="userInfo.mobile">
                  <span class="mr-2"
                    ><svg
                      width="10"
                      height="15"
                      viewBox="0 0 15 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.4433 1.22624L3.68235 1.48241C3.00366 1.71055 2.39751 2.15035 1.93528 2.75002C1.47304 3.34968 1.17396 4.08425 1.07326 4.86722C0.757615 7.31985 1.46329 10.1876 3.16479 13.4763C4.86203 16.7568 6.73038 18.8702 8.78683 19.7953C9.44759 20.0924 10.1709 20.1716 10.8708 20.0234C11.5707 19.8752 12.2178 19.5058 12.735 18.9591L13.3121 18.3495C13.686 17.9543 13.9186 17.4211 13.9667 16.8489C14.0147 16.2768 13.8751 15.7046 13.5735 15.2387L12.1324 13.009C11.9376 12.708 11.6632 12.4826 11.3478 12.3643C11.0324 12.2461 10.6917 12.2409 10.3735 12.3496L8.19381 13.0932L8.13748 13.1051C7.8973 13.1442 7.34359 12.5643 6.65279 11.2289C5.93011 9.83177 5.7792 9.01462 5.979 8.80352L7.08853 7.64955C7.4937 7.22775 7.7704 6.67499 7.8798 6.06881C7.9892 5.46262 7.92583 4.83343 7.69856 4.26948L6.99713 2.52489C6.78553 1.99939 6.40977 1.57779 5.94001 1.33881C5.47026 1.09983 4.93862 1.05982 4.44436 1.22624H4.4433ZM6.02682 3.01115L6.72931 4.75574C6.86592 5.09402 6.90412 5.47156 6.83854 5.83532C6.77297 6.19907 6.60692 6.53076 6.36372 6.78378L5.25206 7.93893C4.54001 8.68966 4.77594 9.97409 5.73137 11.8219C6.63154 13.5605 7.452 14.4192 8.33303 14.2697L8.46481 14.2389L10.6839 13.4834C10.7899 13.4471 10.9036 13.4487 11.0088 13.488C11.114 13.5274 11.2055 13.6025 11.2705 13.7028L12.7116 15.9325C12.8625 16.1655 12.9325 16.4517 12.9084 16.7379C12.8844 17.0242 12.768 17.2909 12.5809 17.4885L12.0038 18.0981C11.6344 18.4883 11.1723 18.752 10.6725 18.8577C10.1726 18.9635 9.65614 18.9069 9.18431 18.6947C7.37973 17.8834 5.67398 15.9538 4.08514 12.8833C2.49312 9.80568 1.84908 7.1882 2.1254 5.03563C2.19728 4.47621 2.41094 3.95137 2.7412 3.52293C3.07146 3.0945 3.50457 2.78032 3.9895 2.6174L4.7515 2.36123C4.99855 2.27838 5.26417 2.29864 5.49882 2.41822C5.73347 2.53781 5.92114 2.74855 6.02682 3.01115Z"
                        fill="#203858"
                        stroke="#203858"
                        stroke-width="0.5"
                      />
                    </svg> </span
                  >{{ userInfo.mobile }}
                </p>
                <p v-if="userInfo.email">
                  <span class="mr-2"
                    ><svg
                      width="12"
                      height="10"
                      viewBox="0 0 18 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5 1C15.163 1 15.7989 1.26339 16.2678 1.73223C16.7366 2.20107 17 2.83696 17 3.5V11.5C17 12.163 16.7366 12.7989 16.2678 13.2678C15.7989 13.7366 15.163 14 14.5 14H3.5C2.83696 14 2.20107 13.7366 1.73223 13.2678C1.26339 12.7989 1 12.163 1 11.5V3.5C1 2.83696 1.26339 2.20107 1.73223 1.73223C2.20107 1.26339 2.83696 1 3.5 1H14.5ZM16 4.961L9.254 8.931C9.19022 8.96845 9.11893 8.99128 9.04527 8.99785C8.9716 9.00442 8.8974 8.99457 8.828 8.969L8.746 8.931L2 4.963V11.5C2 11.8978 2.15804 12.2794 2.43934 12.5607C2.72064 12.842 3.10218 13 3.5 13H14.5C14.8978 13 15.2794 12.842 15.5607 12.5607C15.842 12.2794 16 11.8978 16 11.5V4.961ZM14.5 2H3.5C3.10218 2 2.72064 2.15804 2.43934 2.43934C2.15804 2.72064 2 3.10218 2 3.5V3.802L9 7.92L16 3.8V3.5C16 3.10218 15.842 2.72064 15.5607 2.43934C15.2794 2.15804 14.8978 2 14.5 2Z"
                        fill="#203858"
                        stroke="#203858"
                        stroke-width="0.7"
                      />
                    </svg> </span
                  >{{ userInfo.email }}
                </p>
              </div>
            </div>
            <div class="col-lg-8 col-md-8 col-12">
              <div class="about-us">
                <h4>About Us</h4>
                <p>
                  {{ userInfo.bio }}
                </p>
              </div>
              <hr />
              <div class="status-counter">
                <div class="counter-total">
                  <h4>Total</h4>
                  <b-badge pill class="counter-value">{{
                    userInfo.total
                  }}</b-badge>
                </div>
                <div class="counter-total">
                  <h4>Sold</h4>
                  <b-badge pill class="counter-value">{{
                    userInfo.sold
                  }}</b-badge>
                </div>
                <div class="counter-total">
                  <h4>Appove</h4>
                  <b-badge pill class="counter-value">{{
                    userInfo.appove
                  }}</b-badge>
                </div>
                <div class="counter-total">
                  <h4>Pending</h4>
                  <b-badge pill class="counter-value">{{
                    userInfo.pending
                  }}</b-badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-12 col-md-12 col-lg-12 my-3">
        <div class="row">
          <div class="col-md-6 col-lg-4 col-12">
            <label class="mr-3">Sort By:</label>
            <b-nav-item-dropdown
              right
              class="align-self-center profile-dropdown border-dropdown d-inline-block order-2 order-md-1 order-lg-1 mb-3"
              toggle-class="nav-user mr-0"
            >
              <template #button-content>
                <div class="media user-profile align-items-center">
                  <div class="media-body text-left align-items-center">
                    <h6 class="filter-title mx-2 my-0">
                      {{ selectCategory.name }}
                    </h6>
                  </div>
                  <Chevron class="eb-chevron" />
                </div>
              </template>
              <b-dropdown-item
                class="notify-item p-0"
                @click="handleFilter(null)"
                >Select Category</b-dropdown-item
              >
              <b-dropdown-item
                v-for="(category, index) of categories"
                :key="index"
                class="notify-item p-0"
                @click="handleFilter(category)"
                >{{ category.name }}</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </div>
          <div class="col-md-6 col-lg-4 col-12">
            <div class="sidebar-search-box order-1 order-md-2 order-lg-2">
              <b-input-group class="eb-input-group">
                <div class="auth-icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.98706 11.9735C7.31543 11.9732 8.60551 11.5285 9.65189 10.7103L12.9418 14L14 12.9418L10.7101 9.65213C11.5288 8.60569 11.9738 7.31538 11.9741 5.98674C11.9741 2.6858 9.28818 0 5.98706 0C2.68595 0 0 2.6858 0 5.98674C0 9.28768 2.68595 11.9735 5.98706 11.9735ZM5.98706 1.49669C8.46346 1.49669 10.4774 3.51048 10.4774 5.98674C10.4774 8.46301 8.46346 10.4768 5.98706 10.4768C3.51066 10.4768 1.49677 8.46301 1.49677 5.98674C1.49677 3.51048 3.51066 1.49669 5.98706 1.49669Z"
                      fill="#D8654F"
                    />
                  </svg>
                </div>
                <b-form-input
                  v-model="pagination.search"
                  placeholder="Search Here"
                  type="search"
                  name="search"
                  @input="searchAction"
                />
              </b-input-group>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12 col-md-12 col-lg-12">
        <div class="property-part-2">
          <section class="property-list">
            <div class="property-cards">
              <v-infinite-scroll
                v-if="properties.length > 0"
                :loading="loader"
                :offset="80"
                style="max-height: 80vh; overflow-y: scroll; overflow-x: hidden"
                @bottom="nextPage"
              >
                <b-row>
                  <b-col
                    v-for="(property, childIndex) in properties"
                    :key="childIndex"
                    cols="12"
                    md="3"
                    lg="3"
                    class="property-card-md px-1"
                  >
                    <nuxt-link :to="`properties-details/${property._id}`">
                      <product-card
                        :user-type="'admin'"
                        :product-data="property"
                        :index="childIndex"
                      />
                    </nuxt-link>
                  </b-col>
                </b-row>
              </v-infinite-scroll>
              <h1 v-else-if="!loader" class="text-center pt-3">
                Properties Not found
              </h1>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import _ from 'lodash'
import {
  ADMIN_FETCH_PROPERTIES,
  FETCH_PROPERTY_TYPE_SPECIFIC,
  FETCH_USER_BY_ID,
} from '@/services/ENDPOINT'
import productCard from '../../../components/card/ProductCard1'
import { initialSelectCategory, initialPagination } from './config'
export default {
  name: 'AdminBrokerDetails',
  components: {
    productCard,
  },
  layout: 'admin',
  data() {
    return {
      categories: [],
      properties: [],
      loader: false,
      pagination: _.cloneDeep(initialPagination),
      selectCategory: _.cloneDeep(initialSelectCategory),
      paramsId: null,
      userInfo: {
        total: 0,
      },
    }
  },
  mounted() {
    this.paramsId = this.$route.params.id
    if (this.paramsId) {
      this.fetchAllCategories()
      this.fetchUserInfo()
      this.fetchAllProprty()
    } else {
      this.$router.go(-1)
    }
  },
  methods: {
    searchAction() {
      const timer = this.searchAction.timer
      if (timer) {
        clearTimeout(timer)
      }
      this.searchAction.timer = setTimeout(() => {
        this.properties = []
        this.pagination.current = 1
        this.fetchAllProprty()
      }, 500)
    },
    imgErrr(e) {
      e.target.src = require('~/assets/images/avatar.png')
    },
    async fetchUserInfo() {
      try {
        const data = await FETCH_USER_BY_ID(this.paramsId)
        this.userInfo = data
      } catch (e) {
      } finally {
        this.loader = false
        this.$nextTick(() => this.$nuxt.$loading.finish())
      }
    },
    async fetchAllCategories() {
      const payload = {
        currentPage: 1,
        perRowPage: 200,
        filed: 'name _id',
        search: '',
      }
      try {
        const { data } = await FETCH_PROPERTY_TYPE_SPECIFIC(payload)
        this.categories = data.data
      } catch (e) {
      } finally {
        this.loader = false
        this.$nextTick(() => this.$nuxt.$loading.finish())
      }
    },
    nextPage() {
      this.pagination.currentPage = this.pagination.currentPage + 1
      this.fetchAllProprty()
    },
    async fetchAllProprty() {
      try {
        this.loader = true
        this.$nextTick(() => this.$nuxt.$loading.start())
        this.pagination.seller = this.paramsId
        const result = await ADMIN_FETCH_PROPERTIES(this.pagination)
        if (result.code === 200 && result.data.length > 0) {
          this.properties.push(...result.data)
          this.pagination = result.pagination
          this.pagination.status =
            typeof result.pagination.status === 'object'
              ? 'All'
              : result.pagination.status
        }
      } catch ({ data }) {
        console.log('error', data)
      } finally {
        this.loader = false
        this.$nextTick(() => this.$nuxt.$loading.finish())
      }
    },
    handleFilter(e) {
      if (e) this.selectCategory = _.cloneDeep(e)
      else this.selectCategory = _.cloneDeep(initialSelectCategory)
      this.properties = []
      this.pagination.currentPage = 1
      this.pagination.propertyType = this.selectCategory._id || null
      this.fetchAllProprty()
    },
  },
}
</script>
