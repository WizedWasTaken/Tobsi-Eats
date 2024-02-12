<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useNavbarStore } from '@/stores/navigationStore'
import { useUserStore } from '@/stores/userStore'

// Items
import GeneralItems from '@/components/ui/Sidebar/sidebar-items/GeneralItems.vue'
import NotLoggedInItems from '@/components/ui/Sidebar/sidebar-items/NotLoggedInItems.vue'
import LoggedInItems from '@/components/ui/Sidebar/sidebar-items/LoggedInItems.vue'

// Dark Mode
import darkModeToggle from '@/utils/NavigationBar/darkModeToggle.vue'

export default defineComponent({
  setup() {
    const sidebarStore = useNavbarStore()
    const isSidebarOpen = computed(() => sidebarStore.isSidebarOpen)
    const userStore = useUserStore()
    const user = computed(() => userStore.user)
    console.log('User:', user)

    return { isSidebarOpen, user }
  },
  // Nav Items
  components: {
    GeneralItems,
    NotLoggedInItems,
    LoggedInItems,
    darkModeToggle
  }
})
</script>

<template>
  <aside
    :class="{
      'translate-x-0': isSidebarOpen,
      '-translate-x-full': !isSidebarOpen,
      'fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700': true,
      'sm:translate-x-0': true
    }"
    aria-label="Sidebar"
  >
    <!-- Sidebar Items -->
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <div class="w-full h-full flex justify-center items-center">
          <darkModeToggle />
        </div>
        <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
          <li>
            <GeneralItems />
          </li>
        </ul>
        <li>
          <!-- Only show if user isn't logged in. -->
          <ul
            v-if="!user.username"
            class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700"
          >
            <NotLoggedInItems />
          </ul>
        </li>
        <li>
          <!-- Only show if user is logged in -->
          <ul
            v-if="user.username"
            class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700"
          >
            <LoggedInItems />
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>
