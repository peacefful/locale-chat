import './styles/main.css'
import './styles/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router } from './providers'

export const app = createApp(App).use(createPinia()).use(router)