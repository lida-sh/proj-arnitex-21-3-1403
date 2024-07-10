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
  const gradient = ctx.createLinearGradient(800, 10, 800, 300);
  gradient.addColorStop(0, 'rgba(255, 112, 40, 0.50)');
  gradient.addColorStop(1, 'rgba(255, 112, 40, 0.00');

  const drawShadowPlugin = {
    id: 'drawShadow',
    afterDatasetsDraw: function (chart) {
      const ctx = chart.ctx;
      chart.data.datasets.forEach((dataset, i) => {
        const meta = chart.getDatasetMeta(i);
        meta.data.forEach((point, index) => {
          if (point.$context.active) {
            const { x, y } = point.getCenterPoint();
            ctx.save();
            ctx.shadowColor = 'rgba(255, 255, 255, 1)';
            ctx.shadowBlur = 40;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = point.options.backgroundColor;
            ctx.strokeStyle = point.options.borderColor;
            ctx.lineWidth = 3;
            ctx.fill();
            ctx.stroke();
            ctx.restore();
          }
        });
      });
    }
  };

  Chart.register(drawShadowPlugin);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['+7/14', '+7/15', '+7/16', '+7/17', '+7/18', '+7/19', 'امروز'],
      datasets: [{
        label: 'موجودی',
        data: [315000000, 450000000, 305000000, 450000000, 315000000, 550000000, 815000000],
        backgroundColor: gradient,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#FF7028',
        fill: 'start',
        tension: 0.4
      }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      elements: {
        line: {
          shadowColor: 'rgba(255, 165, 0, 0.4)',
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 4
        },
        point: {
          radius: 5,
          hoverRadius: 5,
          hoverBorderWidth: 3
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
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderColor: 'rgba(0, 0, 0, 0.7)',
          borderWidth: 1,
          borderRadius: 10,
          displayColors: false,
          titleFont: {
            size: 14,
            family: 'siteFont, sans-serif',
            weight: 'bold',
            color: '#4CAF50'
          },
          bodyFont: {
            size: 14,
            family: 'siteFont, sans-serif',
            color: '#FFFFFF'
          },
          callbacks: {
            label: function (context) {
              const value = context.raw;
              return `موجودی: ${value.toLocaleString()} تومان`;
            },
            title: function (context) {
              return convertToPersianNumbers(context[0].label);
            }
          },
          padding: {
            top: 10,
            right: 15,
            bottom: 10,
            left: 15
          }
        }
      }
    }
  });
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 300px;
  margin: auto;
}
</style>