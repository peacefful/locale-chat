import { defineStore } from 'pinia'
import { type TUser } from '@/shared/types'
import { type TMessages } from './types'
import { chatsStorage } from '../lib'

export const useChatStore = defineStore('chatStore', {
  state: () => {
    return {
      currentChat: {} as TUser,
      messages: (chatsStorage.getMessages() || []) as TMessages[]
    }
  },
  actions: {
    setChat(user: TUser) {
      this.currentChat = user
    },
    getChat() {
      return this.currentChat
    },
    sendMessage(messages: TMessages) {
      this.messages.push(messages)
    },
    setMessages(messages: TMessages[]) {
      this.messages = messages
    }
  }
})
