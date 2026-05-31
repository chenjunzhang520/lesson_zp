import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouterConfig from './router/index.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <RouterConfig>
    <App />
  </RouterConfig>,
)
