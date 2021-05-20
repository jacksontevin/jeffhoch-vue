<template>
  <dashboard />
</template>
<script>
import dashboard from '~/components/dashboard'
export default {
  components: { dashboard },
  layout: 'admin',
  data() {
    return {
      series: [
        {
          name: 'Sold',
          type: 'column',
          data: [14, 12, 20, 15],
        },
        {
          name: 'Rented',
          type: 'column',
          data: [20, 29, 37, 36],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        plotOptions: {
          bar: {
            columnWidth: '35%',
            borderRadius: 5,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: false,
          curve: 'smooth',
        },
        colors: ['#364E6D', '#F37C66'],
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#536A89', '#F39583'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        xaxis: {
          categories: ['week1', 'week2', 'week3', 'week4'],
        },
        yaxis: [
          {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
              color: '#818181',
            },
            labels: {
              style: {
                colors: '#818181',
              },
            },
            tooltip: {
              enabled: true,
            },
          },
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: 'topLeft',
            offsetY: 30,
            offsetX: 60,
          },
        },
        legend: {
          show: true,
          position: 'top',
          fontSize: '14px',
          fontFamily: 'Montserrat',
          horizontalAlign: 'left',
        },
      },
    }
  },
}
</script>
