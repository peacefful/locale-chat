import { type TMessages } from '../model'
const _key = 'messages'

export const chatsStorage = {
  _key,
  getMessages: () => {
    const messagesString = localStorage.getItem(_key)
    return messagesString ? JSON.parse(messagesString) : null
  },
  setMessages: (messages: TMessages[]) => localStorage.setItem(_key, JSON.stringify(messages))
}