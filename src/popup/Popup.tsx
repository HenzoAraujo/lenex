import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'
import Logged from './Logged'
import Unlogged from './Unlogged'

function Popup() {
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setLogged(!!data.session)
    })

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setLogged(!!session)
      }
    )

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  if (logged) {
    return <Logged />
  }

  return <Unlogged onLogin={() => setLogged(true)} />
}

export default Popup