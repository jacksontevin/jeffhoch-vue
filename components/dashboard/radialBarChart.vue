<template>
  <apexchart
    v-if="series.length > 0"
    type="radialBar"
    height="350"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>
<script>
import _ from 'lodash'
import { DASHBOARD_PROPERTIES_COUNTS_BASE_ON_PROPERTY_TYPE } from '~/services/ENDPOINT'
export default {
  name: 'RadialBarChart',
  data() {
    return {
      total: 0,
      series: [],
      chartOptions: {
        legend: {
          show: true,
        },
        chart: {
          height: 350,
          type: 'radialBar',
        },
        labels: [],
      },
    }
  },
  mounted() {
    this.getPropertyTypesData()
  },
  methods: {
    async getPropertyTypesData() {
      try {
        const result = await DASHBOARD_PROPERTIES_COUNTS_BASE_ON_PROPERTY_TYPE()
        this.series = []
        this.chartOptions.labels = []
        this.total = _.sum(result.data.map((i) => i.count))
        // eslint-disable-next-line array-callback-return
        result.data.filter((i) => {
          this.series.push(this.percentage(i.count))
          this.chartOptions.labels.push(i.name)
        })
      } catch (e) {}
    },
    percentage(partialValue) {
      return Number((100 * partialValue) / this.total).toFixed()
    },
  },
}
</script>
