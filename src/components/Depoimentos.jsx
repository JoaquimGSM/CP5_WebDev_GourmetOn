const Depoimentos = () => {
  return (
    <section id="depoimentos" className="bg-[#F6B73C] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#6B321F] font-bold mb-2">Experiências</p>
        <h2 className="text-4xl font-bold text-[#2B1B14] mb-12">Quem já experimentou</h2>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <div className="bg-[#FFF8F1] rounded-2xl p-7 shadow-md">
              <h3 className="text-xl font-bold text-[#2B1B14]">Mariana</h3>
              <p className="text-stone-600 mt-3">O GourmetOn facilitou muito na hora de encontrar diferentes opções de comida.</p>
            </div>

            <div className="bg-[#E86A33] text-white rounded-2xl p-7 shadow-md mt-6 md:ml-10">
              <h3 className="text-xl font-bold">Ana</h3>
              <p className="text-orange-50 mt-3">Gostei bastante da variedade de pratos que aparecem em cada busca.</p>
            </div>

            <div className="bg-[#AEBB9F] text-[#2B1B14] rounded-2xl p-7 shadow-md mt-6">
              <h3 className="text-xl font-bold">Beatriz</h3>
              <p className="text-stone-700 mt-3">As imagens ajudam bastante a conhecer pratos que eu ainda não tinha visto.</p>
            </div>
          </div>

          <div className="flex-1 md:mt-10">
            <div className="bg-[#2B1B14] text-white rounded- p-7 shadow-md">
              <h3 className="text-xl font-bold">Lucas</h3>
              <p className="text-stone-300 mt-3">A experiência é simples, rápida e muito prática.</p>
            </div>

            <div className="bg-[#FFF8F1] rounded-2xl p-7 shadow-md mt-6 md:mr-10">
              <h3 className="text-xl font-bold text-[#2B1B14]">Gabriel</h3>
              <p className="text-stone-600 mt-3">É interessante poder escolher quantos pratos quero descobrir antes de realizar a busca.</p>
            </div>

            <div className="bg-[#6B321F] text-white rounded-2xl p-7 shadow-md mt-6">
              <h3 className="text-xl font-bold">Rafael</h3>
              <p className="text-orange-50 mt-3">A cada nova pesquisa aparecem opções diferentes, o que deixa a experiência mais interessante.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Depoimentos