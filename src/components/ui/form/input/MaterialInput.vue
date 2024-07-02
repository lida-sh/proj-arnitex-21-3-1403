<script setup>
defineOptions({
  inheritAttrs: false
})
const model = defineModel()
const props = defineProps(['error', 'focus'])
const input = ref(null)
defineExpose({
  input
})
onMounted(async () => {
  if (props.focus) {
    await nextTick()
    input.value.focus()
  }
})
watch(() => props.focus, async (newVal) => {
  if (newVal) {
    await nextTick()
    input.value.focus()
  } else {
    await nextTick()
    input.value.blur()
  }
});
</script>

<template>
  <div class="w-full">
    <input v-bind="$attrs" v-model="model" ref="input" :class="{ 'error-border': error && error.length > 0 }"
      class="w-full bg-[#262626] h-[58px] p-3 focus:ring-0 focus:border-white border-solid border-[2px] border-[#676767] rounded-[8px] placeholder-[#676767] text-[14px]" />
    <template v-if="error && error.length > 0">
      <span v-for="errorItem in error" :key="errorItem" class="text-[#EA3C53] text-[14px] block mt-3">
        {{ errorItem }}
      </span>
    </template>
  </div>
</template>

<style scoped>
.error-border {
  border-color: #EA3C53;
}
</style>