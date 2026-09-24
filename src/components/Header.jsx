import { useEffect, useState } from "react"
import logo from "../assets/logo_GourmetOn.png"

const Header = () => {
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    const verificarScroll = () => setRolou(window.scrollY > 50)

    window.addEventListener("scroll", verificarScroll)

    return () => window.removeEventListener("scroll", verificarScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 px-8 py-5 transition duration-300 ${rolou ? "bg-[#F5EEE5]/90 shadow-md backdrop-blur-sm" : "bg-transparent"}`}>
      <nav className="relative w-full h-16">
        <img src={logo} alt="Logo GourmetOn" className="h-16 w-auto absolute left-0 top-0"/>

        <a href="#inicio" className="hidden md:block absolute left-[36%] top-2 -translate-x-1/2 bg-[#E9572B] text-white px-6 py-2 rounded-full font-bold shadow-md">Início</a>
        <a href="#sobre" className="hidden md:block absolute left-[51%] top-2 -translate-x-1/2 bg-[#F2AD24] text-[#2E1B14] px-6 py-2 rounded-full font-bold shadow-md">Sobre</a>
        <a href="#funcionalidades" className="hidden md:block absolute left-[66%] top-2 -translate-x-1/2 bg-[#718467] text-white px-6 py-2 rounded-full font-bold shadow-md">Funcionalidades</a>
        <a href="#pratos" className="hidden md:block absolute left-[82%] top-2 -translate-x-1/2 bg-[#6B321F] text-white px-6 py-2 rounded-full font-bold shadow-md">Pratos</a>
      </nav>
    </header>
  )
}

export default Header