<template>
    <div class="chart-container">
      <canvas ref="pieChart"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { Chart, registerables } from 'chart.js'
  import ChartDataLabels from 'chartjs-plugin-datalabels'
  
  Chart.register(...registerables, ChartDataLabels)
  
  const pieChart = ref(null)
  
  const convertToPersianNumbers = (num) => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹'
    return num.toString().replace(/\d/g, (digit) => persianDigits[digit])
  }
  
  const labels = ['تتر', 'اتریوم', 'بیت کوین', 'دوج کوین', 'سایر']
  const data = [30, 19, 24, 7, 20]
  
  onMounted(() => {
    if (pieChart.value) {
      const ctx = pieChart.value.getContext('2d')
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels, 
          datasets: [{
            data: data,
            backgroundColor: ['#2ecc71', '#f39c12', '#e74c3c', '#9b59b6', '#3498db'],
            borderWidth: 0 
          }]
        },
        options: {
          plugins: {
            legend: {
              display: false,
              labels: {
                font: {
                  family: 'siteFont, sans-serif'
                }
              }
            },
            datalabels: {
              color: '#fff',
              font: {
                weight: 'bold',
                size: 16,
                family: 'siteFont, sans-serif'
              },
              anchor: 'center', 
              align: 'center', 
              formatter: (value, context) => {
                return `%${convertToPersianNumbers(value)}`
              }
            },
            tooltip: {
              bodyFont: {
                family: 'siteFont, sans-serif'
              },
              titleFont: {
                family: 'siteFont, sans-serif'
              },
              callbacks: {
                label: function(context) {
                  let label = context.label || ''
                  let value = context.raw || ''
                  return `${label}: ${convertToPersianNumbers(value)}%`
                }
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
    width: 275px;
    height: 275px;
    margin: 0 auto;
  }
  </style>
  