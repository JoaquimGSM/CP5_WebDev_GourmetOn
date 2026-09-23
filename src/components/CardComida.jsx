const CardComida = ({ nome, imagem, descricao }) => {
  return (
    <div>
      <img src={imagem} alt={nome} />

      <h3>{nome}</h3>

      <p>{descricao}</p>
    </div>
  )
}

export default CardComida