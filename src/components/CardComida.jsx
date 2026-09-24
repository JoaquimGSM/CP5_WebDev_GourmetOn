const CardComida = ({ nome, imagem, descricao }) => {
  const removerHtml = (texto) => {
    const documento = new DOMParser().parseFromString(texto || "", "text/html")
    return documento.body.textContent
  }

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-md w-full sm:w-[46%] lg:w-[30%] odd:-rotate-1 even:rotate-1 md:even:translate-y-6 hover:rotate-0 hover:translate-y-0 transition duration-300">
      <img src={imagem} alt={nome} className="w-full h-52 object-cover"/>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#2B1B14] mb-3">{nome}</h3>
        <p className="text-stone-600 text-sm leading-relaxed line-clamp-4">{removerHtml(descricao)}</p>
      </div>
    </div>
  )
}

export default CardComida