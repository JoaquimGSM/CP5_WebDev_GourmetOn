const Contato = () => {
  return (
    <section id="contato" className="bg-[#FFF8F1] px-6 py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3">
          <p className="text-[#D95724] font-bold">Fale com a gente</p>
          <h2 className="text-4xl font-bold text-[#2B1B14] mt-2">Contato</h2>
          <p className="text-stone-600 mt-4">Deixe seus dados e fique por dentro das novidades do GourmetOn.</p>
        </div>

        <form className="bg-white rounded-[2rem] p-7 shadow-md w-full md:w-2/3">
          <div className="mb-5">
            <label htmlFor="nome" className="block font-semibold text-[#2B1B14] mb-2">Nome</label>
            <input type="text" id="nome" className="w-full bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 outline-none focus:border-[#E86A33]"/>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block font-semibold text-[#2B1B14] mb-2">E-mail</label>
            <input type="email" id="email" className="w-full bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 outline-none focus:border-[#E86A33]"/>
          </div>

          <button type="submit" className="bg-[#E86A33] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#D95724] transition">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contato