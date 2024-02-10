<script setup lang="ts">
import { ref } from 'vue'
import {
  HomeIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  GlobeEuropeAfricaIcon
} from '@heroicons/vue/24/outline'

const hover = ref(false)
</script>

<!-- TODO: Smoothen animations -->
<!-- TODO: Find more options for sidebar. -->
<template>
  <nav
    :class="[
      'flex flex-col items-center h-screen overflow-hidden bg-gray-100 font-sans shadow-[0_0_5px_rgba(0,0,0,0.25)]',
      'transition-all duration-300',
      hover ? 'max-w-[280px]' : 'max-w-[64px]'
    ]"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <router-link
      to="/"
      :class="['flex items-center mt-3', hover ? 'w-full px-3' : 'justify-center']"
    >
      <GlobeEuropeAfricaIcon class="w-8 h-8" />
      <span v-if="hover" class="ml-2 text-lg font-bold">Tobsi Eats</span>
    </router-link>

    <div :class="[hover ? 'w-full px-2' : '']">
      <div
        :class="['flex flex-col items-center mt-3 border-t border-gray-300', hover ? 'w-full' : '']"
      >
        <router-link
          :class="[
            'flex items-center h-12 mt-2 rounded hover:bg-gray-300',
            '',
            hover ? 'w-full px-3' : 'justify-center w-12'
          ]"
          to="/"
        >
          <HomeIcon class="w-6 h-6" />
          <span v-if="hover" class="ml-2 text-sm font-medium">Forside</span>
        </router-link>
      </div>

      <div class="flex flex-col items-center mt-2 border-t border-gray-300">
        <router-link
          to="/profile"
          :class="[hover ? 'w-full px-3' : 'justify-center w-12']"
          class="flex items-center h-12 mt-2 rounded hover:bg-gray-300"
        >
          <UserCircleIcon class="w-6 h-6" />
          <span v-if="hover" class="ml-2 text-sm font-medium">Profil</span>
        </router-link>
      </div>

      <div class="flex flex-col items-center mt-2 border-t border-gray-300">
        <router-link
          to="/shops"
          :class="[
            'flex items-center h-12 mt-2 rounded hover:bg-gray-300',
            hover ? 'w-full px-3' : 'justify-center w-12'
          ]"
          href="#"
        >
          <ShoppingCartIcon class="w-6 h-6" />
          <span v-if="hover" class="ml-2 text-sm font-medium">Butikker</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style lang="scss"></style>
