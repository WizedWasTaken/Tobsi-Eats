<!-- TODO: Smoothen animations -->
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
    <a :class="['flex items-center mt-3', hover ? 'w-full px-3' : 'justify-center']" href="#">
      <PuzzlePieceIcon class="w-8 h-8" />
      <span v-if="hover" class="ml-2 text-lg font-bold">Project Name</span>
    </a>

    <div :class="[hover ? 'w-full px-2' : '']">
      <div
        :class="['flex flex-col items-center mt-3 border-t border-gray-300', hover ? 'w-full' : '']"
      >
        <a
          :class="[
            'flex items-center h-12 mt-2 rounded bg-gray-300',
            '',
            hover ? 'w-full px-3' : 'justify-center w-12'
          ]"
          href="#"
        >
          <HomeIcon class="w-6 h-6" />
          <span v-if="hover" class="ml-2 text-sm font-medium">Dasboard</span>
        </a>
        <a
          :class="[
            'flex items-center h-12 mt-2 rounded hover:bg-gray-300',
            hover ? 'w-full px-3' : 'justify-center w-12'
          ]"
          href="#"
        >
          <MagnifyingGlassIcon class="w-6 h-6" />
          <span v-if="hover" class="ml-2 text-sm font-medium">Search</span>
        </a>
        <a
          :class="[
            'flex items-center h-12 mt-2 rounded hover:bg-gray-300',
            hover ? 'w-full px-3' : 'justify-center w-12'
          ]"
          href="#"
        >
          <PresentationChartBarIcon class="w-6 h-6" />
          <span v-if="hover" class="ml-2 text-sm font-medium">Insights</span>
        </a>
        <a
          :class="[
            'flex items-center h-12 mt-2 rounded hover:bg-gray-300',
            hover ? 'w-full px-3' : 'justify-center w-12'
          ]"
          href="#"
        >
          <RectangleStackIcon class="w-6 h-6" />
          <span v-if="hover" class="ml-2 text-sm font-medium">Docs</span>
        </a>
      </div>

      <div class="flex flex-col items-center mt-2 border-t border-gray-300">
        <a
          :class="[
            'flex items-center h-12 mt-2 rounded hover:bg-gray-300',
            hover ? 'w-full px-3' : 'justify-center w-12'
          ]"
          href="#"
        >
          <ShoppingCartIcon class="w-6 h-6" />
          <span v-if="hover" class="ml-2 text-sm font-medium">Products</span>
        </a>
        <a
          :class="[
            'flex items-center h-12 mt-2 rounded hover:bg-gray-300',
            hover ? 'w-full px-3' : 'justify-center w-12'
          ]"
          href="#"
        >
          <AdjustmentsVerticalIcon class="w-6 h-6" />
          <span v-if="hover" class="ml-2 text-sm font-medium">Settings</span>
        </a>
        <a
          :class="[
            'relative flex items-center h-12 mt-2 rounded hover:bg-gray-300',
            hover ? 'w-full px-3' : 'justify-center w-12'
          ]"
          href="#"
        >
          <ChatBubbleBottomCenterTextIcon class="w-6 h-6" />
          <span v-if="hover" class="ml-2 text-sm font-medium">Messages</span>
          <span class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
        </a>
      </div>
    </div>

    <div class="w-full mt-auto bg-gray-200">
      <a class="flex items-center justify-center h-16 hover:bg-gray-300" href="#">
        <UserCircleIcon class="w-6 h-6" />
        <span v-if="hover" class="ml-2 text-sm font-medium">Account</span>
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PresentationChartBarIcon,
  UserCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  AdjustmentsVerticalIcon,
  ShoppingCartIcon,
  RectangleStackIcon,
  PuzzlePieceIcon
} from '@heroicons/vue/24/outline'

const hover = ref(false)
</script>
