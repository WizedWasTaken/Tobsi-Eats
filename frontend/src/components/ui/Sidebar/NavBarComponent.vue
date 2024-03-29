<script lang="ts">
// Imports
import { onMounted, onUnmounted, computed } from 'vue'
import { useNavbarStore } from '@/stores/navigationStore'
import { useUserStore } from '@/stores/userStore'
import { useToast } from 'vue-toastification'

import router from '@/router'

export default {
  setup() {
    // Navbar Pinia store (State Management)
    const navbarStore = useNavbarStore()

    // Notifications
    const toast = useToast()

    // Is user dropdown open
    let isUserDropdownOpen = computed(() => navbarStore.isUserDropdownOpen)

    // User Store
    const userStore = useUserStore()
    const user = computed(() => userStore.user)

    // Toggle sidebar
    const toggleSidebar = () => {
      navbarStore.toggleSidebar()
    }

    // Toggle user dropdown
    const toggleUserDropdown = () => {
      navbarStore.toggleUserDropdown()
    }

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('dropdown-user')
      const button = event.target as HTMLElement

      if (
        dropdown &&
        !dropdown.contains(event.target as Node) &&
        !button.classList.contains('user-dropdown-btn')
      ) {
        navbarStore.isUserDropdownOpen = false
      }
    }

    const logout = () => {
      userStore.logout()
      navbarStore.isUserDropdownOpen = false
      toast.error('Du er nu logget ud.')
    }

    const redirectToLogin = () => {
      toast.error('Du skal være logget ind for at se dette.')
      router.push('/login')
    }

    const turnOnComicSans = () => {
      document.body.style.fontFamily = 'Comic Sans MS'

      setTimeout(() => {
        document.body.style.fontFamily = 'Arial'
      }, 7500)
    }

    // Event listener initialise
    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
    })

    // Prevent memory leaks
    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })

    return {
      toggleSidebar,
      toggleUserDropdown,
      user,
      isUserDropdownOpen,
      logout,
      redirectToLogin,
      turnOnComicSans
    }
  }
}
</script>

<template>
  <nav
    class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            @click="toggleSidebar"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <router-link to="/" class="flex ms-2 md:me-24">
            <img
              src="@/assets/logo.png"
              class="h-8 me-3"
              alt="TobsiEats Logo"
              @dblclick="turnOnComicSans"
            />
            <span
              class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
              >Tobsi Eats</span
            >
          </router-link>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ms-3">
            <div>
              <button
                type="button"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  v-if="user.profilePicture"
                  :src="'http://localhost:4000/assets/' + user.profilePicture"
                  @click.stop="toggleUserDropdown"
                  class="w-8 h-8 rounded-full"
                  alt="user photo"
                />
                <img
                  v-else
                  src="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                  class="w-8 h-8 rounded-full"
                  alt="user photo"
                  @click.stop="redirectToLogin"
                />
              </button>
            </div>
            <div
              class="z-50 my-4 text-base list-none absolute top-10 right-0 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown-user"
              v-if="isUserDropdownOpen"
            >
              <div class="px-4 py-3" role="none">
                <div class="px-4 py-3" role="none">
                  <p class="text-sm text-gray-900 dark:text-white" role="none">
                    {{ user.username }}
                  </p>
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                    role="none"
                  >
                    {{ user.phoneNumber }}
                  </p>
                </div>
                <ul class="py-1" role="none">
                  <li>
                    <router-link
                      to="/dashboard"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                      >Dashboard</router-link
                    >
                  </li>
                  <li>
                    <p
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                      @click="logout()"
                    >
                      Log Ud
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
