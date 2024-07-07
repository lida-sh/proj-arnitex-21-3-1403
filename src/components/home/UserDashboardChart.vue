<template>
  <div class="chart-container">
    <canvas class="w-full h-full" ref="myChart"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend);

const myChart = ref(null);

const convertToPersianNumbers = (num) => {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  return num.toString().replace(/\d/g, (digit) => persianDigits[digit]);
};

onMounted(() => {
  const ctx = myChart.value.getContext('2d');
  const gradient = ctx.createLinearGradient(800, 10, 800, 400);
  gradient.addColorStop(0, 'rgba(255, 112, 40, 0.50)');
  gradient.addColorStop(1, 'rgba(255, 112, 40, 0.00');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['+7/14', '+7/15', '+7/16', '+7/17', '+7/18', '+7/19', 'امروز'],
      datasets: [{
        label: 'موجودی',
        data: [315000000, 450000000, 305000000, 450000000, 315000000, 550000000, 815000000],
        backgroundColor: gradient,

        pointBackgroundColor: '#B86B45',
        fill: 'start',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        line: {
          shadowColor: 'rgba(255, 165, 0, 0.4)',
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 4
        },
        point: {
          shadowColor: 'rgba(255, 112, 40, 0.5)',
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 4
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            display: false,
            color: '#333'
          },
          ticks: {
            color: '#fff',
            font: {
              family: 'siteFont, sans-serif'
            },
            callback: function (value) {
              return convertToPersianNumbers(value);
            }
          }
        },
        y: {
          beginAtZero: true,
          position: 'right',
          grid: {
            color: '#333'
          },
          ticks: {
            color: '#fff',
            font: {
              family: 'siteFont, sans-serif'
            },
            callback: function (value) {
              return convertToPersianNumbers(value);
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const value = context.raw;
              return `موجودی: ${value.toLocaleString()} تومان`;
            },
            title: function (context) {
              return convertToPersianNumbers(context[0].label);
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
  });
});
</script>

<style scoped>
.chart-container {
  width: auto;
  height: 100%;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
}
</style>