const Apresentacao = () => {
  return (
    <section id="sobre" className="bg-[#ffc859] px-6 py-24">
      <div className="max-w-6xl mx-auto flex justify-end">
        <div className="max-w-3xl border-l-8 border-[#E86A33] pl-8 py-4">
          <p className="text-[#D95724] font-bold mb-2">Sobre nós</p>
          <h2 className="text-4xl font-bold text-[#2B1B14] mb-6">Sobre o GourmetOn</h2>
          <p className="text-black text-lg mb-4">O GourmetOn é uma aplicação criada para facilitar a descoberta de diferentes pratos de forma rápida, simples e visual.</p>
          <p className="text-black text-lg">Através da integração com a API Spoonacular, o usuário pode escolher quantos pratos deseja visualizar e explorar diferentes opções com imagens e informações atualizadas.</p>
        </div>
      </div>
    </section>
  )
}

export default Apresentacao