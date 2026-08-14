import '../index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Whatsapp from './Whatsapp'

const root = document.createElement('div')

document.body.appendChild(root)

createRoot(root).render(
  <StrictMode>
    <Whatsapp />
  </StrictMode>
)