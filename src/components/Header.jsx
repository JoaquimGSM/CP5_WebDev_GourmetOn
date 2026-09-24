import logo from "../assets/logo_GourmetOn.png"

const Header = () => {
  return (
    <header className="bg-[#E86A33] px-4 pt-4">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-center mb-4">
          <div className="bg-[#D95724] p-2 rounded-[2rem]">
            <img src={logo} alt="Logo GourmetOn" className="h-20 w-auto rounded-[1.5rem]"/>
          </div>
        </div>

        <div className="flex justify-around flex-wrap gap-4 text-white font-semibold bg-[#D95724] rounded-2xl px-6 py-4">
          <a href="#inicio" className="hover:text-orange-200 transition">Início</a>
          <a href="#sobre" className="hover:text-orange-200 transition">Sobre</a>
          <a href="#funcionalidades" className="hover:text-orange-200 transition">Funcionalidades</a>
          <a href="#pratos" className="hover:text-orange-200 transition">Produtos</a>
        </div>
      </nav>
    </header>
  )
}

export default Header