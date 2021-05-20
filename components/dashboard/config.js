const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
export const barChartOptions = {
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
}

export const barChartSeries = [
  {
    name: 'Sold',
    type: 'column',
    data: [40, 80, 50, 70],
  },
  {
    name: 'Rented',
    type: 'column',
    data: [20, 60, 80, 50],
  },
]

export const aeraChartOptions = {
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    lineCap: 'butt',
    width: 4,
  },
  title: {
    text: 'Product Trends by Month',
    align: 'left',
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: months,
  },
}

export const aeraChartSeries = [
  {
    name: 'Desktops',
    data: [10, 41, 35, 51, 49, 62, 69, 70, 80, 60, 90, 100],
  },
]
export { months }
