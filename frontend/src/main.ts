import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Sentry
import * as Sentry from '@sentry/vue'

const app = createApp(App)

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

app.mount('#app')
