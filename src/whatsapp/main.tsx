import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Whatsapp from './Whatsapp.tsx'

function createWhatsapp() {
  const root = document.createElement('div')
  root.id = 'lenex'
  document.body.appendChild(root)
  createRoot(root).render(
    <StrictMode>
      <Whatsapp />
    </StrictMode>
  )
}

function removeWhatsapp() {
  const root = document.getElementById("lenex")
  root?.remove()
  if (root) {
    const whatsapp = document.querySelector<HTMLElement>('#app')
    if (whatsapp) {
      whatsapp.style.paddingTop = '0'
      whatsapp.style.paddingLeft = '0'
    }
  }
}

chrome.storage.local.get('logged', (result) => {
  if (result.logged) {
    createWhatsapp()
  }
})

chrome.runtime.onMessage.addListener((message) => {
  if (message.logged) {
    createWhatsapp()
  } else {
    removeWhatsapp()
  }
})
