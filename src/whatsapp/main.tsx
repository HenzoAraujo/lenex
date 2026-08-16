import '../index.css'
import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { supabase } from '../utils/supabase'
import Whatsapp from './Whatsapp'

const style = document.createElement('style')
style.textContent = `
  @font-face {
    font-family: 'Bebas Neue';
    src: url('${chrome.runtime.getURL('fonts/BebasNeue-Regular.ttf')}') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    src: url('${chrome.runtime.getURL('fonts/Roboto-Variable.ttf')}') format('truetype');
  }
`
document.head.appendChild(style)

function WhatsappGate() {
  const [session, setSession] = useState<any>(null)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setChecking(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    function handleStorageChange(changes: { [key: string]: chrome.storage.StorageChange }) {
      const relevantKey = Object.keys(changes).find((k) => k.includes('auth-token'))
      if (relevantKey) {
        supabase.auth.getSession().then(({ data }) => {
          setSession(data.session)
        })
      }
    }

    chrome.storage.onChanged.addListener(handleStorageChange)

    return () => {
      listener.subscription.unsubscribe()
      chrome.storage.onChanged.removeListener(handleStorageChange)
    }
  }, [])

  if (checking || !session) return null

  return <Whatsapp />
}

const root = document.createElement('div')
document.body.appendChild(root)

createRoot(root).render(
  <StrictMode>
    <WhatsappGate />
  </StrictMode>
)