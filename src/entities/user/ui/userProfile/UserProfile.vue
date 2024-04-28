<template>
  <button
    class="ease-out duration-200 hover:bg-neutral-600 w-full text-left p-1 z-10"
    @click="$emit('select-user')"
  >
    <div class="flex items-center gap-4 mt-2">
      <Avatar :src="avatar" />
      <div class="hidden sm:block">
        {{ name }}
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { Avatar } from '@/shared/ui/avatar'
import { type TUser } from '@/shared/types'

type TSelectUser = Omit<TUser, 'id'>

defineProps<TSelectUser>()

defineEmits(['select-user'])
</script>
