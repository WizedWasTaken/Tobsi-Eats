<template>
  <div>
    <v-btn @click="toggleDarkMode">Toggle Dark Mode</v-btn>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { ref, onMounted } from 'vue'

const theme = useTheme()
const isDarkMode = ref(false)

onMounted(() => {
  const savedTheme = localStorage.getItem('darkMode')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'true'
    theme.global.name.value = isDarkMode.value ? 'dark' : 'light'
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
})

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
  theme.global.name.value = isDarkMode.value ? 'dark' : 'light'
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('darkMode', isDarkMode.value.toString())
}
</script>
