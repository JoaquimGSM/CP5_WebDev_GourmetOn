import { useState } from "react"
import CardComida from "./CardComida"
import buscarComidas from "../services/comidasApi"

const Pratos = () => {
  const [comidas, setComidas] = useState([])
  const [quantidade, setQuantidade] = useState(3)

  const carregarComidas = async () => {
    if (!quantidade || quantidade < 1 || quantidade > 10) {
      return
    }

    const dados = await buscarComidas(quantidade)
    setComidas(dados.recipes)
  }

  return (
    <section id="pratos" className="bg-[#FFF8F1] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-[#D95724] font-bold">Descubra algo novo</p>
          <h2 className="text-4xl font-bold text-[#2B1B14] mt-2">Pratos</h2>
          <p className="text-stone-600 mt-3">Escolha quantos pratos você quer descobrir.</p>
        </div>

        <div className="bg-[#E86A33] rounded-2xl p-5 max-w-md mb-16 flex items-center gap-3">
          <input type="number" min="1" max="10" value={quantidade} onChange={(evento) => setQuantidade(parseInt(evento.target.value))} className="w-24 bg-white rounded-xl px-4 py-3 outline-none text-[#2B1B14]"/>
          <button onClick={carregarComidas} className="bg-[#341B12] text-white px-5 py-3 rounded-xl font-semibold hover:bg-stone-700 transition"><i className="fa-solid fa-magnifying-glass mr-2"></i>Buscar pratos</button>
        </div>

        <div className="flex flex-wrap gap-8 items-start">
          {comidas.map((comida) => (
            <CardComida key={comida.id} nome={comida.title} imagem={comida.image} descricao={comida.summary}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pratos