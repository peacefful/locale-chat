import { onMounted, onUnmounted } from 'vue'
import { chatsStorage } from '@/entities/chat'
import { useChatStore } from '@/entities/chat'
import { type TMessages } from '@/entities/chat'

export const useSyncChats = () => {
  const chatStore = useChatStore()

  const onChatsStorageChange = (storageEvent: StorageEvent) => {
    if (storageEvent.key !== 'messages') return
    const messages: TMessages[] = chatsStorage.getMessages()
    chatStore.setMessages(messages)
  }

  onMounted(() => {
    window.addEventListener('storage', onChatsStorageChange)
  })

  onUnmounted(() => {
    window.removeEventListener('storage', onChatsStorageChange)
  })
}
