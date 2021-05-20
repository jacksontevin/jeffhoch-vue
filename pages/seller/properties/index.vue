<template>
  <div class="admin-properties">
    <div class="row">
      <div class="col-md-8 col-lg-8 col-12 order-2 order-md-1 order-lg-1">
        <div
          class="d-flex flex-column flex-md-row flex-lg-row align-content-center justify-content-between"
        >
          <div
            class="admin-tabs mb-3 mb-md-0 mb-lg-0 order-2 order-md-1 order-lg-1"
          >
            <ul role="tablist" class="nav nav-tabs">
              <!---->
              <li
                v-for="(item, index) of propertyStatus"
                :key="index"
                role="presentation"
                class="nav-item"
              >
                <span
                  role="tab"
                  class="nav-link text-gray-700"
                  :class="[
                    pagination.status === item
                      ? 'active active-tab text-orange'
                      : '',
                  ]"
                  @click="changeStatus(item)"
                  >{{ item }}</span
                >
              </li>
              <!---->
            </ul>
          </div>
          <div
            class="sidebar-search-box mb-3 mb-md-0 mb-lg-0 order-1 order-md-2 order-lg-2"
          >
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
              /><br />
            </b-input-group>
          </div>
        </div>
      </div>
      <div
        class="col-md-4 col-lg-4 col-12 d-flex flex-column flex-md-row flex-lg-row justify-content-between text-right align-items-center order-1 order-md-2 order-lg-2"
      >
        <b-nav-item-dropdown
          right
          class="align-self-center profile-dropdown d-inline-block order-2 order-md-1 order-lg-1 mb-3 mb-md-0 mb-lg-0"
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
          <b-dropdown-item class="notify-item p-0" @click="handleFilter(null)"
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
        <router-link to="/seller/properties/add-property">
          <button class="btn btn-link order-1 order-md-2 order-lg-2 mb-3">
            <Plus class="mr-2" /> Add Property
          </button>
        </router-link>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12 col-md-12 col-lg-12">
        <div class="property-part-2">
          <section class="property-list">
            <div class="property-cards">
              <v-infinite-scroll
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
                    <nuxt-link
                      :to="`/seller/properties-details/${property._id}`"
                    >
                      <product-card
                        :user-type="'seller'"
                        :product-data="property"
                        :index="childIndex"
                      />
                    </nuxt-link>
                  </b-col>
                </b-row>
              </v-infinite-scroll>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Plus from '@/components/svg/Plus'
import {
  SELLER_FETCH_PROPERTIES,
  FETCH_PROPERTY_TYPE_SPECIFIC,
} from '@/services/ENDPOINT'
import _ from 'lodash'
import productCard from '../../../components/card/ProductCard1'
import {
  initialPagination,
  initialSelectCategory,
} from '../../seller/properties/config'

export default {
  name: 'SellerProperties',
  components: {
    productCard,
    Plus,
  },
  layout: 'seller',
  data() {
    return {
      tabIndex: 0,
      properties: [],
      loader: false,
      filterValue: 'Filter',
      pagination: _.cloneDeep(initialPagination),
      propertyStatus: ['All', 'Active', 'Sold', 'Pending', 'Declined'],
      categories: [],
      selectCategory: _.cloneDeep(initialSelectCategory),
    }
  },
  mounted() {
    const { status } = this.$route.query
    this.pagination.status = status || initialPagination.status
    this.fetchAllProprty()
    this.fetchAllCategories()
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
    nextPage() {
      this.pagination.currentPage = this.pagination.currentPage + 1
      this.fetchAllProprty()
    },
    changeStatus(status) {
      this.properties = []
      this.pagination.status = status
      this.pagination.currentPage = 1
      this.$router.push(`/seller/properties?status=${status}`)
      this.fetchAllProprty()
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
    async fetchAllProprty() {
      try {
        this.loader = true
        this.$nextTick(() => this.$nuxt.$loading.start())
        const result = await SELLER_FETCH_PROPERTIES(this.pagination)
        if (result.code === 200 && result.data.length > 0) {
          this.properties.push(...result.data)
          this.pagination = result.pagination
          this.pagination.status =
            typeof result.pagination.status === 'object'
              ? 'All'
              : result.pagination.status
        }
      } catch ({ data }) {
        console.log(data)
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
