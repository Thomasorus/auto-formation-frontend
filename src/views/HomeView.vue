<script setup>
import { inject, onMounted, ref } from 'vue'
const pb = inject('pocketbase')

const users = ref([])
async function getData() {
  const res = await pb.collection('users').getList(1, 30, { expand: 'ranking' })
  users.value = res.items
  console.log(res.items)
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div class="grid">
    <article v-for="user in users" :key="user.id">
      <img
        :src="
          'http://127.0.0.1:8090/api/files/' +
          user.collectionId +
          '/' +
          user.id +
          '/' +
          user.avatar +
          '?thumb=200x200'
        "
        :alt="user.name"
      />
      {{ user.rankings.length }} rankings
      <RouterLink
        :to="{ name: 'user', params: { id: user.id } }"
        class="absolute-link"
      ></RouterLink>
    </article>
  </div>
  <details>
    <summary>API response for users</summary>
    <pre>{{ users }}</pre>
  </details>
</template>
