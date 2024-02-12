<template>
  <div class="flex justify-center items-center h-full w-full">
    <div class="w-full max-w-md px-6 py-8 border border-gray-200 rounded-lg shadow-md">
      <h2 class="text-center text-3xl font-bold mb-8">Opret Bruger</h2>
      <form @submit.prevent="handleSignup">
        <v-text-field
          label="Brugernavn"
          type="text"
          v-model="signupForm.username"
          class="mb-6"
          outlined
          required
        ></v-text-field>
        <v-text-field
          label="Kodeord"
          type="password"
          v-model="signupForm.password"
          class="mb-6"
          outlined
          required
        ></v-text-field>
        <v-text-field
          label="Telefon nummer"
          type="text"
          v-model="signupForm.phoneNumber"
          class="mb-6"
          outlined
          required
        ></v-text-field>
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 disabled:opacity-50 disabled:bg-gray-600"
          :disabled="isButtonDisabled"
        >
          Opret Bruger
        </button>
      </form>
      <p class="text-center mt-6">
        Har du allerede en konto?
        <router-link class="text-blue-500 underline" to="/login">Log ind</router-link>
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
    const signupForm = ref({
      username: '',
      phoneNumber: '',
      password: ''
    })
    const isButtonDisabled = ref(false)
    const toast = useToast()
    const userStore = useUserStore()

    async function handleSignup() {
      isButtonDisabled.value = true
      const loginEndpoint = 'http://localhost:4000/signup'
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupForm.value)
      }

      try {
        const response = await fetch(loginEndpoint, requestOptions)
        const data = await response.json()

        if (!response.ok) {
          // Handle login failure
          console.error(new Date(), 'Fejl Kode:', data.error)
          toast.error(data.error)
        } else {
          toast.success('Du har nu oprettet en bruger. Velkommen til!')
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
      signupForm,
      isButtonDisabled,
      handleSignup
    }
  }
}
</script>

<style lang="scss"></style>
