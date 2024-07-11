<template>
  <div class="chart-container">
    <canvas ref="myChart00"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const myChart00 = ref(null);

onMounted(() => {
  const ctx = myChart00.value.getContext('2d');

  const gradient1 = ctx.createLinearGradient(0, 0, 0, 175);
  gradient1.addColorStop(0.0, '#5CBC76');
  gradient1.addColorStop(1.0, '#25462E');

  const gradient2 = ctx.createLinearGradient(0, 0, 400, 400);
  gradient2.addColorStop(0, '#FFA928');
  gradient2.addColorStop(1, '#996518');

  const gradient3 = ctx.createLinearGradient(0, 0, 0, 175);
  gradient3.addColorStop(0, '#16BFD6');
  gradient3.addColorStop(1, '#0C6470');

  const gradient4 = ctx.createLinearGradient(0, 0, 0, 175);
  gradient4.addColorStop(1, '#B1E3FF');
  gradient4.addColorStop(0, '#6A8899');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['بخش 1', 'بخش 2', 'بخش 3', 'بخش 4'],
      datasets: [{
        data: [591.142, 300, 150, 100],
        backgroundColor: [gradient1, gradient2, gradient3, gradient4],
        hoverOffset: 20,
        borderWidth: 5,
        borderColor: '#1e1e1e',
        borderRadius: 8,
      }]
    },
    options: {
      layout: {
        padding: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            beforeTitle: function () {
              return 'عنوان اول';
            },
            afterTitle: function () {
              return 'عنوان دوم';
            },
            label: function (context) {
              const label = context.label || '';
              const value = context.raw || '';
              return `${label}: ${value}`;
            }
          },
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
          padding: {
            top: 10,
            right: 15,
            bottom: 10,
            left: 15
          }
        },
        legend: {
          display: false
        }
      }
    }
  });
});
</script>

<style scoped>
.chart-container {
  max-width: 400px;
  max-height: 400px;
  margin: auto;
}
</style>