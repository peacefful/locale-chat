<template>
  <UsersList />
  <div class="flex flex-col h-screen">
    <div 
      v-if="isSetChat" 
      class="ml-0 flex flex-col flex-grow sm:ml-96"
    >
      <Header :chat="getChat()" />
      <div class="flex-grow"></div>
      <Messages :messages="currentMessages" />
      <SendMessagesForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import { UsersList } from '@/widgets/usersList'
import { Header } from '@/entities/chat'
import { SendMessagesForm } from '@/widgets/sendMessagesForm'
import { useChatStore } from '@/entities/chat'
import { isNotEmptyObject } from '@/shared/lib/utils'
import { computed } from 'vue'
import { Messages } from '@/entities/chat'
import { useSyncChats } from '@/entities/chat'
import { useRoute } from 'vue-router'
import { useUsersStore } from '@/entities/user'
import { type TUser } from '@/shared/types'
import { getLastId } from '@/entities/chat'

useSyncChats()

const route = useRoute()

const chatStore = useChatStore()
const { getChat } = chatStore

const usersStore = useUsersStore()

const isSetChat = computed(() => {
  return isNotEmptyObject<TUser>(getChat())
})

const currentMessages = computed(() => {
  const currentUser = usersStore.currentUser?.id;
  const currentPathId = getLastId(route.fullPath);

  return chatStore.messages.filter(message => {
    const isCurrentUserSender = message.userId === currentUser;
    const isCurrentUserRecipient = message.toWhomId === currentUser;
    const isPathRecipient = message.toWhomId === currentPathId;
    const isPathSender = message.userId === currentPathId;

    return (
      (isCurrentUserSender && isPathRecipient) ||
      (isCurrentUserRecipient && isPathSender)
    );
  });
});
</script>