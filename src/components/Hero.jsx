const Hero = () => {
  return (
    <section id="inicio" className="bg-[#E86A33] px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl bg-[#FFF3E8] rounded-[3rem] p-8 md:p-14 shadow-xl">
          <p className="text-[#D95724] font-bold mb-3">Delivery do seu jeito</p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#2B1B14] leading-tight">Peça sua comida favorita com o GourmetOn</h1>
          <p className="text-stone-600 text-lg mt-6 max-w-xl">Encontre novos pratos de forma rápida, fácil e prática.</p>
          <a href="#pratos" className="inline-block mt-8 bg-[#2B1B14] text-white px-7 py-3 rounded-full font-semibold hover:bg-stone-700 transition">Conheça nossos pratos</a>
        </div>
      </div>
    </section>
  )
}

export default Hero