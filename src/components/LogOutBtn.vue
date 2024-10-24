<script setup>
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore()

function logOut() {
  store.logOut()
}
</script>

<template>
  <button class="outline" @click="logOut">Log Out</button>
</template>
