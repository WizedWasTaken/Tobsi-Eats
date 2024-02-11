import { defineStore } from 'pinia'
import type { OrderType } from '@/components/logic/orderInterface'

interface UserInfo {
  username: string
  phoneNumber: string
  profilePicture: string
  role: string[]
  loyaltyPoints: number
  data: UserData
}

interface UserData {
  user: UserInfo
  amountOfOrders: number
  credit: number
  totalAmountPaid: number
  deliveryFee: number
  latestOrder: Date
  favoriteShop: string
  lastLoggedIn: Date
  orders: OrderType[]
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {} as UserInfo
  }),
  actions: {
    setUser(user: UserInfo) {
      this.user = user
    },

    getUsername() {
      return this.user.username
    },
    logout() {
      this.user = {} as UserInfo
    }
  }
})
