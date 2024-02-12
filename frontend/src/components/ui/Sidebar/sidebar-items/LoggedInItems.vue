<script setup lang="ts">
import { BxUser } from '@kalimahapps/vue-icons'
</script>

<template>
  <li>
    <router-link
      to="/dashboard"
      class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      <BxUser
        class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      />
      <span class="ms-3">Dashboard</span>
    </router-link>
  </li>
</template>
