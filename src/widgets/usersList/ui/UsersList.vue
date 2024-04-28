<template>
  <ul class="bg-neutral-800 w-96 text-white h-screen fixed overflow-y-auto hidden sm:block">
    <div class="p-2">
      <SearchUser v-model="data.searchUser" />
    </div>
    <li v-for="user in searchUsers(data)" :key="user.id">
      <UserProfile 
        @select-user="navigateChat(user, user.id)" 
        :avatar="user.avatar" 
        :name="user.name" 
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/entities/user'
import { UserProfile } from '@/entities/user'
import { SearchUser } from '@/features/user'
import { searchUsers, type TSearchUser } from '@/entities/user'
import { type TUser } from '@/shared/types'
import { useRouter } from 'vue-router'
import { useChatStore } from '@/entities/chat'
import { reactive } from 'vue'

const router = useRouter()

const usersStore = useUsersStore()
const { getOthersUserById } = usersStore

const chatStore = useChatStore()
const { setChat } = chatStore

const navigateChat = (user: TUser, id: number) => {
  setChat(user)
  router.push(`/chat/${id}`)
}

const data: TSearchUser = reactive({
  searchUser: '',
  users: getOthersUserById
})
</script>
