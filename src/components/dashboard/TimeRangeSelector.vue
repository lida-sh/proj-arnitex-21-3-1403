<template>
    <div class="time-range-selector">
      <button v-for="range in ranges" :key="range.value" @click="selectRange(range.value)" :class="{'active': selectedRange === range.value}">
        {{ range.label }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const ranges = [
    { value: 7, label: '۷ روزه' },
    { value: 30, label: '۳۰ روزه' },
    { value: 90, label: '۹۰ روزه' }
  ]
  
  const selectedRange = ref(7)
  
  const selectRange = (range) => {
    selectedRange.value = range
    emit('update:range', range)
  }
  </script>
  
  <style scoped>
  .time-range-selector {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  button {
    background: none;
    border: none;
    width: 150px;
    color: #fff;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-bottom: 2px solid #343434;
  }
  
  button.active {
    border-bottom: 2px solid #FF7028;
    color: #FF7028;
  }
  
  button:not(.active):hover {
    color: #FF7028;
  }
  </style>
  