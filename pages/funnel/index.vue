<template>
  <section class="properties-section">
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
    <div v-if="!loader && properties.length > 0" class="property-part-2">
      <b-container>
        <section class="property-list">
          <div class="property-cards">
            <b-row>
              <b-col
                v-for="(property, index) of properties"
                :key="index"
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
import productCard from '../../components/card/ProductCard1'
import { FETCH_FUNNEL_PROPERTYY } from '~/services/ENDPOINT'
export default {
  components: {
    productCard,
  },
  data() {
    return {
      properties: [],
      loader: false,
    }
  },
  mounted() {
    this.fetchAllProprty()
  },
  methods: {
    async fetchAllProprty() {
      try {
        this.loader = true
        this.$nextTick(() => this.$nuxt.$loading.start())
        const result = await FETCH_FUNNEL_PROPERTYY()
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
