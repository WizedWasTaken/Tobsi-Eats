<script setup lang="ts">
import { RouterView } from 'vue-router'

import NavigationComponent from '@/components/ui/Sidebar/NavigationComponent.vue'
</script>

<template>
  <header>
    <NavigationComponent />
  </header>

  <div class="p-4 sm:ml-64">
    <div class="p-4 mt-14">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
