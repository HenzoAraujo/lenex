import { useEffect, useState } from "react"
import Kanban from "./Kanban.tsx"

function Whatsapp() {

  const [openTop, setOpenTop] = useState(true)
  const [openBottom, setOpenBottom] = useState(true)
  const [selected, setSelected] = useState('all')
  const [iconSel, setIconSel] = useState('')
  const lenexIcon = chrome.runtime.getURL("icons/icon.png")

  useEffect(() => {
    const whatsapp = document.querySelector<HTMLElement>("#app")

    if (!whatsapp) return
    whatsapp.style.paddingTop = openTop ? "3.5em" : "0"
    whatsapp.style.paddingLeft = openBottom ? "3.5em" : "0"
  }, [openTop, openBottom])

  useEffect(() => {
    const fontBebas = chrome.runtime.getURL("fonts/BebasNeue-Regular.ttf")
    const fontRoboto = chrome.runtime.getURL("fonts/Roboto-Variable.ttf")

    const style = document.createElement("style")

    style.textContent = `
    @font-face {
      font-family: "Bebas Neue";
      src: url("${fontBebas}") format("truetype");
    }
    @font-face {
      font-family: "Roboto";
      src: url("${fontRoboto}") format("truetype");
    }
  `
    document.head.appendChild(style)

    return () => {
      style.remove()
    }
  }, [])

  const topbar = [
    { id: "all", label: "Todos" },
    { id: "chat", label: "1:1" },
    { id: "groups", label: "Grupos" },
    { id: "unread", label: "Não Lidos" },
    { id: "unsaved", label: "Não Salvos" },
  ]

  const sidebar = [
    {
      id: '1', svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411" />
      </svg>
    },
    {
      id: '2', svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
      </svg>
    },
    {
      id: '3', svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z" />
      </svg>
    },
    {
      id: '4', svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
      </svg>
    },
    {
      id: '5', svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-volume-up-fill" viewBox="0 0 16 16">
        <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
        <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06" />
      </svg>
    },
    {
      id: '6', svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
      </svg>
    },
    {
      id: '7', svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-kanban-fill" viewBox="0 0 16 16">
        <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1" />
      </svg>
    },
    {
      id: '8', svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar-date-fill" viewBox="0 0 16 16">
        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2" />
        <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a13 13 0 0 1 1.313-.805h.632z" />
      </svg>
    }
  ]

  return (
    <>
      <button className={`${openTop ? "translate-y-12!" : ""} z-[9999999]! cursor-pointer! fixed! transition-transform! duration-300! ease-in-out! right-5!`} onClick={() => { setOpenTop(!openTop) }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#7bf1a8" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </button>

      <div className={`${openTop ? "-translate-y-" : "-translate-y-12!"} flex! flex-row! items-center! gap-20! p-2! fixed! transition-transform! duration-300! ease-in-out! z-[999999]! bg-[#101013]! h-14! w-screen! border-b! border-[#2b2b2e]!`}>
        <img className="h-10!" src={lenexIcon} alt="Lenex" />
        <span className="flex! gap-8!">
          {topbar.map((button) => {
            return (
              <button key={button.id} onClick={() => setSelected(button.id)} className={`${selected === button.id ? "bg-green-800! hover:border-green-800! text-white!" : ""} font-bebas! text-xl! border! border-transparent! rounded-2xl! text-green-300! p-1! cursor-pointer! hover:border-green-400!`}>{button.label}</button>
            )
          })}
        </span>
      </div>

      <button className={`${openBottom ? "translate-x-12!" : ""} z-[9999999]! cursor-pointer fixed! transition-transform! duration-300! ease-in-out! bottom-5!`} onClick={() => { setOpenBottom(!openBottom) }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#7bf1a8" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      </button>

      <div className={`${openBottom ? "-translate-x-" : "-translate-x-12!"} z-[99999]! flex! flex-col! justify-center! items-center! fixed! gap-6! bg-[#16161a]! transition-transform! duration-300! ease-in-out! h-screen! w-14!`}>
        {sidebar.map((icon) => {
          return (
            <button key={icon.id} onClick={() => { setIconSel(iconSel === icon.id ? '' : icon.id) }} className={`${iconSel === icon.id ? "bg-green-800! hover:border-green-800! text-white!" : "text-green-300!"} p-2! cursor-pointer! border! border-transparent! rounded-full! hover:border-green-300!`}>{icon.svg}</button>
          )
        })}
      </div>

      {iconSel == '1' && <Kanban />}

    </>
  )
}
export default Whatsapp
