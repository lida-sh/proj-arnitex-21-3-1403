<script setup>

const series = [{
  name: 'Cash Flow',
  data: [50, -230, 320, -100, -450, 170, 60
  ]
}]


const chartOptions = {
  chart: {
    type: 'bar',
    height: 350,
    background: 'linear-gradient(180deg, rgba(92, 188, 118, 0.5) 0%, rgba(234, 60, 83, 0.5) 100%) ', // Add gradient background

    toolbar: {
      show: false, // Show toolbar
      tools: {
        download: false // Hide download button
      }
    }
  },
  plotOptions: {
    bar: {
      colors: {
        ranges: [
          {
            from: 0,
            to: 10000,
            color: 'rgba(92, 188, 118, 1)'
          },
          {
            from: -10000,
            to: 0,
            color: 'rgba(234, 60, 83, 1)'
          }]
      },
      columnWidth: '50%',
    }
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    opposite: true,
    title: {
      text: 'Growth',
    }, 
    labels: {
      style: {
        colors: '#ffffff', // Change the colors as needed
        fontSize: '12px',
        left: 32,
        rigth:32,
        fontFamily: 'siteFont, sans-serif'
      },
    },

  },
  xaxis: {
    type: 'string',
    categories: [
      '۰۳/۱۳', '۰۳/۱۴', '۰۳/۱۵', '۰۳/۱۶', '۰۳/۱۷', '۰۳/۱۸',
      '۰۳/۱۹',
    ],
    labels: {
      rotate: -90,
      style: {
        colors: '#ffffff', // Change the colors as needed
        fontSize: '12px',
        fontFamily: 'siteFont, sans-serif'
      },
    },

  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return '<div class="arrow_box">' +
        '<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
        '</div>'
    }
  },

}

</script>

<template>
  <div>chart</div>
  <!-- <apexchart type="bar" :options="chartOptions" :series="series"></apexchart> -->
</template>
