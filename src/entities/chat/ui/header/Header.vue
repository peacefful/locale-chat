<template>
  <header class="bg-neutral-800 text-white w-full p-2 fixed hidden sm:block font-bold">
    <div class="flex items-center gap-4">
      <Avatar :src="chat.avatar" />  {{ chat.name }}
    </div>
  </header>
</template>

<script setup lang="ts">
import { Avatar } from '@/shared/ui/avatar';
import { type TUser } from '@/shared/types';

type TChatProps = Omit<TUser, "id">

defineProps<{
  chat:TChatProps
}>()
</script>