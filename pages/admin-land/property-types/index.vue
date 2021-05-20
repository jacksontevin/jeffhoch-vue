<template>
  <section class="admin-broker-section admin-properties">
    <div class="admin-page-header">
      <h2>Property Types</h2>
      <div
        class="d-flex flex-column flex-md-row flex-lg-row justify-content-between align-items-center"
      >
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
              v-model.lazy="pagination.search"
              placeholder="Search Here"
              type="search"
              name="search"
              @input="searchAction"
            /><br />
          </b-input-group>
          <b-nav-item-dropdown
            right
            class="align-self-center profile-dropdown d-inline-block order-2 order-md-1 order-lg-1 mb-3 mb-md-0 mb-lg-0"
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
          <button
            class="btn btn-link order-1 order-md-2 order-lg-2"
            @click="createProperty"
          >
            <Plus class="mr-2" /> Add Property Type
          </button>
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
          >
            <template #table-busy>
              <div class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
            </template>
            <template #cell(isActive)="row">
              <b-badge
                pill
                :variant="row.item.isActive ? 'success' : 'warning'"
                >{{ row.item.isActive ? 'Active' : 'Inactive' }}</b-badge
              >
            </template>
            <template #cell(createdBy)="row">
              <span v-if="row.item.createdBy">
                {{
                  `${row.item.createdBy.firstName} ${row.item.createdBy.lastName}`
                }}
              </span>
              <span v-else>Seeder</span>
            </template>
            <template #cell(updatedBy)="row">
              <span v-if="row.item.createdBy">
                {{
                  `${row.item.updatedBy.firstName} ${row.item.updatedBy.lastName}`
                }}
              </span>
              <span v-else>Seeder</span>
            </template>
            <template #cell(createdAt)="row">
              {{ $moment(row.item.createdAt).format('LL') }}
            </template>
            <template #cell(updatedAt)="row">
              {{ $moment(row.item.updatedAt).format('LL') }}
            </template>
            <template #cell(actions)="row">
              <button
                v-if="row.item.allowEdit"
                class="btn edit mr-3"
                @click="editPropertyType(row.item)"
              >
                <Pencil />
              </button>
              <!-- <b-form-checkbox
                v-model="row.item.allowEdit"
                name="check-button"
                switch
                @input="togglechange(row.item)"
              >
              </b-form-checkbox> -->
              <i
                v-if="row.item.allowEdit"
                :class="{
                  'h4 fa': true,
                  'fa-toggle-on': row.item.isActive,
                  'fa-toggle-off ': !row.item.isActive,
                }"
                :title="row.item.isActive ? 'Inactivate' : 'Activate'"
                @click="togglechange(row.item)"
              ></i>
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
    <add-edit-property-type
      v-if="showAddEditComponents"
      :add-edit-data="addEditData"
      :show-add-edit-components="showAddEditComponents"
      @close="closeAddEditComponnets"
      @success="addEditSuccessResponse"
    />
  </section>
</template>
<script>
import Pencil from '@/components/svg/Pencil'
import _ from 'lodash'
import Plus from '@/components/svg/Plus'
import { fields, pagination, initialData } from './config'
import addEditPropertyType from './add-edit-property-type.vue'
import {
  FETCH_PROPERTY_TYPE_SPECIFIC,
  ADMIN_UPDATE_CATEGORY,
} from '~/services/ENDPOINT'
export default {
  name: 'AdminConstactList',
  components: {
    Plus,
    Pencil,
    addEditPropertyType,
  },
  layout: 'admin',
  data() {
    return {
      pagination,
      items: [],
      loading: false,
      fieldsTable: fields,
      pageOptions: [15, 25, 50, 100],
      showAddEditComponents: false,
      addEditData: initialData,
    }
  },
  mounted() {
    const { id } = this.$route.query
    if (id) this.pagination.search = id
    this.fetchAllConctacts()
  },
  methods: {
    searchAction() {
      const timer = this.searchAction.timer
      if (timer) {
        clearTimeout(timer)
      }
      this.searchAction.timer = setTimeout(() => {
        this.pagination.current = 1
        this.fetchAllConctacts()
      }, 500)
    },
    closeAddEditComponnets() {
      this.showAddEditComponents = false
      this.addEditData = _.cloneDeep(initialData)
    },
    createProperty() {
      this.showAddEditComponents = true
      this.addEditData = _.cloneDeep(initialData)
    },
    editPropertyType(item) {
      this.showAddEditComponents = true
      this.addEditData = _.cloneDeep(item)
    },
    addEditSuccessResponse(data) {
      if (this.addEditData._id) {
        const index = this.items.findIndex((i) => i._id === data._id)
        this.$set(this.items, index, data)
      } else {
        this.items.unshift(data)
      }
      this.closeAddEditComponnets()
    },
    async fetchAllConctacts() {
      try {
        this.loading = true
        const { data } = await FETCH_PROPERTY_TYPE_SPECIFIC(this.pagination)
        this.items = data.data
        this.pagination = data.pagination
      } catch ({ data }) {
        console.log(data)
      } finally {
        this.loading = false
      }
    },
    changePage(page) {
      this.pagination.currentPage = page
      this.fetchAllConctacts()
    },
    changePerPageRow(page) {
      this.pagination.currentPage = 1
      this.pagination.perRowPage = page
      this.fetchAllConctacts()
    },
    togglechange(item) {
      this.addEditData = _.cloneDeep(item)
      this.$bvModal
        .msgBoxConfirm('Please confirm that you want to change everything.', {
          title: 'Please Confirm',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true,
        })
        .then(async (value) => {
          if (value) {
            try {
              this.addEditData.isActive = !this.addEditData.isActive
              const result = await ADMIN_UPDATE_CATEGORY(this.addEditData)
              this.addEditSuccessResponse(result.data)
              this.$toast.success(result.message)
            } catch ({ data }) {
              this.$toast.error(data.message)
            } finally {
              this.$nextTick(() => this.$nuxt.$loading.finish())
            }
          }
        })
        .catch()
    },
  },
}
</script>
