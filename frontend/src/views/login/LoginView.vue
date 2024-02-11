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
          class="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'LoginPage',
  setup() {
    const loginForm = ref({
      username: '',
      password: ''
    })

    function handleLogin() {
      // Implement your login logic here
      console.log('Login info:', loginForm.value)
    }

    return {
      loginForm,
      handleLogin
    }
  }
}
</script>

<style scoped>
/* Add any additional styling here */
</style>
