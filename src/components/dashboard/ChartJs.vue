<template>
  <div>
    <div class="flex justify-end">
       
      <DashboardTimeRangeSelector @update:range="updateRange"></DashboardTimeRangeSelector>
    </div>
    <canvas class="chart-container" ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const chartCanvas = ref(null)

const convertToPersianNumbers = (num) => {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹'
  return num.toString().replace(/\d/g, (digit) => persianDigits[digit])
}

onMounted(() => {
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext('2d')
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['۰۳/۱۳', '۰۳/۱۴', '۰۳/۱۵', '۰۳/۱۶', '۰۳/۱۷', '۰۳/۱۸', '۰۳/۱۹'],
        datasets: [{
          label: 'قیمت (تومان)',
          data: [200, 150, 300, 250, 350, 500, 400],
          borderColor: '#FF7028',
          borderWidth: 2,
          pointRadius: 8,
          pointBackgroundColor: '#171717'
        }]
      },
      options: {
        indexAxis: 'x',
        scales: {
          x: {
            reverse: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#fff',
              font: {
                family: 'siteFont, sans-serif'
              }
            }
          },
          y: {
            position: 'right', // قرار دادن محور Y در سمت راست
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#fff',
              font: {
                family: 'siteFont, sans-serif'
              },
              callback: function(value) {
                return convertToPersianNumbers(value)
              }
            },
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#fff',
              font: {
                family: 'siteFont, sans-serif'
              }
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || ''
                if (label) {
                  label += ': '
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat('fa-IR', { style: 'currency', currency: 'IRR' }).format(context.parsed.y * 1000000)
                }
                return label
              },
              title: function(context) {
                return convertToPersianNumbers(context[0].label)
              }
            },
            titleFont: {
              family: 'siteFont, sans-serif'
            },
            bodyFont: {
              family: 'siteFont, sans-serif'
            }
          }
        }
      }
    })
  }
})
</script>

<style scoped>
.chart-container {
  width: 35vw;
  height: 260px;
}

 
</style>
