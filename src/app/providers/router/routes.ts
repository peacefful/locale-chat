import { Home } from '@/pages/home'
import { Chat } from '@/pages/chat'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/chat/:id?',
    name: 'chat',
    component: Chat
  }
]
