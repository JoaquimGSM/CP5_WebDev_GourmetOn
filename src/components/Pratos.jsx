import { useState, useEffect } from "react"
import CardComida from "./CardComida"
import buscarComidas from "../services/comidasApi"



const Pratos = () => {

  const [comidas, setComidas] = useState([])

  useEffect(() => {
      const carregarComidas = async () => {
        const dados = await buscarComidas(3)

        setComidas(dados.recipes)
      }

      carregarComidas()
  }, [])

  return (
  <section id="pratos">
    <h2>Pratos</h2>

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