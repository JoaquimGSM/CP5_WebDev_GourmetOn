const Footer = () => {
  return (
    <footer className="bg-[#2B1B14] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h2 className="text-2xl font-bold text-[#F6B73C]">GourmetOn</h2>
          <p className="text-stone-400 mt-2">© 2026 GourmetOn</p>
          <p className="text-stone-400">Todos os direitos reservados.</p>
        </div>

        <div className="flex gap-6 items-start">
          <a href="#" className="hover:text-[#F6B73C] transition">Instagram</a>
          <a href="#" className="hover:text-[#F6B73C] transition">Facebook</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer