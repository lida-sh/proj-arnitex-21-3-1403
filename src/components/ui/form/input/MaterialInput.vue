<script setup>
defineOptions({
  inheritAttrs: false
})

const attrs = useAttrs()

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

const isPassword = computed(() => {
  return attrs.type === "password"
})

const isPasswordVisible = ref(false)

const inputType = computed(() => {
  if (!isPassword.value) {
    return attrs.type
  }
  else {
    return isPasswordVisible.value ? "text" : attrs.type
  }
})

</script>

<template>
  <div class="w-full relative">
    <input v-bind="$attrs" :type="inputType" v-model="model" ref="input"
      :class="{ 'error-border': error && error.length > 0, 'pl-[46px]': isPassword }"
      class="w-full bg-[#262626] h-[58px] p-3 focus:ring-0 focus:border-white border-solid border-[2px] border-[#676767] rounded-[8px] placeholder-[#676767] text-[14px]" />
    <template v-if="error && error.length > 0">
      <span v-for="errorItem in error" :key="errorItem" class="text-[#EA3C53] text-[14px] block mt-3">
        {{ errorItem }}
      </span>
    </template>
    <div v-if="isPassword" @click="isPasswordVisible = !isPasswordVisible"
      class="bg-[#262626] cursor-pointer absolute top-[13px] show-pass-key left-3 transform ">
      <IconsUiInputShowPass v-if="isPasswordVisible"></IconsUiInputShowPass>
      <IconsUiInputHidePass v-else></IconsUiInputHidePass>
    </div>
  </div>
</template>

<style scoped>
.error-border {
  border-color: #EA3C53;
}
</style>