import { useEffect } from "react";

const lenexIcon = typeof chrome !== "undefined" && chrome.runtime?.getURL ? chrome.runtime.getURL("icons/icon.png") : "/icons/icon.png";

const header = "3.5rem";
const sidebar = "3.5rem";

function Whatsapp() {
  useEffect(() => {
    const whatsappRoot = document.querySelector<HTMLElement>("#app");
    if (!whatsappRoot) return;
    whatsappRoot.style.paddingTop = header;
    whatsappRoot.style.paddingLeft = sidebar;
  }, []);

  return (
    <>
      <div className="flex items-center p-2 pointer-events-auto fixed top-0 left-0 z-[99999] h-14 w-full bg-[#101013]">

        <img className="h-3/4" src={lenexIcon} alt="Lenex" />

      </div>

      <div className="pointer-events-auto fixed top-14 left-0 z-[99999] h-screen w-14 bg-[#16161a] border-t border-[#2b2b2e]">

      </div>
    </>
  );
}

export default Whatsapp;