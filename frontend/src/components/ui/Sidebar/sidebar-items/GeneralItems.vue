<script setup lang="ts">
import { FlFilledHome } from '@kalimahapps/vue-icons'
</script>

<template>
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
</template>
