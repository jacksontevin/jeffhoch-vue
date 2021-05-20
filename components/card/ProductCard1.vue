<template>
  <div class="property-card">
    <div class="property-top-img">
      <img :src="`${productData.images[0]}`" @error="imgErrr" />
      <span
        :class="{
          'property-tag orange-tag': productData.saleType == 'Sell',
          'property-tag blue-tag': productData.saleType == 'Rent',
          'property-tag lease-tag': productData.saleType == 'Lease',
        }"
        >{{ productData.saleType }}</span
      >
    </div>
    <div class="property-body">
      <div class="property-body-title">
        <h6 class="capitalize">{{ productData.title }}</h6>
        <div class="property-properties">
          <span class="capitalize d-inline-block text-truncate">{{
            productData.address.sortAddress
          }}</span
          ><span>{{ productData.constructionStatus }}</span>
        </div>
      </div>
      <hr />
      <div class="property-body-plan">
        <span class="payment">{{ productData.ownership }}</span>
        <span class="ready-to-move">{{ productData.constructionStatus }}</span>
      </div>
      <div class="property-body-price">
        <span class="rate"
          >{{ productData.payment.min }} - {{ productData.payment.max }}</span
        >
        <span class="plan">{{ productData.payment.type }}</span>
      </div>
      <div v-if="userType === 'public'" class="property-detail-btn">
        <router-link :to="`/properties-details/${productData._id}`">
          <button class="btn btn-link btn-block">See Details</button>
        </router-link>
      </div>
      <div v-if="userType === 'admin'" class="property-detail-btn">
        <router-link :to="`/admin-land/properties-details/${productData._id}`">
          <button class="btn btn-link btn-block">See Details</button>
        </router-link>
      </div>
      <div v-if="userType === 'seller'" class="property-detail-btn">
        <router-link :to="`/seller/properties-details/${productData._id}`">
          <button class="btn btn-link btn-block">See Details</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductCard',
  props: {
    productData: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      default: 0,
    },
    userType: {
      type: String,
      default: 'public',
    },
  },
  data() {
    return {}
  },
  methods: {
    imgErrr(e) {
      e.target.src = require('~/assets/images/property/landsite/landsite-1.png')
    },
  },
}
</script>
<style lang="sass" scoped></style>
