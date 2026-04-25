import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.css'
import emailjs from '@emailjs/browser'

emailjs.init("l_ce7qtvjadGdWq3w")

createApp(App).mount('#app')
