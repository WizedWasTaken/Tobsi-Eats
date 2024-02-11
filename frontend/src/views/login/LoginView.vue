<template>
  <div class="flex justify-center items-center h-full w-full">
    <div class="w-full max-w-md px-6 py-8 border border-gray-200 rounded-lg shadow-md">
      <h2 class="text-center text-3xl font-bold mb-8">Login</h2>
      <form @submit.prevent="handleLogin">
        <v-text-field
          label="Brugernavn"
          type="text"
          v-model="loginForm.username"
          class="mb-6"
          outlined
          required
        ></v-text-field>
        <v-text-field
          label="Kodeord"
          type="password"
          v-model="loginForm.password"
          class="mb-6"
          outlined
          required
        ></v-text-field>
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 disabled:opacity-50 disabled:bg-gray-600"
          :disabled="isButtonDisabled"
        >
          Login
        </button>
      </form>
      <p class="text-center">
        Har du ikke en konto?
        <router-link class="text-blue-500 underline" to="/signup">Opret en konto</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import { useUserStore } from '@/stores/userStore'

export default {
  name: 'LoginPage',
  setup() {
    const loginForm = ref({
      username: '',
      password: ''
    })
    const isButtonDisabled = ref(false)
    const toast = useToast()
    const userStore = useUserStore()

    async function handleLogin() {
      isButtonDisabled.value = true
      const loginEndpoint = 'http://localhost:4000/login'
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm.value)
      }

      try {
        const response = await fetch(loginEndpoint, requestOptions)
        const data = await response.json()

        if (!response.ok) {
          // Handle login failure
          console.error(new Date(), 'Fejl Kode:', data.error)
          toast.error('Der skete en fejl med dit login. Prøv igen senere.')
        } else {
          toast.success('Du er logget ind! Velkommen tilbage')
          userStore.setUser(data)
          console.log('User:', userStore.user)
        }
      } catch (error: any) {
        console.error('An error occurred:', error.message)
        alert('An error occurred, please try again.') // Displaying generic error message, adjust as necessary
      } finally {
        isButtonDisabled.value = false
      }
    }

    return {
      loginForm,
      isButtonDisabled,
      handleLogin
    }
  }
}
</script>

<style scoped lang="scss"></style>
