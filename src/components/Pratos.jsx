import CardComida from "./CardComida"

const Pratos = () => {
  return (
    <section id="pratos">
      <h2>Pratos</h2>

      <div>
        <CardComida
          nome="Pizza"
          imagem="https://via.placeholder.com/300"
          descricao="Pizza preparada com ingredientes selecionados."
        />
        <CardComida
          nome="Hambúrguer"
          imagem="https://via.placeholder.com/300"
          descricao="Hambúrguer artesanal com diferentes opções de acompanhamento."
        />
        <CardComida
          nome="Massa"
          imagem="https://via.placeholder.com/300"
          descricao="Massas para diferentes gostos e ocasiões."
        />
      </div>
    </section>
  )
}

export default Pratos