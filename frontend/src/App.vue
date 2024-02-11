<script setup lang="ts">
import { RouterView } from 'vue-router'

import NavigationComponent from '@/components/ui/Sidebar/NavigationComponent.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <header class="flex-shrink-0">
      <NavigationComponent />
    </header>

    <div class="flex flex-grow p-4 mt-14 sm:ml-64">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
