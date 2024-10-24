<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LogOutBtn from './components/LogOutBtn.vue'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'

const store = useAuthStore()
const { user } = storeToRefs(store)
</script>

<template>
  <header class="container">
    <nav class="grid">
      <RouterLink to="/">Home</RouterLink>
      <div v-if="user">
        <LogOutBtn />
      </div>
      <div v-else>
        <RouterLink to="/login">Log In</RouterLink>
      </div>
    </nav>
  </header>

  <main class="container">
    <RouterView />
  </main>
</template>
