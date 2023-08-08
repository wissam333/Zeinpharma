import { createApp } from 'vue'
import { createPinia } from 'pinia'

/* swipper adjusting bullets style */
import './styles/swipper.scss'

import App from './App.vue'
import router from './router'

/* import Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

/* import bootstrap icons */
import 'bootstrap-icons/font/bootstrap-icons.css'

/* import i18n */
import i18n from './i18n'

//import AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(AOS.init())
app.mount('#app')
