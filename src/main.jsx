import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

function AppWithAOS() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWithAOS />
  </StrictMode>,
)
