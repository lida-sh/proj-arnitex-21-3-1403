<template>
    <div class="chart-container">
      <canvas class="w-full h-full" ref="myChart2"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { Chart, BarController, BarElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';
  
  const props = defineProps({
    day: {
      type: Number,
      default: 30
    },
  });
  
  Chart.register(BarController, BarElement, LinearScale, CategoryScale, Tooltip, Legend);
  
  const myChart2 = ref(null);
  let chartInstance = null;
  
  const convertToPersianNumbers = (num) => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    return num.toString().replace(/\d/g, (digit) => persianDigits[digit]);
  };
  
  const generateRandomData = (numDays) => {
    const data = [];
    for (let i = 0; i < numDays; i++) {
      data.push((Math.random() * 1) - 0.5); // تولید داده های تصادفی بین -0.5 و 0.5
    }
    return data;
  };
  
  const generateDateLabels = (numDays) => {
    const labels = [];
    const now = new Date();
    for (let i = numDays - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(now.getDate() - i);
      labels.push(`${date.getMonth() + 1}/${date.getDate()}`);
    }
    labels[labels.length - 1] = 'امروز'; // آخرین روز امروز است
    return labels;
  };
  
  const createChart = () => {
    const dataDays = generateRandomData(props.day);
    const labelsDays = generateDateLabels(props.day);
  
    const ctx = myChart2.value.getContext('2d');
  
    if (chartInstance) {
      chartInstance.destroy();
    }
  
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labelsDays.map(label => convertToPersianNumbers(label)),
        datasets: [{
          label: 'سود و زیان',
          data: dataDays,
          backgroundColor: dataDays.map(value => value > 0 ? '#B4F0C4' : '#CB989F'),  
          borderWidth: 1,
          borderRadius: 10, 
          barThickness: 15, // عرض ثابت برای ستون‌ها
          maxBarThickness: 30, // حداکثر عرض برای ستون‌ها
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
              color: '#333'
            },
            ticks: {
              display: false, // غیرفعال کردن نمایش برچسب‌های محور X
              color: '#fff',
              font: {
                family: 'siteFont, sans-serif' // فونت سایت
              },
              callback: function (value) {
                return convertToPersianNumbers(value);
              }
            }
          },
          y: {
            grid: {
              color: '#333'
            },
            ticks: {
              color: '#fff',
              font: {
                family: 'siteFont, sans-serif' // فونت سایت
              },
              callback: function (value) {
                return convertToPersianNumbers(value);
              }
            },
            position: 'right' // برای قرار دادن اعداد در سمت راست
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
            borderRadius: 16,
            displayColors: false,
            titleFont: {
              size: 14,
              family: 'siteFont, sans-serif', // فونت سایت
              weight: 'bold',
              color: '#4CAF50'
            },
            bodyFont: {
              size: 14,
              family: 'siteFont, sans-serif', // فونت سایت
              color: '#FFFFFF'
            },
            padding: {
              top: 10,
              right: 15,
              bottom: 10,
              left: 15
            },
            callbacks: {
              label: function (context) {
                const value = context.raw;
                return `مقدار: ${value.toFixed(2)}`;
              },
              title: function (context) {
                return convertToPersianNumbers(context[0].label);
              }
            }
          }
        }
      }
    });
  };
  
  onMounted(() => {
    createChart();
  });
  
  watch(() => props.day, () => {
    createChart();
  });
  </script>
  
  <style scoped>
  .chart-container {
    width: 80%;
    height: 300px;
    margin: auto;
  }
  
  @font-face {
    font-family: 'siteFont';
    src: url('/path-to-your-font.ttf') format('truetype'); /* تغییر مسیر به فونت فارسی خود */
  }
  </style>
  