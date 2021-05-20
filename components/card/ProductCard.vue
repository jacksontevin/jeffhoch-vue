<template>
  <div class="property-card">
    <div class="property-top-img">
      <img :src="`${productData.imgUrl}`" />
      <span v-if="productData.sale" class="property-tag orange-tag">Sale</span>
      <span v-else class="property-tag blue-tag">Rent</span>
    </div>
    <div class="property-body">
      <div class="property-body-title">
        <h6>{{ productData.title }}</h6>
        <div class="property-properties">
          <span>{{ productData.address }}</span
          ><span>{{ productData.planDetail.statusProperties }}</span>
        </div>
      </div>
      <hr />
      <div class="property-body-plan">
        <span class="payment">{{ productData.planDetail.plan }}</span>
        <span class="ready-to-move">{{ productData.planDetail.status }}</span>
      </div>
      <div class="property-body-price">
        <span class="rate">{{ productData.planDetail.price }}</span>
        <span class="plan">{{ productData.planDetail.months }}</span>
      </div>
      <div class="property-detail-btn">
        <button class="btn btn-link btn-block">See Details</button>
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
  },
  data() {
    return {}
  },
}
</script>
<style lang="sass" scoped></style>
