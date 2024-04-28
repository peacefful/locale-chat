<template>
  <textarea
    @keydown.enter.prevent="$emit('send-message')"
    class="w-full bg-neutral-800 outline-none resize-none text-white p-1 rounded-lg"
    placeholder="Введите сообщение"
    v-model="value"
  />
</template>

<script setup lang="ts">
const value = defineModel<string>('value')

defineEmits(['send-message'])
</script>
