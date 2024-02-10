<script setup lang="ts">
import { RouterView } from 'vue-router'

import Sidebar from '@/components/ui/Sidebar/SidebarComponent.vue'
</script>

<template>
  <header><Sidebar /></header>

  <RouterView />
</template>

<style scoped lang="scss"></style>
