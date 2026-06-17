import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.tsx'
import { PerformanceProvider } from './components/PerformanceContext.tsx'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PerformanceProvider>
      <App />
      <Analytics />
    </PerformanceProvider>
  </StrictMode>,
)
