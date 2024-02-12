<template>
  <div>
    <v-btn @click="toggleDarkMode">Toggle {{ currentMode }} Mode</v-btn>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { ref, onMounted } from 'vue'

const theme = useTheme()
const isDarkMode = ref(false)
let currentMode = ''

onMounted(() => {
  const savedTheme = localStorage.getItem('darkMode')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'true'
    theme.global.name.value = isDarkMode.value ? 'dark' : 'light'
    if (isDarkMode.value) {
      currentMode = 'LIGHT'
      document.documentElement.classList.add('dark')
    } else {
      currentMode = 'DARK'
      document.documentElement.classList.remove('dark')
    }
  }
})

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
  theme.global.name.value = isDarkMode.value ? 'dark' : 'light'
  if (isDarkMode.value) {
    currentMode = 'LIGHT'
    document.documentElement.classList.add('dark')
  } else {
    currentMode = 'DARK'
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('darkMode', isDarkMode.value.toString())
}
</script>
