const Footer = () => {
  return (
    <footer className="bg-[#341B12] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-[#F2AD24]">GourmetOn</h2>
          <p className="text-stone-300 mt-2">© 2026 GourmetOn. Todos os direitos reservados.</p>
        </div>

        <div className="flex items-center gap-5 text-2xl">
          <a href="#" aria-label="Instagram" className="hover:text-[#D86F45] transition">
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="#" aria-label="Facebook" className="hover:text-[#AEBB9F] transition">
            <i className="fa-brands fa-facebook"></i>
          </a>

          <a href="#" aria-label="WhatsApp" className="hover:text-[#25D366] transition">
            <i className="fa-brands fa-whatsapp"></i>
          </a>

          <a href="#" aria-label="X" className="hover:text-stone-300 transition">
            <i className="fa-brands fa-x-twitter"></i>
          </a>

          <a href="#inicio" aria-label="Voltar ao início" className="hover:text-[#F2AD24] transition">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer