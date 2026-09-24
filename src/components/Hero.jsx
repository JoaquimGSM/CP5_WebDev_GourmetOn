const Hero = () => {
  return (
    <section id="inicio" className="px-6 pt-60 pb-26">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl bg-white/95 rounded-[3rem] shadow-xl p-8 md:p-14">
          <p className="text-[#D86F45] font-bold mb-3">Descubra novos sabores</p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#2E1B14] leading-tight">Encontre seu próximo prato com o GourmetOn</h1>
          <p className="text-stone-600 text-lg mt-6 max-w-xl">Explore diferentes opções de comidas e descubra novos pratos de forma simples e rápida.</p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#pratos" className="bg-[#341B12] text-white px-7 py-3 rounded-full font-bold hover:scale-105 transition">Explorar pratos</a>
            <a href="#funcionalidades" className="bg-[#AEBB9F] text-[#2E1B14] px-7 py-3 rounded-full font-bold hover:scale-105 transition">Ver funcionalidades</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero