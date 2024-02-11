import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Toastification
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

// App
import App from './App.vue'
import router from './router'

// Sentry
import * as Sentry from '@sentry/vue'

// Vuetify
import 'vuetify/dist/vuetify.min.css' // Vuetify styles first
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Tailwind CSS ! Vuetify kan godt overskrive Tailwind, så det er vigtigt at importere Tailwind sidst
import 'tailwindcss/tailwind.css'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)

const options = {
  position: 'bottom-right',
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  draggable: false,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: true,
  icon: false,
  rtl: false
}

Sentry.init({
  dsn: 'https://122618453d62bea4e8c71ac72f3459d2@o4506714355138560.ingest.sentry.io/4506714355990528',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false
    })
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 1.0, // Sæt til 1.0 ved production, 0.1 ved development
  replaysOnErrorSampleRate: 1.0
})

app.use(createPinia())
app.use(router)
app.use(Toast, options)
app.use(vuetify)

app.mount('#app')
