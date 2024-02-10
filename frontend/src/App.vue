<script setup lang="ts">
import { RouterView } from 'vue-router'

import NavigationComponent from '@/components/ui/Sidebar/NavigationComponent.vue'
</script>

<template>
  <!-- <div class="flex"> -->
  <header>
    <NavigationComponent />
  </header>

  <div class="p-4 sm:ml-64">
    <RouterView />
  </div>
  <!-- </div> -->
</template>

<style scoped lang="scss"></style>
