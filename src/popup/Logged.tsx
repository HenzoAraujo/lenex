const manifest = chrome.runtime.getManifest();

function Logged() {
  return (
    
    <div className="h-120 w-90 flex flex-col">

      <div className="bg-[#16161a] h-2/7 flex justify-center">
        
        <img className="h-5/4 relative bottom-2 drop-shadow-[0_2px_5px_rgba(34,197,94,1)] drop-shadow-[0_5px_12px_rgba(34,197,94,0.9)] drop-shadow-[0_10px_25px_rgba(22,163,74,0.7)]" src="images/title.png" alt="Lenex" />

      </div>

      <div className="bg-[#101013] font-roboto flex justify-center items-center p-4 text-base h-5/7 border-t border-[#2b2b2e]">

        <h2 className="text-white absolute top-1/3 border-b w-full text-center pb-4 border-[#2b2b2e]">Olá, Henzo!</h2>

        <a className="bg-green-500 font-bebas tracking-wider text-3xl p-4 cursor-pointer shadow-green-800 shadow-[0_20px_80px_-5px_rgba(0,0,0,0.4)]  hover:bg-green-600 hover:scale-105 transition font-bold text-white" type="submit" href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">Abrir Whatsapp</a>

        <h2 className="text-white text-xs absolute bottom-4 flex flex-row justify-center gap-1 border-t w-full text-center pt-4 border-[#2b2b2e]">Versão<p className="text-green-600">{manifest.version}</p></h2>
        
        <button className="absolute bottom-4 right-5 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-door-open" viewBox="0 0 16 16"><path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"/><path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z"/></svg></button>

      </div>

    </div>
  )
}

export default Logged