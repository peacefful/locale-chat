import { type TSearchUser } from '../model'
import { type TUser } from '@/shared/types'

export const searchUsers = (data: TSearchUser): TUser[] => {
  return data.users.filter((user) => {
    return user.name.includes(data.searchUser)
  })
}
