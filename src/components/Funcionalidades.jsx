const Funcionalidades = () => {
  return (
    <section id="funcionalidades" className="bg-[#2B1B14] text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-orange-300 font-bold">Por que usar?</p>
        <h2 className="text-4xl font-bold mt-2 mb-12">Funcionalidades</h2>

        <div className="flex flex-wrap gap-6 items-start">
          <div className="bg-[#FFF3E8] text-[#2B1B14] rounded-[2rem] p-7 w-full md:w-[45%]">
            <span className="text-4xl font-bold text-[#E86A33]">01</span>
            <h3 className="text-2xl font-bold mt-4">Quantidade personalizada</h3>
            <p className="text-stone-600 mt-2">Escolha quantos pratos deseja descobrir em cada busca.</p>
          </div>

          <div className="bg-[#F6B73C] text-[#2B1B14] rounded-[2rem] p-7 w-full md:w-[40%] md:mt-12">
            <span className="text-4xl font-bold">02</span>
            <h3 className="text-2xl font-bold mt-4">Dados da API</h3>
            <p className="text-stone-700 mt-2">Os pratos são carregados diretamente da API Spoonacular.</p>
          </div>

          <div className="bg-[#E86A33] rounded-[2rem] p-7 w-full md:w-[55%] md:ml-20">
            <span className="text-4xl font-bold text-orange-200">03</span>
            <h3 className="text-2xl font-bold mt-4">Variedade de pratos</h3>
            <p className="text-orange-50 mt-2">Descubra diferentes opções de comidas, imagens e informações a cada nova busca.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Funcionalidades