import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss'
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
