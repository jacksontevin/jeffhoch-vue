<template>
  <div class="admin-broker-section admin-properties">
    <div class="admin-page-header">
      <h2>Overview</h2>
    </div>
    <div class="row mt-3">
      <div class="col-12 col-md-6 col-lg-6">
        <div class="tbl-card chart-section">
          <h5>Bar Chart</h5>
          <div id="chart">
            <apexchart
              type="line"
              height="350"
              :options="barChartOptions"
              :series="barChartSeries"
            ></apexchart>
          </div>
        </div>
      </div>
      <counts />
    </div>
    <b-row>
      <b-col cols="12" md="8" lg="8">
        <apexchart
          type="area"
          height="350"
          :options="aeraChartOptions"
          :series="aeraChartSeries"
        ></apexchart>
      </b-col>
      <b-col cols="12" md="4" lg="4">
        <recent-users />
      </b-col>
      <b-col cols="12" md="6" lg="6">
        <radial-bar-chart />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import radialBarChart from './radialBarChart.vue'
import RecentUsers from './recentUsers.vue'
import {
  barChartOptions,
  barChartSeries,
  aeraChartSeries,
  aeraChartOptions,
} from './config'
import Counts from './counts.vue'
export default {
  name: 'CommonDashboard',
  components: {
    radialBarChart,
    RecentUsers,
    Counts,
  },
  data() {
    return {
      barChartSeries,
      barChartOptions,
      aeraChartOptions,
      aeraChartSeries,
    }
  },
}
</script>
