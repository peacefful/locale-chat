<template>
  <img class="h-16 w-16x rounded-full" :src="src" alt=""/>
</template>

<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>