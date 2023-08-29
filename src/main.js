import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/styles.scss'
import './styles/resets.css'

createApp(App).use(store).use(router).mount('#app')


import 'bootstrap/dist/js/bootstrap'