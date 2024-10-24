import './assets/pico.min.css'
import './assets/custom.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PocketBase from 'pocketbase'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pb = new PocketBase('http://127.0.0.1:8090')

app.use(createPinia())
app.use(router)
app.provide('pocketbase', pb)

app.mount('#app')
