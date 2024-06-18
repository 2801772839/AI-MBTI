import { createApp } from 'vue'
import App from './App.vue'
import '@/style.css'
import 'element-plus/dist/index.css'
import routrer from '@/router'

createApp(App).use(routrer).mount('#app')
