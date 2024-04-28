import { defineStore } from 'pinia'
import { type TUser } from '@/shared/types'
import users from "../../../../public/users.json"

export const useUsersStore = defineStore('usersStore', {
  state: () => {
    return {
      users: users as TUser[],
      currentUser: {} as TUser | undefined
    }
  },
  getters: {
    getOthersUserById(state) {
      return state.users.filter(user => {
        return user.id !== state.currentUser?.id
      })
    }
  },
  actions: {
    getUser(id: number): TUser | undefined {
      this.currentUser = this.users.find((user) => {
        return user.id === id
      })
      return this.currentUser
    }
  }
})
