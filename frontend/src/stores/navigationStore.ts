import { defineStore } from 'pinia'

interface NavbarState {
  isSidebarOpen: boolean
  isUserDropdownOpen: boolean
}

export const useNavbarStore = defineStore('navbar', {
  state: () => ({
    isSidebarOpen: false as NavbarState['isSidebarOpen'],
    isUserDropdownOpen: false as NavbarState['isUserDropdownOpen']
  }),
  actions: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
    toggleUserDropdown() {
      this.isUserDropdownOpen = !this.isUserDropdownOpen
    }
  }
})
