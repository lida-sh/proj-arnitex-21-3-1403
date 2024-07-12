<template>
	<div class="chart-container">
		<canvas class="w-full h-full" ref="myChart2"></canvas>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend } from 'chart.js';
import { formatNumber } from "~/utils/stringUtils";

const props = defineProps({
	day: {
		type: Number,
		default: 7
	},
});

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend);

const myChart2 = ref(null);

const convertToPersianNumbers = (num) => {
	const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
	return num.toString().replace(/\d/g, (digit) => persianDigits[digit]);
};

const generateRandomData = (numDays) => {
	const data = [];
	for (let i = 0; i < numDays; i++) {
		data.push(Math.floor(Math.random() * (900000000 - 300000000 + 1)));
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

const data90Days = generateRandomData(props.day);
const labels90Days = generateDateLabels(props.day);

onMounted(() => {
	const ctx = myChart2.value.getContext('2d');
	const gradient = ctx.createLinearGradient(800, 10, 800, 300);
	gradient.addColorStop(0, 'rgba(255, 112, 40, 0.50)');
	gradient.addColorStop(1, 'rgba(255, 112, 40, 0.00)');

	const drawShadowPlugin = {
		id: 'drawShadow',
		afterDatasetsDraw: function (chart) {
			const ctx = chart.ctx;
			chart.data.datasets.forEach((dataset, i) => {
				const meta = chart.getDatasetMeta(i);
				meta.data.forEach((point, index) => {
					if (chart.tooltip._active && chart.tooltip._active.length && chart.tooltip._active[0].index === index) {
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

	const verticalLinePlugin = {
		id: 'verticalLine',
		afterDatasetsDraw: function (chart) {
			if (chart.tooltip._active && chart.tooltip._active.length) {
				const ctx = chart.ctx;
				ctx.save();
				const activePoint = chart.tooltip._active[0];
				ctx.beginPath();
				ctx.moveTo(activePoint.element.x, chart.chartArea.top);
				ctx.lineTo(activePoint.element.x, chart.chartArea.bottom);
				ctx.lineWidth = 1;
				ctx.strokeStyle = '#fff';
				ctx.stroke();
				ctx.restore();
			}
		}
	};

	new Chart(ctx, {
		type: 'line',
		data: {
			labels: labels90Days.map(label => convertToPersianNumbers(label)),
			datasets: [{
				label: 'موجودی',
				data: data90Days,
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
			layout: {
				padding: {
					top: 40,
					right: 32,
					bottom: 20,
					left: 32
				}
			},
			hover: {
				mode: 'nearest',
				intersect: false
			},
			elements: {
				line: {
					shadowColor: 'rgba(255, 165, 0, 0.4)',
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowOffsetY: 4
				},
				point: {
					radius: 3,
					hoverRadius: 7,
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
							return convertToPersianNumbers(formatNumber(value, 0));
						}
					}
				}
			},
			plugins: {
				legend: {
					display: false
				},
				tooltip: {
					mode: 'nearest',
					intersect: false,
					backgroundColor: 'rgba(0, 0, 0, 0.7)',
					borderColor: 'rgba(0, 0, 0, 0.7)',
					borderWidth: 1,
					borderRadius: 16,
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
		},
		plugins: [drawShadowPlugin, verticalLinePlugin]
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
