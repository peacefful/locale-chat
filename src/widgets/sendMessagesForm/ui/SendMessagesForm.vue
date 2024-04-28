<template>
  <form @submit.prevent="sendMessage" class="flex items-center gap-2 p-2">
    <textarea
      @keydown.enter.prevent="sendMessage"
      class="w-full bg-neutral-800 outline-none resize-none text-white p-1 rounded-lg overflow-y-hidden"
      placeholder="Введите сообщение"
      v-model="message"
    />
    <button type="submit" class="bg-black rounded-full p-4 hover:bg-[#232323] ease-out duration-75">
      <SendButtonIcon />
    </button>
  </form>
</template>

<script setup lang="ts">
import { useChatStore } from '@/entities/chat'
import { chatsStorage } from '@/entities/chat'
import { useRoute } from 'vue-router'
import { getLastId } from '@/entities/chat'
import { useUsersStore } from '@/entities/user'
import { type TMessages } from '@/entities/chat'
import { ref } from 'vue'
import dayjs from 'dayjs'
import SendButtonIcon from '@/shared/assets/icons/SendButtonIcon.vue'

const route = useRoute()

const chatStore = useChatStore()
const userStore = useUsersStore()

const message = ref('')

const sendMessage = () => {
  if (message.value.trim()) {
    const messagesData: TMessages = {
      text: message.value,
      time: dayjs().format('HH:mm'),
      userId: userStore.currentUser?.id,
      toWhomId: getLastId(route.fullPath)
    }

    chatStore.sendMessage(messagesData)
    chatsStorage.setMessages(chatStore.messages)

    message.value = ''

    requestAnimationFrame(() => {
      window.scrollTo(0, document.body.scrollHeight)
    })
  }
}
</script>
