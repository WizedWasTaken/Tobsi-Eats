<script setup lang="ts">
import { RouterView } from 'vue-router'

import NavigationComponent from '@/components/ui/Sidebar/NavigationComponent.vue'
</script>

<template>
  <div class="flex flex-col h-screen w-screen">
    <header class="flex-shrink-0">
      <NavigationComponent />
    </header>

    <div class="flex flex-grow p-4 mt-14 sm:ml-64">
      <Transition name="slide-fade" mode="out-in">
        <RouterView />
      </Transition>
    </div>
  </div>
</template>

<!-- Animation for page changing. -->
<style scoped lang="scss">
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.slide-fade-leave-active {
  position: absolute;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
