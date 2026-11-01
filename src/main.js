import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.css'
import emailjs from '@emailjs/browser'

emailjs.init('LjDX-Ppqsw11gIMpa')

createApp(App).mount('#app')
