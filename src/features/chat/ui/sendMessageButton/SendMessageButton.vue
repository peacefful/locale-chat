<template>
  <button
    type="submit" 
    class="bg-black rounded-full p-4 hover:bg-[#232323]"
  >
    <SendButtonIcon/>
  </button>
</template>

<script setup lang="ts">
import SendButtonIcon from '@/shared/assets/icons/SendButtonIcon.vue';

defineEmits(['send-message'])
</script>