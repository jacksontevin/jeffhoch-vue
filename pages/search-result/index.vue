<template>
  <section class="properties-section">
    <div class="property-part-1">
      <b-container>
        <!-- search box -->
        <search-box
          class="mt-4"
          :select-value="search"
          plaholder="Apartment,Jersey City, USA"
          @input="
            search = $event
            searchAction()
          "
        />
      </b-container>
    </div>
    <div class="property-part-2">
      <section class="property-list property-result">
        <b-container>
          <span class="filter-icon" @click="handelToggleFilter()"
            ><span v-if="!toggleFilter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff7557"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-filter mr-2"
              >
                <polygon
                  points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
                ></polygon>
              </svg>
              Filter</span
            >
            <span v-else> Close </span></span
          >
          <b-row class="position-relative">
            <b-col
              id="toggleFilter"
              cols="12"
              lg="3"
              md="3"
              class="sidebar-filter-sm"
            >
              <div class="input-box-card">
                <label class="eb-label">Filter By</label>
                <input
                  v-model="state"
                  placeholder="Enter State"
                  class="eb-input-box"
                  @input="searchAction()"
                />
              </div>
              <div class="input-box-card mt-5">
                <label class="eb-label">Property Type</label>
                <CustomRadioGroup
                  id="selectPropertype"
                  v-model="selectPropertype.value"
                  :options="propertyTypes"
                  class="my-3"
                  @change="changeProprtyType"
                >
                </CustomRadioGroup>
              </div>
              <div class="single-select input-box-card mt-4">
                <label class="eb-label">Number of Rooms</label>
                <multiselect
                  v-model="selectedRoom"
                  placeholder="Select Number of Rooms"
                  :options="roomsItems"
                  :clear-on-select="true"
                  :allow-empty="true"
                  :searchable="true"
                  @input="proertyFilter"
                ></multiselect>
              </div>
              <div class="input-box-card mt-5">
                <label class="eb-label">Payment</label>
                <div class="d-flex align-content-center">
                  <eb-input type="search" placeholder="$10,000 - $15,000" />
                </div>
              </div>
              <div class="single-select input-box-card mt-4">
                <multiselect
                  v-model="selectPaymentType"
                  placeholder="Select Payment Type"
                  :options="paymentType"
                  :clear-on-select="true"
                  :allow-empty="true"
                  :searchable="true"
                  @input="proertyFilter"
                ></multiselect>
              </div>
              <div class="input-box-card mt-5">
                <label class="eb-label">Ready to Move in</label>
                <eb-input type="search" placeholder="3 Months" />
              </div>
            </b-col>
            <b-col cols="12" lg="9" md="9">
              <div class="property-cards">
                <b-row>
                  <b-col
                    v-for="(property, index) in properties"
                    :key="index"
                    cols="12"
                    md="4"
                    lg="4"
                    class="property-card-md px-1"
                  >
                    <product-card :product-data="property" :index="index" />
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
  </section>
</template>
<script>
import EbInput from '../../components/core/Input'
import CustomRadioGroup from '../../components/core/Radio'
import SearchBox from '../../components/core/SearchBox'
import productCard from '../../components/card/ProductCard1'
import {
  FETCH_PROPERTY_BY_PROPERTY_TYPE,
  FETCH_PROPERTY_TYPE_SPECIFIC,
} from '~/services/property'
export default {
  name: 'SearchProperty',
  components: {
    SearchBox,
    productCard,
    EbInput,
    CustomRadioGroup,
  },
  data() {
    return {
      toggleFilter: true,
      typeSpace: '',
      selectPaymentType: null,
      paymentType: ['Yearly', 'Monthly', 'Half Yearly'],
      roomsItems: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      selectedRoom: null,
      properties: [],
      propertyTypes: [],
      selectPropertype: {},
      search: '',
      state: '',
    }
  },
  mounted() {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
    this.fetchProertyType()
  },
  methods: {
    searchAction() {
      const timer = this.searchAction.timer
      if (timer) {
        clearTimeout(timer)
      }
      this.searchAction.timer = setTimeout(() => {
        this.proertyFilter()
      }, 500)
    },
    onResponsiveInverted() {
      if (window.innerWidth < 991) this.toggleFilter = false
      else this.toggleFilter = true
    },
    async fetchProertyType() {
      const payload = {
        currentPage: 1,
        perRowPage: 200,
        filed: 'name _id',
        search: '',
      }
      try {
        const result = await FETCH_PROPERTY_TYPE_SPECIFIC(payload)
        // eslint-disable-next-line array-callback-return
        result.data.data.filter((e) => {
          this.propertyTypes.push({ value: e._id, text: e.name })
        })

        const queryPropertyType = this.$route.query.propertype
        const selectPropertype = this.propertyTypes.find(
          // eslint-disable-next-line eqeqeq
          (i) => i.value == queryPropertyType
        )
        console.log('fdf', selectPropertype)
        if (selectPropertype) this.selectPropertype = selectPropertype
        else this.selectPropertype = this.propertyTypes[0]

        this.proertyFilter()
      } catch ({ data }) {
        this.$toast.error(data.message)
      }
    },
    async proertyFilter() {
      const payload = {
        propertyType: this.selectPropertype.value || '',
        totalRoom: this.selectedRoom,
        paymentType: this.selectPaymentType,
        search: this.search,
        state: this.state,
      }
      try {
        this.$nextTick(() => this.$nuxt.$loading.start())
        const result = await FETCH_PROPERTY_BY_PROPERTY_TYPE(payload)
        this.properties = result.data
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } catch ({ data }) {
        this.$toast.error(data.message)
      } finally {
        this.$nextTick(() => this.$nuxt.$loading.finish())
      }
    },
    changeProprtyType(v) {
      this.selectPropertype = this.propertyTypes.find((i) => i.value === v)
      if (this.selectPropertype) {
        this.proertyFilter()
        this.$router.push(`/search-result?propertype=${v}`)
      }
    },
    handelToggleFilter() {
      const element = document.getElementById('toggleFilter')
      this.toggleFilter = !this.toggleFilter
      if (this.toggleFilter) {
        element.classList.add('sidebar-show')
      } else {
        element.classList.remove('sidebar-show')
      }
    },
  },
}
</script>
<style>
.property-result .multiselect__tags {
  padding: 8px 40px 0 8px !important;
}
</style>
