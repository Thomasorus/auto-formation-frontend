<script setup>
import { useRouter } from 'vue-router'
import { inject, onMounted, ref } from 'vue'
const pb = inject('pocketbase')

const userId = useRouter().currentRoute.value.params.id
let user = ref({})
let rankings = ref([])

async function getData() {
  const res = await pb.collection('users').getFirstListItem(`id="${userId}"`, {
    expand: 'session',
  })
  user.value = res
  const resRankings = await pb.collection('ranking').getList(1, 20, {
    filter: res.rankings.map(id => `id='${id}'`).join('||'),
    expand: 'session,game',
  })
  rankings.value = resRankings.items
}

onMounted(() => {
  getData()
})
</script>

<template>
  <article class="card">
    <div class="grid">
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
      <div>
        <h2>{{ user.name }}</h2>
        <!-- <p>{{ user.rankings.length }} rankings</p> -->
      </div>
    </div>
    <p></p>
  </article>

  <h2>Rankings</h2>
  <div class="grid">
    <article class="card" v-for="ranking in rankings" v-bind:key="ranking.id">
      <img
        :src="
          'http://127.0.0.1:8090/api/files/' +
          ranking.expand.game.collectionId +
          '/' +
          ranking.expand.game.id +
          '/' +
          ranking.expand.game.image +
          '?thumb=200x200'
        "
        :alt="user.name"
      />
      <h2>{{ ranking.name }}</h2>
      <p>{{ ranking.sessions.length }} sessions for this ranking</p>
      <RouterLink
        :to="{ name: 'ranking', params: { rankingId: ranking.id } }"
        class="absolute-link"
      ></RouterLink>
    </article>
  </div>
</template>
