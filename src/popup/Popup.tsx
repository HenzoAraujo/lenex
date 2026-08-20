import { useEffect, useState } from "react"
import Logged from "./Logged"
import Unlogged from "./Unlogged"
import { supabase } from "../utils/supabase"

function Popup() {

    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setIsLogged(!!data.session)
        });
        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setIsLogged(!!session)
            }
        );

        return () => {
            listener.subscription.unsubscribe()
        };
    }, [])


    useEffect(() => {
        chrome.storage.local.set({
            logged: isLogged
        })

        chrome.tabs.query(
            { active: true, currentWindow: true },
            (tabs) => {
                if (tabs[0]?.id) {
                    chrome.tabs.sendMessage(tabs[0].id, {
                        type: "AUTH_STATE",
                        logged: isLogged
                    })
                }
            }
        )
    }, [isLogged])

    return isLogged ? <Logged /> : <Unlogged />
}
export default Popup
