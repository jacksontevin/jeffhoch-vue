<template>
  <div class="container">
    <div class="feature-header">
      <div class="feature-header_left">
        <h4 v-if="isFeture">FEATURE</h4>
        <h1>{{ propertyType }}s</h1>
      </div>
    </div>
    <client-only>
      <Carousel
        :margin="20"
        :dots="false"
        :nav="false"
        :loop="true"
        :autoplay="true"
        :autoplay-speed="2500"
        :responsive="{
          0: { items: 1 },
          600: { items: 2 },
          1191: { items: 3 },
          1900: { items: 3 },
        }"
        class="row position-relative"
      >
        <template slot="prev"
          ><span class="eb-prev"
            ><svg
              width="34"
              height="22"
              viewBox="0 0 34 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34 12.5583L4.35253 12.5584L11.1736 20.199L9.56577 22L-8.30516e-07 11.2848L9.56577 0.569522L11.1736 2.3705L4.35239 10.0113L34 10.0113L34 12.5583Z"
                fill="#F36F56"
              />
            </svg> </span
        ></template>
        <span
          v-for="(property, index) of items"
          :key="index"
          class="property-card-lg"
        >
          <product-card :product-data="property" :index="index" />
        </span>
        <template slot="next"
          ><span class="eb-next"
            ><svg
              width="34"
              height="22"
              viewBox="0 0 34 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.31803e-07 12.5583L29.6475 12.5584L22.8264 20.199L24.4342 22L34 11.2848L24.4342 0.569522L22.8264 2.3705L29.6476 10.0113L9.29217e-07 10.0113L7.31803e-07 12.5583Z"
                fill="#F36F56"
              /></svg></span
        ></template>
      </Carousel>
    </client-only>
  </div>
</template>
<script>
import productCard from '~/components/card/ProductCard1'
export default {
  name: 'PropertySlider',
  components: {
    productCard,
  },
  props: {
    isFeture: {
      type: Boolean,
      default: false,
    },
    propertyType: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
