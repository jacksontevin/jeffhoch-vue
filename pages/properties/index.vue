<template>
  <section class="properties-section">
    <div class="property-part-1">
      <b-container>
        <!-- search box -->
        <search-box
          class="mt-4"
          :select-value="search"
          plaholder="Apartment,Jersey City, USA"
          @input="searchAction"
        />
      </b-container>
    </div>
    <div v-if="loader && properties.length === 0" class="property-part-2">
      <b-container v-for="item in [1, 2, 3, 4]" :key="item">
        <section class="property-list">
          <b-skeleton type="button"></b-skeleton>
        </section>
        <br />
        <div class="property-cards">
          <b-row>
            <b-col
              v-for="i in [1, 2, 3, 4]"
              :key="i"
              cols="12"
              md="3"
              lg="3"
              class="property-card-md px-1"
            >
              <b-skeleton-img></b-skeleton-img>
            </b-col>
          </b-row>
          <br />
        </div>
      </b-container>
    </div>
    <div
      v-for="(PropertyType, index) of properties"
      :key="index"
      class="property-part-2"
    >
      <b-container
        v-if="!loader && properties.length > 0 && PropertyType.data.length > 0"
      >
        <section class="property-list">
          <div class="property-header">
            <h2>{{ PropertyType.PropertyType.name }}</h2>
            <nuxt-link
              :to="`/search-result?propertype=${PropertyType.PropertyType._id}`"
              class="read-more"
              >See More</nuxt-link
            >
          </div>
          <div class="property-cards">
            <b-row>
              <b-col
                v-for="(property, childIndex) in PropertyType.data"
                :key="childIndex"
                cols="12"
                md="3"
                lg="3"
                class="property-card-md px-1"
              >
                <nuxt-link :to="`properties-details/${property._id}`">
                  <product-card :product-data="property" :index="index" />
                </nuxt-link>
              </b-col>
            </b-row>
          </div>
        </section>
      </b-container>
    </div>
  </section>
</template>
<script>
import SearchBox from '../../components/core/SearchBox'
import productCard from '../../components/card/ProductCard1'
import { FETCH_CATEGORY_WISH_PROPERTYY } from '~/services/ENDPOINT'
export default {
  components: {
    SearchBox,
    productCard,
  },
  data() {
    return {
      properties: [],
      loader: false,
      search: '',
    }
  },
  mounted() {
    this.search = this.$route.query.search || ''
    this.fetchAllProprty()
  },
  methods: {
    searchAction($event) {
      this.search = $event
      const timer = this.searchAction.timer
      if (timer) {
        clearTimeout(timer)
      }
      this.searchAction.timer = setTimeout(() => {
        this.fetchAllProprty()
        this.$router.push({ query: { search: this.search } })
      }, 500)
    },
    async fetchAllProprty() {
      try {
        this.loader = true
        this.$nextTick(() => this.$nuxt.$loading.start())
        const result = await FETCH_CATEGORY_WISH_PROPERTYY(this.search)
        if (result.code === 200 && result.properties.length > 0) {
          this.properties = result.properties
        }
      } catch ({ data }) {
        console.log(data)
      } finally {
        this.loader = false
        this.$nextTick(() => this.$nuxt.$loading.finish())
      }
    },
  },
}
</script>
<style>
.b-skeleton-button {
  width: 125px;
}
.b-skeleton-img {
  border-radius: 8px;
}
</style>
