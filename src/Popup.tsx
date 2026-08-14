function Popup() {
  return (
    
    <div className="h-120 w-90 flex flex-col">

      <div className="bg-[#16161a] h-2/7 flex justify-center">
        
        <img className="h-5/4 relative bottom-2 drop-shadow-[0_2px_5px_rgba(34,197,94,1)] drop-shadow-[0_5px_12px_rgba(34,197,94,0.9)] drop-shadow-[0_10px_25px_rgba(22,163,74,0.7)]" src="images/title.png" alt="Lenex" />

      </div>

      <div className="bg-[#101013] font-roboto flex justify-center items-center p-4 text-base h-5/7 border-t border-[#2b2b2e]">

        <h2 className="text-white absolute top-1/3 border-b w-full text-center pb-4 border-[#2b2b2e]">Acesse sua conta:</h2>

        <form className="flex flex-col gap-2 w-3/4 text-sm" action="">

          <input className="bg-white p-2" type="email" placeholder="Insira seu email" />
          <input className="bg-white p-2" type="password" placeholder="Insira sua senha" />
          <button className="bg-green-500 font-bebas tracking-wider text-xl p-1.5 cursor-pointer shadow-green-800 shadow-[0_20px_80px_-5px_rgba(0,0,0,0.4)]  hover:bg-green-600 hover:scale-105 transition font-bold text-white" type="submit">LOGIN</button>
        
        </form>

        <h2 className="text-white absolute bottom-4 flex flex-row justify-center gap-1 border-t w-full text-center pt-4 border-[#2b2b2e]">Versão<p className="text-green-600">1.0.0</p></h2>

      </div>

    </div>
  )
}

export default Popup