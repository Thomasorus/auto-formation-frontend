<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter, useRoute } from 'vue-router'

const store = useAuthStore()
const router = useRouter()

async function logInForm() {
  const res = await store.logIn(username, password)
  router.push('/')
}

const username = ref('GuardImpact')
const password = ref('adminadmin')
</script>

<template>
  <h1>Please Log In</h1>
  <section>
    <form @submit.prevent="logInForm">
      <label for="username">Name</label>
      <input type="text" id="username" v-model="username" />
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" />
      <input type="submit" value="Send" />
    </form>
  </section>
</template>
