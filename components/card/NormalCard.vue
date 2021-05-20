<template>
  <div class="normal-card">
    <div class="normal-card-top-img">
      <img :src="`${data.imgUrl}`" />
    </div>
    <div class="normal-card-body">
      <div class="normal-card-body-title">
        <h6>{{ data.title }}</h6>
        <div class="normal-card-body-date">
          <span>{{ data.date }}</span>
        </div>
        <p>{{ data.description }}</p>
      </div>
      <span class="read-more">Read More</span>
    </div>
  </div>
</template>
<script>
import '../../assets/scss/app.scss'
export default {
  name: 'ProductCard',
  props: {
    data: {
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
<style>
.read-more {
  font-family: Gilroy-Bold;
  font-size: 16px;
  line-height: 19px;
  color: #f36f56 !important;
  text-decoration: underline !important;
}
</style>
