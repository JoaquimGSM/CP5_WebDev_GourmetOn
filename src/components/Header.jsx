import logo from "../assets/logo_GourmetOn.png"

const Header = () => {
  return (
    <header className="px-8 pt-8">
      <nav className="relative w-full h-20">
        <img src={logo} alt="Logo GourmetOn" className="h-16 md:h-20 w-auto absolute left-0 top-0"/>

        <a href="#inicio" className="hidden md:block absolute left-[36%] top-3 -translate-x-1/2 bg-[#E9572B] text-white px-6 py-2 rounded-full font-bold shadow-md hover:scale-105 transition">Início</a>

        <a href="#sobre" className="hidden md:block absolute left-[51%] top-3 -translate-x-1/2 bg-[#F2AD24] text-[#2E1B14] px-6 py-2 rounded-full font-bold shadow-md hover:scale-105 transition">Sobre</a>

        <a href="#funcionalidades" className="hidden md:block absolute left-[66%] top-3 -translate-x-1/2 bg-[#718467] text-white px-6 py-2 rounded-full font-bold shadow-md hover:scale-105 transition">Funcionalidades</a>

        <a href="#pratos" className="hidden md:block absolute left-[82%] top-3 -translate-x-1/2 bg-[#6B321F] text-white px-6 py-2 rounded-full font-bold shadow-md hover:scale-105 transition">Pratos</a>

        <div className="md:hidden flex justify-end gap-2 flex-wrap pl-24">
          <a href="#inicio" className="bg-[#E9572B] text-white px-4 py-2 rounded-full font-bold">Início</a>
          <a href="#sobre" className="bg-[#F2AD24] text-[#2E1B14] px-4 py-2 rounded-full font-bold">Sobre</a>
          <a href="#funcionalidades" className="bg-[#718467] text-white px-4 py-2 rounded-full font-bold">Funcionalidades</a>
          <a href="#pratos" className="bg-[#6B321F] text-white px-4 py-2 rounded-full font-bold">Pratos</a>
        </div>
      </nav>
    </header>
  )
}

export default Header