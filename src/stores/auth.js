import { defineStore } from 'pinia'
import { ref } from 'vue'
import { inject } from 'vue'

// This store imports pocketBase instance from main.js, and
// checks if the user is logged-in and provides functions to do so

export const useAuthStore = defineStore('user', () => {
  const user = ref(false)

  const pb = inject('pocketbase')
  if (pb.authStore.isValid) {
    user.value = pb
  }

  async function logIn(username, password) {
    const res = await pb
      .collection('users')
      .authWithPassword(username.value, password.value)

    if (res.token) {
      user.value = res
      return user.value
    }
  }

  function logOut() {
    pb.authStore.clear()
    user.value = false
  }

  return { user, logIn, logOut }
})
