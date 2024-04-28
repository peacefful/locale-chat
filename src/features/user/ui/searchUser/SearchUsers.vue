<template>
  <input 
    type="text" 
    placeholder="Поиск пользователя" 
    v-model="value"
    class="outline-none bg-neutral-900 text-white mt-2 p-2 rounded-2xl w-full" 
  />
</template>

<script setup lang="ts">
const value = defineModel('value')
</script>
