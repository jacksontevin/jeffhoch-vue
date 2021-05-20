<template>
  <section class="admin-broker-section">
    <div class="admin-page-header">
      <h2>Users List</h2>
      <div
        class="d-flex flex-column flex-md-row flex-lg-row justify-content-between align-items-center"
      >
        <div class="sidebar-search-box mb-3 order-1 order-md-2 order-lg-2">
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
        <div class="sidebar-search-box mb-3 order-1 order-md-2 order-lg-2">
          <b-nav-item-dropdown
            right
            class="align-self-center profile-dropdown d-inline-block order-2 order-md-1 order-lg-1 mb-3 mb-md-0 mb-lg-0 mx-2"
            toggle-class="nav-user mr-0"
          >
            <template #button-content>
              <div class="media user-profile align-items-center">
                <div class="media-body text-left align-items-center">
                  <h6 class="filter-title mx-2 my-0">
                    <small class="mr-2">Page Status : </small>
                    {{ statusLable }}
                  </h6>
                </div>
                <Chevron class="eb-chevron" />
              </div>
            </template>
            <b-dropdown-item class="notify-item p-0" disabled
              >Select Page Status</b-dropdown-item
            >
            <b-dropdown-item
              v-for="(status, index) of statusOptions"
              :key="index"
              class="notify-item p-0"
              @click="changeStatus(status)"
              >{{ status.text }}</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item-dropdown
            right
            class="align-self-center profile-dropdown d-inline-block order-2 order-md-1 order-lg-1 mb-3 mb-md-0 mb-lg-0 mx-2"
            toggle-class="nav-user mr-0"
          >
            <template #button-content>
              <div class="media user-profile align-items-center">
                <div class="media-body text-left align-items-center">
                  <h6 class="filter-title mx-2 my-0">
                    <small class="mr-2">Per Page : </small>
                    {{ pagination.perRowPage }}
                  </h6>
                </div>
                <Chevron class="eb-chevron" />
              </div>
            </template>
            <b-dropdown-item
              class="notify-item p-0"
              @click="changePerPageRow(null)"
              >Select Per Page</b-dropdown-item
            >
            <b-dropdown-item
              v-for="(page, index) of pageOptions"
              :key="index"
              class="notify-item p-0"
              @click="changePerPageRow(page)"
              >{{ page }}</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12">
        <div class="tbl-card mt-3">
          <b-table
            :items="items"
            :fields="fieldsTable"
            stacked="md"
            show-empty
            fixed
            striped
            hover
            :busy="loading"
            class="ctm-table"
            :sort-by.sync="pagination.sortBy"
            :sort-desc.sync="pagination.orderBy"
          >
            <template #table-busy>
              <div class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
            </template>
            <template #cell(createdAt)="row">
              {{ $moment(row.item.createdAt).format('LL') }}
            </template>
            <template #cell(userInfo)="row">
              <div class="d-flex align-items-center">
                <span class="table-profile mr-2">
                  <img :src="row.item.imageUrl" @error="imgError" />
                </span>
                <span class="d-inline-flex flex-column"
                  ><strong>{{
                    `${row.item.firstName} ${row.item.lastName}`
                  }}</strong></span
                >
              </div>
            </template>
            <template #cell(actions)="row">
              <router-link
                :to="`/admin-land/users/${row.item._id}`"
                class="btn edit mr-3"
              >
                View
              </router-link>
              <i class="fa fas-car"></i>
            </template>
          </b-table>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-12 text-center">
        <b-pagination
          v-model="pagination.currentPage"
          :total-rows="pagination.totalItems"
          :per-page="pagination.perRowPage"
          size="md"
          align="center"
          pills
          class="my-0"
          @change="changePage"
        ></b-pagination>
      </div>
    </div>
  </section>
</template>
<script>
import { fields, statusOptions } from './config'
import { ADMIN_FETCH_ALL_USERS } from '~/services/ENDPOINT'
export default {
  name: 'AdminConstactList',
  layout: 'admin',
  $_veeValidate: {
    validator: 'new',
  },
  data() {
    return {
      pagination: {
        currentPage: 1,
        perRowPage: 15,
        status: 'ACTIVE',
        role: '',
        search: '',
        sortBy: 'id',
        orderBy: true,
      },
      statusLable: 'Active Users',
      items: [],
      loading: false,
      fieldsTable: fields,
      pageOptions: [15, 25, 50, 100],
      statusOptions,
    }
  },
  watch: {
    // 'pagination.sortBy'() {
    //   this.fetchAllUsers()
    // },
    // 'pagination.orderBy'() {
    //   this.fetchAllUsers()
    // },
  },
  mounted() {
    this.fetchAllUsers()
  },
  methods: {
    searchAction() {
      const timer = this.searchAction.timer
      if (timer) {
        clearTimeout(timer)
      }
      this.searchAction.timer = setTimeout(() => {
        this.pagination.current = 1
        this.fetchAllUsers()
      }, 500)
    },
    async fetchAllUsers() {
      try {
        this.loading = true
        const { data } = await ADMIN_FETCH_ALL_USERS(this.pagination)
        this.items = data.users
        this.pagination = data.pagination
      } catch ({ data }) {
        console.log(data)
      } finally {
        this.loading = false
      }
    },
    imgError(e) {
      e.target.src = require('~/assets/images/avatar.png')
    },
    changePage(page) {
      this.pagination.currentPage = page
      this.fetchAllUsers()
    },
    changePerPageRow(page) {
      this.pagination.currentPage = 1
      this.pagination.perRowPage = page
      this.fetchAllUsers()
    },
    changeStatus(status) {
      this.pagination.currentPage = 1
      this.statusLable = status.text
      this.pagination.status = status.value
      this.fetchAllUsers()
    },
  },
}
</script>
<style scoped>
.glyphicon {
  margin-bottom: 10px;
  margin-right: 10px;
}

small {
  display: block;
  line-height: 1.428571429;
  color: #999;
}
</style>
