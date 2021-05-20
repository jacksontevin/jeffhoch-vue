<template>
  <div class="col-12 col-md-6 col-lg-6 dashboard-card">
    <div class="row">
      <div class="col-md-5 card eb-hm-card">
        <div class="row">
          <div class="col-md-7">
            <h1>500</h1>
            <span>Total Properties</span>
          </div>
          <div class="col-md-5 text-center right">
            <img src="~/assets/images/total-property.png" />
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-5 card eb-hm-card">
        <div class="row">
          <div class="col-md-7">
            <h1>500</h1>
            <span>Properties for Sale</span>
          </div>
          <div class="col-md-5 text-center right">
            <apexchart
              type="radialBar"
              height="120"
              width="120"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </div>
      </div>

      <div class="col-md-5 card eb-hm-card">
        <div class="row">
          <div class="col-md-7">
            <h1>500</h1>
            <span>Properties for Rent</span>
          </div>
          <div class="col-md-5 text-center right">
            <img src="~/assets/images/total-property.png" />
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-5 card eb-hm-card">
        <div class="row">
          <div class="col-md-7">
            <h1>500</h1>
            <span>Sold Properties</span>
          </div>
          <div class="col-md-5 text-center right">
            <img src="~/assets/images/total-property.png" />
          </div>
        </div>
      </div>

      <div class="col-md-5 card eb-hm-card">
        <div class="row">
          <div class="col-md-7">
            <h1>500</h1>
            <span>Pending Properties</span>
          </div>
          <div class="col-md-5 text-center right">
            <img src="~/assets/images/total-property.png" />
          </div>
        </div>
      </div>

      <div class="col-md-1"></div>
      <div class="col-md-5 card eb-hm-card">
        <div class="row">
          <div class="col-md-7">
            <h1>500</h1>
            <span>Rejected Properties</span>
          </div>
          <div class="col-md-5 text-center right">
            <img src="~/assets/images/total-property.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { DASHBOARD_PROPERTIES_COUNTS } from '~/services/ENDPOINT'
export default {
  data() {
    return {
      counts: null,
      series: [70],
      chartOptions: {
        chart: {
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            },
          },
        },
        labels: ['Cricket'],
      },
    }
  },
  mounted() {
    this.getPropertyCounts()
  },
  methods: {
    percentage(partialValue) {
      return Number((100 * partialValue) / this.counts.total).toFixed(1)
    },
    async getPropertyCounts() {
      try {
        const result = await DASHBOARD_PROPERTIES_COUNTS()
        this.counts = result.data
        console.log('yrst', this.counts)
      } catch (e) {}
    },
  },
}
</script>
