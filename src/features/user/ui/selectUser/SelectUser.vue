<template>
  <div class="w-2/6 flex flex-col text-white p-4 rounded-2xl bg-neutral-800">
    <h1 class="font-bold text-3xl">Выберите пользователя</h1>
    <div v-for="user in users" :key="user.id">
      <UserProfile
        @select-user="() => getUser(user.id) && push('/chat')"
        :avatar="user.avatar"
        :name="user.name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUsersStore, UserProfile } from '@/entities/user'
import { useRouter } from 'vue-router'

const { push } = useRouter()

const usersStore = useUsersStore()
const { users, getUser } = usersStore
</script>
