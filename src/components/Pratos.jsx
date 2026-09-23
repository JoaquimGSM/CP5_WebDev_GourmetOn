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
  <section id="pratos">
    <h2>Pratos</h2>

    <input
      type= 'number'
      value={quantidade}
      onChange={(e) => setQuantidade(parseInt(e.target.value))}
    />

    <button onClick={carregarComidas}>
    Buscar pratos
    </button>

    <div>
      {comidas.map((comida) => (
        <CardComida
          key={comida.id}
          nome={comida.title}
          imagem={comida.image}
          descricao={comida.summary}
        />
      ))}
    </div>
  </section>
)
}

export default Pratos