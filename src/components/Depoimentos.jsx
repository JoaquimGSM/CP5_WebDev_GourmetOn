const Depoimentos = () => {
  return (
    <section id="depoimentos" className="bg-[#F6B73C] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2B1B14] mb-12">Quem já experimentou</h2>

        <div className="max-w-xl bg-[#FFF8F1] rounded-[2rem] p-7 shadow-md">
          <h3 className="text-xl font-bold text-[#2B1B14]">Mariana</h3>
          <p className="text-stone-600 mt-3">O GourmetOn facilitou muito na hora de encontrar diferentes opções de comida.</p>
        </div>

        <div className="max-w-xl bg-[#2B1B14] text-white rounded-[2rem] p-7 shadow-md mt-6 md:ml-40">
          <h3 className="text-xl font-bold">Lucas</h3>
          <p className="text-stone-300 mt-3">A experiência é simples, rápida e muito prática.</p>
        </div>

        <div className="max-w-xl bg-[#E86A33] text-white rounded-[2rem] p-7 shadow-md mt-6 md:ml-16">
          <h3 className="text-xl font-bold">Ana</h3>
          <p className="text-orange-50 mt-3">Gostei bastante da variedade de pratos disponíveis.</p>
        </div>
      </div>
    </section>
  )
}

export default Depoimentos