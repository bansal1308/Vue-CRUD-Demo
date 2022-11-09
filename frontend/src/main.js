import { createApp } from 'vue'
import router from './router'

import App from './App.vue'
import './axios'
import store from './store'
import VueToast from 'vue-toast-notification'
import '../node_modules/vue-toast-notification/dist/theme-sugar.css'
import globalComponent from './plugins/global-components'
//import dropdown from './components/bootstrap/dropdown/dropdown.vue'
//import dropdownItems from './components/bootstrap/dropdown/dropdown-items.vue'
//require('waypoints/lib/noframework.waypoints.min')

const app = createApp(App)
app.use(store)
app.use(router)
//app.use(dropdown)
//app.use(dropdownItems)
app.use(globalComponent)
app.use(VueToast, {
    // One of the options
    position: 'top-right'
})
app.mount('#app')
export { app }


