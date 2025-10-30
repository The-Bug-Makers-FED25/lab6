import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ToggleProvider } from './context/toggleThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleProvider>
  </StrictMode>,
)
