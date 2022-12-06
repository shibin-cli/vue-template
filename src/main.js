import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from '@/router'
import '@/assets/css/tailwindcss.css'
import '@/assets/css/reset.css'
import 'element-plus/dist/index.css'
import '@/assets/css/style.css'

createApp(App)
  .use(ElementPlus)
  .use(router)
  .mount('#app')
