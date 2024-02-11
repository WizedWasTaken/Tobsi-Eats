<script setup lang="ts">
import { RouterView } from 'vue-router'

import NavigationComponent from '@/components/ui/Sidebar/NavigationComponent.vue'
</script>

<template>
  <!-- w-screen caused overflow, fuck specifying width ever again 😎 -->
  <div class="flex flex-col h-screen">
    <header class="flex-shrink-0">
      <NavigationComponent />
    </header>

    <div class="flex flex-grow p-4 mt-14 sm:ml-64">
      <RouterView />
    </div>
  </div>
</template>

<!-- Animation for page changing. -->
<style lang="scss"></style>
