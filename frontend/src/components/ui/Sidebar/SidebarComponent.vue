<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useNavbarStore } from '@/stores/navigationStore'
import { FlFilledHome } from '@kalimahapps/vue-icons'

export default defineComponent({
  setup() {
    const sidebarStore = useNavbarStore()
    const isSidebarOpen = computed(() => sidebarStore.isSidebarOpen)

    return { isSidebarOpen, FlFilledHome }
  },
  //   ICONS
  components: {
    FlFilledHome
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
        <li>
          <router-link
            to="/"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <FlFilledHome
              class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />
            <span class="ms-3">Forside</span>
          </router-link>
        </li>
        <li>
          <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <!-- SEPERATOR EXAMPLE ^^ -->
            <li></li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>
