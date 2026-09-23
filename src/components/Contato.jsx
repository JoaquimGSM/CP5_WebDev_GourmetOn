const Contato = () => {
  return (
    <section id="contato">
      <h2>Contato</h2>

      <form>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" />

        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Contato