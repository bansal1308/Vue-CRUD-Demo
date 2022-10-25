import { createApp } from 'vue'
import router from './router'

import App from './App.vue'
import './axios'
import store from './store'
import VueToast from 'vue-toast-notification';
import '../node_modules/vue-toast-notification/dist/theme-sugar.css';

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueToast, {
    // One of the options
    position: 'top-right'
})
app.mount('#app')


