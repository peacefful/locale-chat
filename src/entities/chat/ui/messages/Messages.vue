<template>
  <div 
    class="p-2 flex flex-col" 
    v-for="message in messages" 
    :key="message.id"
  >
    <div 
      v-if="message.userId == currentId" 
      class="bg-black text-white p-2 rounded-lg text-right"
    >
      <div>
        {{ message.text }}
      </div>
      <div class="text-sm">
        {{ message.time }}
      </div>
    </div>
    <div v-else class="text-black bg-white p-2 rounded-lg text-left">
      <div>
        {{ message.text }}
      </div>
      <div class="text-sm">
        {{ message.time }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useChatStore } from '../../model'
import { type TMessages } from '../../model'
import { useUsersStore } from '@/entities/user';

type TPropsMessages = {
  messages: TMessages[]
}

defineProps<TPropsMessages>()

const userStore = useUsersStore()

const currentId = computed(() => {
  return userStore.currentUser?.id
})
</script>
