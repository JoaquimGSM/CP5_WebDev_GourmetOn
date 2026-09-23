const CardComida = ({ nome, imagem, descricao }) => {

  const removerHTML = (texto) => {
    const documento = new DOMParser().parseFromString(texto, "text/html")
    return documento.body.textContent
  }

  return (
    <div>
      <img src={imagem} alt={nome} />

      <h3>{nome}</h3>

      <p>{removerHTML(descricao)}</p>
    </div>
  )
}

export default CardComida